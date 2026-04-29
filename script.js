const html = document.documentElement;
const toggle = document.getElementById('mode-toggle');

toggle.addEventListener('click', () => {
  const isHyde = html.getAttribute('data-mode') === 'hyde';
  html.setAttribute('data-mode', isHyde ? 'jekyll' : 'hyde');
  toggle.textContent = isHyde ? '☀️' : '🌑';
});

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.classList.contains('open');

    document.querySelectorAll('.faq-answer.open').forEach(a => {
      a.classList.remove('open');
      a.previousElementSibling.classList.remove('open');
    });

    if (!isOpen) {
      answer.classList.add('open');
      btn.classList.add('open');
    }
  });
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 4px 24px var(--shadow-heavy)'
    : '0 2px 12px var(--shadow)';
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});

document.querySelector('.btn-donate').addEventListener('click', () => {
  const inputs = document.querySelectorAll('.donate-input');
  let allFilled = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      allFilled = false;
      input.style.borderColor = 'var(--danger)';
      setTimeout(() => input.style.borderColor = '', 1500);
    }
  });

  if (allFilled) {
    const btn = document.querySelector('.btn-donate');
    btn.textContent = 'Processing... Do Not Inquire Further';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Donation Received. You Are Now On A List.';
    }, 1800);
  }
});

document.querySelectorAll('.donate-amount:not(.donate-amount--featured)').forEach(card => {
  card.addEventListener('click', () => {
    const amount = card.querySelector('.amount').textContent;
    const input = document.querySelectorAll('.donate-input')[2];
    input.value = amount;
    input.style.borderColor = 'var(--accent)';
    setTimeout(() => input.style.borderColor = '', 1000);
  });
});

let hydeTyped = false;
document.querySelectorAll('.donate-input').forEach(input => {
  input.addEventListener('input', () => {
    const val = input.value.toLowerCase();
    if ((val.includes('hyde') || val.includes('edward')) && !hydeTyped) {
      hydeTyped = true;
      html.setAttribute('data-mode', 'hyde');
      toggle.textContent = '🌑';
      setTimeout(() => {
        html.setAttribute('data-mode', 'jekyll');
        toggle.textContent = '☀️';
        hydeTyped = false;
      }, 3000);
    }
  });
});