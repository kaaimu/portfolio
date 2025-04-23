<script>
    import { fade } from 'svelte/transition';
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
  </script>
  
  <style>
    .form {
      max-width: 600px;
      margin: auto;
      padding: 4rem 2rem;
    }
  
    input, textarea {
      width: 100%;
      padding: 1rem;
      margin-top: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  
    button {
      margin-top: 1.5rem;
      padding: 0.75rem 2rem;
      background: black;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
  
    button:hover {
      background: #333;
    }
  </style>
  
  <Navbar />
  
  <div class="form" in:fade>
    <h2>Contact Me</h2>
    <form action="mailto:you@example.com" method="POST" enctype="text/plain">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
  
  <Footer />