document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-container .link a');
  
    // Function to remove 'active' class from all links
    const removeActiveClasses = () => {
      navLinks.forEach((link) => link.classList.remove('active'));
    };
  
    // Function to add 'active' class to the corresponding link
    const addActiveClass = (id) => {
      const activeLink = document.querySelector(`.nav-container .link a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    };
  
    // Function to update active link on scroll
    const updateActiveLink = () => {
      let scrollPosition = window.scrollY + 50; // Adjust for the navbar height
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const sectionId = section.getAttribute('id');
          removeActiveClasses();
          addActiveClass(sectionId);
        }
      });
    };
  
    // Listen for scroll events
    window.addEventListener('scroll', updateActiveLink);
  });
  