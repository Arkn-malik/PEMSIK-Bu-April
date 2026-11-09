import { useState } from 'react'

// Rest Parameter: gabungkan sejumlah bagian alamat menjadi satu string
const formatAddress = (...parts) => parts.filter(Boolean).join(', ')

// Named Export + Destructuring Object Props
export const UserCard = ({ name, email, street, city }) => {
  const [clicked, setClicked] = useState(false)

  // Arrow Function (in State)
  const handleClick = () => setClicked(true)

  // Template Literals + Conditional Rendering
  const buttonClass = `rounded px-2 py-1 text-sm text-white transition-colors ${
    clicked ? 'bg-special-green' : 'bg-gray-01 hover:bg-secondary'
  }`

  return (
    <div className="rounded-lg bg-white p-5 shadow">
      <h2 className="mb-2 text-lg font-semibold text-defaultBlack">{name}</h2>
      <p className="text-sm text-gray-01">
        <span className="font-semibold">Email:</span> {email}
      </p>
      <p className="mb-2 text-sm text-gray-01">
        <span className="font-semibold">Address:</span> {formatAddress(street, city)}
      </p>
      <button type="button" onClick={handleClick} className={buttonClass}>
        {clicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
      </button>
    </div>
  )
}

// Default Export
export default UserCard
