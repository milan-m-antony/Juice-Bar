# 🍊 FreshFusion Juice Bar - Documentation

Welcome to the official documentation for **FreshFusion Juice Bar**, a premium, high-performance web application designed for a modern juice and smoothie experience. 

---

## 🚀 Project Overview
FreshFusion is a responsive, feature-rich web application built with a focus on **visual excellence**, **modular architecture**, and **seamless user experience**. It features a dynamic menu, real-time search, a robust cart system with discount logic, and a premium "Dark Glass" aesthetic.

---

## 🛠️ Technology Stack
*   **Structure**: Semantic HTML5
*   **Styling**: Modular Vanilla CSS3 (Custom Variables & Grid/Flexbox)
*   **Logic**: Modern JavaScript (ES6+ Modules)
*   **Icons**: [Lucide Icons](https://lucide.dev/)
*   **Typography**: Google Fonts (Outfit, Pacifico, Fredoka)

---

## 📂 File Structure (Modular Architecture)
The project follows a modular design pattern to ensure high scalability and easy maintenance.

### 🎨 Stylesheets (`/css`)
*   `variables.css`: Defines the global design system (colors, spacing, shadows).
*   `base.css`: Handes CSS resets, typography, and core section layouts.
*   `layout.css`: Manages the branding header, navigation logic, and mobile bottom nav.
*   `hero.css`: Styles the high-impact landing section.
*   `menu.css`: Styles the juice grid, category filters, and interactive item cards.
*   `cart.css`: Logic for the slide-out cart drawer and invoice modal.
*   `sections.css`: Styles for secondary sections like Offers and User Profiles.
*   `components.css`: Contains micro-animations, toasts, and reusable UI components.
*   `responsive.css`: Consolidates all media queries for a perfect mobile-first experience.

### ⚙️ Logic (`/js`)
*   `data.js`: Central source of truth for all menu items and coupon definitions.
*   `state.js`: Manages the application's runtime state (cart contents, active category).
*   `ui.js`: Handles DOM selection, toast notifications, and the primary UI rendering engine.
*   `menu.js`: Logic for rendering the juice list, category switching, and real-time search.
*   `cart.js`: Core cart functionality including quantity management and checkout logic.
*   `navigation.js`: Handles scroll-based header behavior and the active-link scrollspy.
*   `utils.js`: Helper utilities (e.g., Currency formatting).

### 🚀 Entry Points
*   `index.html`: The main structural entry point.
*   `style.css`: The main CSS manifest that imports the modular stylesheets.
*   `app.js`: The main JavaScript module that initializes and coordinates all features.

---

## ✨ Key Features

### 1. Dynamic Menu & Filtering
*   Instant filtering by category (Fresh Juices, Smoothies, Detox).
*   Real-time search bar that filters by name, description, and even hidden meta-tags.

### 2. Premium Cart System
*   **Slide-out Drawer**: Accessible from the floating header or mobile bottom nav.
*   **Live Updates**: Quantities and totals update instantly without page reloads.
*   **Smart Discounts**: Automated 5% discount for orders over ₹500.

### 3. Coupon Economy
*   **Click-to-Apply**: Available coupons (SUMMER20, BERRY10) are displayed as interactive "pills" inside the cart.
*   **Validation**: Real-time validation for manually entered promo codes.

### 4. Visual Excellence
*   **Micro-animations**: Bounce effects on cart updates, smooth transitions on scroll.
*   **Responsive Engine**: Tailored layouts for Desktop, Tablet, and Mobile.
*   **Dark Glass Ethos**: A sophisticated color palette utilizing deep blacks, vibrant oranges, and primary yellows.

---

## 💻 Development & Deployment
To run this project locally:
1.  Clone the repository.
2.  Open `index.html` using a local development server (like VS Code Live Server).
3.  **Note**: Because this project uses **JavaScript Modules**, it must be run on a local server (http://localhost) rather than locally from a file path (file://) for the modules to load.

---

## 🎨 Design Guide
*   **Primary Color**: `#facc15` (Vibrant Yellow)
*   **Accent Color**: `#f97316` (Vibrant Orange)
*   **Base Color**: `#000000` (Deep Black)
*   **Secondary Accent**: `#1b4d3e` (Forest Green - used in Hero script)

---

Developed with ❤️ by **Antigravity**
