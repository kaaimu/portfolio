<script>
    import { onMount } from 'svelte';
  
    const skills = [
      { name: 'Svelte', percent: 90 },
      { name: 'HTML', percent: 95 },
      { name: 'CSS', percent: 90 },
      { name: 'JavaScript', percent: 85 },
      { name: 'Git', percent: 80 },
    ];
  
    let observer;
    let visible = [];
  
    onMount(() => {
      visible = new Array(skills.length).fill(false);
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const index = +entry.target.getAttribute('data-index');
          if (entry.isIntersecting) {
            visible[index] = true;
          }
        });
      }, { threshold: 0.5 });
  
      document.querySelectorAll('.circle-skill').forEach((el) => observer.observe(el));
    });
  </script>
  
  <div id="skills">
    <h2>Skills</h2>
    <div class="skills-grid">
      {#each skills as skill, i}
      <div class="circle-skill" data-index={i}>
        <div class="circle-wrapper">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" class="bg" />
            <circle
              cx="50" cy="50" r="45"
              class="progress"
              stroke-dasharray="282.6"
              stroke-dashoffset={visible[i] ? 282.6 - (282.6 * skill.percent / 100) : 282.6}
            />
          </svg>
          <div class="circle-text">
            <strong>{skill.name}</strong>
            <span>{skill.percent}%</span>
          </div>
        </div>
      </div>
      {/each}
    </div>
  </div>
  
  <style>
    #skills {
      padding: 4rem 2rem;
      background: var(--card);
      color: var(--text);
      width: 100%;
      text-align: center;
    }
  
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }
  
    .circle-skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.circle-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
}
  
svg {
  width: 100px;
  height: 100px;
  transform: rotate(-90deg);
}
  
    circle {
      fill: none;
      stroke-width: 10;
      transition: stroke-dashoffset 1s ease-out;
    }
  
    .bg {
      stroke: #ccc;
    }
  
    .progress {
      stroke: var(--text);
    }
  
    .circle-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 0.85rem;
  line-height: 1.2;
  color: var(--text);
}
.circle-text strong {
  display: block;
  font-size: 1rem;
  font-weight: 600;
}

.circle-text span {
  font-size: 0.9rem;
}
  </style>
  