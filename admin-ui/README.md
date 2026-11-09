# admin-ui

Admin dashboard FINEbank.IO — React 18 + Vite + Tailwind CSS 3 + React Router.

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Halaman

Semua ada di `src/App.jsx` dan dipilih lewat state `view`:

| view       | Halaman           |
| ---------- | ----------------- |
| `login`    | Login             |
| `register` | Create an account |
| `forgot`   | Forgot Password   |
| `app`      | Setelah login / sign up: menu User Cards dan Post Cards |

## Struktur

```
src/
├── assets/
├── App.css        # import Tailwind + @theme
├── App.jsx        # Login, Create an account, Forgot Password
├── Exercise.jsx   # daftar Post Cards (UTS)
├── PostCard.jsx   # card + state clicked (UTS)
├── Services.js    # getPosts, getUsers (fetch)
├── UserCard.jsx   # card user + state clicked (tutorial)
├── UserList.jsx   # daftar User Cards (tutorial)
├── index.css
└── main.jsx
```

Tailwind v4: tema warna dan font (`primary`, `secondary`, `special-mainBg`, `font-body`, `font-poppins`, dst.) ada di blok `@theme` pada `src/App.css`.
