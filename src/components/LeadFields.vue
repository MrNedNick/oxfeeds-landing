<template>
  <div class="lead-fields">
    <!-- Honeypot: hidden from people, filled in by bots. -->
    <input v-model="fields.botcheck" type="text" name="botcheck" class="botcheck-field" tabindex="-1" autocomplete="off" aria-hidden="true" />

    <label class="lead-field">
      <span class="sr-only">Your Name</span>
      <input v-model="fields.name" type="text" name="name" placeholder="Your Name" autocomplete="name" required />
    </label>
    <label class="lead-field">
      <span class="sr-only">Your Email</span>
      <input v-model="fields.email" type="email" name="email" placeholder="Your Email" autocomplete="email" required />
    </label>
    <label class="lead-field lead-field-wide">
      <span class="sr-only">Your traffic source</span>
      <input v-model="fields.source" type="url" name="source" placeholder="Provide your traffic source (https://www...)" />
    </label>
  </div>
</template>

<script setup>
// The same three fields as the forms on oxfeeds.com.
const fields = defineModel({ type: Object, required: true })
</script>

<style scoped>
.lead-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.lead-field-wide { grid-column: 1 / -1; }

input {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 0.95rem;
  color: var(--text);
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
}
input::placeholder { color: var(--text-muted); }
input:focus {
  border-color: var(--purple);
  box-shadow: 0 0 0 3px rgba(124,58,237,0.25);
}

.botcheck-field {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}

@media (max-width: 600px) {
  .lead-fields { grid-template-columns: 1fr; }
}
</style>
