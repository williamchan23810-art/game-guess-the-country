# 🌍 game-guess-the-country

[![Netlify Status](https://api.netlify.com/api/v1/badges/8f22fa16-e4db-4b47-ad75-b92df83fce98/deploy-status)](https://guess-thecountry.netlify.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JS-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

An interactive, responsive web-based geography game where players guess countries based on various visual, historical, or geographical clues. 

---

## 🚀 Live Demo

[![Play on Netlify](https://img.shields.io/badge/Netlify-Play%20Now-00AD9F?style=for-the-badge&logo=netlify&logoColor=white)](https://guess-thecountry.netlify.app/)

👉 **[Click here to play the game live on Netlify!](https://guess-thecountry.netlify.app/)**

---

## ✨ Core Features & Gameplay Logic

*   **Dynamic Country Selection:** Implements a randomized selection engine to pull country details, flags, and region parameters without repeat-biases during a single active session.
*   **Visual & Textual Clues:** Challenges players' global knowledge by dynamically parsing geographical properties, coordinates, and visual flag assets.
*   **Intuitive Feedback Loops:** Instantly validates user submissions with explicit green/red UI transitions, tracking streaks and overall player progress.
*   **Responsive Vector Layouts:** Fully optimized viewport scaling using CSS Grid/Flexbox to transition seamlessly between mobile devices and desktop screens.

---

## ⚙️ System & Data Pipeline

The application relies on a client-side ingestion engine that fetches geographical properties, evaluates input matches, and stores high scores locally in the browser's sandbox.
