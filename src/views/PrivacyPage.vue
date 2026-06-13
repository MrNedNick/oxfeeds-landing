<template>
  <LegalLayout
    title="Privacy Policy"
    kicker="Privacy"
    subtitle="How OXFeeds collects, uses, and protects your personal data when you use our website and search monetization services."
  >
    <p class="lead">
      At OXFeeds, your privacy matters. This policy explains what data we collect, why we collect it,
      and the rights you have over your information. By using oxfeeds.com you agree to the practices
      described below.
    </p>

    <h2><span class="num">01</span>Data Controller</h2>
    <p>OXFeeds ("we", "our", "us") acts as the data controller for personal data collected through oxfeeds.com. For any privacy matters you can reach us at <a href="mailto:office@oxfeeds.com">office@oxfeeds.com</a>.</p>

    <h2><span class="num">02</span>Information We Collect</h2>
    <h3>Information you provide</h3>
    <ul>
      <li>Contact details (name, email address) submitted via our contact form</li>
      <li>The content of messages and inquiries you send us</li>
      <li>Business details you share during partnership onboarding</li>
    </ul>
    <h3>Information collected automatically</h3>
    <ul>
      <li>IP address, browser type, device and operating system</li>
      <li>Pages visited, referral source, and time spent on site</li>
      <li>Cookie and similar tracking technology data</li>
    </ul>

    <h2><span class="num">03</span>How We Use Your Data</h2>
    <ul>
      <li>To respond to your inquiries and provide our services</li>
      <li>To set up and manage your monetization account</li>
      <li>To analyze and improve our website and offerings</li>
      <li>To send relevant communications where you have consented</li>
      <li>To comply with legal and regulatory obligations</li>
    </ul>

    <h2><span class="num">04</span>Legal Basis for Processing</h2>
    <p>We process your data on the basis of your <strong>consent</strong>, the <strong>performance of a contract</strong> (providing our services), our <strong>legitimate interests</strong> (improving and securing our services), and <strong>legal obligations</strong> where applicable.</p>

    <h2><span class="num">05</span>Sharing Your Data</h2>
    <p>As part of our search monetization partnerships, relevant data may be shared with our search engine partners:</p>
    <ul>
      <li><strong>Google</strong> — RSOC and Type-in feed solutions</li>
      <li><strong>Bing</strong> — N2S and Type-in feed solutions</li>
      <li><strong>Yahoo</strong> — N2S and Type-in feed solutions</li>
    </ul>
    <p>Each partner maintains its own privacy policy and adheres to applicable data protection standards. We never sell your personal data to third parties.</p>

    <h2><span class="num">06</span>Data Retention</h2>
    <p>We retain personal data only as long as necessary for the purposes outlined in this policy, or as required by law. When data is no longer needed, it is securely deleted or anonymized.</p>

    <h2><span class="num">07</span>Your Rights</h2>
    <p>Depending on your location, you may have the right to access, correct, delete, restrict, or port your data, and to object to processing. To learn more about GDPR-specific rights, see our <router-link to="/gdpr">GDPR Compliance</router-link> page.</p>

    <h2><span class="num">08</span>Data Security</h2>
    <p>We implement appropriate technical and organizational measures — including encryption in transit, access controls, and regular reviews — to protect your data against unauthorized access, loss, or misuse.</p>

    <h2><span class="num">09</span>Cookies</h2>
    <p>We use cookies and similar technologies as described in our <router-link to="/cookies">Cookie Policy</router-link>. You can manage your preferences at any time through the consent banner.</p>

    <h2><span class="num">10</span>Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the most recent revision. Material changes will be communicated where appropriate.</p>

    <div class="callout">
      <p><strong>Contact:</strong> For any privacy-related questions or to exercise your rights, email us at <a href="mailto:office@oxfeeds.com">office@oxfeeds.com</a>. We aim to respond within 30 days.</p>
    </div>
  </LegalLayout>
</template>

<script setup>
import LegalLayout from '../components/LegalLayout.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
useScrollReveal()
</script>
