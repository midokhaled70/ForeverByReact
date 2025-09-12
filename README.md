
# 📖 ForeverByReact

An **e-commerce web application** built with **React, Vite, TailwindCSS, and React Router**.
The app provides a smooth shopping experience with product collections, cart, orders, authentication pages, and a responsive modern UI.



---

## 🚀 Features

* 🏠 **Home Page** with hero, latest collections, and bestseller sections
* 📦 **Product Collection & Details** pages
* 🛒 **Shopping Cart** with dynamic cart total
* 📝 **Login & Authentication Pages** (placeholder logic for now)
* 📩 **Newsletter Subscription Box**
* 📑 **About & Contact Pages**
* ✅ **Order Placement & Order Tracking**
* 🔔 **Toast Notifications** using `react-toastify`
* 📱 **Fully Responsive** (Mobile → Desktop)
* 🎨 **Styled with TailwindCSS**
* 🌍 **GitHub Pages Deployment** via `gh-pages`

---

## 📂 Folder Structure

```
ForeverByReact/
│── public/              # Public assets
│── src/
│   ├── assets/          # Global assets
│   │   ├── admin_assets/
│   │   └── frontend_assets/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── NewsletterBox.jsx
│   │   ├── Title.jsx
│   │   └── ...
│   ├── context/         # Global state (ShopContext.jsx)
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Collection.jsx
│   │   ├── Product.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── Orders.jsx
│   │   └── PlaceOrder.jsx
│   ├── App.jsx          # Main app routes
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
│── package.json
│── vite.config.js
│── tailwind.config.js
│── postcss.config.js
│── eslint.config.js
│── index.html
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/midokhaled70/ForeverByReact.git
cd ForeverByReact
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

Now open **[http://localhost:5173](http://localhost:5173)** in your browser 🚀

### 4️⃣ Build for production

```bash
npm run build
```

### 5️⃣ Preview production build

```bash
npm run preview
```

---

## 🌍 Deployment (GitHub Pages)

This project is configured with `gh-pages`.

Deploy using:

```bash
npm run deploy
```

App will be available at:
👉 [https://midokhaled70.github.io/ForeverByReact](https://midokhaled70.github.io/ForeverByReact)

---

## 📦 Dependencies

* **React 19**
* **React Router DOM 7**
* **TailwindCSS 3**
* **React Toastify** (notifications)
* **React Just Parallax** (animations)
* **Scroll Lock** (UX improvement)
* **gh-pages** (deployment)

---

## 🧑‍💻 Author

👤 **Mido Khaled**
🔗 GitHub: [midokhaled70](https://github.com/midokhaled70)

---


