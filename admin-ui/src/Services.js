const BASE_URL = 'https://jsonplaceholder.typicode.com'

const fetchJson = async (path) => {
  const response = await fetch(`${BASE_URL}${path}`)

  if (!response.ok) {
    throw new Error(`Gagal mengambil data (status ${response.status})`)
  }

  return response.json()
}

export const getPosts = () => fetchJson('/posts')

export const getUsers = () => fetchJson('/users')
