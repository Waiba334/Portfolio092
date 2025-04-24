// Animation on scroll functionality
document.addEventListener('DOMContentLoaded', () => {
  // Get all elements that should be animated
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  // Set up the Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the element is in view
      if (entry.isIntersecting) {
        // Add the animation class based on the data attribute
        const animationType = entry.target.dataset.animation || 'fade-in';
        entry.target.classList.add('animated', animationType);

        // Unobserve after animating once (optional)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when at least 10% of the element is visible
    rootMargin: '0px 0px -100px 0px' // Offset from the bottom to trigger animations earlier
  });

  // Observe all animated elements
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Add sequential animation for skills and project cards
  const skillCards = document.querySelectorAll('.skill-category');
  const projectCards = document.querySelectorAll('.project-card');

  // Add sequential delay to skill cards
  skillCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
  });

  // Add sequential delay to project cards
  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
  });
});
