

## 🛍️ ForeverByReact

A fully responsive React + Vite eCommerce web app built with React Router, TailwindCSS, and Context API for global state management. Supports cart functionality, product browsing, user login, and order placement.

---

### 🚀 Live Demo

**🌐 [View Live Site](https://midokhaled70.github.io/ForeverByReact/)**

---

### 📂 Project Structure

```
ForeverByReact/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable components (Navbar, Footer, etc.)
│   ├── context/           # Context API setup for global state
│   ├── pages/             # Main pages (Home, Cart, Product, etc.)
│   ├── App.jsx            # Route configuration
│   ├── main.jsx           # App entry with providers
│   └── index.css          # Tailwind base styles
├── .vscode/               # VSCode workspace settings
├── .gitignore
├── package.json
├── vite.config.js         # Vite config
├── tailwind.config.js     # Tailwind config
├── postcss.config.js
└── README.md
```

---

### 🧰 Tech Stack

* **Frontend**: React, React Router DOM, Vite
* **Styling**: TailwindCSS
* **State Management**: React Context API
* **Notifications**: React Toastify
* **Deployment**: GitHub Pages (via `gh-pages`)
* **Build Tools**: Vite, ESLint

---

### ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/midokhaled70/ForeverByReact.git
cd ForeverByReact

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

### 📦 Build & Deploy

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

> Ensure the `homepage` field in `package.json` is correctly set for GitHub Pages:

```json
"homepage": "https://your-username.github.io/ForeverByReact"
```

---

### 🌐 Available Routes

| Path           | Description         |
| -------------- | ------------------- |
| `/`            | Home page           |
| `/collection`  | Product collection  |
| `/product/:id` | Single product page |
| `/cart`        | Cart overview       |
| `/login`       | Login page          |
| `/place-order` | Place order page    |
| `/orders`      | User's past orders  |
| `/about`       | About the store     |
| `/contact`     | Contact form        |

---

### 🧪 Linting

```bash
# Run ESLint
npm run lint
```

---

### 🛠️ Customize

* Tailwind configuration: `tailwind.config.js`
* Environment settings: Modify `vite.config.js` as needed
* Deployment subpath: Update `basename` in `main.jsx` if deploying in subfolder

---


