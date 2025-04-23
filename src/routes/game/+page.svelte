<script>
      import { onMount } from 'svelte';
  let score = 0;
  let dotX = 0;
  let dotY = 0;
  let dotSize = 60;
  let interval;

  function randomizeDot() {
    const width = window.innerWidth - dotSize;
    const height = window.innerHeight - dotSize;
    dotX = Math.random() * width;
    dotY = Math.random() * height;
  }

  function hit() {
    score++;
    randomizeDot();
  }

  onMount(() => {
    randomizeDot();

    // Pindah posisi titik otomatis setiap 800ms
    interval = setInterval(randomizeDot, 800);

    // Bersihkan interval kalau keluar
    return () => {
      clearInterval(interval);
    };
  });
  </script>
  
  <div class="game-container">
    <h1>🎯 Tangkap Titiknya!</h1>
    <p>Skor: {score}</p>
    <div
      class="dot"
      on:click={hit}
      style="left: {dotX}px; top: {dotY}px;"
    ></div>
    <a href="/" class="back-button">⬅️ Kembali</a>
  </div>
  
  <style>
    .game-container {
      height: 100vh;
      width: 100vw;
      background: radial-gradient(circle at center, #1f1c2c, #928dab);
      color: white;
      text-align: center;
      overflow: hidden;
      position: relative;
      padding-top: 40px;
    }

    :global(body) {
  margin: 0;
  overflow: hidden;
}
  
    .dot {
      width: 60px;
      height: 60px;
      background: #ff0066;
      border-radius: 50%;
      position: absolute;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 0 20px #ff0066;
    }
  
    .back-button {
      display: inline-block;
      margin-top: 40px;
      padding: 10px 16px;
      background: #ffffff22;
      border-radius: 8px;
      color: white;
      text-decoration: none;
      transition: background 0.3s;
    }
  
    .back-button:hover {
      background: #ffffff44;
    }
  </style>
  