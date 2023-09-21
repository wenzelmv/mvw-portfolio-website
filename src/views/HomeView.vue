<template>
  <div>
    <!-- Navigation Bar -->
    <header>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="hero">
      <h1>Michael Van Wenzel</h1>
      <p>Web Developer & Designer</p>
      <!-- Add any additional information you want to showcase here -->
    </section>

    <!-- About Section -->
    <section id="about">
      <h2>About Me</h2>
      <p>
        Write a brief introduction about yourself here. Mention your skills, experience, and what
        you're passionate about.
      </p>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio">
      <h2>Portfolio</h2>
      <!-- Create a grid of your projects or works with links and descriptions -->
      <div class="project">
        <img src="project1.jpg" alt="Project 1" />
        <h3>Project 1</h3>
        <p>Description of Project 1</p>
        <a href="#">View Project</a>
      </div>

      <div class="project">
        <img src="project2.jpg" alt="Project 2" />
        <h3>Project 2</h3>
        <p>Description of Project 2</p>
        <a href="#">View Project</a>
      </div>

      <!-- Add more projects as needed -->
    </section>

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

    <!-- Footer -->
    <footer>
      <p>&copy; 2023 Your Name. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>
