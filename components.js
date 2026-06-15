/* wrinkle-creams.com — Shared Nav & Footer Components */

const NAV_HTML = `
<a href="#main-content" class="skip-link">Skip to main content</a>
<header class="site-header" role="banner">
  <div class="container">
    <div class="header-inner">
      <a href="/" class="logo" aria-label="wrinkle-creams.com home">wrinkle<span>-creams</span>.com</a>
      <nav class="main-nav" aria-label="Main navigation">
        <ul>
          <li><a href="/start-here.html">Start Here</a></li>
          <li class="nav-dropdown">
            <a href="/best-wrinkle-creams.html">Wrinkle Creams</a>
            <ul class="nav-dropdown-menu">
              <li><a href="/best-wrinkle-creams.html">Best Wrinkle Creams</a></li>
              <li><a href="/retinol-wrinkle-creams.html">Retinol Creams</a></li>
              <li><a href="/eye-wrinkle-creams.html">Eye Creams</a></li>
              <li><a href="/neck-wrinkle-creams.html">Neck Creams</a></li>
              <li><a href="/wrinkle-creams-over-40.html">Over 40</a></li>
              <li><a href="/wrinkle-creams-over-50.html">Over 50</a></li>
              <li><a href="/wrinkle-creams-over-60.html">Over 60</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <a href="/wrinkle-cream-ingredients.html">Ingredients</a>
            <ul class="nav-dropdown-menu">
              <li><a href="/wrinkle-cream-ingredients.html">All Ingredients</a></li>
              <li><a href="/retinol-wrinkle-creams.html">Retinol</a></li>
              <li><a href="/fine-lines.html">Fine Lines</a></li>
              <li><a href="/forehead-wrinkles.html">Forehead Wrinkles</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <a href="/morning-skincare-routine.html">Routines</a>
            <ul class="nav-dropdown-menu">
              <li><a href="/morning-skincare-routine.html">Morning Routine</a></li>
              <li><a href="/night-skincare-routine.html">Night Routine</a></li>
              <li><a href="/wrinkle-prevention-tips.html">Prevention Tips</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <a href="/sensitive-skin-wrinkle-creams.html">Skin Types</a>
            <ul class="nav-dropdown-menu">
              <li><a href="/sensitive-skin-wrinkle-creams.html">Sensitive Skin</a></li>
              <li><a href="/dry-skin-wrinkle-creams.html">Dry Skin</a></li>
              <li><a href="/oily-combination-skin-wrinkle-creams.html">Oily / Combination</a></li>
            </ul>
          </li>
          <li><a href="/compare.html">Compare</a></li>
        </ul>
      </nav>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
    <ul>
      <li><a href="/start-here.html">Start Here</a></li>
      <li class="mobile-menu-section">Wrinkle Creams</li>
      <li><a href="/best-wrinkle-creams.html">Best Wrinkle Creams</a></li>
      <li><a href="/retinol-wrinkle-creams.html">Retinol Creams</a></li>
      <li><a href="/eye-wrinkle-creams.html">Eye Creams</a></li>
      <li><a href="/neck-wrinkle-creams.html">Neck Creams</a></li>
      <li><a href="/wrinkle-creams-over-40.html">Over 40</a></li>
      <li><a href="/wrinkle-creams-over-50.html">Over 50</a></li>
      <li><a href="/wrinkle-creams-over-60.html">Over 60</a></li>
      <li class="mobile-menu-section">Ingredients & Guides</li>
      <li><a href="/wrinkle-cream-ingredients.html">All Ingredients</a></li>
      <li><a href="/fine-lines.html">Fine Lines</a></li>
      <li><a href="/forehead-wrinkles.html">Forehead Wrinkles</a></li>
      <li><a href="/wrinkle-cream-myths.html">Myths Busted</a></li>
      <li class="mobile-menu-section">Routines & Skin Types</li>
      <li><a href="/morning-skincare-routine.html">Morning Routine</a></li>
      <li><a href="/night-skincare-routine.html">Night Routine</a></li>
      <li><a href="/wrinkle-prevention-tips.html">Prevention Tips</a></li>
      <li><a href="/sensitive-skin-wrinkle-creams.html">Sensitive Skin</a></li>
      <li><a href="/dry-skin-wrinkle-creams.html">Dry Skin</a></li>
      <li><a href="/oily-combination-skin-wrinkle-creams.html">Oily / Combination</a></li>
      <li class="mobile-menu-section">About</li>
      <li><a href="/about.html">About Us</a></li>
      <li><a href="/editorial-policy.html">Editorial Policy</a></li>
      <li><a href="/affiliate-disclosure.html">Affiliate Disclosure</a></li>
      <li><a href="/contact.html">Contact</a></li>
    </ul>
  </div>
</header>
`;

