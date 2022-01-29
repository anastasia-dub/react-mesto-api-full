const BASE_URL = 'https://api-mesto-39.nomoredomains.work';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`);
}

const BASE_PROPS = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    ...BASE_PROPS,
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(checkResponse);
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    ...BASE_PROPS,
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(checkResponse);
};

export const checkAuth = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    ...BASE_PROPS,
  })
    .then(checkResponse);
};
