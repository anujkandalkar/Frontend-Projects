# 📱 QuickQR - Instant QR Code Generator

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**QuickQR** is a lightweight web utility that instantly converts any text or URL into a downloadable QR code.

---

## ✨ Features

- **Instant QR Generation**: Real-time rendering via API integration.
- **Direct Image Download**: Downloads generated QR code as a PNG file directly to your system (CORS blob fetch supported).
- **One-Click Clipboard Copy**: Copy input text directly to the system clipboard.
- **Dynamic Input Reset**: Hides actions and image previews automatically when input is cleared.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Custom CSS3, Vanilla ES6+ JavaScript.
- **API**: QRServer API (`api.qrserver.com`).

---

## 🚀 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/QuickQR.git
   cd QuickQR
   ```

2. **Open `index.html`** in any web browser.

---

## 🧪 Testing Plan

| Test Case | Procedure | Expected Outcome |
| :--- | :--- | :--- |
| **Generate QR** | Type `https://google.com` and click "Generate QR Code" | QR code renders with action buttons visible |
| **Download QR** | Click "Download" button | PNG file `qr-code.png` downloads to system |
| **Copy Link** | Click "Copy Link" button | Input text copies to clipboard and button displays "Copied!" |

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
