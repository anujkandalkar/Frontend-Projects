// WanderSphere Interactive Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 2. Newsletter Form Handling
  const newsletterBtn = document.querySelector('.newsletter button');
  const newsletterInput = document.querySelector('.newsletter input');

  if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener('click', () => {
      const email = newsletterInput.value.trim();
      if (!email) {
        alert('Please enter a valid email address.');
        return;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address format (e.g., user@example.com).');
        return;
      }

      alert(`Thank you for subscribing to WanderSphere! Updates will be sent to ${email}.`);
      newsletterInput.value = '';
    });
  }

  // 3. Explore Now Button Interactivity
  const heroBtn = document.querySelector('.hero button');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      const destinationsSection = document.querySelector('#destinations');
      if (destinationsSection) {
        destinationsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
