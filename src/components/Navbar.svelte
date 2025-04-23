<script>
    let isOpen = false;
  </script>
  
  <style>
    nav {
      position: sticky;
      top: 0;
      background: white;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      z-index: 100;
    }
    a {
      text-decoration: none;
      margin-left: 1.5rem;
      color: #333;
      font-weight: bold;
      transition: color 0.2s;
    }
    a:hover {
      color: #000;
    }
  </style>
  
  <nav>
    <div class="logo"><a href="/">MyPortfolio</a></div>
    <div class="links">
      <a href="/about">About</a>
      <a href="/projects">Projects</a>
      <a href="/contact">Contact</a>
    </div>
  </nav>