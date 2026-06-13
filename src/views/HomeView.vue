<template>
  <main>
    <HeroSection />
    <MarqueeStrip />
    <ServicesSection />
    <HowItWorks />
    <WhyUs />
    <QuizSection />
    <AboutUs />
    <ContactUs />
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import MarqueeStrip from '../components/MarqueeStrip.vue'
import ServicesSection from '../components/ServicesSection.vue'
import HowItWorks from '../components/HowItWorks.vue'
import WhyUs from '../components/WhyUs.vue'
import QuizSection from '../components/QuizSection.vue'
import AboutUs from '../components/AboutUs.vue'
import ContactUs from '../components/ContactUs.vue'
import { useScrollReveal } from '../composables/useScrollReveal'

useScrollReveal()
</script>
