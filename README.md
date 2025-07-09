# 🛒 Fresh Cart - Modern E-commerce Application

A modern, responsive e-commerce application built with Angular 17, featuring a clean UI, server-side rendering (SSR), and a component-based architecture.

## 🚀 Features

- **Modern Angular 17** with standalone components
- **Server-Side Rendering (SSR)** for better SEO and performance
- **Responsive Design** with Bootstrap 5
- **Component-based Architecture** with reusable layouts
- **Font Awesome Icons** for enhanced UI
- **TypeScript** for type safety and interfaces
- **SCSS** for advanced styling with custom CSS variables
- **JWT Authentication** with secure token management
- **Route Guards** for authentication and authorization
- **Authentication Layouts** for login/register flows
- **Product Management** with categories and brands
- **Shopping Cart** functionality
- **API Integration** with product and authentication services
- **Mobile-First Design** with responsive layouts
- **Environment Configuration** for development and production

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js**: `v18.18.0` or higher (LTS recommended)
- **npm**: `v9.0.0` or higher (comes with Node.js)
- **Angular CLI**: `v17.3.17`

### Check your versions:
```bash
node --version
npm --version
ng version
```

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd Fresh-Cart
```

### 2. Install Angular CLI globally (if not already installed)
```bash
npm install -g @angular/cli@17.3.17
```

### 3. Install project dependencies
```bash
npm install
```

### 4. Verify installation
```bash
ng version
```

## 🎯 Running the Application

### Development Server
Start the development server with hot reload:
```bash
npm start
# or
ng serve
```
Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes to the source files.

### Available Scripts
```bash
npm start          # Start development server (ng serve --configuration development)
npm run build      # Build for production
npm run watch      # Build with watch mode for development
npm test           # Run unit tests
npm run ng         # Run Angular CLI commands
```

### Development Server with Custom Port
```bash
ng serve --port 4300
```

### Development Server with Host Binding
```bash
ng serve --host 0.0.0.0 --port 4200
```

## 🏗️ Build & Production

### Development Build
```bash
npm run build
# or
ng build
```

### Production Build
```bash
ng build --configuration production
```
Build artifacts will be stored in the `dist/` directory.

### Watch Mode (Development)
```bash
npm run watch
# or
ng build --watch --configuration development
```

## 🖥️ Server-Side Rendering (SSR)

### Build for SSR
```bash
ng build --configuration production
```

### Serve SSR Application
```bash
npm run serve:ssr:ecommerce
# or
node dist/ecommerce/server/server.mjs
```

## 🧪 Testing

### Unit Tests
Run unit tests via [Karma](https://karma-runner.github.io):
```bash
npm test
# or
ng test
```

### Test Coverage
```bash
ng test --code-coverage
```
Coverage reports will be generated in the `coverage/` directory.

### End-to-End Tests
```bash
ng e2e
```
*Note: You need to add an e2e testing package first.*

## 🏗️ Application Architecture

### Services
The application includes several core services:

#### AuthService (`src/app/core/services/auth.service.ts`)
- User registration and login
- JWT token management
- User data decoding and storage
- Logout functionality
- Route protection integration

#### ProductsService (`src/app/core/services/products.service.ts`)
- Fetch all products from API
- Get specific product details
- Product data management

### Guards
#### AuthGuard (`src/app/core/guards/auth.guard.ts`)
- Protects routes requiring authentication
- Redirects unauthenticated users to login

#### LoggedGuard (`src/app/core/guards/loged.guard.ts`)
- Prevents authenticated users from accessing auth pages
- Redirects logged-in users to home page

### Interfaces
#### IProduct (`src/app/core/interface/iproduct.ts`)
- TypeScript interface for product data structure
- Ensures type safety for product-related operations

### Routing Structure
- **Auth Layout**: Login and registration pages
- **Blank Layout**: Main application pages (home, products, cart, etc.)
- **Route Guards**: Automatic redirection based on authentication status

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── brands/         # Brand listing component
│   │   ├── cart/           # Shopping cart component
│   │   ├── categories/     # Category listing component
│   │   ├── footer/         # Footer component
│   │   ├── home/           # Home page component
│   │   ├── login/          # Login component
│   │   ├── nav-auth/       # Navigation for auth pages
│   │   ├── nav-blank/      # Navigation for main pages
│   │   ├── notfound/       # 404 page component
│   │   ├── product/        # Product component
│   │   └── register/       # Registration component
│   ├── layouts/            # Layout components
│   │   ├── auth-layout/    # Layout for auth pages
│   │   └── blank-layout/   # Layout for main pages
│   ├── core/               # Core services, guards, and interfaces
│   │   ├── environments/   # Environment configurations
│   │   ├── guards/         # Route guards (auth, logged)
│   │   ├── interface/      # TypeScript interfaces
│   │   └── services/       # Application services (auth, products)
│   ├── app.component.*     # Root component
│   ├── app.config.*        # Application configuration
│   └── app.routes.ts       # Routing configuration
├── assets/                 # Static assets
│   └── images/            # Application images and icons
├── styles.scss            # Global styles and CSS variables
├── index.html             # Main HTML file
├── main.ts                # Application entry point
├── main.server.ts         # SSR entry point
└── favicon.ico            # Application favicon
```

