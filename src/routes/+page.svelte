<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Navbar from '../components/Navbar.svelte';
  import Footer from '../components/Footer.svelte';
  import Skills from '../components/Skills.svelte';
  import Timeline from '../components/Timeline.svelte';
  import Projects from '../components/Projects.svelte';
  import { 
    currentIndex, darkMode, score, isGameActive, title, dotPosition,
    initTheme, toggleTheme, initScroll, scrollToSection,
    startGame, stopGame, hit, startTitleAnimation
  } from '../lib/index.js';
  import '../global.css';

  let sections = [];

  onMount(() => {
    initTheme();
    startTitleAnimation();
    sections = Array.from(document.querySelectorAll('section'));
    return initScroll();
  });

  $: progressPercent = ($currentIndex / (sections.length - 1)) * 100;
</script>

<Navbar />

<button class="theme-toggle" on:click={toggleTheme}>
  {$darkMode ? '☀️ Light' : '🌙 Dark'}
</button>

<div class="progress-bar">
  <div class="progress" style="width: {progressPercent}%"></div>
</div>

<ul class="dot-nav">
  {#each sections as _, i}
    <li class:selected={$currentIndex === i}></li>
  {/each}
</ul>

<!-- <div class="nav-buttons">
  <button on:click={() => scrollToSection(-1)}>⬆️</button>
  <button on:click={() => scrollToSection(1)}>⬇️</button>
</div> -->

<main>
  <section id="top" in:fade={{ duration: 600 }}>
    {#if $isGameActive}
      <div class="game-container">
        <div class="game-score">Score: {$score}</div>
        <div
          class="dot"
          on:click={hit}
          style="left: {$dotPosition.x}px; top: {$dotPosition.y}px;"
        ></div>
      </div>
      <button class="game-button" on:click={stopGame}>Stop Game</button>
    {:else}
      <h1>Hi, I'm a <span class="highlight">{$title}</span></h1>
      <p>I build fast, beautiful, and interactive websites using Love and Skills 😎.</p>
      <a class="cta" href="#projects">See My Work</a>
      <button class="game-button" on:click={startGame}>Play Game</button>
    {/if}
    
  </section>

  <section id="about" in:fade|slide={{ duration: 600, y: 50 }}>
    <h2>About Me</h2>
    <p>
      I'm a passionate and highly skilled Fullstack Web Developer with a strong foundation in both frontend elegance and backend logic. From crafting seamless user experiences with modern frameworks like React, Vue, and Svelte, to building robust, scalable APIs with Node.js, Golang, or PHP, I bring ideas to life with clean, maintainable code.
    </p>
    <p>
      I started my journey with HTML and CSS, and quickly fell in love with the simplicity and power of Svelte. Clean code and smooth animations are my favorite combo.
    </p>

    <Skills />

    
    
    
    
  </section>

  <section id="projects" in:fade={{ duration: 600 }}>
    <h2>Projects & Experience</h2>
    <div class="projects-timeline-container">
      <div class="projects-section">
        <h3>Featured Projects</h3>
        <div class="grid">
          <div class="card">
            <div class="card-image">
              <img src="/Screenshot23.png" alt="Svelte Portfolio" />
            </div>
            <div class="card-content">
              <h3>Sign Up API</h3>
              <p>Sign Up API Backend In Golang Dan frontent with Svelte</p>
              <a href="https://github.com/yourusername/svelte-portfolio" target="_blank">View on GitHub</a>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="/Screenshot24.png" alt="Animated Landing Page" />
            </div>
            <div class="card-content">
              <h3>Animated Landing Page</h3>
              <p>An interactive, animated landing page using only CSS and Svelte transitions.</p>
              <a href="https://github.com/yourusername/animated-landing" target="_blank">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
      <div class="timeline-section">
        <h3>Experience</h3>
        <Timeline />
      </div>
    </div>
  </section>

  <section id="contact" in:fade|slide={{ duration: 600, y: 50 }}>
    <h2>Contact Me</h2>
    <div class="social-links">
      <a href="https://www.upwork.com/freelancers/~019569bce62a35c3eb?mp_source=share" target="_blank" class="social-link">
        <img src="/upwork.png" alt="Upwork" />
        <span>Upwork</span>
      </a>
      <a href="https://www.fiverr.com/torimu" target="_blank" class="social-link">
        <img src="/fiverr.png" alt="Fiverr" />
        <span>Fiverr</span>
      </a>
      <a href="https://wa.me/+6285157620008" target="_blank" class="social-link">
        <img src="/whatsapp.png" alt="WhatsApp" />
        <span>WhatsApp</span>
      </a>
    </div>
  </section>

<!-- <Timeline />  -->



</main>

<Footer />


 


