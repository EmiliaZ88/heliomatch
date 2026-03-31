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
  const steps = [step1, step2, step3].filter(Boolean);
  const nextButtons = document.querySelectorAll('[data-next-step]');
  const resultButtons = document.querySelectorAll('[data-show-results]');

  if (!step1 || !step2 || !step3 || !resultsSummary || !resultsSection) return;

  let step = 1;
  const answers = [];

  function updateVisibleStep() {
    steps.forEach((panel, index) => {
      const isActive = index + 1 === step;
      panel.classList.toggle('active', isActive);
      panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });
  }

  function nextStep(answer) {
    answers.push(answer);
    step += 1;
    updateVisibleStep();
  }

  function showResults(answer) {
    answers.push(answer);
    resultsSummary.textContent =
      'Profile selected: ' +
      answers.join(' • ') +
      '. Choose the next page that matches where you are in your buying journey.';

    resultsSection.scrollIntoView({ behavior: 'smooth' });
  }

  steps.forEach((panel, index) => {
    panel.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
  });

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      nextStep(button.getAttribute('data-next-step'));
    });
  });

  resultButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showResults(button.getAttribute('data-show-results'));
    });
  });
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
