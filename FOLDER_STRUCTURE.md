# SaaS Dashboard - Folder Structure

This document outlines the organized folder structure for the SaaS Dashboard project.

## 📁 Root Structure

```
Saas-Dashboard/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/            # Images, icons, fonts
│   ├── components/        # Reusable UI components
│   ├── config/           # Configuration files
│   ├── constants/        # Application constants
│   ├── context/          # React context providers
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── styles/           # CSS and styling
│   ├── types/            # Type definitions
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 📂 Detailed Structure

### `/src/components/`
Reusable UI components organized by functionality:

- **`ui/`** - Basic UI components (Button, Input, Modal, etc.)
- **`layout/`** - Layout components (Header, Sidebar, Footer, etc.)
- **`forms/`** - Form-related components (Form, Input, Select, etc.)
- **`charts/`** - Chart and visualization components
- **`tables/`** - Table and data display components

### `/src/pages/`
Page-level components that represent entire views:

- `Dashboard.jsx` - Main dashboard page
- `Analytics.jsx` - Analytics page
- `Users.jsx` - User management page
- `Settings.jsx` - Settings page

### `/src/hooks/`
Custom React hooks for reusable logic:

- `useLocalStorage.js` - localStorage management
- `useApi.js` - API call management
- `useAuth.js` - Authentication logic
- `useTheme.js` - Theme management

### `/src/utils/`
Utility functions and helpers:

- `formatDate.js` - Date formatting utilities
- `validation.js` - Form validation helpers
- `api.js` - API utility functions
- `storage.js` - Storage utilities

### `/src/services/`
API service layer:

- `authService.js` - Authentication API calls
- `userService.js` - User management API calls
- `dashboardService.js` - Dashboard data API calls

### `/src/context/`
React Context providers:

- `AuthContext.jsx` - Authentication state
- `ThemeContext.jsx` - Theme state
- `AppContext.jsx` - Global app state

### `/src/config/`
Configuration files:

- `api.js` - API configuration
- `constants.js` - App constants
- `routes.js` - Route definitions

### `/src/constants/`
Application constants:

- `routes.js` - Route constants
- `api.js` - API endpoint constants
- `validation.js` - Validation rules

### `/src/types/`
Type definitions (for TypeScript-like organization):

- `index.js` - Main type definitions
- `api.js` - API response types
- `user.js` - User-related types

### `/src/styles/`
Styling files:

- `globals.css` - Global styles
- `components.css` - Component-specific styles
- `variables.css` - CSS variables

### `/src/assets/`
Static assets:

- **`icons/`** - SVG icons and icon fonts
- **`images/`** - Image files
- **`fonts/`** - Custom font files

## 🎯 Best Practices

1. **Component Organization**: Keep components small and focused
2. **File Naming**: Use PascalCase for components, camelCase for utilities
3. **Import Organization**: Group imports by type (React, third-party, local)
4. **CSS Organization**: Use BEM methodology or CSS modules
5. **Type Safety**: Use JSDoc comments for better IDE support

## 🚀 Getting Started

1. Navigate to the project directory
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open browser to `http://localhost:5173`

## 📝 Adding New Features

When adding new features:

1. Create components in appropriate `/components/` subdirectories
2. Add pages to `/pages/` directory
3. Create services in `/services/` for API calls
4. Add utilities to `/utils/` for helper functions
5. Update constants in `/constants/` for new values
6. Add types to `/types/` for new data structures

This structure promotes maintainability, scalability, and team collaboration. 