const FOOTER_HTML = `
<div class="newsletter-section">
  <div class="container">
    <span class="section-label" style="justify-content:center;display:flex;">Stay informed</span>
    <h2>Skincare advice, straight to your inbox</h2>
    <p>Honest ingredient guides, routine tips, and product updates — no spam, no scare tactics.</p>
    <form class="newsletter-form" onsubmit="return false;" aria-label="Newsletter signup">
      <input type="email" placeholder="Your email address" aria-label="Email address" autocomplete="email">
      <button type="submit" class="btn btn-primary">Subscribe</button>
    </form>
    <p class="newsletter-note"><!-- PLACEHOLDER: Connect to your email provider (Mailchimp, ConvertKit, etc.) --><br>We respect your privacy. Unsubscribe at any time.</p>
  </div>
</div>
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo">wrinkle<span style="color:var(--rose)">-creams</span>.com</a>
        <p style="margin-top:0.75rem">Honest, ingredient-led wrinkle cream advice for women who want healthier-looking skin — without the hype.</p>
        <p style="margin-top:0.75rem;font-size:0.78rem;color:rgba(255,255,255,0.4)">Not medical advice. Always consult a qualified professional for skin health concerns.</p>
      </div>
      <div class="footer-col">
        <h5>Guides</h5>
        <ul>
          <li><a href="/start-here.html">Start Here</a></li>
          <li><a href="/best-wrinkle-creams.html">Best Wrinkle Creams</a></li>
          <li><a href="/wrinkle-cream-ingredients.html">Ingredients Guide</a></li>
          <li><a href="/wrinkle-cream-myths.html">Myths Busted</a></li>
          <li><a href="/wrinkle-prevention-tips.html">Prevention Tips</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>By Concern</h5>
        <ul>
          <li><a href="/fine-lines.html">Fine Lines</a></li>
          <li><a href="/eye-wrinkle-creams.html">Eye Wrinkles</a></li>
          <li><a href="/neck-wrinkle-creams.html">Neck Wrinkles</a></li>
          <li><a href="/forehead-wrinkles.html">Forehead Lines</a></li>
          <li><a href="/retinol-wrinkle-creams.html">Retinol Creams</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>About</h5>
        <ul>
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/editorial-policy.html">Editorial Policy</a></li>
          <li><a href="/affiliate-disclosure.html">Affiliate Disclosure</a></li>
          <li><a href="/contact.html">Contact</a></li>
          <li><a href="/compare.html">Compare Products</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2024 wrinkle-creams.com. All rights reserved.</span>
      <span>
        <a href="/affiliate-disclosure.html">Affiliate Disclosure</a> ·
        <a href="/editorial-policy.html">Editorial Policy</a> ·
        <a href="/about.html">About</a>
      </span>
    </div>
  </div>
</footer>
`;

function injectComponents() {
  const navEl = document.getElementById('site-nav');
  const footerEl = document.getElementById('site-footer');
  if (navEl) navEl.outerHTML = NAV_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Mark active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.main-nav a, .mobile-menu a').forEach(a => {
    if (a.getAttribute('href') === path || a.getAttribute('href') === path.replace('.html','')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  // Mobile menu toggle
  document.addEventListener('click', e => {
    const toggle = e.target.closest('.nav-toggle');
    const menu = document.getElementById('mobile-menu');
    if (toggle && menu) {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    }
  });
}

document.addEventListener('DOMContentLoaded', injectComponents);
