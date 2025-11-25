// Custom Cursor Implementation
(function initCustomCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  const colors = [
    'hsl(351, 100%, 61%)', // red
    'hsl(221, 100%, 60%)', // blue
    'hsl(262, 100%, 70%)', // purple
    'hsl(18, 100%, 60%)'   // orange
  ];

  let trailId = 0;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Create trail
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.background = colors[Math.floor(Math.random() * colors.length)];
    trail.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(trail);

    setTimeout(() => {
      trail.remove();
    }, 800);

    // Check if hovering over interactive elements
    const target = e.target;
    const isInteractive = target.tagName === 'BUTTON' ||
                         target.tagName === 'A' ||
                         target.tagName === 'INPUT' ||
                         target.tagName === 'TEXTAREA' ||
                         target.closest('button, a, input, textarea') !== null;
    
    if (isInteractive) {
      cursor.classList.add('hover');
    } else {
      cursor.classList.remove('hover');
    }
  });

  // Ripple effect on click
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
})();

// Navigation Scroll Effect
(function initNavScroll() {
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
})();

// Mobile Menu Toggle
(function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      
      // Update icon
      const icon = toggleBtn.querySelector('span');
      if (mobileMenu.classList.contains('active')) {
        icon.textContent = '✕';
      } else {
        icon.textContent = '☰';
      }
    });

    // Close menu when clicking a link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        toggleBtn.querySelector('span').textContent = '☰';
      });
    });
  }
})();

// Scroll Animations
(function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const fadeElements = document.querySelectorAll('.fade-in-up');
  const scaleElements = document.querySelectorAll('.scale-in');
  
  fadeElements.forEach(el => observer.observe(el));
  scaleElements.forEach(el => observer.observe(el));
})();

// Set Active Navigation Link
(function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// Form Submission (for contact form)
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form data
  const form = e.target;
  const formData = new FormData(form);
  
  // Show success message (in a real app, this would send to a server)
  alert('Thank you for your message! We will get back to you soon.');
  
  // Reset form
  form.reset();
  
  return false;
}

// Gallery Image Modal (if needed)
function openImage(src) {
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.9);z-index:10000;display:flex;align-items:center;justify-content:center;cursor:pointer;';
  
  const img = document.createElement('img');
  img.src = src;
  img.style.cssText = 'max-width:90%;max-height:90%;object-fit:contain;';
  
  modal.appendChild(img);
  document.body.appendChild(modal);
  
  modal.addEventListener('click', () => {
    modal.remove();
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

console.log('Elite Technology - Website Loaded Successfully');
