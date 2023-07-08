const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_wKCocmPlfHzj0RJzHBk9QjBwoj9skkE0btmPkgoUwMFwmXq4I9CxewoZuvkGbpWK';

export const fetchBreeds = () =>
  fetch(`${BASE_URL}/breeds`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });

export const fetchCatByBreed = breedId =>
  fetch(
    `${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}&has_breeds=1, `
  ).then(result => {
    if (!result.ok) {
      throw new Error(result.status);
    }

    return result.json();
  });
