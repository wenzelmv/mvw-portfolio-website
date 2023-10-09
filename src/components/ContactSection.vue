<template>
  <!-- Contact Section -->
  <section class="contact-section">
    <h2>Contact me!</h2>
    <!-- Uses https://formspree.io/ to send email to me with a message -->
    <form action="https://formspree.io/f/mwkdrzql" method="post" class="contact-form">
      <!-- Name -->
      <div class="form-group">
        <input type="text" name="name" id="name" placeholder="Name" required />
      </div>
      <!-- Email -->
      <div class="form-group">
        <input type="email" name="email" id="email" placeholder="Email" required />
      </div>
      <!-- Message -->
      <div class="form-group">
        <textarea name="message" id="message" placeholder="Message" required></textarea>
      </div>
      <button type="submit" class="submit-button">Send</button>
    </form>
  </section>
</template>

<style scoped>
/* Contact section styles */
.contact-section {
  color: #fff;
  padding: 2rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* Contact form styles */
.contact-form {
  max-width: 600px;
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
}

input[type='text'],
input[type='email'],
textarea {
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-button {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #555;
}
</style>
