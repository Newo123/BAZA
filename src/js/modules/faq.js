document.addEventListener('DOMContentLoaded', () => {
  const toggleDrop = Array.from(document.querySelectorAll('.faq__item-head'));

  if (toggleDrop.length > 0) {
    toggleDrop.forEach(drop => {
      drop.addEventListener('click', e => {
        console.log(e.currentTarget.previousElementSibling);
        console.log(e.currentTarget);
        e.currentTarget.parentNode.classList.toggle('active');
      });
    });
  }
});
