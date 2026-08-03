/* ===== Puppy Data ===== */
const puppies = [
  {
    id: 'astro',
    name: 'Astro',
    image: 'images/astro.jpg',
    breed: 'Toy Poodle / Shih Tzu Mix',
    color: 'Chocolate Brown',
    description: 'Astro is a fluffy chocolate-brown puppy with a sweet white patch on his chin and chest. His striking light eyes and curious personality make him an instant charmer.',
    traits: ['Hypoallergenic', 'Playful', 'Well-Socialized'],
    status: 'Available',
  },
  {
    id: 'sunny',
    name: 'Sunny',
    image: 'images/sunny.jpg',
    breed: 'Toy Poodle / Shih Tzu Mix',
    color: 'Light Brown & Tan',
    description: 'Sunny lives up to his name with a warm, caramel-colored coat and a bright, cheerful disposition. His honey-toned muzzle and gentle nature make him a perfect family companion.',
    traits: ['Affectionate', 'Hypoallergenic', 'Family-Friendly'],
    status: 'Available',
  },
  {
    id: 'star',
    name: 'Star',
    image: 'images/star.jpg',
    breed: 'Toy Poodle / Shih Tzu Mix',
    color: 'Apricot / Light Brown',
    description: 'Star shines with her soft apricot coat and soulful dark eyes. Raised on a cozy quilt at home, she embodies the loving, family-raised spirit of ClerZ Kennel.',
    traits: ['Gentle', 'Intelligent', 'Low-Shedding'],
    status: 'Available',
  },
];

const services = [
  { icon: '🐩', title: 'Toy Poodle Puppies', desc: 'Pure Toy Poodle puppies from our AKC-certified mother.' },
  { icon: '🌟', title: 'Poodle × Shih Tzu Mixes', desc: 'Adorable mixed-breed companions with the best of both breeds.' },
  { icon: '🩺', title: 'Health-Checked Puppies', desc: 'Full vet exams, vaccinations, and deworming before pickup.' },
  { icon: '🏡', title: 'Family-Raised', desc: 'Raised in our home with daily love, attention, and socialization.' },
  { icon: '📚', title: 'New Owner Guidance', desc: 'Support and advice to help your puppy transition smoothly.' },
  { icon: '🤝', title: 'In-Person Pickup', desc: 'Meet us in Connecticut — we never ship puppies alone.' },
];

/* ===== DOM Elements ===== */
const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const puppiesGrid = document.getElementById('puppiesGrid');
const servicesGrid = document.getElementById('servicesGrid');
const puppyModal = document.getElementById('puppyModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');
const submitBtn = document.getElementById('submitBtn');
const yearEl = document.getElementById('year');

/* ===== Render Puppies ===== */
function renderPuppies() {
  puppiesGrid.innerHTML = puppies.map((p, i) => `
    <article class="puppy-card fade-in" data-id="${p.id}" style="transition-delay:${i * 0.1}s">
      <div class="puppy-card__img-wrap">
        <img class="puppy-card__img" src="${p.image}" alt="${p.name} — ${p.breed}" loading="lazy" />
        <span class="puppy-card__badge">${p.status}</span>
      </div>
      <div class="puppy-card__body">
        <h3 class="puppy-card__name">${p.name}</h3>
        <p class="puppy-card__breed">${p.breed} · ${p.color}</p>
        <p class="puppy-card__desc">${p.description}</p>
        <div class="puppy-card__traits">
          ${p.traits.map(t => `<span class="trait-tag">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.puppy-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
  });
}

/* ===== Render Services ===== */
function renderServices() {
  servicesGrid.innerHTML = services.map((s, i) => `
    <div class="service-card fade-in" style="transition-delay:${i * 0.08}s">
      <div class="service-card__icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

/* ===== Modal ===== */
function openModal(id) {
  const puppy = puppies.find(p => p.id === id);
  if (!puppy) return;

  modalBody.innerHTML = `
    <img class="modal__img" src="${puppy.image}" alt="${puppy.name}" />
    <div class="modal__info">
      <h2 id="modalTitle">${puppy.name}</h2>
      <p><strong>${puppy.breed}</strong> · ${puppy.color}</p>
      <p>${puppy.description}</p>
      <div class="puppy-card__traits" style="margin:16px 0 24px">
        ${puppy.traits.map(t => `<span class="trait-tag">${t}</span>`).join('')}
      </div>
      <a href="#contact" class="btn btn--primary" id="modalContactBtn">Inquire About ${puppy.name}</a>
    </div>
  `;

  puppyModal.classList.add('modal--open');
  puppyModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalContactBtn').addEventListener('click', () => {
    closeModal();
    document.getElementById('puppy').value = puppy.name;
  });
}

function closeModal() {
  puppyModal.classList.remove('modal--open');
  puppyModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ===== Header Scroll ===== */
window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 60);
});

/* ===== Mobile Nav ===== */
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav__menu--open');
  navToggle.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('nav__menu--open'));
});

/* ===== Scroll Animations ===== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeElements() {
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ===== Form Validation & Submit ===== */
function validateForm(data) {
  let valid = true;

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  if (!data.name.trim()) {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }
  if (!data.message.trim()) {
    messageError.textContent = 'Please tell us a bit about what you\'re looking for.';
    valid = false;
  }

  return valid;
}

contactForm.addEventListener('submit', async e => {
  e.preventDefault();
  formSuccess.hidden = true;
  formError.hidden = true;

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    puppy: document.getElementById('puppy').value,
    message: document.getElementById('message').value,
  };

  if (!validateForm(data)) return;

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const res = await fetch('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error('Server error');

    formSuccess.hidden = false;
    contactForm.reset();
  } catch {
    formError.hidden = false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Inquiry';
  }
});

/* ===== Init ===== */
yearEl.textContent = new Date().getFullYear();
renderPuppies();
renderServices();
observeElements();
