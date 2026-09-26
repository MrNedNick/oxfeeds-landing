<template>
  <section id="quiz" class="quiz-section">
    <div class="quiz-bg">
      <div class="quiz-orb"></div>
    </div>
    <div class="container">
      <div class="quiz-wrap glass-card reveal">
        <div class="quiz-header">
          <p class="eyebrow">Don't know what to deal with?</p>
          <h2 class="section-title">Take <span class="gradient-text">a quick quiz</span></h2>
        </div>

        <LeadSuccess v-if="status === 'success'" :demo="demo" />

        <form v-else class="quiz-form" @submit.prevent="onSubmit">
          <ol class="quiz-progress" aria-label="Quiz steps">
            <li v-for="n in 3" :key="n" :class="{ done: n < step, current: n === step }" :aria-current="n === step ? 'step' : undefined">
              {{ n }}
            </li>
          </ol>

          <fieldset v-if="step === 1">
            <legend ref="legend" tabindex="-1" class="quiz-q">What search activity are you interested in?</legend>
            <div class="quiz-options">
              <label v-for="opt in activities" :key="opt" class="quiz-opt" :class="{ selected: activity === opt }">
                <input v-model="activity" type="radio" name="activity" :value="opt" class="sr-only" />
                {{ opt }}
              </label>
            </div>
          </fieldset>

          <fieldset v-else-if="step === 2">
            <legend ref="legend" tabindex="-1" class="quiz-q">Your daily traffic volume</legend>
            <div class="quiz-options quiz-options-3">
              <label v-for="opt in volumes" :key="opt" class="quiz-opt" :class="{ selected: volume === opt }">
                <input v-model="volume" type="radio" name="volume" :value="opt" class="sr-only" />
                {{ opt }}
              </label>
            </div>
          </fieldset>

          <fieldset v-else>
            <legend ref="legend" tabindex="-1" class="quiz-q">How can we reach you?</legend>
            <LeadFields v-model="fields" />
          </fieldset>

          <p v-if="status === 'error'" class="form-error" role="alert">
            Something went wrong sending your answers. Please try again.
          </p>

          <div class="quiz-actions">
            <button v-if="step > 1" type="button" class="btn-secondary" @click="go(step - 1)">Return</button>
            <button v-if="step < 3" type="button" class="btn-primary" :disabled="!answered" @click="go(step + 1)">Next</button>
            <button v-else type="submit" class="btn-primary" :disabled="status === 'sending'">
              {{ status === 'sending' ? 'Sending…' : 'Send' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import LeadFields from './LeadFields.vue'
import LeadSuccess from './LeadSuccess.vue'
import { useLeadForm } from '../lib/useLeadForm.js'

// Questions and answers word for word from the quiz on oxfeeds.com.
const activities = [
  'Extensions and Add-ons',
  'Website Search',
  'Apps and Launchers',
  'Native to Search',
  'Display to Search',
  'Search to Search'
]
const volumes = [
  'Under 10 000 searches',
  '10 000 searches - 100 000 searches',
  'More than 100 000 searches'
]

const step = ref(1)
const activity = ref('')
const volume = ref('')
const legend = ref(null)
const { fields, status, demo, send } = useLeadForm()

const answered = computed(() => (step.value === 1 ? activity.value : volume.value) !== '')

// Moving between steps swaps the question; focus follows it so a keyboard
// or screen-reader user lands on the new question, not on a vanished button.
async function go(next) {
  step.value = next
  await nextTick()
  legend.value?.focus()
}

function onSubmit() {
  send({ form: 'quiz', activity: activity.value, volume: volume.value })
}
</script>

<style scoped>
.quiz-section { position: relative; overflow: hidden; }
.quiz-bg { position: absolute; inset: 0; pointer-events: none; }
.quiz-orb {
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%);
  top: 50%;
  left: -100px;
  transform: translateY(-50%);
}

.quiz-wrap {
  max-width: 820px;
  margin: 0 auto;
  padding: 56px;
  text-align: center;
  position: relative;
}

.quiz-header { margin-bottom: 32px; }

fieldset { border: 0; min-width: 0; }

.quiz-progress {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 28px;
}
.quiz-progress li {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.85rem;
  font-weight: 700;
  border: 1px solid var(--card-border);
  color: var(--text-muted);
}
.quiz-progress li.done { border-color: rgba(124,58,237,0.5); color: var(--purple-light); }
.quiz-progress li.current { background: var(--gradient); border-color: transparent; color: #fff; }

.quiz-q {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 auto 24px;
  outline: none;
}

.quiz-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.quiz-options-3 { grid-template-columns: repeat(3, 1fr); }

.quiz-opt {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 72px;
  padding: 18px 16px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 16px;
  cursor: pointer;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: all 0.25s ease;
}
.quiz-opt:hover {
  border-color: rgba(124,58,237,0.4);
  color: var(--text);
  background: rgba(255,255,255,0.06);
  transform: translateY(-2px);
}
.quiz-opt.selected {
  border-color: var(--purple);
  background: rgba(124,58,237,0.12);
  color: var(--text);
  box-shadow: 0 0 0 1px rgba(124,58,237,0.4), 0 8px 20px rgba(124,58,237,0.15);
}
.quiz-opt:has(input:focus-visible) {
  outline: 2px solid var(--purple-light);
  outline-offset: 2px;
}

.quiz-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}
.quiz-actions button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none !important;
}

@media (max-width: 700px) {
  .quiz-wrap { padding: 36px 20px; }
  .quiz-options, .quiz-options-3 { grid-template-columns: 1fr 1fr; gap: 10px; }
  .quiz-opt { min-height: 60px; padding: 12px 10px; font-size: 0.85rem; }
}
</style>
