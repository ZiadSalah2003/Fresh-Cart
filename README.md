# 🛒 Fresh Cart - Modern E-commerce Application

A modern, responsive e-commerce application built with Angular 17, featuring a clean UI, server-side rendering (SSR), and a component-based architecture.

## 🚀 Features

- **Modern Angular 17** with standalone components
- **Server-Side Rendering (SSR)** for better SEO and performance
- **Responsive Design** with Bootstrap 5.3.7
- **Component-based Architecture** with reusable layouts
- **Font Awesome Icons 6.7.2** for enhanced UI
- **TypeScript** for type safety and comprehensive interfaces
- **SCSS** for advanced styling with custom CSS variables
- **JWT Authentication** with secure token management
- **Route Guards** for authentication and authorization
- **Authentication Layouts** for login/register flows
- **Product Management** with categories, brands, and detailed views
- **Shopping Cart** functionality with real-time updates
- **Order Management** with checkout and order history
- **API Integration** with comprehensive product and authentication services
- **Internationalization (i18n)** with English and Arabic support
- **RTL/LTR Layout Support** for multilingual experience
- **Search Functionality** with custom pipes
- **Loading States** with NgX-Spinner integration
- **Toast Notifications** with NgX-Toastr
- **Carousel Components** with NgX-Owl-Carousel
- **Interceptors** for headers, errors, and loading management
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
- JWT token management with automatic decoding
- User data decoding and storage
- Logout functionality with token cleanup
- Password reset and email verification
- Route protection integration

#### ProductsService (`src/app/core/services/products.service.ts`)
- Fetch all products from API
- Get specific product details by ID
- Product data management and caching

#### CartService (`src/app/core/services/cart.service.ts`)
- Add products to cart with quantity management
- Get cart contents and total price calculation
- Update product quantities in cart
- Remove specific items from cart
- Clear entire cart functionality
- Real-time cart counter with BehaviorSubject

#### CategoriesService (`src/app/core/services/categories.service.ts`)
- Fetch all available categories
- Get specific category details by ID
- Category-based product filtering

#### OrdersService (`src/app/components/services/orders.service.ts`)
- Checkout session management
- Order processing with Stripe integration
- Shipping details handling

#### MytranslateService (`src/app/core/services/mytranslate.service.ts`)
- Language switching between English and Arabic
- RTL/LTR layout direction management
- Persistent language preference storage
- Dynamic document direction updates

### Guards
#### AuthGuard (`src/app/core/guards/auth.guard.ts`)
- Protects routes requiring authentication
- Redirects unauthenticated users to login
- Validates JWT token presence and validity

#### LoggedGuard (`src/app/core/guards/loged.guard.ts`)
- Prevents authenticated users from accessing auth pages
- Redirects logged-in users to home page
- Optimizes user experience by avoiding unnecessary auth flows

### Interceptors
#### HeaderInterceptor (`src/app/core/interceptors/header.interceptor.ts`)
- Automatically adds authorization headers to API requests
- Manages JWT token attachment for authenticated requests

#### ErrorsInterceptor (`src/app/core/interceptors/errors.interceptor.ts`)
- Global error handling for HTTP requests
- User-friendly error message display
- Automatic error logging and debugging

#### LoadingInterceptor (`src/app/core/interceptors/loading.interceptor.ts`)
- Shows loading spinner during API calls
- Automatic spinner management with NgX-Spinner
- Improves user experience with visual feedback

### Interfaces
#### IProduct (`src/app/core/interfaces/iproduct.ts`)
- Comprehensive product data structure
- Includes pricing, images, categories, brands, and ratings
- Type safety for product-related operations

#### ICart (`src/app/core/interfaces/icart.ts`)
- Shopping cart structure with product details
- Cart item count and pricing information
- Product quantity and total price calculations

#### ICategory (`src/app/core/interfaces/icategory.ts`)
- Category data structure with images and metadata
- Hierarchical category organization support

### Custom Pipes
#### SearchPipe (`src/app/core/pipes/search.pipe.ts`)
- Real-time product search functionality
- Filters products based on multiple criteria
- Case-insensitive search across object properties

#### SalePipe (`src/app/core/pipes/sale.pipe.ts`)
- Formats and displays sale information
- Adds "onSale" prefix to product descriptions

#### TermTextPipe (`src/app/core/pipes/termtext.pipe.ts`)
- Truncates long text descriptions
- Improves UI readability with text limits