## 🛠️ Development Tools

### Code Scaffolding
Generate new components:
```bash
ng generate component component-name
# or
ng g c component-name
```

Generate other artifacts:
```bash
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Linting
```bash
ng lint
```

### Code Formatting
The project uses EditorConfig for consistent code formatting across different editors.

## 🎨 Styling

The application uses:
- **Bootstrap 5.3.7** for responsive design and components
- **Font Awesome 6.7.2** for consistent iconography
- **Custom SCSS** variables and mixins for theming
- **Google Fonts** (Encode Sans Expanded) for typography

### Custom CSS Variables
```scss
:root {
  --main-color: #0aad0a;           /* Primary brand color */
  --light-color: #f0f3f2;         /* Light background color */
  --rating-color: #ffc908;        /* Star rating color */
  --shadow: rgba(145, 158, 171, 0.2) 0px 2px 4px -1px,
            rgba(145, 158, 171, 0.14) 0px 4px 5px 0px,
            rgba(145, 158, 171, 0.12) 0px 1px 10px 0px;
  --font-family: "Encode Sans Expanded", sans-serif;
}
```

### Component Styling Features
- Hover effects on product cards
- Smooth transitions and animations
- Responsive grid layouts
- Custom button styles with hover states
- Active navigation link highlighting

## 📦 Dependencies

### Main Dependencies
- `@angular/core`: ^17.3.0 - Core Angular framework
- `@angular/router`: ^17.3.0 - Angular routing
- `@angular/forms`: ^17.3.0 - Angular reactive forms
- `@angular/platform-server`: ^17.3.0 - Server-side rendering
- `@angular/ssr`: ^17.3.17 - Angular SSR support
- `bootstrap`: ^5.3.7 - CSS framework for responsive design
- `@fortawesome/fontawesome-free`: ^6.7.2 - Icon library
- `express`: ^4.18.2 - Node.js web framework for SSR
- `jwt-decode`: ^4.0.0 - JWT token decoding
- `rxjs`: ~7.8.0 - Reactive programming library
- `zone.js`: ~0.14.3 - Execution context tracking

### Development Dependencies
- `@angular/cli`: ^17.3.17 - Angular command line interface
- `@angular-devkit/build-angular`: ^17.3.17 - Angular build tools
- `typescript`: ~5.4.2 - TypeScript compiler
- `karma`: ~6.4.0 - Test runner
- `jasmine-core`: ~5.1.0 - Testing framework

## 🚀 Deployment

### Build for Production
```bash
ng build --configuration production
```

### Deploy to GitHub Pages
```bash
ng deploy --base-href=/Fresh-Cart/
```

### Deploy to Netlify/Vercel
1. Build the project: `ng build --configuration production`
2. Upload the `dist/ecommerce` folder to your hosting service
3. Configure redirects for SPA routing

## 🔧 Configuration

### Environment Configuration
The application uses environment-specific configurations:

- **Development**: `src/app/core/environments/environment.development.ts`
- **Production**: `src/app/core/environments/environment.ts`

#### Environment Variables
```typescript
export const environment = {
  production: false, // true for production
  baseUrl: 'https://ecommerce.routemisr.com'
};
```

### Angular Configuration
- **Main config**: `angular.json` - Build and serve configurations
- **TypeScript**: `tsconfig.json` - TypeScript compiler options
- **Testing**: `tsconfig.spec.json` - Test-specific TypeScript config

### API Integration
The application integrates with a RESTful API for:
- User authentication (signup/signin)
- Product management
- Categories and brands
- Shopping cart functionality

**Base URL**: `https://ecommerce.routemisr.com`

### Authentication
- JWT token-based authentication
- Route guards for protected routes
- Automatic token management in localStorage
- Secure login/logout functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 🔧 Troubleshooting

### Common Issues

#### Node.js Version
Ensure you're using Node.js v18.18.0 or higher:
```bash
node --version
```

#### Angular CLI Version
Make sure Angular CLI is installed globally:
```bash
npm install -g @angular/cli@17.3.17
```

#### Port Already in Use
If port 4200 is already in use:
```bash
ng serve --port 4300
```

#### Build Errors
Clear npm cache and reinstall dependencies:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

#### SSR Issues
For server-side rendering problems, ensure all dependencies are installed:
```bash
npm install
ng build --configuration production
```

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Create an issue in the repository
- Check the [Angular CLI Documentation](https://angular.io/cli)
- Visit [Angular Documentation](https://angular.io/)

## 🔗 Useful Links

- [Angular CLI Overview](https://angular.io/cli)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [RxJS Documentation](https://rxjs.dev/)

---

**Built with ❤️ using Angular 17**
