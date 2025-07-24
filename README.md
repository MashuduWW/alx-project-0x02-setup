# Next.js Project Setup and Basics

This is a **Next.js + TypeScript** project styled with **Tailwind CSS**.  
It showcases reusable UI components like Cards, Modals, Buttons, and data fetching pages (Users, Posts).
To initialize the project, use the following command:

npx create-next-app@latest airbnb-clone --typescript --eslint --tailwind
Choose the following options: - src directory: No - App Router: No - Customize the default import alias: Yes (use @/* for simpler imports)

This command scaffolds a Next.js project with TypeScript, ESLint, and Tailwind CSS, creating a solid foundation for our Airbnb clone.

---

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prettier](https://prettier.io/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---


---

## Components

### `Card.tsx`
Reusable card that takes `title` and `content`.

###  `PostModal.tsx`
A modal with form inputs to create a post dynamically.

### `UserCard.tsx`
Displays user details like name, email, and address.

### `PostCard.tsx`
Displays post data: title, content, and userId.

### `Button.tsx`
Custom button that accepts `size` and `shape` props.

### `DarkBodyLayout.tsx`
Layout wrapper to apply dark background per-page.

---

## Pages

### `/home`
- Uses `Card.tsx` and `PostModal.tsx`
- Lets user create and add cards interactively

### `/posts`
- Fetches post data from JSONPlaceholder API
- Displays list using `PostCard.tsx`

### `/users`
- Fetches user data from JSONPlaceholder API
- Displays list using `UserCard.tsx`

### `/about`
- Showcases custom buttons in different sizes and shapes

##  Essential Configuration Files
tsconfig.json, tailwind.config.js & postcss.config.js

---


