<template>
  <LegalLayout
    title="Terms of Service"
    kicker="Terms"
    subtitle="The terms and conditions that govern your use of the OXFeeds website and search monetization services."
  >
    <p class="lead">
      These Terms of Service ("Terms") constitute a binding agreement between you and OXFeeds.
      By accessing our website or using our services, you agree to be bound by these Terms.
      Please read them carefully.
    </p>

    <h2><span class="num">01</span>Acceptance of Terms</h2>
    <p>By accessing oxfeeds.com or entering into a monetization partnership with us, you confirm that you have read, understood, and agree to these Terms. If you do not agree, please do not use our services.</p>

    <h2><span class="num">02</span>Eligibility</h2>
    <ul>
      <li>You must be at least 18 years old to use our services</li>
      <li>You must have the authority to enter into agreements on behalf of any entity you represent</li>
      <li>Your traffic and platforms must comply with all applicable laws and partner policies</li>
    </ul>

    <h2><span class="num">03</span>Our Services</h2>
    <p>OXFeeds provides search traffic monetization solutions through partnerships with Google, Bing, and Yahoo. We offer feed integration, API access, and revenue optimization services. Service availability and feed terms may vary based on traffic type and partner requirements.</p>

    <h2><span class="num">04</span>Acceptable Use</h2>
    <p>You agree <strong>not</strong> to:</p>
    <ul>
      <li>Generate invalid, fraudulent, incentivized, or bot traffic</li>
      <li>Misrepresent the source or nature of your traffic</li>
      <li>Violate the policies of our search engine partners</li>
      <li>Use deceptive, misleading, or prohibited content</li>
      <li>Attempt to manipulate or artificially inflate revenue</li>
      <li>Reverse-engineer, resell, or sublicense our feeds without authorization</li>
    </ul>
    <div class="callout">
      <p>Violation of acceptable use policies may result in immediate suspension or termination of your account and forfeiture of unpaid earnings.</p>
    </div>

    <h2><span class="num">05</span>Revenue & Payments</h2>
    <ul>
      <li>Revenue share terms are defined in your individual partnership agreement</li>
      <li>Payments are subject to minimum thresholds and partner validation</li>
      <li>Earnings from traffic later deemed invalid may be deducted or withheld</li>
      <li>You are responsible for any applicable taxes on your earnings</li>
    </ul>

    <h2><span class="num">06</span>Intellectual Property</h2>
    <p>All content, trademarks, APIs, and feed technology provided by OXFeeds remain our property or that of our partners. You are granted a limited, non-exclusive, revocable license to use our services solely as permitted under these Terms.</p>

    <h2><span class="num">07</span>Termination</h2>
    <p>Either party may terminate the relationship with notice as specified in the partnership agreement. We reserve the right to suspend or terminate access immediately for violations of these Terms or partner policies.</p>

    <h2><span class="num">08</span>Disclaimers</h2>
    <p>Our services are provided "as is" and "as available". We do not guarantee specific revenue, RPM, uptime, or traffic cap levels, as these depend on partner conditions and market factors beyond our control.</p>

    <h2><span class="num">09</span>Limitation of Liability</h2>
    <p>To the maximum extent permitted by law, OXFeeds shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amounts paid to you in the preceding three months.</p>

    <h2><span class="num">10</span>Governing Law</h2>
    <p>These Terms are governed by applicable law. Any disputes will be resolved through good-faith negotiation, and failing that, through the appropriate legal venue.</p>

    <h2><span class="num">11</span>Changes to Terms</h2>
    <p>We may update these Terms periodically. Continued use of our services after changes take effect constitutes acceptance of the revised Terms.</p>

    <div class="callout">
      <p><strong>Questions?</strong> Contact us at <a href="mailto:office@oxfeeds.com">office@oxfeeds.com</a> for clarification on any part of these Terms.</p>
    </div>
  </LegalLayout>
</template>

<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
</script>
