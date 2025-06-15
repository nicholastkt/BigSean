const slideInElements = document.querySelectorAll('.image-wrapper, .row-description');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

slideInElements.forEach(el => observer.observe(el));
