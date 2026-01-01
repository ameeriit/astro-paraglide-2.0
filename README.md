# 🌍 Astro Paraglide - Multilingual Web App

A beautiful, modern, and fully internationalized Astro application featuring dynamic language routing, stunning UI components, and seamless localization powered by Paraglide.

## ✨ Features

- 🌐 **Full Internationalization** - Built-in i18n support with Paraglide
- 🎨 **Modern UI Design** - Beautiful gradient backgrounds with glassmorphism effects
- ⚡ **Lightning Fast** - Astro's zero-JS by default architecture
- 🔄 **Dynamic Language Routing** - Automatic locale detection and routing
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🎭 **Smooth Animations** - Eye-catching transitions and hover effects
- ♿ **Accessible** - Respects user motion preferences
- 🎯 **Type-Safe Routes** - Centralized route management with TypeScript

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   ├── assets/              # Images and static assets
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/          # Reusable components
│   │   ├── LanguageSwitcher.astro
│   │   └── Welcome.astro
│   ├── layouts/             # Page layouts
│   │   └── Layout.astro
│   ├── pages/               # File-based routing
│   │   ├── index.astro      # Root page (redirects)
│   │   └── [lang]/          # Localized pages
│   │       ├── index.astro  # Home page
│   │       ├── about.astro  # About page
│   │       └── contact.astro # Contact page
│   ├── paraglide/           # Generated i18n runtime (auto-generated)
│   │   ├── messages.js
│   │   ├── runtime.js
│   │   └── messages/
│   ├── routes/              # Route definitions
│   │   └── routes.ts        # Centralized route management
│   └── middleware.ts        # Language detection middleware
├── messages/                # Translation files
│   ├── en.json              # English translations
│   └── de.json              # German translations
├── project.inlang/          # Inlang configuration
│   └── settings.json
└── package.json
```

## 🎯 Available Pages

- **Home** (`/` or `/{lang}`) - Landing page with features showcase
- **About** (`/{lang}/about`) - Company information and statistics
- **Contact** (`/{lang}/contact`) - Contact form and information

## 🌐 Supported Languages

- 🇺🇸 English (`en`) - Base locale
- 🇩🇪 German (`de`)

## 🧞 Commands

All commands are run from the root of the project:

| Command                    | Action                                              |
| :------------------------- | :-------------------------------------------------- |
| `pnpm install`             | Install dependencies                                |
| `pnpm dev`                 | Start local dev server at `localhost:4321`          |
| `pnpm build`               | Build production site to `./dist/`                  |
| `pnpm preview`             | Preview build locally before deploying              |
| `pnpm astro ...`           | Run CLI commands like `astro add`, `astro check`    |
| `pnpm astro -- --help`     | Get help using the Astro CLI                        |
| `pnpm check`               | Run type checking and linting                       |

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd astro-paraglide-2.0
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 🔧 Configuration

### Adding a New Language

1. **Add translation file** in `messages/` directory:
   ```json
   // messages/fr.json
   {
     "welcome_message": "Bienvenue sur Astro",
     "read_docs": "Lire la documentation"
   }
   ```

2. **Update Inlang settings** in `project.inlang/settings.json`:
   ```json
   {
     "languageTags": ["en", "de", "fr"]
   }
   ```

3. **Restart dev server** - Paraglide will auto-generate the necessary runtime files

### Managing Routes

Routes are centralized in `src/routes/routes.ts`:

```typescript
import { getLocale } from '../paraglide/runtime';

const loc = (route: string) => {
  return `/${getLocale()}${route}`;
};

const getRoutes = () => ({
  home: loc(''),
  about: loc('/about'),
  contact: loc('/contact'),
  // Add more routes here
});

export default getRoutes;
```

**Usage in components:**

```astro
---
import getRoutes from "../routes/routes";
const routes = getRoutes();
---

<a href={routes.about}>About</a>
<a href={routes.contact}>Contact</a>
```

## 🎨 UI Features

### Animated Background
All pages feature a beautiful animated gradient background with floating orbs:
- Purple to violet gradient base
- Three animated gradient orbs
- Smooth floating animations

### Glassmorphism Design
Modern glass-effect cards with:
- Backdrop blur effects
- Semi-transparent backgrounds
- Subtle borders
- Smooth hover transitions

### Interactive Elements
- Hover animations on buttons and cards
- Smooth page transitions
- Icon animations
- Responsive design

## 🌍 Internationalization (i18n)

This project uses **Paraglide** for internationalization:

### How It Works

1. **Translation Files** - Messages are stored in `messages/{lang}.json`
2. **Auto-Generation** - Paraglide generates type-safe message functions
3. **Runtime Detection** - Locale is detected from URL, cookies, or browser preferences
4. **Dynamic Routing** - All routes are automatically localized

### Using Translations

```astro
---
import * as m from "../paraglide/messages";
---

<h1>{m.welcome_message()}</h1>
<button>{m.read_docs()}</button>
```

### Language Switching

The `LanguageSwitcher` component allows users to switch languages:

```astro
<LanguageSwitcher />
```

## 📝 Adding New Pages

1. **Create page file** in `src/pages/[lang]/`:
   ```astro
   // src/pages/[lang]/services.astro
   ---
   import Layout from "../../layouts/Layout.astro";
   import getRoutes from "../../routes/routes";
   
   const routes = getRoutes();
   ---
   
   <Layout>
     <!-- Your content -->
   </Layout>
   ```

2. **Add route** to `src/routes/routes.ts`:
   ```typescript
   const getRoutes = () => ({
     home: loc(''),
     about: loc('/about'),
     contact: loc('/contact'),
     services: loc('/services'), // New route
   });
   ```

3. **Add translations** to language files:
   ```json
   // messages/en.json
   {
     "services_title": "Our Services"
   }
   ```

## 🎯 Best Practices

### Route Localization
Always use the `getRoutes()` function for internal links:
```astro
✅ Good: <a href={routes.about}>About</a>
❌ Bad:  <a href="/about">About</a>
```

### Translation Messages
Import messages and use them instead of hardcoded text:
```astro
✅ Good: <h1>{m.welcome_message()}</h1>
❌ Bad:  <h1>Welcome to Astro</h1>
```

### Component Localization
Call `getRoutes()` in component frontmatter to ensure runtime locale detection:
```astro
---
import getRoutes from "../routes/routes";
const routes = getRoutes(); // Called at render time
---
```

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

This generates a static site in the `dist/` directory.

### Environment Variables

No environment variables are required for basic functionality.

### Hosting Recommendations

- **Vercel** - Zero-config deployment
- **Netlify** - Automatic builds
- **Cloudflare Pages** - Global CDN
- **GitHub Pages** - Free hosting

## 📚 Tech Stack

- **[Astro](https://astro.build)** - Web framework
- **[Paraglide](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)** - i18n library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **CSS** - Custom styling with animations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Astro Documentation](https://docs.astro.build)
- [Paraglide Documentation](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)
- [Astro Discord](https://astro.build/chat)

## 💡 Tips

- Use `pnpm check` to run type checking before committing
- The language switcher respects the current page context
- All animations respect `prefers-reduced-motion` for accessibility
- Routes are generated at runtime for proper locale detection

---

Built with ❤️ using Astro and Paraglide
