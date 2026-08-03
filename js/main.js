/* ===== Data ===== */
const puppies = [
  {
    id: 'astro',
    name: 'Astro',
    image: 'images/astro.jpg',
    gallery: ['images/astro.jpg', 'images/star.jpg', 'images/sunny.jpg', 'images/astro.jpg', 'images/star.jpg', 'images/sunny.jpg'],
    breed: 'Toy Poodle / Shih Tzu Mix',
    age: '10 Weeks',
    gender: 'Male',
    color: 'Cafe Au Lait / Chocolate',
    status: 'Available',
    readyDate: 'Ready to Go Home',
    weight: '3–5 lbs (estimated adult)',
    personality: 'Curious and gentle, Astro has a calm confidence that draws everyone in. He loves quiet cuddle sessions as much as playful exploration, and his striking light eyes reflect a thoughtful, affectionate spirit.',
    activities: ['Cuddle time on soft blankets', 'Gentle play with littermates', 'Pee-pad and crate training', 'Supervised yard playtime'],
    health: [
      'Veterinary wellness check completed',
      'Age-appropriate vaccinations administered',
      'Dewormed per veterinarian schedule',
      'Health certificate provided at pickup',
    ],
    vaccinations: [
      'DHPP — 1st dose (6 weeks)',
      'DHPP — 2nd dose (9 weeks)',
      'Next due: 12 weeks',
    ],
    parents: { mother: 'Luna', father: 'Max' },
  },
  {
    id: 'sunny',
    name: 'Sunny',
    image: 'images/sunny.jpg',
    gallery: ['images/sunny.jpg', 'images/astro.jpg', 'images/star.jpg', 'images/sunny.jpg', 'images/astro.jpg', 'images/star.jpg'],
    breed: 'Toy Poodle / Shih Tzu Mix',
    age: '10 Weeks',
    gender: 'Male',
    color: 'Cafe Au Lait / Tan',
    status: 'Available',
    readyDate: 'Ready to Go Home',
    weight: '3–5 lbs (estimated adult)',
    personality: 'Warm and bright, Sunny carries a gentle optimism in everything he does. His caramel coat and honey-toned muzzle match a disposition that is equal parts playful and deeply affectionate.',
    activities: ['Sunbathing by the window', 'Following family members around', 'Pee-pad and crate training', 'Playing in our huge yard'],
    health: [
      'Veterinary wellness check completed',
      'Age-appropriate vaccinations administered',
      'Dewormed per veterinarian schedule',
      'Health certificate provided at pickup',
    ],
    vaccinations: [
      'DHPP — 1st dose (6 weeks)',
      'DHPP — 2nd dose (9 weeks)',
      'Next due: 12 weeks',
    ],
    parents: { mother: 'Luna', father: 'Max' },
  },
  {
    id: 'star',
    name: 'Star',
    image: 'images/star.jpg',
    gallery: ['images/star.jpg', 'images/sunny.jpg', 'images/astro.jpg', 'images/star.jpg', 'images/sunny.jpg', 'images/astro.jpg'],
    breed: 'Toy Poodle / Shih Tzu Mix',
    age: '10 Weeks',
    gender: 'Female',
    color: 'Cafe Au Lait / Apricot',
    status: 'Available',
    readyDate: 'Ready to Go Home',
    weight: '3–5 lbs (estimated adult)',
    personality: 'Star is soft-spoken and observant, with soulful dark eyes and an apricot coat that catches the light beautifully. She prefers thoughtful interaction and forms deep bonds with those she trusts.',
    activities: ['Quiet observation from a cozy spot', 'Gentle play with littermates', 'Pee-pad and crate training', 'House-breaking routines'],
    health: [
      'Veterinary wellness check completed',
      'Age-appropriate vaccinations administered',
      'Dewormed per veterinarian schedule',
      'Health certificate provided at pickup',
    ],
    vaccinations: [
      'DHPP — 1st dose (6 weeks)',
      'DHPP — 2nd dose (9 weeks)',
      'Next due: 12 weeks',
    ],
    parents: { mother: 'Luna', father: 'Max' },
  },
];