### Routing Structure
- **Auth Layout**: Login, registration, and password reset pages
- **Blank Layout**: Main application pages (home, products, cart, orders, etc.)
- **Route Guards**: Automatic redirection based on authentication status
- **Protected Routes**: Cart, orders, and user-specific pages require authentication
- **Public Routes**: Product browsing, categories, and brands accessible to all users

#### Main Routes
```typescript
// Auth Routes (unauthenticated users)
/login          - User login page
/register       - User registration page  
/forget         - Password reset page

// Protected Routes (authenticated users)
/home           - Main dashboard with featured products
/products       - All products listing page
/cart           - Shopping cart management
/brands         - Brand listing and filtering
/categories     - Category browsing and filtering
/details/:id    - Product detail page with full information
/orders/:id     - Specific order details and tracking
/allorders      - Order history and management

// Universal Route
/**             - 404 Not Found page for invalid routes
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/              # Reusable components
│   │   ├── allorders/          # Order history and management component
│   │   ├── brands/             # Brand listing and filtering component
│   │   ├── cart/               # Shopping cart with CRUD operations
│   │   ├── categories/         # Category listing and navigation component
│   │   ├── detail/             # Product detail view with full information
│   │   ├── footer/             # Application footer component
│   │   ├── forget/             # Password reset functionality
│   │   │   └── forgetpassword/ # Password reset form component
│   │   ├── home/               # Home page with featured products and carousels
│   │   ├── login/              # User authentication component
│   │   ├── nav-auth/           # Navigation for authentication pages
│   │   ├── nav-blank/          # Main navigation with cart counter and language switcher
│   │   ├── notfound/           # 404 error page component
│   │   ├── orders/             # Individual order details and tracking
│   │   ├── product/            # Product listing and grid component
│   │   ├── register/           # User registration component
│   │   └── services/           # Component-specific services
│   │       └── orders.service.ts # Order management service
│   ├── layouts/                # Layout components
│   │   ├── auth-layout/        # Layout wrapper for authentication pages
│   │   └── blank-layout/       # Main application layout with navigation
│   ├── core/                   # Core application logic
│   │   ├── environments/       # Environment configurations (dev/prod)
│   │   ├── guards/             # Route protection guards
│   │   │   ├── auth.guard.ts   # Authentication guard for protected routes
│   │   │   └── loged.guard.ts  # Prevents authenticated users from auth pages
│   │   ├── interceptors/       # HTTP interceptors
│   │   │   ├── header.interceptor.ts   # Adds auth headers to requests
│   │   │   ├── errors.interceptor.ts   # Global error handling
│   │   │   └── loading.interceptor.ts  # Loading state management
│   │   ├── interfaces/         # TypeScript type definitions
│   │   │   ├── iproduct.ts     # Product data structure
│   │   │   ├── icart.ts        # Shopping cart data structure
│   │   │   └── icategory.ts    # Category data structure
│   │   ├── pipes/              # Custom Angular pipes
│   │   │   ├── search.pipe.ts  # Product search functionality
│   │   │   ├── sale.pipe.ts    # Sale formatting pipe
│   │   │   └── termtext.pipe.ts # Text truncation pipe
│   │   └── services/           # Application-wide services
│   │       ├── auth.service.ts       # Authentication and user management
│   │       ├── cart.service.ts       # Shopping cart operations
│   │       ├── categories.service.ts # Category data management
│   │       ├── products.service.ts   # Product data and API calls
│   │       └── mytranslate.service.ts # Internationalization service
│   ├── app.component.*         # Root application component
│   ├── app.config.*           # Global application configuration and providers
│   └── app.routes.ts          # Application routing configuration
├── assets/                    # Static assets and resources
│   ├── i18n/                 # Internationalization translation files
│   │   ├── en.json           # English translations
│   │   └── ar.json           # Arabic translations
│   └── images/               # Application images, icons, and graphics
│       ├── freshcart-logo.svg # Application logo
│       ├── slider-*.jpeg     # Homepage carousel images
│       ├── banner-*.jpeg     # Promotional banners
│       └── *.png|*.webp      # Payment icons and UI graphics
├── styles.scss               # Global styles, CSS variables, and theme
├── index.html                # Main HTML template
├── main.ts                   # Client-side application entry point
├── main.server.ts            # Server-side rendering entry point
└── favicon.ico               # Application favicon
```
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

## � Internationalization (i18n)

The application supports multiple languages with full RTL/LTR layout switching:

