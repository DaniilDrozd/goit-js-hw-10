import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

function fetchBreedsFromApi() {
  fetch('https://api.example.com/breeds')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch breeds');
      }
      return response.json();
    })
    .then(data => {
      const placeholderOption = document.createElement('option');
      placeholderOption.value = '';
      placeholderOption.textContent = 'select a cat';
      breedSelect.appendChild(placeholderOption);

      data.forEach(breed => {
        const option = document.createElement('option');
        option.textContent = breed.name;
        option.placeholder = 'Select breed';
        breedSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.log(error);
    });
}

fetchBreedsFromApi();

breedSelect.addEventListener('change', function () {
  loader.classList.remove('invisible');
  clearCat();

  const value = breedSelect.options[breedSelect.selectedIndex].value;
  const name = breedSelect.options[breedSelect.selectedIndex].text;

  fetchCatByBreed(value)
    .then(function (catData) {
      loader.classList.add('invisible');
      createCat(catData, name);
    })
    .catch(function () {
      loader.classList.add('invisible');
      Notiflix.Notify.failure(
        'Oops! An error occurred! Try reloading the page!'
      );
    });
});

function createCat(cats, title) {
  const { url, breeds } = cats[0];
  const markup = breeds.reduce((markup, breed) => {
    return `<img class="breed-image" alt="${breed.name}" src="${url}">
            <div class="breed-container">
              <h2 class="breed-name">${breed.name}</h2>
              <p class="breed-temperament">${breed.temperament}</p>
              <p class="breed-description">${breed.description}</p>
            </div>`;
  }, '');
  catInfo.innerHTML = markup;
  loader.style.display = 'none';
}
