import { BASE_URL, Route, Method, ErrorText } from './constants.js';

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${errorText} - ${response.status}`);
      }
      return response.json();
    });

const getPhotos = () => load(Route.GET_DATA, ErrorText.GET_DATA);

const sendPhotos = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export { getPhotos, sendPhotos };
