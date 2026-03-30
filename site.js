function initMobileNav() {
  document.querySelectorAll('[data-menu-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-menu-toggle');
      const menu = document.getElementById(targetId);
      if (!menu) return;
      const isOpen = menu.classList.toggle('open');
      button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', initMobileNav);
