// js/top-action.js
const topAction =
[
  {
    genres: [ 'Action', 'Comedy' ],
    runtime: 59,
    poster: 'https://m.media-amazon.com/images/M/MV5BMzA1ODQ1Nzk0MV5BMl5BanBnXkFtZTgwOTEwNTQ2MzE@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Navigator',
    year: '1924',
    imdb: { rating: 8.1, votes: 6094, id: 15163 },
    type: 'movie'
  },
  {
    genres: [ 'Action', 'Adventure', 'Comedy' ],
    runtime: 67,
    poster: 'https://m.media-amazon.com/images/M/MV5BYmRiMDFlYjYtOTMwYy00OGY2LWE0Y2QtYzQxOGNhZmUwNTIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
    title: 'The General',
    year: '1926',
    imdb: { rating: 8.3, votes: 47195, id: 17925 },
    type: 'movie'
  },
  {
    genres: [ 'Action', 'Adventure', 'Drama' ],
    runtime: 126,
    poster: 'https://m.media-amazon.com/images/M/MV5BOTJlZWMxYzEtMjlkMS00ODE0LThlM2ItMDI3NGQ2YjhmMzkxXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Treasure of the Sierra Madre',
    year: '1948',
    imdb: { rating: 8.3, votes: 71910, id: 40897 },
    type: 'movie'
  },
  {
    genres: [ 'Action', 'Drama', 'Western' ],
    runtime: 99,
    poster: 'https://m.media-amazon.com/images/M/MV5BYjA1MGVlMGItNzgxMC00OWY4LWI4YjEtNTNmYWIzMGUxOGQzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_SX677_AL_.jpg',
    title: 'A Fistful of Dollars',
    year: '1964',
    imdb: { rating: 8.1, votes: 126585, id: 58461 },
    type: 'movie'
  },
  {
    genres: [ 'Action', 'Drama', 'History' ],
    runtime: 133,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTg2MzMwNjk5Ml5BMl5BanBnXkFtZTgwNTQwOTkxMTE@._V1_SY1000_SX677_AL_.jpg',
    title: 'Harakiri',
    year: '1962',
    imdb: { rating: 8.7, votes: 16879, id: 56058 },
    type: 'movie'
  },
  {
    genres: [ 'Action', 'Drama', 'Thriller' ],
    runtime: 96,
    poster: 'https://m.media-amazon.com/images/M/MV5BZmY3MDlmODctYTY3Yi00NzYyLWIxNTUtYjVlZWZjMmMwZTBkXkEyXkFqcGdeQXVyMzAxNjg3MjQ@._V1_SY1000_SX677_AL_.jpg',
    title: 'Sanjuro',
    year: '1962',
    imdb: { rating: 8.2, votes: 18367, id: 56443 },
    type: 'movie'
  },
  {
    genres: [ 'Action', 'Crime', 'Drama' ],
    runtime: 174,
    poster: 'https://m.media-amazon.com/images/M/MV5BMTU2NTYyOTA3NV5BMl5BanBnXkFtZTcwMDMyNjEzMQ@@._V1_SY1000_SX677_AL_.jpg',
    title: 'Deewaar',
    year: '1975',
    imdb: { rating: 8.1, votes: 4753, id: 72860 },
    type: 'movie'
  },
  {
    genres: [ 'Action', 'Adventure', 'Western' ],
    runtime: 145,
    poster: 'https://m.media-amazon.com/images/M/MV5BNGUyYTZmOWItMDJhMi00N2IxLWIyNDMtNjUxM2ZiYmU5YWU1XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SY1000_SX677_AL_.jpg',
    title: 'The Wild Bunch',
    year: '1969',
    imdb: { rating: 8.1, votes: 59133, id: 65214 },
    type: 'movie'
  },
  {
    genres: [ 'Action', 'Adventure', 'Comedy' ],
    runtime: 162,
    poster: 'https://m.media-amazon.com/images/M/MV5BOGZiM2IwODktNTdiMC00MGU1LWEyZTYtOTk4NTkwYmJkNmI1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX677_AL_.jpg',
    title: 'Sholay',
    year: '1975',
    imdb: { rating: 8.6, votes: 22725, id: 73707 },
    type: 'movie'
  }
];

function renderTopActionList(action) {
  return `
    <h3 class="fw-bold border-bottom mb-4">Top Action Movies</h3>
    ${action.map(a => `
      <div class="col" style="width: 25%;">
        <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 m-3 shadow-sm"
             style="background-image: url('${a.poster}'); background-size: cover; background-position: center;">
          <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h6 class="pt-5 mt-5 mb-4" style="text-wrap: auto;">${a.title} (${String(a.year)})</h6>
            <ul class="d-flex list-unstyled mt-auto">
              <li class="me-auto">
                <i class="bi bi-youtube fs-2 text-danger" title="Watch trailer"></i>
              </li>
              <li class="d-flex align-items-center me-3">
                <small>IMDb: ${a.imdb?.rating ?? '-'}</small>
              </li>
              <li class="d-flex align-items-center">
                <small>${a.runtime}m</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `).join('')}
  `;
}

function attachScrollArrows(root) {
  const prev = root.querySelector('#tac-prev');
  const next = root.querySelector('#tac-next');
  const getContainer = () => root.querySelector('#top-action-carousel');
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

export function createTopAction() {
  const tmpl = document.createElement('template');
  tmpl.innerHTML = `
  <div class="position-relative">
    <button type="button"
            id="tac-prev"
            class="btn btn-light rounded-circle shadow position-absolute top-50 translate-middle-y start-0"
            aria-label="Previous"
            style="z-index: 5;">
      &#x276E;
    </button>

    <div id="top-action-carousel" class="horizontal-scrollable-row px-5">
      ${renderTopActionList(topAction)}
    </div>

    <button type="button"
            id="tac-next"
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