const parents = [
  {
    role: 'Mother',
    name: 'Luna',
    breed: 'AKC Certified Full Toy Poodle',
    temperament: 'Calm, intelligent, and deeply affectionate',
    weight: '6 lbs',
    health: 'Annual wellness exams, AKC registered, current on all vaccinations',
    personality: 'Luna is our AKC Certified Full Toy Poodle and the heart of our home — graceful, attentive, and wonderfully maternal. Her gentle nature and impeccable temperament are passed on to every puppy she raises.',
  },
  {
    role: 'Father',
    name: 'Max',
    breed: 'Toy Poodle Mix (~25% Shih Tzu)',
    temperament: 'Playful, confident, and people-loving',
    weight: '7 lbs',
    health: 'Annual wellness exams, current on all vaccinations',
    personality: 'Max brings warmth and playful energy to our family. His friendly disposition and hypoallergenic coat make him a beloved companion and an exceptional sire to our Cafe Au Lait litters.',
  },
];

const homeAreas = [
  {
    title: 'Inside Our Home',
    desc: 'Our puppies live inside our home with both parents — never in a kennel, garage, or outdoor facility. They are cared for every day, held and handled by our family, and grow accustomed to the sounds and rhythms of a real household from birth.',
  },
  {
    title: 'Sleep & Comfort',
    desc: 'Each puppy rests in a warm, quiet area with soft bedding and familiar blankets. They sleep near us at night, building the sense of security that helps them transition smoothly into their forever homes.',
  },
  {
    title: 'Training & Routine',
    desc: 'Puppies begin pee-pad training early and are introduced to crate training and house-breaking before going home. By the time they leave us, they have a solid foundation that makes the adjustment easier for new families.',
  },
  {
    title: 'Our Huge Yard',
    desc: 'When weather allows, puppies love playing in our large yard — running on grass, exploring safely under supervision, and enjoying fresh air on Connecticut\'s East Shoreline. Outdoor play is a cherished part of their daily routine.',
  },
  {
    title: 'Selective Placements',
    desc: 'We are very intentional about who our puppies go home with. Every family is screened carefully to ensure a loving, responsible match. Our puppies deserve the best — and we take that responsibility seriously.',
  },
];

const features = [
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    title: 'Raised Inside Our Home',
    desc: 'With both parents, cared for every day — never isolated in a kennel. A true family environment from day one.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    title: 'Training Started Early',
    desc: 'Pee-pad trained, crate trained, and house-broken before your puppy comes home — a head start for your family.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    title: 'Vet-Checked & Dewormed',
    desc: 'Every puppy receives a wellness check, age-appropriate shots, and deworming before going to their new home.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M6 20v-1a6 6 0 0112 0v1"/></svg>',
    title: 'Hypoallergenic — No Shedding',
    desc: 'Hair, not fur. Our Toy Poodle and Shih Tzu mix puppies are hypoallergenic with virtually no shedding.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    title: 'Unique Cafe Au Lait Coloring',
    desc: 'Distinctive warm tones that set our litters apart — beautiful, rare Cafe Au Lait coats in every puppy.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    title: 'East Shoreline, CT',
    desc: 'Conveniently near the RI border and within reach of MA, NY, and NH. In-person pickup only — we never ship alone.',
  },
];

const galleryItems = [
  { image: 'images/astro.jpg', caption: 'Astro' },
  { image: 'images/sunny.jpg', caption: 'Sunny' },
  { image: 'images/star.jpg', caption: 'Star' },
  { image: 'images/star.jpg', caption: 'Quiet Moments' },
  { image: 'images/astro.jpg', caption: 'Playtime' },
  { image: 'images/sunny.jpg', caption: 'Afternoon Rest' },
  { image: 'images/astro.jpg', caption: 'At Home' },
  { image: 'images/star.jpg', caption: 'Cozy Blankets' },
  { image: 'images/sunny.jpg', caption: 'Family Life' },
];

