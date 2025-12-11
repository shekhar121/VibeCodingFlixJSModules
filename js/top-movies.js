// top-movies.js
const topMovies =
  [
    {
      imdb: { rating: 9.1, votes: 700857, id: 71562 },
      year: '1974',
      title: 'The Godfather: Part II',
      poster: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
      runtime: 200
    },
    {
      imdb: { rating: 9.2, votes: 1038358, id: 68646 },
      year: '1972',
      title: 'The Godfather',
      poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_SX677_AL_.jpg',
      runtime: 175
    },
    {
      imdb: { rating: 9.3, votes: 1521105, id: 111161 },
      year: '1994',
      title: 'The Shawshank Redemption',
      poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX677_AL_.jpg',
      runtime: 142
    },
    {
      runtime: 572,
      poster: 'https://m.media-amazon.com/images/M/MV5BZWIzNDIzMTYtN2RiZS00NjA1LWFjNzMtOWQ0MDYxNWI1YTJiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_SX677_AL_.jpg',
      title: 'The Decalogue',
      year: '1989',
      imdb: { rating: 9.2, votes: 10958, id: 92337 }
    },
    {
      runtime: 60,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTY4MGQyNjgtMzdmZS00MjQ5LWIyMzItYjYyZmQzNjVhYjMyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg',
      title: 'Cosmos',
      year: '1980',
      imdb: { rating: 9.3, votes: 17174, id: 81846 }
    },
    {
      runtime: 60,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTIxMDg2MDk3OF5BMl5BanBnXkFtZTcwMzcxMTIzMQ@@._V1_SY1000_SX677_AL_.jpg',
      title: 'Hollywood',
      year: '1980',
      imdb: { rating: 9.1, votes: 511, id: 80230 }
    },
    {
      runtime: 680,
      poster: 'https://m.media-amazon.com/images/M/MV5BZDc1NzI2MGEtZDA2Yy00ZWExLTgwYmItNjU3N2QyYmM0MzYwXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg',
      title: 'The Civil War',
      year: '1990',
      imdb: { rating: 9.4, votes: 4624, id: 98769 }
    },
    {
      runtime: 1140,
      poster: 'https://m.media-amazon.com/images/M/MV5BN2FmNjM0NzMtYjZjZi00NzQ0LWE5MjMtOWEzOGNmYjZkNmI1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_SX677_AL_.jpg',
      title: 'Baseball',
      year: '1994',
      imdb: { rating: 9.1, votes: 2460, id: 108700 }
    },
    {
      runtime: 90,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTY3MjI0MjA1OF5BMl5BanBnXkFtZTgwMTI3Nzc2MjE@._V1_SY1000_SX677_AL_.jpg',
      title: 'The Real Miyagi',
      year: '2015',
      imdb: { rating: 9.3, votes: 41, id: 2313306 }
    },
    {
      runtime: 78,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTU4MTcwMzU5Ml5BMl5BanBnXkFtZTgwOTQwMzM2NDE@._V1_SY1000_SX677_AL_.jpg',
      title: 'A Brave Heart: The Lizzie Velasquez Story',
      year: '2015',
      imdb: { rating: 9.4, votes: 45, id: 3735302 }
    },
    {
      runtime: 327,
      poster: 'https://m.media-amazon.com/images/M/MV5BMDM0MjFlOGYtNTg2ZC00MmRkLTg5OTQtM2U5ZjUyYTgxZThiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_SX677_AL_.jpg',
      title: 'Pride and Prejudice',
      year: '1995',
      imdb: { rating: 9.1, votes: 45725, id: 112130 }
    },
    {
      runtime: 705,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTI3ODc2ODc0M15BMl5BanBnXkFtZTYwMjgzNjc3._V1_SY1000_SX677_AL_.jpg',
      title: 'Band of Brothers',
      year: '2001',
      imdb: { rating: 9.6, votes: 183802, id: 185906 }
    },
    {
      runtime: 50,
      poster: 'https://m.media-amazon.com/images/M/MV5BZGFhMGNmNDktYjY0Mi00YWE1LTlmMDQtZTBiNmU4NGYzZjZkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_SX677_AL_.jpg',
      title: 'The Blue Planet',
      year: '2001',
      imdb: { rating: 9.2, votes: 7093, id: 296310 }
    },
    {
      runtime: 60,
      poster: 'https://m.media-amazon.com/images/M/MV5BNmZlYzIzMTItY2EzYS00YTEyLTg0ZjEtMDMzZjM3ODdhN2UzXkEyXkFqcGdeQXVyNjI0MDg2NzE@._V1_SY1000_SX677_AL_.jpg',
      title: 'Planet Earth',
      year: '2006',
      imdb: { rating: 9.5, votes: 82896, id: 795176 }
    },
    {
      runtime: 60,
      poster: 'https://m.media-amazon.com/images/M/MV5BOGM5YWU2N2QtYjVhZi00MzYyLTk0ODctYmVlNDZlMjU5N2Q5XkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_SY1000_SX677_AL_.jpg',
      title: 'Frozen Planet',
      year: '2011',
      imdb: { rating: 9.2, votes: 5903, id: 2092588 }
    }
  ];

  function renderTopMoviesList(movies) {
    return `
      ${movies.map(m => `
        <div class="col" style="width: 25%;">
          <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 m-3 shadow-sm"
            style="background-image: url('${m.poster}'); background-size: cover; background-position: center;">
            <div class="d-flex flex-column h-100 p-3 pb-0 text-white">
              <h6 class="pt-5 mt-5 mb-4" style="text-wrap: auto;">${m.title} (${m.year})</h6>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="me-auto">
                  <i class="bi bi-youtube fs-2 text-danger" title="Watch trailer"></i>
                </li>
                <li class="d-flex align-items-center me-3">
                  <small>IMDb: ${m.imdb?.rating ?? '-'}</small>
                </li>
                <li class="d-flex align-items-center">
                  <small>${m.runtime}m</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `).join('')}
    `;
  }

  function attachScrollArrows(root) {
    const prev = root.querySelector('#tmc-prev');
    const next = root.querySelector('#tmc-next');
    const getContainer = () => root.querySelector('#top-movies-carousel');
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

  export function createTopMovies() {
    const tmpl = document.createElement('template');
    tmpl.innerHTML = `
    <div class="position-relative">
      <button type="button"
              id="tmc-prev"
              class="btn btn-light rounded-circle shadow position-absolute top-50 translate-middle-y start-0"
              aria-label="Previous"
              style="z-index: 5;">
        &#x276E;
      </button>

      <div id="top-movies-carousel" class="horizontal-scrollable-row px-5">
        ${renderTopMoviesList(topMovies)}
      </div>

      <button type="button"
              id="tmc-next"
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