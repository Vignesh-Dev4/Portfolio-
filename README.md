# Portfolio Website
# Portfolio Websile - url - https://portfolio-three-gamma-bd1gg46ktv.vercel.app/

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, glassmorphism effects, and a premium design aesthetic.

## ✨ Features

- 🎨 **Modern Design**: Premium UI with glassmorphism effects and gradient accents
- 🌊 **Smooth Animations**: Scroll-triggered animations and micro-interactions
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎯 **SEO Optimized**: Semantic HTML and proper meta tags
- 🌙 **Dark Theme**: Beautiful dark color scheme with vibrant accents

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🎨 Customization

### Personal Information

Update the following files with your information:

- **Hero Section**: `src/components/sections/Hero.jsx`
- **About Section**: `src/components/sections/About.jsx`
- **Skills**: `src/components/sections/Skills.jsx`
- **Projects**: `src/components/sections/Projects.jsx`
- **Experience**: `src/components/sections/Experience.jsx`
- **Contact**: `src/components/sections/Contact.jsx`

### Colors & Theme

Customize the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Your primary color shades */ },
  accent: { /* Your accent color shades */ },
  dark: { /* Your dark theme shades */ }
}
```

### Fonts

The project uses Google Fonts (Inter and Outfit). You can change them in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   ├── sections/        # Page sections
│   │   └── ProjectCard.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Typography (Inter, Outfit)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Sections

1. **Hero** - Eye-catching introduction with CTA buttons
2. **About** - Personal information and statistics
3. **Skills** - Technical skills with animated progress bars
4. **Projects** - Portfolio showcase with live demos
5. **Experience** - Professional timeline
6. **Contact** - Contact form and information

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourprofile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

⭐ Star this repo if you found it helpful!
