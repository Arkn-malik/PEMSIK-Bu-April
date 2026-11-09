import { useEffect, useState } from 'react'
import PostCard from './PostCard.jsx'
import { getPosts } from './Services.js'

const Exercise = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getPosts()
        setPosts(data)
      } catch (err) {
        setError(err.message || 'Terjadi kesalahan saat mengambil data.')
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  return (
    <main className="min-h-screen bg-special-mainBg px-4 py-6">
      <h1 className="mb-6 text-center text-2xl font-bold text-blue-700">Post Cards</h1>

      {loading && <p className="text-center text-sm text-gray-500">Memuat data...</p>}

      {error && <p className="text-center text-sm text-special-red">{error}</p>}

      {!loading && !error && (
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Exercise
