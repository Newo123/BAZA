document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('.modal__close');
  const openModal = Array.from(document.querySelectorAll('.header__action'));

  const exitModal = () => {
    modal.classList.remove('active');
    document.body.style.overflowY = 'scroll';
  };

  const inModal = () => {
    modal.classList.add('active');

    document.body.style.overflowY = 'hidden';
  };

  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        exitModal();
      }
    });
  }

  if (openModal.length > 0) {
    openModal.forEach(open => {
      open.addEventListener('click', inModal);
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', exitModal);
  }
});
