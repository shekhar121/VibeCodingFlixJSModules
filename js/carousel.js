// carousel.js
const slides = [
    {
      src: 'https://www.youtube.com/embed/fsQgc9pCyDU?si=OmaMONeKpfVRLzwN&amp;controls=0&amp;autoplay=1&amp;mute=1',
      title: 'Mission: Impossible – The Final Reckoning ',
      description: 'Official Trailer (2025 Movie) - Tom Cruise'
    },
    {
      src: 'https://www.youtube.com/embed/az8M5Mai0X4?si=cS_qxVBDAbMIfXqN&amp;controls=0&amp;autoplay=1&amp;mute=1',
      title: 'ANACONDA',
      description: 'Official Trailer (HD)'
    },
    {
      src: 'https://www.youtube.com/embed/fsQgc9pCyDU?si=OmaMONeKpfVRLzwN&amp;controls=0&amp;autoplay=1&amp;mute=1',
      title: 'Avatar: Fire and Ash.',
      description: 'Official Trailer (HD)'
    }
  ];
  function renderCarousel(root, items) {
    const carousel = root.querySelector('#myCarousel');
    if (!carousel) return;

    const indicators = carousel.querySelector('.carousel-indicators');
    const inner = carousel.querySelector('.carousel-inner');

    indicators.innerHTML = items.map((_, i) => `
      <button type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="${i}"
              ${i === 0 ? 'class="active" aria-current="true"' : ''}
              aria-label="Slide ${i + 1}"></button>
    `).join('');

    inner.innerHTML = items.map((s, i) => `
      <div class="carousel-item${i === 0 ? ' active' : ''}">
        <div class="ratio ratio-16x9">
          <iframe
            src="${s.src}"
            title="${s.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
        <div class="container">
          <div class="carousel-caption">
            <h1>${s.title}</h1>
            <p>${s.description}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  export function createCarousel() {
    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <div class="carousel-container">
      <div id="myCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
        <div class="carousel-indicators"></div>
        <div class="carousel-inner"></div>
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>`;
    const root = tmpl.content.firstElementChild;
    renderCarousel(root, slides); // build slides now, before inserting into DOM
    return root;
  }