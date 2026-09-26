import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { submitLead, isDemoMode } from './leadDelivery.js'

const baseForm = { name: 'Jane Doe', email: 'jane@example.com', source: 'https://example.com', form: 'quiz', activity: 'Website Search', volume: 'Under 10 000 searches', botcheck: '' }

describe('leadDelivery', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })

  it('runs in demo mode when no access key is configured and delivers nothing', async () => {
    expect(isDemoMode()).toBe(true)
    const result = await submitLead(baseForm)
    expect(result).toEqual({ ok: true, demo: true })
  })

  it('silently accepts (without sending) when the honeypot field is filled', async () => {
    const fetchSpy = vi.fn()
    vi.stubGlobal('fetch', fetchSpy)
    const result = await submitLead({ ...baseForm, botcheck: 'i am a bot' })
    expect(result).toEqual({ ok: true, demo: false })
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('posts to the delivery endpoint and surfaces provider errors when a key is configured', async () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', 'test-key')
    const fetchSpy = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: false, message: 'invalid key' }),
    })
    vi.stubGlobal('fetch', fetchSpy)

    await expect(submitLead(baseForm)).rejects.toThrow('invalid key')
    expect(fetchSpy).toHaveBeenCalledWith(
      'https://api.web3forms.com/submit',
      expect.objectContaining({ method: 'POST' })
    )
  })

  it('sends the traffic source and quiz answers', async () => {
    vi.stubEnv('VITE_WEB3FORMS_KEY', 'test-key')
    const fetchSpy = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) })
    vi.stubGlobal('fetch', fetchSpy)

    await submitLead(baseForm)
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body)
    expect(body).toMatchObject({
      email: 'jane@example.com',
      traffic_source: 'https://example.com',
      search_activity: 'Website Search',
      daily_traffic: 'Under 10 000 searches',
    })
    expect(body.subject).toContain('quiz')
  })
})
