<template>
  <!-- Contact Section -->
  <section id="contact">
    <h2>Contact Me</h2>
    <p>Feel free to reach out to me:</p>
    <ul>
      <li>Email: yourname@example.com</li>
      <li>LinkedIn: <a href="https://www.linkedin.com/in/yourname/">LinkedIn Profile</a></li>
      <!-- Add other contact information or social media links -->
    </ul>
  </section>
</template>

<style scoped>
/* Contact section styles */
#contact {
  background-color: #f8f8f8;
  padding: 2rem;
  text-align: center;
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
