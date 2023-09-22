<template>
  <!-- Hero Section -->
  <section id="hero">
    <h1>Hi, I'm Michael Van Wenzel.</h1>
    <h2>Web Developer & Designer</h2>
    <!-- Add any additional information you want to showcase here -->
    <button id="scroll-button">View</button>

    <BubblesAnimation />
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import BubblesAnimation from './BubblesAnimation.vue'

onMounted(() => {
  // Find the button element
  const scrollButton: HTMLElement | null = document.getElementById('scroll-button')

  // Add a click event listener to the button
  if (scrollButton) {
    scrollButton.addEventListener('click', () => {
      // Find the next section you want to scroll to (e.g., "about", "portfolio", etc.)
      const nextSection: HTMLElement | null = document.querySelector('#about') // Change the selector as needed

      // Use the scrollIntoView() method to scroll to the next section smoothly
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }
})
</script>

<style lang="scss" scoped>
/* Base styles for all screen sizes */
#hero {
  background-color: #0c192c;
  color: #fff;
  padding: 2rem;
  text-align: center;
  font-size: 1.6rem; /* Equivalent to 16 pixels (1.6 * 10) */
  overflow: hidden;
  width: 100%;
  height: 100vh; /* Set the height to 100% of the viewport height on all screen sizes */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#hero h1 {
  font-size: 2.5rem; /* Equivalent to 25 pixels (2.5 * 10) */
  margin: 0;
}

#hero p {
  font-size: 1.2rem; /* Equivalent to 12 pixels (1.2 * 10) */
}
</style>
