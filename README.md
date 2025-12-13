# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Beautiful gradient backgrounds and animations
- 🧭 Smooth scrolling navigation
- 💼 Project showcase section
- 🛠️ Skills display with categorization
- 📧 Contact form
- ⚡ Fast performance with Vite

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Modern JavaScript (ES6+)**

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the tagline and description

2. **About Section** (`src/components/About.jsx`):
   - Update location, experience, and specialization
   - Customize the about text

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove your actual skills
   - Organize them into relevant categories

4. **Projects Section** (`src/components/Projects.jsx`):
   - Replace placeholder projects with your real projects
   - Update titles, descriptions, technologies, and links

5. **Contact Section** (`src/components/Contact.jsx`):
   - Configure form submission (connect to a backend or service like Formspree)
   - Update social media links

6. **Footer** (`src/components/Footer.jsx`):
   - Update copyright name

### Color Scheme

The default color scheme uses blue and purple gradients. To customize:
- Edit the Tailwind classes in components (e.g., `from-blue-400 to-purple-500`)
- Or extend the theme in `tailwind.config.js`

## Project Structure

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero/landing section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills display
│   │   ├── Projects.jsx    # Project showcase
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main app component
│   ├── App.css             # Custom styles & animations
│   ├── index.css           # Tailwind directives
│   └── main.jsx            # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## License

This project is open source and available under the MIT License.

---

Built with ❤️ using React and Tailwind CSS
