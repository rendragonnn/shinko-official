# 🖤 SHINKO OFFICIAL — Premium Streetwear Website

![SHINKO OFFICIAL](https://img.shields.io/badge/SHINKO-OFFICIAL-c8ff00?style=for-the-badge&labelColor=060606)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer&logoColor=white)

> **⚠️ DISCLAIMER:** This website is a **concept / portfolio project** and is **not** a real e-commerce store. All products, prices, and brand elements shown are fictional and for demonstration purposes only. No real transactions can be made.

---

## ✨ Overview

SHINKO OFFICIAL is a premium streetwear brand concept website built as a modern React Single Page Application. It features a dark, high-fashion aesthetic with cinematic animations, interactive product pages, and an editorial lookbook experience.

This project showcases advanced frontend development skills including scroll-driven animations, parallax effects, interactive galleries, and a cohesive dark-mode design system.

---

## 🎨 Features

### Pages & Components
- **Home** — Full-screen parallax hero, marquee ticker, product grid with scroll-reveal animations, brand quote section, and community newsletter signup
- **Collection** — Category filter tabs (All / Tops / Bottoms / Outerwear / Accessories), product count, animated product cards
- **New Arrival** — Cinematic hero with spotlight product, feature badges, and CTA banner
- **Product Detail** — Split-layout with sticky product image, accordion sections (Description, Material & Fabric, Size Chart, Care Instructions), auto-scroll on section click, related products
- **Lookbook** — Editorial chapter-based gallery with fullscreen overlay, chapter descriptions, per-image captions, thumbnail navigation, keyboard support (← → Esc)
- **Our Story** — Full-screen parallax hero, brand manifesto, split image + values layout, vertical timeline with milestones, cinematic quote
- **Contact** — Brand logo card, contact info grid, functional contact form with focus states
- **Cart** — Full cart management with quantity controls, order summary

### Design & UX
- 🌑 **Dark Premium Aesthetic** — `#060606` background with `#c8ff00` neon lime accent
- ✨ **Framer Motion Animations** — Scroll-reveal, parallax, accordion open/close, page transitions
- 🎯 **Smart Navigation** — Auto scroll-to-top on route change, accordion auto-scroll on click
- 📱 **Responsive Design** — Fluid typography with `clamp()`, adaptive grid layouts
- 🔤 **Premium Typography** — Poppins font family
- 🛒 **Cart System** — Persistent cart with localStorage
- ⚠️ **Disclaimer Banner** — Fixed bottom banner clarifying this is a concept project

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 8** | Build tool & dev server |
| **React Router** | Client-side routing |
| **Framer Motion** | Animations & transitions |
| **Lenis** | Smooth scrolling |
| **CSS (Vanilla)** | Styling & design system |

---

## 📁 Project Structure

```
shinko-official/
├── public/
│   └── images/          # Product photos, lookbook, hero images
├── src/
│   ├── components/      # Navbar, Footer, Layout
│   ├── context/         # CartContext (localStorage-based)
│   ├── lib/             # data.js (products & lookbook data)
│   ├── pages/           # All page components
│   │   ├── Home.jsx
│   │   ├── Collection.jsx
│   │   ├── NewArrival.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Lookbook.jsx
│   │   ├── Story.jsx
│   │   ├── Contact.jsx
│   │   ├── Cart.jsx
│   │   └── ...
│   ├── App.jsx          # Router & ScrollToTop
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & design tokens
└── package.json
```

---

## 📸 Preview

| Home | Collection | Product Detail |
|------|-----------|----------------|
| Full-screen parallax hero with scroll animations | Category filter tabs with product grid | Split layout with accordion details |

| Lookbook | Story | Contact |
|----------|-------|---------|
| Chapter-based editorial gallery | Timeline & brand manifesto | Logo card with contact form |

---

## 👤 Author

**Varrent Lionel** — [@rendragonnn](https://github.com/rendragonnn)

---

## 📄 License

This project is for **portfolio / educational purposes only**. All brand names, logos, and product imagery are fictional. Not intended for commercial use.
