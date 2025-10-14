# React Portfolio Setup Guide

## Quick Start

Follow these steps to get the React portfolio running on your local machine:

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js) or **yarn**

You can check your versions with:
```bash
node --version
npm --version
```

### Installation Steps

1. **Navigate to the React portfolio directory:**
   ```bash
   cd portfolio/react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   Or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   
   Or with yarn:
   ```bash
   yarn start
   ```

4. **Open your browser:**
   The application will automatically open at `http://localhost:3000`

### Available Scripts

In the project directory, you can run:

- **`npm start`** - Runs the app in development mode with hot reloading
- **`npm build`** - Builds the app for production to the `build` folder
- **`npm test`** - Launches the test runner in interactive watch mode
- **`npm eject`** - **Note: this is a one-way operation. Once you eject, you can't go back!**

### Development

The development server includes:
- **Hot reloading** - Changes are reflected immediately
- **Error overlay** - Compilation errors are displayed in the browser
- **Linting** - Code quality checks

### Building for Production

To create a production build:

```bash
npm run build
```

This will:
- Create a `build` folder with optimized files
- Minify JavaScript and CSS
- Optimize images and other assets
- Generate service worker for caching

### Deployment

After building, you can deploy the contents of the `build` folder to any static hosting service:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3**
- **Firebase Hosting**

### Customization

To customize the portfolio for your own use:

1. **Update personal information:**
   - Edit `src/assets/profileDetails.ts`
   - Replace your photo in `public/assets/images/`

2. **Add your projects:**
   - Edit `src/assets/projects.ts`
   - Add project images to `public/assets/images/`

3. **Update experience:**
   - Edit `src/assets/experiences.ts`

4. **Customize styling:**
   - Modify CSS files in component folders
   - Update colors in `src/index.css`

### Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**Clear npm cache:**
```bash
npm cache clean --force
```

**Delete node_modules and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Project Structure

```
react-portfolio/
├── public/
│   ├── assets/
│   │   └── images/          # All project and personal images
│   └── index.html
├── src/
│   ├── components/          # React components
│   ├── assets/             # Data files (TypeScript)
│   ├── App.tsx             # Main app component
│   └── index.tsx           # Entry point
├── package.json
└── README.md
```

### Need Help?

If you run into any issues:

1. Check that all dependencies are installed correctly
2. Ensure you're using a supported Node.js version
3. Clear browser cache and restart the development server
4. Check the browser console for error messages

### Next Steps

Once you have the portfolio running:

1. Replace placeholder content with your information
2. Add your own projects and images
3. Customize colors and styling to match your preferences
4. Test responsiveness on different screen sizes
5. Build and deploy to your preferred hosting platform

Happy coding! 🚀