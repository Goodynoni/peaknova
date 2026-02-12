// Hamburger menu toggle
const menuToggle = document.getElementById('pnMenuToggle');
const navLinks = document.getElementById('pnNavLinks');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// Close menu when a link is clicked
const navItems = document.querySelectorAll('.pn-nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Image modal
document.querySelectorAll('.pn-prototypes img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed; inset:0; background:rgba(0,0,0,.8);
      display:flex; align-items:center; justify-content:center;
      z-index:1000;
    `;
    modal.innerHTML = `<img src="${img.src}" style="max-width:90%; border-radius:10px;">`;
    modal.onclick = () => modal.remove();
    document.body.appendChild(modal);
  });
});
