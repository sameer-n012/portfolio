# React Portfolio

A modern portfolio website built with React and TypeScript, showcasing my programming projects, experience, and skills.

## Overview

This is a React conversion of my original Angular portfolio. It features:

- **Responsive Design**: Built with Bootstrap for mobile-first responsive layout
- **Interactive Components**: Smooth scrolling, animated text, and dynamic background effects
- **Project Showcase**: Filterable project gallery with search functionality
- **Experience Timeline**: Interactive navigation through work experience
- **Skills Display**: Organized presentation of technical skills
- **Social Integration**: Links to GitHub, LinkedIn, and resume

## Technologies Used

- **React 18** with TypeScript
- **Bootstrap 5** for responsive design
- **FontAwesome** for icons
- **CSS3** with custom animations
- **React Hooks** for state management

## Features

### Components

- **Title**: Animated introduction with rotating taglines
- **Table of Contents**: Smooth scrolling navigation
- **Skills**: Organized display of technical competencies
- **Experience**: Interactive tabs showcasing work history
- **Projects**: Filterable grid of portfolio projects
- **Footer**: Contact information and attributions

### Interactive Elements

- **Dynamic Background**: Parallax scrolling effect that responds to user scroll
- **Search Functionality**: Filter projects by technology tags or keywords
- **Animated Text**: Typewriter effect for the main tagline
- **Hover Effects**: Enhanced user interactions throughout

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sameer-n012/portfolio.git
   cd portfolio/react-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/          # React components
│   ├── Title.tsx       # Hero section with introduction
│   ├── Toc.tsx         # Table of contents navigation
│   ├── Skills.tsx      # Skills showcase
│   ├── Experience.tsx  # Work experience tabs
│   ├── Projects.tsx    # Project gallery
│   ├── ProjectCard.tsx # Individual project cards
│   └── Footer.tsx      # Footer component
├── assets/             # Data and images
│   ├── experiences.ts  # Work experience data
│   ├── projects.ts     # Project information
│   └── profileDetails.ts # Personal information
├── App.tsx            # Main application component
├── index.tsx          # Application entry point
└── index.css          # Global styles
```

## Data Configuration

The portfolio content is driven by data files in the `assets` folder:

- `profileDetails.ts`: Personal information, social links, and basic details
- `experiences.ts`: Work experience with descriptions and skills
- `projects.ts`: Project information including images, tags, and GitHub links

## Customization

To customize this portfolio for your own use:

1. Update the data in the `assets` folder with your information
2. Replace images in the `public/assets/images` folder
3. Modify the color scheme by updating CSS custom properties
4. Add or remove sections by modifying the component structure

## Performance Features

- **Code Splitting**: Automatic code splitting with React lazy loading
- **Optimized Images**: Compressed and properly sized images
- **CSS Optimization**: Minimized and optimized stylesheets
- **TypeScript**: Type safety and better development experience

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: sameer.narendran@gmail.com
- **LinkedIn**: [linkedin.com/in/sameer-narendran](https://linkedin.com/in/sameer-narendran)
- **GitHub**: [github.com/sameer-n012](https://github.com/sameer-n012)

---

Built with ❤️ using React and TypeScript