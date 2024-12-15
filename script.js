// scripts.js

// Add hover effect to project cards for accessibility and interaction
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.classList.add('shadow-lg');
  });

  card.addEventListener('mouseout', () => {
    card.classList.remove('shadow-lg');
  });
});

// Smooth scrolling for internal links (future-proofing if you add them)
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
