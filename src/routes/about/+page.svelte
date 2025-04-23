<script>
    import { fade } from 'svelte/transition';
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
  </script>
  
  <style>
    .content {
      max-width: 800px;
      margin: auto;
      padding: 4rem 2rem;
      line-height: 1.7;
    }
  </style>
  
  <Navbar />
  
  <div class="content" in:fade>
    <h2>About Me</h2>
    <p>
      I'm a passionate web developer specializing in Svelte and CSS. With a strong focus on performance and design, I build interfaces that are not only fast but also enjoyable to use.
    </p>
    <p>
      I started my journey with HTML and CSS, and quickly fell in love with the simplicity and power of Svelte. Clean code and smooth animations are my favorite combo.
    </p>
  </div>
  
  <Footer />