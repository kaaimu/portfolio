import { writable } from 'svelte/store';

// Stores
export const currentIndex = writable(0);
export const darkMode = writable(false);
export const score = writable(0);
export const isGameActive = writable(false);

// Title Animation with Typing Effect
const titles = ["Web Developer", "Backend Expert", "CSS Wizard", "Frontend Ninja"];
export const title = writable("");
let index = 0;
let charIndex = 0;
let isDeleting = false;

export function startTitleAnimation() {
  const currentTitle = titles[index];
  const typeSpeed = isDeleting ? 50 : 100;
  
  const loop = () => {
    const currentTitle = titles[index];

    if (!isDeleting) {
      if (charIndex <= currentTitle.length) {
        title.set(currentTitle.substring(0, charIndex));
        charIndex++;
      } else {
        isDeleting = true;
        setTimeout(loop, 1500); // Jeda sebelum menghapus
        return;
      }
    } else {
      if (charIndex > 0) {
        title.set(currentTitle.substring(0, charIndex));
        charIndex--;
      } else {
        isDeleting = false;
        index = (index + 1) % titles.length;
      }
    }

    setTimeout(loop, typeSpeed);
  };

  loop();
}

// Theme Management
export function toggleTheme() {
  darkMode.update(value => {
    const newValue = !value;
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
    applyTheme(newValue);
    return newValue;
  });
}

export function initTheme() {
  const saved = localStorage.getItem('theme');
  const isDark = saved === 'dark';
  darkMode.set(isDark);
  applyTheme(isDark);
}

function applyTheme(isDark) {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', isDark);
    // Hapus pengaturan style langsung ke body karena sudah dihandle oleh CSS variables
  }
}

// Scroll Management
let sections = [];
let isScrolling = false;

export function initScroll() {
  sections = Array.from(document.querySelectorAll('section'));

  const scrollHandler = (e) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    scrollToSection(direction);
  };

  const keyHandler = (e) => {
    if (e.key === 'ArrowDown') scrollToSection(1);
    if (e.key === 'ArrowUp') scrollToSection(-1);
  };

  window.addEventListener('wheel', scrollHandler, { passive: false });
  window.addEventListener('keydown', keyHandler);

  return () => {
    window.removeEventListener('wheel', scrollHandler);
    window.removeEventListener('keydown', keyHandler);
  };
}

export function scrollToSection(direction) {
  if (isScrolling) return;

  currentIndex.update(value => {
    const max = sections.length - 1;
    const newIndex = Math.max(0, Math.min(value + direction, max));
    sections[newIndex].scrollIntoView({ behavior: 'smooth' });
    return newIndex;
  });

  isScrolling = true;
  setTimeout(() => (isScrolling = false), 1000);
}

// Game Management
let interval;
const dotSize = 60;
export const dotPosition = writable({ x: 0, y: 0 });

function randomizeDot() {
  const width = window.innerWidth - dotSize;
  const height = window.innerHeight - dotSize;
  dotPosition.set({
    x: Math.random() * width,
    y: Math.random() * height
  });
}

export function hit() {
  score.update(s => s + 1);
  randomizeDot();
}

export function startGame() {
  isGameActive.set(true);
  score.set(0);
  randomizeDot();
  interval = setInterval(randomizeDot, 800);
}

export function stopGame() {
  isGameActive.set(false);
  if (interval) clearInterval(interval);
}