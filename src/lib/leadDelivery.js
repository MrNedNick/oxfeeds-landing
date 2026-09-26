// Sends the quiz and contact forms to Web3Forms (works from a static site, no server needed).
// Without VITE_WEB3FORMS_KEY configured, runs in demo mode: validates the honeypot
// and simulates network latency, but does not deliver anywhere — the UI must say so.

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export function isDemoMode() {
  return !import.meta.env.VITE_WEB3FORMS_KEY
}

export async function submitLead(form) {
  // Honeypot: bots fill every field, humans never see this one.
  if (form.botcheck) {
    return { ok: true, demo: false }
  }

  if (isDemoMode()) {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    return { ok: true, demo: true }
  }

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject: `New ${form.form === 'quiz' ? 'quiz' : 'contact'} request from oxfeeds.com — ${form.name}`,
      from_name: form.name,
      email: form.email,
      traffic_source: form.source,
      // Quiz answers; empty for the contact form.
      search_activity: form.activity,
      daily_traffic: form.volume,
    }),
  })

  if (!res.ok) {
    throw new Error(`Delivery failed with status ${res.status}`)
  }

  const data = await res.json()
  if (!data.success) {
    throw new Error(data.message || 'Delivery rejected')
  }

  return { ok: true, demo: false }
}
