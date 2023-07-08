import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

fetchBreeds()
  .then(data => {
    const placeholderOption = document.createElement('option');
    placeholderOption.value = '';
    placeholderOption.textContent = 'select a cat';
    breedSelect.appendChild(placeholderOption);

    data.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      option.placeholder = 'Select breed';
      breedSelect.appendChild(option);
    });
  })
  .catch(error => {
    console.log(error);
  });

breedSelect.addEventListener('change', function () {
  loader.classList.remove('invisible');

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
    return `<img class="breed-image" alt="${breed.name}" src="${url}" width="500px">
            <div class="breed-container">
              <h2 class="breed-name">${breed.name}</h2>
              <p class="breed-temperament">${breed.temperament}</p>
              <p class="breed-description">${breed.description}</p>
            </div>`;
  }, '');
  catInfo.innerHTML = markup;
  loader.style.display = 'none';
}
