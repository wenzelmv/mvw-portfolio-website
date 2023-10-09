<template>
  <a href="#about" id="scroll-btn" class="btn btn-5">Visit</a>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Find the button element
  const scrollButton: HTMLElement | null = document.getElementById('scroll-btn')

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

<style scoped>
.btn {
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 600px) {
    margin: 0 1em 2em;
  }

  &:hover {
    text-decoration: none;
    font-weight: bold;
  }
}
.btn-5 {
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

.btn-5:hover {
  border: 1px solid;
  box-shadow:
    inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
  text-shadow: 1px 1px 2px #427388;
}
</style>
