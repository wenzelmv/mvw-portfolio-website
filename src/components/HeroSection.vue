<template>
  <!-- Hero Section -->
  <section id="hero">
    <h1>Hi, I'm <span>Michael Van Wenzel</span>.</h1>
    <h2>Full Stack Developer</h2>
    <!-- Add any additional information you want to showcase here -->
    <ScrollButton />
    <BubblesAnimation />
  </section>
</template>

<script lang="ts" setup>
import ScrollButton from './ScrollButton.vue'
import BubblesAnimation from './BubblesAnimation.vue'
</script>

<style lang="scss" scoped>
/* Base styles for all screen sizes */
#hero {
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
  font-size: 4.2rem; /* Equivalent to 25 pixels (2.5 * 10) */
  margin: 0;
}

#hero h2 {
  font-size: 3.2rem;
  margin-bottom: 24px;
}

#hero p {
  font-size: 1.2rem; /* Equivalent to 12 pixels (1.2 * 10) */
}

span {
  color: #ffa500;
}
</style>
