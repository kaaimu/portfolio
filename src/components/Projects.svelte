<script>
    let selected = 'All';
  
    const categories = ['All', 'Website', 'Landing Page', 'App'];
  
    const projects = [
      { title: 'Svelte Portfolio', category: 'Website', image: '/img/portfolio1.jpg' },
      { title: 'Coffee Shop LP', category: 'Landing Page', image: '/img/portfolio2.jpg' },
      { title: 'Todo App', category: 'App', image: '/img/portfolio3.jpg' },
      { title: 'Fashion Brand', category: 'Landing Page', image: '/img/portfolio4.jpg' },
      { title: 'Blog Platform', category: 'Website', image: '/img/portfolio5.jpg' },
    ];
  
    $: filtered = selected === 'All'
      ? projects
      : projects.filter(p => p.category === selected);
  </script>
  
  <section id="projects">
    <h2>Project Gallery</h2>
  
    <div class="filter-buttons">
      {#each categories as cat}
        <button
          on:click={() => selected = cat}
          class:selected={selected === cat}>
          {cat}
        </button>
      {/each}
    </div>
  
    <div class="gallery">
      {#each filtered as project (project.title)}
        <div class="card">
          <img src={project.image} alt={project.title} />
          <div class="info">
            <h3>{project.title}</h3>
            <span>{project.category}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  <style>
    #projects {
      padding: 4rem 2rem;
      background: var(--card);
      color: var(--text);
      text-align: center;
    }
  
    .filter-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
  
    .filter-buttons button {
      background: none;
      border: 1px solid var(--text);
      padding: 0.5rem 1rem;
      cursor: pointer;
      border-radius: 20px;
      transition: background 0.3s;
    }
  
    .filter-buttons button.selected,
    .filter-buttons button:hover {
      background: var(--text);
      color: var(--bg);
    }
  
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
    }
  
    .card {
      background: var(--bg);
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
  
    .card:hover {
      transform: translateY(-5px);
    }
  
    .card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  
    .info {
      padding: 1rem;
      text-align: left;
    }
  
    .info h3 {
      margin: 0;
      font-size: 1.1rem;
    }
  
    .info span {
      font-size: 0.85rem;
      opacity: 0.7;
    }
  </style>
  