### Supported Languages
- **English (EN)** - Left-to-Right layout
- **Arabic (AR)** - Right-to-Left layout

### Features
- **Dynamic Language Switching** - Change language without page reload
- **Persistent Language Preference** - User's language choice saved in localStorage
- **RTL/LTR Layout Support** - Automatic layout direction change
- **Translation Files** - JSON-based translation management
  - `src/assets/i18n/en.json` - English translations
  - `src/assets/i18n/ar.json` - Arabic translations

### Usage
```typescript
// In components, use the translate pipe
{{ 'navbar.categories' | translate }}
{{ 'navbar.brands' | translate }}
{{ 'navbar.lang' | translate }}

// Language switching
changeLanguage(lang: string) {
  this._mytranslateService.changeLang(lang);
}
```

## �🎨 Styling & Theming

The application uses a modern, responsive design system:

### Design Framework
- **Bootstrap 5.3.7** - Responsive grid system and components
- **Font Awesome 6.7.2** - Comprehensive icon library
- **Custom SCSS** - Advanced styling with variables and mixins
- **Google Fonts** - Encode Sans Expanded for consistent typography

### UI Components
- **Responsive Carousels** - Product showcases with NgX-Owl-Carousel
- **Loading States** - Elegant spinners with NgX-Spinner
- **Toast Notifications** - User feedback with NgX-Toastr
- **Interactive Elements** - Hover effects and smooth transitions

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
- **Hover Effects** - Interactive product cards with smooth transitions
- **Responsive Grid Layouts** - Adaptive product displays for all screen sizes
- **Custom Button Styles** - Branded buttons with hover and active states
- **Active Navigation Links** - Visual feedback for current page location
- **Loading Animations** - Elegant loading states during API calls
- **Cart Counter Badge** - Real-time cart item count display
- **Language Indicator** - Visual feedback for current language selection

### Theme Customization
The application uses CSS custom properties for easy theme customization:
- **Primary Colors** - Brand colors for buttons and highlights
- **Typography** - Consistent font families and sizing
- **Spacing** - Standardized margins and padding
- **Shadows** - Consistent depth and elevation effects

## 📦 Dependencies

### Main Dependencies
- `@angular/core`: ^17.3.0 - Core Angular framework
- `@angular/router`: ^17.3.0 - Angular routing and navigation
- `@angular/forms`: ^17.3.0 - Angular reactive and template-driven forms
- `@angular/platform-server`: ^17.3.0 - Server-side rendering support
- `@angular/ssr`: ^17.3.17 - Angular Universal SSR package
- `bootstrap`: ^5.3.7 - CSS framework for responsive design
- `@fortawesome/fontawesome-free`: ^6.7.2 - Icon library with extensive icons
- `express`: ^4.18.2 - Node.js web framework for SSR server
- `jwt-decode`: ^4.0.0 - JWT token decoding for authentication
- `rxjs`: ~7.8.0 - Reactive programming library for async operations
- `zone.js`: ~0.14.3 - Execution context tracking for Angular

#### UI and UX Libraries
- `ngx-owl-carousel-o`: ^17.0.0 - Responsive carousel component
- `ngx-spinner`: ^17.0.0 - Loading spinner with customizable animations
- `ngx-toastr`: ^19.0.0 - Toast notification system

#### Internationalization
- `@ngx-translate/core`: ^16.0.4 - Angular internationalization core
- `@ngx-translate/http-loader`: ^16.0.1 - HTTP loader for translation files

### Development Dependencies
- `@angular/cli`: ^17.3.17 - Angular command line interface
- `@angular-devkit/build-angular`: ^17.3.17 - Angular build tools
- `typescript`: ~5.4.2 - TypeScript compiler
- `karma`: ~6.4.0 - Test runner
- `jasmine-core`: ~5.1.0 - Testing framework

## ⚡ Performance Features

### Optimization Techniques
- **Server-Side Rendering (SSR)** - Faster initial page loads and better SEO
- **Lazy Loading** - Code splitting for optimal bundle sizes
- **HTTP Interceptors** - Efficient request/response handling
- **BehaviorSubject** - Real-time data updates without unnecessary API calls
- **OnPush Change Detection** - Optimized component rendering
- **Image Optimization** - Responsive images with proper formats

### Loading States
- **Global Loading Spinner** - Visual feedback during API operations
- **Component-level Loading** - Granular loading states for better UX
- **Error Handling** - Graceful error recovery with user notifications

## � Security Features

