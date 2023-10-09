<template>
  <!-- Footer -->
  <footer>
    <div class="footer-content">
      <a href="https://github.com/wenzelmv" target="_blank" rel="noopener noreferrer">
        <GithubIcon />
      </a>
      <a href="mailto:wenzelmv@gmail.com"><EmailIcon :width="45" :height="45" /></a>
      <p>MICHAEL VAN WENZEL &copy;2023</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import GithubIcon from './icons/GithubIcon.vue'
import EmailIcon from './icons/EmailIcon.vue'
</script>

<style scoped>
/* Footer styles */
footer {
  background-color: #333;
  color: #fff;
  padding: 1rem 0; /* Adjust the padding as needed */
  text-align: center; /* Center align the text horizontally */
  height: 160px;
  display: flex; /* Use flexbox for vertical centering */
  align-items: center; /* Center align the content vertically */
}

/* Styles for the footer content */
.footer-content {
  flex: 1; /* Allow the content to expand vertically */
}

/* Footer link styles (e.g., for social media links) */
footer a {
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem; /* Add spacing between links */
  font-size: 1.2rem; /* Adjust the font size as needed */
}

/* Footer link hover effect */
footer a:hover {
  text-decoration: underline;
}
</style>
