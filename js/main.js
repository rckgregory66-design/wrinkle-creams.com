/* wrinkle-creams.com — Main JavaScript */

document.addEventListener('DOMContentLoaded', () => {

  /* --- FAQ Accordion --- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      // Open clicked if it was closed
      if (!wasOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
    btn.setAttribute('aria-expanded', 'false');
  });

  /* --- Wrinkle Cream Finder Quiz --- */
  const quiz = document.getElementById('wrinkle-finder');
  if (quiz) {
    const steps = quiz.querySelectorAll('.quiz-step');
    const dots = quiz.querySelectorAll('.quiz-progress-dot');
    const result = quiz.querySelector('.quiz-result');
    let answers = {};
    let current = 0;

    function showStep(n) {
      steps.forEach((s, i) => {
        s.classList.toggle('active', i === n);
      });
      dots.forEach((d, i) => {
        d.classList.toggle('done', i < n);
      });
      current = n;
    }

    quiz.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const step = opt.closest('.quiz-step');
        const key = step.dataset.key;
        answers[key] = opt.dataset.value;

        // Deselect siblings
        step.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');

        setTimeout(() => {
          const next = current + 1;
          if (next < steps.length) {
            showStep(next);
          } else {
            showQuizResult();
          }
        }, 280);
      });
    });

    function showQuizResult() {
      steps.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.add('done'));
      if (result) result.classList.add('visible');
      buildResult();
    }

    function buildResult() {
      if (!result) return;
      const age = answers.age || '';
      const skin = answers.skin || '';
      const concern = answers.concern || '';
      const retinol = answers.retinol || '';
      const fragrance = answers.fragrance || '';

      let recs = [];

      if (skin === 'dry') recs.push('Look for rich creams with ceramides, hyaluronic acid, and glycerin to restore moisture and support the skin barrier.');
      else if (skin === 'oily') recs.push('Choose lightweight gel-creams or fluid moisturisers. Niacinamide is a great ingredient for oilier skin types as it can help balance sebum and improve texture.');
      else if (skin === 'sensitive') recs.push('Choose fragrance-free formulas. Start with ceramides and peptides before introducing actives. Patch test everything.');
      else recs.push('A balanced moisturiser with hyaluronic acid and SPF is a great starting point for combination skin.');

      if (age === '40s') recs.push('In your 40s, early collagen support matters. Look for peptides, vitamin C, and a good SPF moisturiser as a daily foundation.');
      else if (age === '50s') recs.push('In your 50s, skin can feel drier and less firm. Richer moisturisers, ceramides, and barrier-supporting ingredients are often helpful alongside consistent SPF.');
      else if (age === '60s') recs.push('For 60s+ skin, comfort and hydration are priorities. Focus on gentle routines, rich moisturisers, and high-SPF protection. Avoid harsh exfoliants.');
      else recs.push('Starting a good routine early is one of the best things you can do for your skin long-term. SPF every day is your number one tool.');

      if (concern === 'fine-lines') recs.push('For fine lines, hydration is often key. Well-moisturised skin looks smoother. Retinol (used gradually) and peptides may also help reduce their appearance over time.');
      else if (concern === 'firmness') recs.push('For firmness, peptides and retinol are two of the most researched ingredients. Results take consistency — expect weeks to months, not days.');
      else if (concern === 'pigmentation') recs.push('For pigmentation, vitamin C (in the morning) and consistent SPF are important. Niacinamide may also help even skin tone over time.');
      else if (concern === 'dryness') recs.push('For dryness, focus on layering hydration: hyaluronic acid serum, then a moisturiser rich in ceramides, glycerin, or shea butter.');

      if (retinol === 'yes') recs.push('<strong>Retinol sensitivity:</strong> Start with a low concentration (0.025–0.1%) and use it just once or twice a week to start. Always use SPF the following morning. Consider bakuchiol as a gentler plant-based alternative.');

      if (fragrance === 'yes') recs.push('<strong>Fragrance-free advice:</strong> Look for products labelled "fragrance-free" (not just "unscented"). Fragrance is one of the most common causes of skincare irritation, especially for sensitive skin.');

      result.innerHTML = `
        <div class="info-box info-box--note">
          <p class="info-box-title">Your personalised advice</p>
          <ul style="margin:0.5rem 0 0;padding-left:1.25rem">
            ${recs.map(r => `<li style="margin-bottom:0.6em;font-size:0.9rem">${r}</li>`).join('')}
          </ul>
          <p style="margin-top:1rem;font-size:0.8rem;color:var(--text-mid)">This is general educational guidance only, not medical advice. For personal skin concerns or reactions, speak to a dermatologist or qualified skincare professional.</p>
        </div>
        <div style="margin-top:1rem;display:flex;gap:0.75rem;flex-wrap:wrap">
          <a href="/wrinkle-cream-ingredients.html" class="btn btn-outline btn-sm">Explore ingredients →</a>
          <button onclick="document.getElementById('wrinkle-finder').querySelectorAll('.quiz-result').forEach(r=>r.classList.remove('visible'));document.getElementById('wrinkle-finder').querySelectorAll('.quiz-step')[0].classList.add('active');" class="btn btn-ghost btn-sm">Start again</button>
        </div>
      `;
    }

    showStep(0);
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* --- Lazy load images --- */
  if ('IntersectionObserver' in window) {
    const imgs = document.querySelectorAll('img[data-src]');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          io.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    imgs.forEach(img => io.observe(img));
  } else {
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
    });
  }

});
