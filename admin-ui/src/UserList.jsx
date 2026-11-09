import { useEffect, useState } from 'react'
import UserCard from './UserCard.jsx'
import { getUsers } from './Services.js'

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers()
        setUsers(data)
      } catch (err) {
        setError(err.message || 'Terjadi kesalahan saat mengambil data.')
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  return (
    <section className="px-4 py-6">
      <h1 className="mb-6 text-center text-2xl font-bold text-blue-700">User Cards</h1>

      {loading && <p className="text-center text-sm text-gray-500">Memuat data...</p>}

      {error && <p className="text-center text-sm text-special-red">{error}</p>}

      {!loading && !error && (
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map(({ id, name, email }) => (
            <UserCard key={id} name={name} email={email} street="Jl Kebon Jeruk" city="Jakarta" />
          ))}
        </div>
      )}
    </section>
  )
}

export default UserList
