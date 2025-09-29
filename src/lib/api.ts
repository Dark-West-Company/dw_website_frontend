// src/lib/api.ts
function getAuthHeader() {
  const token = localStorage.getItem('jwt');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiGet(endpoint: string, options: RequestInit = {}) {
  const url = `${import.meta.env.VITE_BACKEND_URL}${endpoint}`;
  return fetch(url, {
    ...options,
    credentials: 'include',
    method: 'GET',
    headers: {
      ...(options.headers || {}),
      ...getAuthHeader(),
    },
  });
}

export async function apiPost(endpoint: string, body: any, options: RequestInit = {}) {
  const url = `${import.meta.env.VITE_BACKEND_URL}${endpoint}`;
  return fetch(url, {
    ...options,
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      ...getAuthHeader(),
    },
    body: JSON.stringify(body),
  });
}

export async function apiPatch(endpoint: string, body: any, options: RequestInit = {}) {
  const url = `${import.meta.env.VITE_BACKEND_URL}${endpoint}`;
  return fetch(url, {
    ...options,
    credentials: 'include',
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      ...getAuthHeader(),
    },
    body: JSON.stringify(body),
  });
}

export async function apiDelete(endpoint: string, options: RequestInit = {}) {
  const url = `${import.meta.env.VITE_BACKEND_URL}${endpoint}`;
  return fetch(url, {
    ...options,
    credentials: 'include',
    method: 'DELETE',
    headers: {
      ...(options.headers || {}),
      ...getAuthHeader(),
    },
  });
}
