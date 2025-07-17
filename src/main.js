// import fetchData from './js/pixabay-api.js'
// import moduleName from './js/render-functions.js'


import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term',
      position: 'topRight',
    });
    return;
  }

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      gallery.innerHTML = '';
      return;
    }

    renderImages(data.hits);
  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong while fetching data.',
      position: 'topRight',
    });
  }
});


//зображення
function createGalleryMarkup(images) {
  return images.map(image => {
    return `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${image.likes}</p>
          <p><b>Views:</b> ${image.views}</p>
          <p><b>Comments:</b> ${image.comments}</p>
          <p><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </li>
    `;
  }).join('');
}

// очистка та рендер

function renderImages(images) {
  const markup = createGalleryMarkup(images);
  galleryEl.innerHTML = markup;
}


