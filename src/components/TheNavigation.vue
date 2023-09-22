<template>
  <nav :class="navbarClass" id="navbar">
    <ul>
      <li><a href="#" data-scroll="hero">Home</a></li>
      <li><a href="#" data-scroll="about">About</a></li>
      <li><a href="#" data-scroll="portfolio">Portfolio</a></li>
      <li><a href="#" data-scroll="contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'

// Define a ref to track whether the navigation bar should be sticky
const isSticky = ref(false)

onMounted(() => {
  // Find the navigation links with data-scroll attributes
  const scrollLinks: NodeListOf<HTMLElement> = document.querySelectorAll('[data-scroll]')

  // Add click event listeners to the navigation links
  scrollLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault() // Prevent the default behavior of the anchor tag

      // Find the target section based on the data-scroll attribute
      const targetId: string | null = link.getAttribute('data-scroll')
      const targetSection: HTMLElement | null = document.getElementById(targetId || '')

      // Scroll to the target section smoothly
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })

  // Add a scroll event listener to make the navigation bar sticky when scrolling down
  window.addEventListener('scroll', () => {
    // Find the top of the "About" section
    const targetSection: HTMLElement | null = document.getElementById('about')

    if (targetSection) {
      // Calculate the offset from the top of the section to the bottom of the navigation bar
      const navbar: HTMLElement | null = document.getElementById('navbar')
      const offset: number = targetSection.offsetTop - (navbar ? navbar.offsetHeight : 0)

      // Update the isSticky ref based on the scroll position
      isSticky.value = window.scrollY >= offset
    }
  })
})

// Determine the CSS class for the navigation bar based on the isSticky ref
const navbarClass = computed(() => {
  return isSticky.value ? 'sticky' : ''
})
</script>

<style scoped>
/* Navigation bar styles */
#navbar {
  background-color: #aaa;
  color: #fff;
  padding: 1rem 0; /* Adjust the padding as needed */
  text-align: center;
  position: relative; /* Initial position */
  z-index: 100; /* Ensure it's on top of other content */
}

#navbar ul {
  list-style: none;
  padding: 0;
}

#navbar li {
  display: inline;
  margin-right: 20px; /* Add spacing between navigation items */
}

#navbar a {
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem; /* Adjust the font size as needed */
}

/* Sticky navigation bar styles */
#navbar.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  animation: fadeInDown 0.3s ease; /* Optional: Add a fade-in effect */
}

/* Optional animation keyframes for the fade-in effect */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
