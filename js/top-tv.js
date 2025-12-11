// js/top-tv.js
const topTV =
[
  {
    genres: [ 'Drama' ],
    runtime: 572,
    poster: 'https://m.media-amazon.com/images/M/MV5BZWIzNDIzMTYtN2RiZS00NjA1LWFjNzMtOWQ0MDYxNWI1YTJiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Decalogue',
    year: '1989',
    imdb: { rating: 9.2, votes: 10958, id: 92337 },
    type: 'series'
  },
  {
    genres: [ 'Documentary', 'History', 'War' ],
    runtime: 680,
    poster: 'https://m.media-amazon.com/images/M/MV5BZDc1NzI2MGEtZDA2Yy00ZWExLTgwYmItNjU3N2QyYmM0MzYwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Civil War',
    year: '1990',
    imdb: { rating: 9.4, votes: 4625, id: 98769 },
    type: 'series'
  },
  {
    genres: [ 'Documentary', 'History', 'War' ],
    runtime: 680,
    poster: 'https://m.media-amazon.com/images/M/MV5BZDc1NzI2MGEtZDA2Yy00ZWExLTgwYmItNjU3N2QyYmM0MzYwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Civil War',
    year: '1990',
    imdb: { rating: 9.4, votes: 4624, id: 98769 },
    type: 'series'
  },
  {
    genres: [ 'Drama', 'Romance' ],
    runtime: 327,
    poster: 'https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_SX677_AL_.jpg',
    title: 'Pride and Prejudice',
    year: '1995',
    imdb: { rating: 9.1, votes: 45725, id: 112130 },
    type: 'series'
  },
  {
    genres: [ 'Action', 'Drama', 'History' ],
    runtime: 705,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_SY1000_SX677_AL_.jpg',
    title: 'Band of Brothers',
    year: '2001',
    imdb: { rating: 9.6, votes: 183802, id: 185906 },
    type: 'series'
  },
  {
    genres: [ 'Documentary' ],
    runtime: 50,
    poster: 'https://m.media-amazon.com/images/M/MV5BZGFhMGNmNDktYjY0Mi00YWE1LTlmMDQtZTBiNmU4NGYzZjZkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Blue Planet',
    year: '2001',
    imdb: { rating: 9.2, votes: 7093, id: 296310 },
    type: 'series'
  },
  {
    genres: [ 'Documentary', 'History', 'Sport' ],
    runtime: 1140,
    poster: 'https://m.media-amazon.com/images/M/MV5BN2FmNjM0NzMtYjZjZi00NzQ0LWE5MjMtOWEzOGNmYjZkNmI1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_SX677_AL_.jpg',
    title: 'Baseball',
    year: '1994',
    imdb: { rating: 9.1, votes: 2460, id: 108700 },
    type: 'series'
  },
  {
    genres: [ 'Documentary' ],
    runtime: 60,
    poster: 'https://m.media-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_SY1000_SX677_AL_.jpg',
    title: 'Planet Earth',
    year: '2006',
    imdb: { rating: 9.5, votes: 82896, id: 795176 },
    type: 'series'
  },
  {
    genres: [ 'Documentary' ],
    runtime: 60,
    poster: 'https://m.media-amazon.com/images/M/MV5BOGM5YWU2N2QtYjVhZi00MzYyLTk0ODctYmVlNDZlMjU5N2Q5XkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_SY1000_SX677_AL_.jpg',
    title: 'Frozen Planet',
    year: '2011',
    imdb: { rating: 9.2, votes: 5903, id: 2092588 },
    type: 'series'
  },
  {
    genres: [ 'Documentary' ],
    runtime: 60,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTY4MGQyNjgtMzdmZS00MjQ5LWIyMzItYjYyZmQzNjVhYjMyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg',
    title: 'Cosmos',
    year: '1980',
    imdb: { rating: 9.3, votes: 17174, id: 81846 },
    type: 'series'
  },
  {
    genres: [ 'Documentary', 'History' ],
    runtime: 60,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTIxMDg2MDk3OF5BMl5BanBnXkFtZTcwMzcxMTIzMQ@@._V1_SY1000_SX677_AL_.jpg',
    title: 'Hollywood',
    year: '1980',
    imdb: { rating: 9.1, votes: 511, id: 80230 },
    type: 'series'
  }
];

function renderTopTVList(items) {
  return `
    <h3 class="fw-bold border-bottom mb-4">Top TV Shows</h3>
    ${items.map(t => `
      <div class="col" style="width: 25%;">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 m-3 shadow-sm"
             style="background-image: url('${t.poster}'); background-size: cover; background-position: center;">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h6 class="pt-5 mt-5 mb-4" style="text-wrap: auto;">${t.title} (${t.year})</h6>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <i class="bi bi-youtube fs-2 text-danger" title="Watch trailer"></i>
              </li>
              <li class="d-flex align-items-center me-3">
                <small>IMDb: ${t.imdb?.rating ?? '-'}</small>
              </li>
              <li class="d-flex align-items-center">
                <small>S: ${t.seasons}</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `).join('')}
  `;
}

function attachScrollArrows(root) {
  const prev = root.querySelector('#ttc-prev');
  const next = root.querySelector('#ttc-next');
  const getContainer = () => root.querySelector('#top-tv-carousel');
  const step = () => {
    const c = getContainer();
    return c ? Math.round(c.clientWidth * 0.8) : 0;
  };

  prev?.addEventListener('click', () => {
    const c = getContainer();
    if (c) c.scrollBy({ left: -step(), behavior: 'smooth' });
  });

  next?.addEventListener('click', () => {
    const c = getContainer();
    if (c) c.scrollBy({ left: step(), behavior: 'smooth' });
  });
}

export function createTopTV() {
  const tmpl = document.createElement('template');
  tmpl.innerHTML = `
  <div class="position-relative">
    <button type="button"
            id="ttc-prev"
            class="btn btn-light rounded-circle shadow position-absolute top-50 translate-middle-y start-0"
            aria-label="Previous"
            style="z-index: 5;">
      &#x276E;
    </button>

    <div id="top-tv-carousel" class="horizontal-scrollable-row px-5">
      ${renderTopTVList(topTV)}
    </div>

    <button type="button"
            id="ttc-next"
            class="btn btn-light rounded-circle shadow position-absolute top-50 translate-middle-y end-0"
            aria-label="Next"
            style="z-index: 5;">
      &#x276F;
    </button>
  </div>`;
  const root = tmpl.content.firstElementChild;
  attachScrollArrows(root);
  return root;
}