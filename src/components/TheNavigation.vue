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

// Define a ref to track the currently active section
const activeSection = ref('hero') // Default to the 'hero' section

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

  window.addEventListener('scroll', () => {
    // Find the top of each section and its corresponding link
    const sections = ['hero', 'about', 'portfolio', 'contact']
    const linkElements = document.querySelectorAll('[data-scroll]')

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i])
      if (section && section.getBoundingClientRect().top <= 1) {
        activeSection.value = sections[i]
        break
      }
    }
    // Update the link color based on the active section
    linkElements.forEach((link) => {
      const targetId = link.getAttribute('data-scroll')
      if (targetId === activeSection.value) {
        link.classList.add('active-link')
      } else {
        link.classList.remove('active-link')
      }
    })
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
  background-color: #333;
  padding: 1.6rem 0; /* Adjust the padding as needed */
  text-align: center;
  position: relative; /* Initial position */
  z-index: 100; /* Ensure it's on top of other content */
  display: flex;
  justify-content: center;
}

#navbar ul {
  list-style: none;
  padding: 0;
  gap: 50px;
}

#navbar li {
  display: inline;
  margin-right: 20px; /* Add spacing between navigation items */
}

#navbar a {
  text-decoration: none;
  color: #f5f5f5f5;
  font-size: 1.6rem; /* Adjust the font size as needed */
  transition: color 0.3s ease; /* Add a smooth transition for color changes */
}

/* Sticky navigation bar styles */
#navbar.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Style the active link */
#navbar a.active-link {
  color: #007bff; /* Change the color to your desired active link color */
}
</style>
