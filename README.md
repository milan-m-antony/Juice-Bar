# 🍊 FreshFusion Juice Bar - Documentation

Welcome to the official documentation for **FreshFusion Juice Bar**, a premium, high-performance web application designed for a modern juice and smoothie experience. 

---

## 🚀 Project Overview
FreshFusion is a responsive, feature-rich web application built with a focus on **visual excellence**, **modular architecture**, and **seamless user experience**. It features a dynamic menu, real-time search, a robust cart system with multi-tier rewards, and a clean, premium aesthetic.

---

## 🛠️ Technology Stack
*   **Structure**: Semantic HTML5
*   **Styling**: Modular Vanilla CSS3 (Custom Design System with CSS Variables)
*   **Logic**: Modern JavaScript (ES6+ Modules)
*   **Icons**: [Lucide Icons](https://lucide.dev/) (Self-hosted for **Offline Support**)
*   **Typography**: Google Fonts (Outfit, Pacifico, Fredoka)
*   **Animations**: CSS Transitions & View Transitions API

---

## 📂 File Structure (Modular Architecture)
The project follows a modular design pattern to ensure high scalability and easy maintenance.

### 🎨 Stylesheets (`/css`)
*   `variables.css`: The central design system. Defines colors, spacing, and semantic tokens.
*   `base.css`: Core typography, layout container, and reset styles.
*   `layout.css`: Manages the branding header and navigation (Desktop & Mobile).
*   `hero.css`: Styles for the high-impact responsive landing section.
*   `menu.css`: Juice grid system and interactive product card designs.
*   `cart.css`: Optimized styles for the compact cart drawer and invoice modal.
*   `sections.css`: Visuals for the Offers grid and User Profile sections.
*   `components.css`: Shimmer effects, bouncy micro-animations, and toast notifications.
*   `responsive.css`: Consolidates all media queries for a seamless multi-device experience.

### ⚙️ Logic (`/js`)
*   `data.js`: Source of truth for menu items, descriptions, and active coupon definitions.
*   `state.js`: Lightweight state manager for cart persistence and active filters.
*   `ui.js`: The rendering engine. Handles DOM updates, rewards logic, and toasts.
*   `menu.js`: Logic for dynamic juice rendering and real-time meta-tag search.
*   `cart.js`: Core cart logic: quantities, subtotal calculations, and bill generation.
*   `navigation.js`: Scroll-spy logic and smooth section transitions.
*   `utils.js`: Helper utilities (e.g., dedicated Currency/Price formatters).

---

## ✨ Key Features

### 1. Dynamic Menu & Filtering
*   **Instant Filtering**: Switch between category views (Juices, Smoothies, Detox) instantly.
*   **Smart Search**: Real-time search that matches names, descriptions, and hidden ingredient tags.

### 2. Premium Cart & Rewards
*   **Reward Progress**: Real-time progress bar that tracks spend towards a **Free Detox Shot** (Unlocked at ₹500).
*   **Compact UI**: An optimized, vertically efficient checkout drawer that ensures the "Generate Bill" button is always accessible.
*   **Live Totals**: Subtotal, discounts, and grand totals update instantly with smooth data-binding.

### 3. Coupon Economy
*   **One-Tap Application**: Available coupons are displayed as interactive pills within the cart.
*   **Manual Entry**: Robust validation for promo codes like `SUMMER20`, `BERRY10`, and `FRESH5`.

### 4. High-End Performance
*   **Offline Ready**: All critical assets, including the **Lucide Icon Library**, are hosted locally to ensure functionality without internet.
*   **Micro-animations**: Subtle interactions (bouncy buttons, shimmer tags, peek-header) that elevate the user experience.
*   **View Transitions**: Cinematic section transitions for a "Single Page App" feel.

---

## 💻 Running Locally
1.  Clone the repository.
2.  Open `index.html` using a local development server (e.g., **VS Code Live Server**).
3.  **Note**: Because the project uses **ES6 Modules**, it must be run on a local server (`http://localhost`) rather than a file path (`file://`).

---

## 🎨 Design System
*   **Brand Primary**: `#facc15` (Vibrant Sun Yellow)
*   **Brand Accent**: `#f97316` (Neon Orange)
*   **Status Green**: `#10b981` (Fresh Emerald for rewards/success)
*   **Backgrounds**: Clean, layered white with subtle elevations (`#f8fafc`).

---


