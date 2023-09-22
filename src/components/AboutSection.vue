<template>
  <!-- About Section -->
  <TheNavigation />

  <section id="about">
    <h2>About Me</h2>
    <p>
      Write a brief introduction about yourself here. Mention your skills, experience, and what
      you're passionate about.
    </p>
  </section>
</template>

<script lang="ts" setup>
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<style scoped>
/* About section styles */
#about {
  background-color: #f8f8f8; /* A light background color for the "About" section */
  color: #333; /* A dark text color for the content */
  padding: 2rem;
  text-align: center;
  font-size: 1.6rem; /* Equivalent to 16 pixels (1.6 * 10) */
  height: 100vh; /* Set the height to 100% of the viewport height on all screen sizes */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#about h2 {
  font-size: 2.5rem; /* Equivalent to 25 pixels (2.5 * 10) */
  margin: 0;
}

#about p {
  font-size: 1.2rem; /* Equivalent to 12 pixels (1.2 * 10) */
}
</style>
