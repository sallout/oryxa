// script.js

function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const isOpen = content.style.display === 'block';

  // Close all
  document.querySelectorAll('.accordion-content').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.accordion-header').forEach(el => el.classList.remove('open'));

  // Open clicked if it was closed
  if (!isOpen) {
    content.style.display = 'block';
    header.classList.add('open');
  }
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main section');
  const links = document.querySelectorAll('.accordion-content a');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
