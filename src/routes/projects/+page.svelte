<script>
    import { fade } from 'svelte/transition';
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
  
    const projects = [
      {
        title: 'Svelte Portfolio',
        description: 'A fast and lightweight portfolio built with Svelte and pure CSS.',
        link: 'https://github.com/yourusername/svelte-portfolio'
      },
      {
        title: 'Animated Landing Page',
        description: 'An interactive, animated landing page using only CSS and Svelte transitions.',
        link: 'https://github.com/yourusername/animated-landing'
      }
    ];
  </script>
  
  <style>
    .grid {
      display: grid;
      gap: 2rem;
      padding: 4rem 2rem;
      max-width: 960px;
      margin: auto;
    }
  
    .card {
      border: 1px solid #ddd;
      padding: 2rem;
      border-radius: 12px;
      transition: transform 0.3s ease;
    }
  
    .card:hover {
      transform: translateY(-5px);
    }
  
    .card h3 {
      margin-bottom: 0.5rem;
    }
  
    .card a {
      display: inline-block;
      margin-top: 1rem;
      color: #0070f3;
      text-decoration: none;
    }
  
    .card a:hover {
      text-decoration: underline;
    }
  </style>
  
  <Navbar />
  
  <section class="grid" in:fade>
    {#each projects as project}
      <div class="card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href="{project.link}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    {/each}
  </section>
  
  <Footer />