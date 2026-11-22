'use strict';

const form = document.querySelector('form');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const query = document.querySelector('#query').value;

  try {
    const response = await fetch(`https://tvmaze.com{query}`);
    const jsonData = await response.json();

    resultsContainer.innerHTML = '';

    for (const tvShow of jsonData) {
      const article = document.createElement('article');

      const h2 = document.createElement('h2');
      h2.textContent = tvShow.show.name;

      const link = document.createElement('a');
      link.href = tvShow.show.url;
      link.textContent = tvShow.show.url;
      link.target = '_blank';

      const img = document.createElement('img');
      img.src = tvShow.show.image?.medium || '';
      img.alt = tvShow.show.name;

      const summary = document.createElement('div');
      summary.innerHTML = tvShow.show.summary || 'No summary available.';

article.appendChild(h2);
article.appendChild(link);
article.appendChild(img);
article.appendChild(summary);
resultsContainer.appendChild(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});
