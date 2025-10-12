// src/lib/api.ts
function getAuthHeader() {
  const token = localStorage.getItem('jwt');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiGet(endpoint: string, options: RequestInit = {}) {
  const url = `${import.meta.env.VITE_BACKEND_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
      ...options,
      credentials: 'include',
      method: 'GET',
      headers: {
        ...(options.headers || {}),
        ...getAuthHeader(),
      },
    });
    if (!response.ok) {
      console.error('apiGet error:', response.status, response.statusText);
    }
    return response;
  } catch (err) {
    console.error('apiGet fetch failed:', err);
    throw err;
  }
}

export async function apiPost(endpoint: string, body: any, options: RequestInit = {}) {
  const url = `${import.meta.env.VITE_BACKEND_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
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
    if (!response.ok) {
      console.error('apiPost error:', response.status, response.statusText);
    }
    return response;
  } catch (err) {
    console.error('apiPost fetch failed:', err);
    throw err;
  }
}

export async function apiPatch(endpoint: string, body: any, options: RequestInit = {}) {
  const url = `${import.meta.env.VITE_BACKEND_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
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
    if (!response.ok) {
      console.error('apiPatch error:', response.status, response.statusText);
    }
    return response;
  } catch (err) {
    console.error('apiPatch fetch failed:', err);
    throw err;
  }
}

export async function apiDelete(endpoint: string, options: RequestInit = {}) {
  const url = `${import.meta.env.VITE_BACKEND_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
      ...options,
      credentials: 'include',
      method: 'DELETE',
      headers: {
        ...(options.headers || {}),
        ...getAuthHeader(),
      },
    });
    if (!response.ok) {
      console.error('apiDelete error:', response.status, response.statusText);
    }
    return response;
  } catch (err) {
    console.error('apiDelete fetch failed:', err);
    throw err;
  }
}