const faqs = [
  {
    q: 'How do I reserve a puppy?',
    a: 'Text or call Anne at (860) 514-3315, or email clerzkennel@icloud.com. We welcome serious inquiries and will talk with you about your family, then arrange an in-person visit. We are selective about placements — each puppy is matched carefully with the right home.',
  },
  {
    q: 'Do you ship puppies?',
    a: 'No. We do not ship our puppies alone under any circumstances. All adoptions require an in-person meeting and pickup at our home on Connecticut\'s East Shoreline. We are close to the Rhode Island border and within reach of Massachusetts, New York, and New Hampshire.',
  },
  {
    q: 'Are boys and girls available?',
    a: 'Yes — we typically have both boys and girls available in each litter. Contact us for current availability and we\'ll help you find the right match for your family.',
  },
  {
    q: 'What training do puppies receive?',
    a: 'Our puppies begin pee-pad training early and are crate trained and house-broken before going home. They are accustomed to everyday household life and handled daily by our family, giving them a strong foundation from day one.',
  },
  {
    q: 'When can they go home?',
    a: 'Puppies are ready to go home once they have received their wellness check, age-appropriate vaccinations, deworming, and early socialization in our home. Contact us for current availability — many of our puppies are ready now.',
  },
  {
    q: 'What comes with my puppy?',
    a: 'Every puppy goes home with a veterinary wellness check, vaccination record, deworming documentation, and ongoing guidance from our family. We want every transition to be as smooth as possible.',
  },
  {
    q: 'Are your puppies hypoallergenic?',
    a: 'Yes. Our Toy Poodle and Shih Tzu mix puppies have hair rather than fur, which means virtually no shedding. They are hypoallergenic and well-suited for many allergy-sensitive households.',
  },
  {
    q: 'What colors are available?',
    a: 'Our litters feature a unique Cafe Au Lait coloring — warm, distinctive tones that are rare and beautiful. Contact us to see current puppies and learn more about available colors.',
  },
];

/* ===== DOM ===== */
const header = document.getElementById('header');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const puppiesGrid = document.getElementById('puppiesGrid');
const parentsGrid = document.getElementById('parentsGrid');
const homeGrid = document.getElementById('homeGrid');
const featuresGrid = document.getElementById('featuresGrid');
const galleryGrid = document.getElementById('galleryGrid');
const faqList = document.getElementById('faqList');
const puppyProfile = document.getElementById('puppyProfile');
const profileBackdrop = document.getElementById('profileBackdrop');
const profileClose = document.getElementById('profileClose');
const profileBody = document.getElementById('profileBody');
const yearEl = document.getElementById('year');

/* ===== Status Class ===== */
function statusClass(status) {
  const s = status.toLowerCase();
  if (s === 'reserved') return 'puppy-card__status--reserved';
  if (s === 'adopted') return 'puppy-card__status--adopted';
  return '';
}

