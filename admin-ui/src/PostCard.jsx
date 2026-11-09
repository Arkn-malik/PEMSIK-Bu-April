import { useState } from 'react'

const PostCard = ({ title, body }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked(true)

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer rounded-lg p-4 shadow transition-colors ${
        clicked ? 'bg-blue-100' : 'bg-white'
      }`}
    >
      <h2 className="mb-2 text-sm font-semibold text-gray-800">{title}</h2>
      <p className="text-xs text-gray-500">{body}</p>
    </div>
  )
}

export default PostCard
