// @vitest-environment jsdom
import { describe, it, expect, beforeAll } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from '../App.vue'
import HomeView from '../views/HomeView.vue'

// The copy below is oxfeeds.com word for word. If one of these fails, a
// section of the real site's content went missing from the page.
const LIVE_COPY = [
  // hero
  'Monetize Your Search Traffic',
  'Like Never Before',
  'Grow your revenue with our exclusive partnerships and advanced search monetization strategies.',
  'Monetize Now',
  // what they monetize
  'We help to monetize your:',
  'Native to search',
  'Browsers and Extensions',
  'Add-ons',
  'Start pages and Websites',
  'Apps and Launchers',
  'Social to search',
  'Search to search',
  // how it works
  'Choose Your Feed',
  'Yahoo N2S/Type-in; Google RSOC/Type-in; Bing N2S/Type-in.',
  'Integrate Seamlessly',
  'Our API and search feed solutions make it easy to monetize your traffic.',
  'Earn More',
  'Get access to high-RPM feeds and large traffic caps.',
  // why choose us
  'Exclusive Partnerships',
  'We collaborate with top search providers like Bing, Google and Yahoo.',
  'High Revenue Potential',
  'Maximize earnings with our premium search feed solutions.',
  'Seamless Integration',
  'Quick and easy implementation for all digital platforms.',
  '24/7 Support',
  'Our dedicated team ensures your success at every step.',
  // quiz, first step
  "Don't know what to deal with?",
  'a quick quiz',
  'What search activity are you interested in?',
  'Extensions and Add-ons',
  'Website Search',
  'Native to Search',
  'Display to Search',
  // contact
  'Interested in growing your revenue with search monetization?',
  'Reach out to our team',
  'office@oxfeeds.com'
]

// Things that were once on this page but are not on the real site.
const NOT_ON_LIVE_SITE = ['100+', 'Active Publisher Partners', 'Official Google, Bing', 'Within 24 hours', 'Privacy Policy', 'Get My Recommendation']

let wrapper

beforeAll(async () => {
  globalThis.IntersectionObserver ??= class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.matchMedia ??= () => ({ matches: false, addEventListener() {}, removeEventListener() {} })
  window.scrollTo = () => {}

  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/', component: HomeView }]
  })
  router.push('/')
  await router.isReady()
  wrapper = mount(App, { global: { plugins: [router] }, attachTo: document.body })
  await flushPromises()
})

describe('content moved from oxfeeds.com', () => {
  it.each(LIVE_COPY)('shows "%s"', (text) => {
    expect(wrapper.text().replace(/\s+/g, ' ')).toContain(text)
  })

  it('links the contact address', () => {
    expect(wrapper.find('a[href="mailto:office@oxfeeds.com"]').exists()).toBe(true)
  })

  it('asks for the same three fields as the live forms', () => {
    const names = wrapper.findAll('#contact input:not([name="botcheck"])').map((i) => i.attributes('name'))
    expect(names).toEqual(['name', 'email', 'source'])
  })

  it.each(NOT_ON_LIVE_SITE)('does not claim "%s"', (text) => {
    expect(wrapper.text()).not.toContain(text)
  })
})
