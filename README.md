# 🛒 Fresh Cart - Modern E-commerce Application

A modern, responsive e-commerce application built with Angular 17, featuring a clean UI, server-side rendering (SSR), and a component-based architecture.

## 🚀 Features

- **Modern Angular 17** with standalone components
- **Server-Side Rendering (SSR)** for better SEO and performance
- **Responsive Design** with Bootstrap 5
- **Component-based Architecture** with reusable layouts
- **Font Awesome Icons** for enhanced UI
- **TypeScript** for type safety
- **SCSS** for advanced styling
- **Authentication Layouts** for login/register flows
- **Product Management** with categories and brands
- **Shopping Cart** functionality
- **Mobile-First Design**

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
│   ├── core/               # Core services and guards
│   ├── app.component.*     # Root component
│   ├── app.config.*        # Application configuration
│   └── app.routes.ts       # Routing configuration
├── assets/                 # Static assets
│   └── images/            # Application images
├── styles.scss            # Global styles
└── index.html             # Main HTML file
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
- **Bootstrap 5.3.7** for responsive design
- **Font Awesome 6.7.2** for icons
- **Custom SCSS** variables and mixins
- **Google Fonts** (Encode Sans Expanded)

### Custom CSS Variables
```scss
:root {
  --main-color: #0aad0a;
  --light-color: #f0f3f2;
}
```

## 📦 Dependencies

### Main Dependencies
- `@angular/core`: ^17.3.0
- `@angular/router`: ^17.3.0
- `@angular/forms`: ^17.3.0
- `bootstrap`: ^5.3.7
- `@fortawesome/fontawesome-free`: ^6.7.2
- `rxjs`: ~7.8.0

### Development Dependencies
- `@angular/cli`: ^17.3.17
- `typescript`: ~5.4.2
- `karma`: ~6.4.0
- `jasmine-core`: ~5.1.0

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
- Development: `src/environments/environment.ts`
- Production: `src/environments/environment.prod.ts`

### Angular Configuration
- Main config: `angular.json`
- TypeScript: `tsconfig.json`
- Testing: `tsconfig.spec.json`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

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
