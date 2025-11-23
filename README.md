# Alex Chen - Portfolio Website

A modern, responsive portfolio website for a CS major specializing in React development, web technologies, and video editing (especially After Effects).

## Features

- **Modern Design**: Glass morphism effects, gradient backgrounds, and smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero section with floating animated cards
  - About section with statistics and achievements
  - Skills section with animated progress bars
  - Projects showcase with filtering
  - Video portfolio with After Effects projects
  - Contact form with validation
- **Smooth Animations**: CSS animations and transitions throughout
- **SEO Optimized**: Proper meta tags and semantic HTML

## Technologies Used

- **React 19** - Latest React version with modern features
- **Vite** - Fast build tool and development server
- **CSS3** - Modern CSS with gradients, animations, and glass morphism
- **JavaScript ES6+** - Modern JavaScript features

## Sections

1. **Header** - Navigation with smooth scrolling and mobile menu
2. **Hero** - Introduction with animated floating cards
3. **About** - Personal story, statistics, and achievements
4. **Skills** - Technical skills with animated progress bars
5. **Projects** - Web development projects with filtering
6. **Video Portfolio** - After Effects and video editing showcase
7. **Contact** - Contact form and social links
8. **Footer** - Additional links and information

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-react
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

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Update the following files with your personal information:

- `src/sections/Hero.jsx` - Name and introduction
- `src/sections/About.jsx` - Personal story and statistics
- `src/sections/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer information

### Projects

Add your projects in `src/sections/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'react',
    github: 'https://github.com/yourusername/project',
    live: 'https://yourproject.com',
    featured: true
  }
  // Add more projects...
];
```

### Video Portfolio

Add your video projects in `src/sections/VideoPortfolio.jsx`:

```javascript
const videoProjects = [
  {
    id: 1,
    title: 'Your Video Title',
    description: 'Video description...',
    duration: '2:30',
    category: 'Motion Graphics',
    featured: true,
    techniques: ['After Effects', 'Motion Graphics']
  }
  // Add more videos...
];
```

### Skills

Update your skills in `src/sections/Skills.jsx`:

```javascript
const skillCategories = [
  {
    title: 'Your Category',
    color: '#your-color',
    skills: [
      { name: 'Skill Name', level: 90 }
      // Add more skills...
    ]
  }
];
```

## Color Scheme

The portfolio uses a modern gradient color scheme:

- **Primary Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Secondary Gradient**: `linear-gradient(45deg, #ff6b6b, #4ecdc4)`
- **Accent Color**: `#4ecdc4`
- **Glass Effect**: `rgba(255, 255, 255, 0.1)` with backdrop blur

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
3. Build and deploy: `npm run build && npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size
- Fast loading times

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: alex.chen@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)

---

Made with ❤️ and React by Alex Chen