### Authentication Security
- **JWT Token Management** - Secure token storage and automatic refresh
- **Route Protection** - Comprehensive guard system for sensitive routes
- **HTTP Headers** - Automatic authorization header management
- **Session Management** - Secure login/logout with complete token cleanup

### Data Protection
- **TypeScript Interfaces** - Strong typing prevents data corruption
- **Input Validation** - Client-side form validation
- **Error Handling** - Secure error messages without sensitive data exposure

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
The application integrates with a comprehensive RESTful API for:

#### Authentication Endpoints
- **User Registration**: `POST /api/v1/auth/signup`
- **User Login**: `POST /api/v1/auth/signin`
- **Password Reset Request**: `POST /api/v1/auth/forgotPasswords`
- **Reset Code Verification**: `POST /api/v1/auth/verifyResetCode`
- **Password Reset**: `PUT /api/v1/auth/resetPassword`

#### Product Management
- **Get All Products**: `GET /api/v1/products`
- **Get Product Details**: `GET /api/v1/products/{id}`
- **Get All Categories**: `GET /api/v1/categories`
- **Get Category Details**: `GET /api/v1/categories/{id}`

#### Shopping Cart Operations
- **Add to Cart**: `POST /api/v1/cart`
- **Get Cart Contents**: `GET /api/v1/cart`
- **Update Item Quantity**: `PUT /api/v1/cart/{id}`
- **Remove Cart Item**: `DELETE /api/v1/cart/{id}`
- **Clear Cart**: `DELETE /api/v1/cart`

#### Order Management
- **Checkout Session**: `POST /api/v1/orders/checkout-session/{cartId}`
- **Order Tracking**: Integration with payment providers

**Base URL**: `https://ecommerce.routemisr.com`

### Authentication System
- **JWT Token-based Authentication**: Secure token management with automatic renewal
- **Local Storage Persistence**: User sessions maintained across browser sessions
- **Route Guards Protection**: Automatic redirects based on authentication state
- **Secure Login/Logout**: Complete session management with token cleanup
- **Password Recovery**: Multi-step password reset with email verification

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
Make sure Angular CLI matches the project version:
```bash
npm install -g @angular/cli@17.3.17
ng version
```

#### Package Version Conflicts
If you encounter dependency conflicts:
```bash
npm ls --depth=0
npm audit fix
```

#### TypeScript Compilation Issues
Ensure TypeScript version compatibility:
```bash
npx tsc --version
npm install typescript@~5.4.2
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

#### Translation and i18n Issues
For internationalization problems:
```bash
# Check translation files exist
ls src/assets/i18n/
# Verify translation service
ng build --configuration development
```

#### Cart and Authentication Issues
If cart counter or login doesn't work:
```bash
# Check localStorage and clear if needed
localStorage.clear()
# Verify API endpoints
curl -X GET https://ecommerce.routemisr.com/api/v1/products
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
- [Angular Universal SSR](https://angular.io/guide/universal)
- [Bootstrap 5.3 Documentation](https://getbootstrap.com/docs/5.3/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [RxJS Documentation](https://rxjs.dev/)
- [NgX-Translate Documentation](https://github.com/ngx-translate/core)
- [NgX-Spinner Documentation](https://www.npmjs.com/package/ngx-spinner)
- [NgX-Toastr Documentation](https://www.npmjs.com/package/ngx-toastr)
- [JWT Decode Library](https://www.npmjs.com/package/jwt-decode)

## 📈 Project Status

- ✅ **Authentication System** - Complete with JWT and guards
- ✅ **Product Management** - Full CRUD operations with API integration
- ✅ **Shopping Cart** - Real-time cart management with persistent storage
- ✅ **Internationalization** - English and Arabic with RTL support
- ✅ **Responsive Design** - Mobile-first approach with Bootstrap 5
- ✅ **Order Management** - Checkout and order tracking functionality
- ✅ **Error Handling** - Comprehensive error management with user feedback
- ✅ **Loading States** - Visual feedback for all async operations
- ✅ **Search & Filtering** - Product search with custom pipes
- ✅ **SSR Implementation** - Server-side rendering for better performance

## 🏷️ Version Information

- **Angular**: 17.3.0
- **Node.js**: 18.18.0+ required
- **Bootstrap**: 5.3.7
- **TypeScript**: 5.4.2
- **Project Version**: 0.0.0

---

**Built with ❤️ using Angular 17 | Fresh Cart E-commerce Solution**
