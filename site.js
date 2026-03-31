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

function initHomepageMatcher() {
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const resultsSummary = document.getElementById('resultsSummary');
  const resultsSection = document.getElementById('resultsSection');

  if (!step1 || !step2 || !step3 || !resultsSummary || !resultsSection) return;

  let step = 1;
  const answers = [];

  window.nextStep = function (answer) {
    answers.push(answer);

    const current = document.getElementById('step' + step);
    if (current) current.classList.remove('active');

    step += 1;

    const next = document.getElementById('step' + step);
    if (next) next.classList.add('active');
  };

  window.showResults = function (answer) {
    answers.push(answer);
    resultsSummary.textContent =
      'Profile selected: ' +
      answers.join(' • ') +
      '. Choose the next page that matches where you are in your buying journey.';

    resultsSection.scrollIntoView({ behavior: 'smooth' });
  };
}

function initComparisonTabs() {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.panel');

  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-panel');

      tabs.forEach((item) => item.classList.remove('active'));
      panels.forEach((panel) => panel.classList.remove('active'));

      tab.classList.add('active');

      const targetPanel = document.getElementById('panel-' + target);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHomepageMatcher();
  initComparisonTabs();
});
