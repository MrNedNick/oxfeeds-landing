import { ref } from 'vue'
import { submitLead, isDemoMode } from './leadDelivery.js'

const blank = () => ({ name: '', email: '', source: '', botcheck: '' })

// State shared by the two lead forms on the page (the quiz and the contact
// form): the contact fields, and idle → sending → success | error.
export function useLeadForm() {
  const fields = ref(blank())
  const status = ref('idle')
  const demo = ref(isDemoMode())

  async function send(extra = {}) {
    status.value = 'sending'
    try {
      const result = await submitLead({ ...fields.value, ...extra })
      demo.value = result.demo
      status.value = 'success'
      fields.value = blank()
    } catch {
      status.value = 'error'
    }
  }

  return { fields, status, demo, send }
}
