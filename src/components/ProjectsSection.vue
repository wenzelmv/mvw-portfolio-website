<template>
  <!-- Portfolio Section -->
  <section id="portfolio">
    <h2>Portfolio</h2>
    <!-- Create a grid of your projects or works with links and descriptions -->
    <div class="project">
      <h3>Project 1</h3>
      <p>Description of Project 1</p>
      <a href="#">View Project</a>
    </div>

    <div class="project">
      <h3>Project 2</h3>
      <p>Description of Project 2</p>
      <a href="#">View Project</a>
    </div>

    <!-- Add more projects as needed -->
  </section>
</template>

<style scoped>
/* Portfolio section styles */
#portfolio {
  padding: 2rem;
  text-align: center;
  font-size: 1.6rem; /* Equivalent to 16 pixels (1.6 * 10) */
}

.portfolio-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two equal columns */
  grid-gap: 20px; /* Adjust the gap between projects */
  justify-items: center; /* Center items horizontally within columns */
  align-items: center; /* Center items vertically within rows */
}

.portfolio-item {
  background-color: #f8f8f8;
  padding: 1rem;
  border: 1px solid #ddd;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.portfolio-item img {
  max-width: 100%;
  height: auto;
}

/* Media query for larger screens (e.g., tablets and desktops) */
@media screen and (min-width: 768px) {
  /* Adjust styles for larger screens as needed */
}
</style>
