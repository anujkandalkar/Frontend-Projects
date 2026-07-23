# 🌍 WanderSphere - Travel & Destination Explorer

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**WanderSphere** is a responsive, modern travel showcase web application designed to highlight popular world destinations, featured vacation packages, and custom newsletter subscription flows.

---

## ✨ Features

- **Hero Banner**: Engaging full-width hero header featuring call-to-action destination discovery.
- **Popular Destinations Grid**: Card grid showcasing top travel spots (Italy, Brazil, America, Maldives, Nepal) with hover elevation effects.
- **Popular Places & Pricing**: Package listings highlighting price points and trip durations.
- **Interactive Newsletter**: Client-side email validation and instant subscription feedback.
- **Smooth Navigation**: Sticky navigation bar with smooth scrolling to relevant page sections.
- **Fully Responsive**: Mobile-first design principles with custom media breakpoints.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom Design Tokens, Flexbox, Glassmorphism), Modern JavaScript (ES6+).
- **Assets & Typography**: Google Fonts (*Outfit*), Unsplash High-Definition Travel Imagery.

---

## 🚀 Quick Setup & Local Preview

No external build tools or backend dependencies are required.

### Prerequisites
- Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/WanderSphere.git
   cd WanderSphere
   ```

2. **Open in browser**:
   - Double-click `index.html` in your file explorer, OR
   - Run a local HTTP server (e.g. using VS Code Live Server or Python):
     ```bash
     npx serve .
     # or
     python -m http.server 8000
     ```

---

## 🧪 Manual Testing Plan

| Test Case | Steps | Expected Result |
| :--- | :--- | :--- |
| **Navigation Scroll** | Click "Destinations", "Popular Places", or "Newsletter" in the navbar | Smoothly scrolls to the targeted page section |
| **Hero CTA** | Click "Explore Now" button | Scrolls down to the Popular Destinations section |
| **Newsletter Validation** | Submit blank or invalid email in newsletter form | Displays warning alert requesting a valid email format |
| **Newsletter Success** | Submit valid email (e.g. `test@example.com`) | Displays confirmation alert and resets input field |
| **Mobile Responsiveness** | Resize browser below `768px` width | Layout adapts cleanly into single-column responsive layout |

---

## 📂 Project Structure

```text
WanderSphere/
├── index.html    # Main semantic markup
├── style.css     # Design tokens, layouts, & media queries
├── script.js    # Interactive logic (smooth scroll & validation)
└── README.md     # Documentation
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
