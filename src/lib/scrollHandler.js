import { writable } from 'svelte/store';

export const currentIndex = writable(0);
export const progressPercent = writable(0);
export const title = writable('Web Developer');

const titles = ['Web Developer', 'Frontend Engineer', 'Svelte Developer'];
let titleIndex = 0;

function updateTitle() {
    setInterval(() => {
        titleIndex = (titleIndex + 1) % titles.length;
        title.set(titles[titleIndex]);
    }, 3000);
}

export function initializeScroll() {
    updateTitle(); // Start the title animation
    let sections = [];

    function scrollToSection(direction) {
        const max = sections.length - 1;
        currentIndex.update(value => {
            const newIndex = Math.max(0, Math.min(value + direction, max));
            if (sections[newIndex]) {
                sections[newIndex].scrollIntoView({ behavior: 'smooth' });
                progressPercent.set((newIndex / max) * 100);
            }
            return newIndex;
        });
    }

    function mount() {
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

    return {
        mount,
        scrollToSection
    };
}


export function type() {
    const titles = ["Web Developer", "Svelte Expert", "CSS Wizard"];
    let index = 0;
    let title = titles[0];
  
    const loop = () => {
      setTimeout(() => {
        index = (index + 1) % titles.length;
        title = titles[index];
        loop();
      }, 2000);
    };
  
    loop();

    return title;
}

