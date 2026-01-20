<script>
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
</script>
