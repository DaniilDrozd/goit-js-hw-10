import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const infAbCat = document.querySelector('.cat-info');
const docLoader = document.querySelector('.loader');

function fetchBreeds() {
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
