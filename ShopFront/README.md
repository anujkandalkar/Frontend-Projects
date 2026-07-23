# 🛒 ShopFront - Modern E-Commerce Storefront

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**ShopFront** is a feature-rich, standalone single-page e-commerce web application featuring client-side search, category filtering, price sorting, interactive cart management, wishlist persistence (`localStorage`), product detail modals, and an integrated checkout workflow.

---

## ✨ Features

- **Product Search & Filtering**: Real-time keyword search, category filter, and multi-option sorting (Price low/high, Name A-Z).
- **Persistent Cart & Wishlist**: Shopping cart items, item counts, subtotal calculation, and wishlist favorites stored in `localStorage`.
- **Product Detail Modals**: Modal views for individual product specs and quick add-to-cart actions.
- **Interactive Checkout Flow**: Modal checkout form with payment method selection (Card, UPI, Cash on Delivery) and order summary validation.

---

## 🛠️ Tech Stack

- **Frontend Architecture**: HTML5, Modular CSS3, ES6+ JavaScript.
- **Data Storage**: Browser `localStorage` API for cart state persistence.

---

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/ShopFront.git
   cd ShopFront
   ```

2. **Open `index.html`** directly in any web browser.

---

## 🧪 Testing Plan

| Test Case | Procedure | Expected Outcome |
| :--- | :--- | :--- |
| **Search & Sort** | Type a keyword into the search bar or change sort dropdown | Product grid filters/resorts instantly |
| **Add to Cart** | Click "Add to Cart" on any product card | Cart counter updates, subtotal updates, item appears in side cart panel |
| **Wishlist Toggle** | Click heart icon on product card | Wishlist badge counter updates and retains state after page refresh |
| **Checkout Flow** | Click "Checkout", fill in sample customer info, click "Place Order" | Order confirmation screen displays and cart resets |

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
