import { BASE_URL, Route, Method } from './constants.js';

const load = (route, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route.path}`, {
    method,
    body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(route.error);
      }
      return response.json();
    });

const getPhotos = () => load(Route.GET_DATA);

const sendPhotos = (body) => load(Route.SEND_DATA, Method.POST, body);

export { getPhotos, sendPhotos };
