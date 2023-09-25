<template>
  <!-- Contact Section -->
  <section id="contact">
    <h2>Contact me!</h2>
    <FormKit
      type="form"
      id="contact-form"
      :form-class="submitted ? 'hide' : 'show'"
      submit-label="Register"
      @submit="submitHandler"
      :actions="false"
      #default="{ value }"
    >
      <hr />
      <FormKit type="text" name="name" placeholder="Name" validation="required" />
      <FormKit type="text" name="email" placeholder="Email" validation="required|email" />
      <FormKit type="textarea" name="message" placeholder="Message" validation="required" />
      <FormKit type="submit" label="Send" />
      <pre wrap>{{ value }}</pre>
    </FormKit>
    <div v-if="submitted">
      <h2>Submission successful!</h2>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const submitted = ref(false)
const submitHandler = async () => {
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
  submitted.value = true
}
</script>

<style scoped>
/* Contact section styles */
#contact {
  background-color: #f8f8f8;
  padding: 2rem;
  font-size: 1.6rem; /* Equivalent to 16 pixels (1.6 * 10) */
}

.contact-form {
  max-width: 600px; /* Adjust the maximum width as needed */
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
}

input[type='text'],
input[type='email'],
textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem; /* Equivalent to 12 pixels (1.2 * 10) */
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical; /* Allow vertical resizing of the textarea */
}

button[type='submit'] {
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1.2rem; /* Equivalent to 12 pixels (1.2 * 10) */
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type='submit']:hover {
  background-color: #555; /* Darker color on hover */
}
</style>