/* ===== Render Functions ===== */
function renderPuppies() {
  puppiesGrid.innerHTML = puppies.map((p, i) => `
    <article class="puppy-card reveal" data-id="${p.id}" style="transition-delay:${i * 0.12}s">
      <div class="puppy-card__img-wrap">
        <img class="puppy-card__img" src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="puppy-card__status ${statusClass(p.status)}">${p.status}</span>
      </div>
      <div class="puppy-card__body">
        <h3 class="puppy-card__name">${p.name}</h3>
        <dl class="puppy-card__meta">
          <div><dt>Age</dt><dd>${p.age}</dd></div>
          <div><dt>Gender</dt><dd>${p.gender}</dd></div>
          <div><dt>Color</dt><dd>${p.color}</dd></div>
          <div><dt>Status</dt><dd>${p.status}</dd></div>
        </dl>
        <span class="puppy-card__cta">View Profile →</span>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.puppy-card').forEach(card => {
    card.addEventListener('click', () => openProfile(card.dataset.id));
  });
}

function renderParents() {
  parentsGrid.innerHTML = parents.map((p, i) => `
    <article class="parent-card parent-card--text reveal" style="transition-delay:${i * 0.15}s">
      <div class="parent-card__body">
        <p class="parent-card__role">${p.role}</p>
        <h3 class="parent-card__name">${p.name}</h3>
        <p class="parent-card__breed">${p.breed}</p>
        <dl class="parent-card__details">
          <div class="parent-card__detail">
            <dt>Temperament</dt><dd>${p.temperament}</dd>
          </div>
          <div class="parent-card__detail">
            <dt>Weight</dt><dd>${p.weight}</dd>
          </div>
          <div class="parent-card__detail">
            <dt>Health</dt><dd>${p.health}</dd>
          </div>
          <div class="parent-card__detail">
            <dt>Personality</dt><dd>${p.personality}</dd>
          </div>
        </dl>
      </div>
    </article>
  `).join('');
}

function renderHome() {
  homeGrid.innerHTML = homeAreas.map((h, i) => `
    <article class="home-text-card reveal" style="transition-delay:${i * 0.08}s">
      <h3 class="home-text-card__title">${h.title}</h3>
      <p class="home-text-card__desc">${h.desc}</p>
    </article>
  `).join('');
}

function renderFeatures() {
  featuresGrid.innerHTML = features.map((f, i) => `
    <div class="feature-card reveal" style="transition-delay:${i * 0.08}s">
      <div class="feature-card__icon">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  `).join('');
}

function renderGallery() {
  galleryGrid.innerHTML = galleryItems.map(g => `
    <figure class="gallery__item">
      <img src="${g.image}" alt="${g.caption}" loading="lazy" />
      <figcaption class="gallery__item__cap">${g.caption}</figcaption>
    </figure>
  `).join('');
}

function renderFAQ() {
  faqList.innerHTML = faqs.map((f, i) => `
    <div class="faq__item reveal" style="transition-delay:${i * 0.06}s">
      <button class="faq__question" aria-expanded="false">
        ${f.q}
        <svg class="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12h14"/></svg>
      </button>
      <div class="faq__answer"><p>${f.a}</p></div>
    </div>
  `).join('');

  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('faq__item--open');

      document.querySelectorAll('.faq__item--open').forEach(el => {
        el.classList.remove('faq__item--open');
        el.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('faq__item--open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ===== Puppy Profile ===== */
function openProfile(id) {
  const p = puppies.find(x => x.id === id);
  if (!p) return;

  const mother = parents.find(x => x.name === p.parents.mother);
  const father = parents.find(x => x.name === p.parents.father);

  profileBody.innerHTML = `
    <div class="profile__hero">
      <img class="profile__hero-img" src="${p.image}" alt="${p.name}" />
      <div class="profile__hero-info">
        <span class="profile__status">${p.status}</span>
        <h2 class="profile__name" id="profileName">${p.name}</h2>
        <p class="profile__breed">${p.breed}</p>
        <p class="profile__personality">${p.personality}</p>
        <dl class="profile__stats">
          <div class="profile__stat"><dt>Age</dt><dd>${p.age}</dd></div>
          <div class="profile__stat"><dt>Gender</dt><dd>${p.gender}</dd></div>
          <div class="profile__stat"><dt>Color</dt><dd>${p.color}</dd></div>
          <div class="profile__stat"><dt>Availability</dt><dd>${p.readyDate}</dd></div>
          <div class="profile__stat"><dt>Est. Adult Weight</dt><dd>${p.weight}</dd></div>
          <div class="profile__stat"><dt>Status</dt><dd>${p.status}</dd></div>
        </dl>
      </div>
    </div>
    <div class="profile__sections">
      <div class="profile__section">
        <h3>Photo Gallery</h3>
        <div class="profile__gallery">
          ${p.gallery.map(img => `<img src="${img}" alt="${p.name}" loading="lazy" />`).join('')}
        </div>
      </div>
      <div class="profile__section">
        <h3>Favorite Activities</h3>
        <ul class="profile__health-list">
          ${p.activities.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
      <div class="profile__section">
        <h3>Health Information</h3>
        <ul class="profile__health-list">
          ${p.health.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
      <div class="profile__section">
        <h3>Vaccination Schedule</h3>
        <ul class="profile__health-list">
          ${p.vaccinations.map(v => `<li>${v}</li>`).join('')}
        </ul>
      </div>
      <div class="profile__section">
        <h3>Parents</h3>
        <div class="profile__parents profile__parents--text">
          <div class="profile__parent">
            <h4>${mother.name}</h4>
            <p>${mother.breed}</p>
          </div>
          <div class="profile__parent">
            <h4>${father.name}</h4>
            <p>${father.breed}</p>
          </div>
        </div>
      </div>
      <div class="profile__inquire">
        <a href="tel:+18605143315" class="btn btn--full" id="profileInquireBtn">Call About ${p.name}</a>
      </div>
    </div>
  `;

  puppyProfile.classList.add('profile--open');
  puppyProfile.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProfile() {
  puppyProfile.classList.remove('profile--open');
  puppyProfile.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

profileClose.addEventListener('click', closeProfile);
profileBackdrop.addEventListener('click', closeProfile);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProfile(); });

/* ===== Header ===== */
window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 80);
});

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('nav__menu--open');
  navToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('nav__menu--open'));
});

/* ===== Scroll Reveal ===== */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function observeReveals() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ===== Init ===== */
yearEl.textContent = new Date().getFullYear();
renderPuppies();
renderParents();
renderHome();
renderFeatures();
renderGallery();
renderFAQ();
observeReveals();

document.querySelectorAll('.section__header.reveal').forEach(el => revealObserver.observe(el));
