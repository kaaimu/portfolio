<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
  
    const timeline = [
      { year: '2021', title: 'Started Web Development', desc: 'Learning HTML, CSS, and JS from free resources & YouTube.' },
      { year: '2022', title: 'Freelance Projects', desc: 'Working on landing pages & portfolio projects for small clients.' },
      { year: '2023', title: 'Exploring Svelte', desc: 'Started exploring Svelte, building 1-page scroll systems.' },
      { year: '2024', title: 'Remote Web Developer', desc: 'Working remotely for startups as a frontend developer.' },
    ];
  
    let visible = [];
  
    onMount(() => {
      visible = new Array(timeline.length).fill(false);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const index = +entry.target.getAttribute('data-index');
          if (entry.isIntersecting) {
            visible[index] = true;
          }
        });
      }, { threshold: 0.4 });
  
      document.querySelectorAll('.timeline-item').forEach((el) => observer.observe(el));
    });
  </script>
  
  <div id="timeline">
    <div class="timeline">
      {#each timeline as item, i}
        <div class="timeline-item {visible[i] ? 'visible' : ''}" data-index={i}>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3>{item.year} – {item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    #timeline {
      padding: 4rem 2rem;
      background: var(--bg);
      color: var(--text);
      text-align: center;
    }
  
    .timeline {
      position: relative;
      margin: 2rem auto;
      padding-left: 1rem;
      border-left: 2px solid var(--text);
      max-width: 700px;
    }
  
    .timeline-item {
      position: relative;
      margin: 2rem 0;
      opacity: 0;
      transform: translateX(-30px);
      transition: all 0.6s ease;
    }
  
    .timeline-item.visible {
      opacity: 1;
      transform: translateX(0);
    }
  
    .timeline-marker {
      position: absolute;
      left: -12px;
      top: 0.3rem;
      width: 16px;
      height: 16px;
      background: var(--text);
      border-radius: 50%;
    }
  
    .timeline-content {
      padding-left: 1.5rem;
      text-align: left;
    }
  
    h3 {
      margin: 0 0 0.25rem;
      font-size: 1.1rem;
    }
  
    p {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.4;
    }
  
    @media (max-width: 600px) {
      .timeline {
        padding-left: 0.5rem;
      }
      .timeline-content {
        padding-left: 1rem;
      }
    }
  </style>
  