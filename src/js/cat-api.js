const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_gQ9d6291XE7YOO6cVkJSOajXrnsBkKtbEtDhuAYPvUIQwhBSvevy0efyFS2cix4J';

export const fetchBreeds = function () {
  return fetch(`${BASE_URL}breeds?api-key=${API_KEY}`).then(response => {
    if (!response.ok) {
      notifyFailure(' Oops! An error occurred! Try reloading the page!');
    }
    return response.json();
  });
};

export const fetchCatByBreed = function (breedId) {
  return fetch(
    `${BASE_URL}images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  )
    .then(response => {
      if (!response.ok) {
        notifyFailure('Oops! An error occurred! Try reloading the page!');
      }
      return response.json();
    })
    .catch(err => console.log(err));
};
