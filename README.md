# Welcome to Next.js Design System Starter

A solid, scalable **Next.js-based design system starter** to kickstart your UI development — with full control, no external UI libraries.

---

## ✨ Features

- ✅ Built with **Next.js**
- 📕 Powered by **Storybook** for isolated UI component development
- 🧱 Custom `Container`, `Row`, `Col` layout system
- 🎨 Utility-first SCSS setup (`.mt-1`, `.pb-2`, `.text-center`, etc.)
- 🧩 Integrated with **Storybook** for component-driven development
- 🎚️ SCSS-based design tokens (colors, spacings, breakpoints, typography, etc.)
- 🧼 No 3rd-party UI kits — full customization & flexibility

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/nextjs-design-system-starter.git
cd nextjs-design-system-starter
```

### 2. Install dependencies

```bash
yarn install
# or
npm install
```

### 3. Run the development server

```bash
yarn dev
# or
npm run dev
```

### 4. Run Storybook

```bash
yarn storybook
# or
npm run storybook
```

---

## 📁 Folder Structure Overview

### `src/components/`

- `base/` → Reusable fundamental UI components (`Button`, `Input`, `Radio`, `Accordion`, etc.)
- `layout/` → Grid and layout components (`Container`, `Row`, `Col`)
- `next/` → Wrapped Next.js components (`Link`, `Image`, etc.) for centralized customization
- `product/` → Project-specific UI components (`ArticleCard`, `NewsSlider`, etc.)

---

### `src/assets/styles/`

- `_variables.scss` → Design tokens defined as CSS custom properties (colors, font sizes, spacing, etc.)
- `mixins.scss` → Media query mixins (`from-tablet`, `for-mobile-only`, etc.) for responsive design
- `_utils.scss` → Tailwind-style utility classes (`.mt-1`, `.pb-2`, `.text-center`, `.flex`, etc.) auto-generated using Sass loops and mixins

---

## 🎨 Icon System

- **Directory**: `src/icons/`
- **Script**:

```bash
yarn generate-icons
# or
npm run generate-icons
```

- Uses `@svgr/cli` to convert SVG files into React components
- Replaces `#000` with `currentColor` for dynamic color support
- Outputs components to `src/components/base/Icons/`

---

## 📘 License

MIT — free to use, modify, and share.

---

Made with ❤️ by [Yavuz Yolbir] · GitHub