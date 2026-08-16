# Global Services SARL - Official Website

A modern, professional website for Global Services SARL, built with Next.js, React, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout optimized for mobile and desktop
- **Fast Performance**: Built with Next.js for optimal performance
- **Modern UI**: Clean, professional design with company colors (Blue, Red, White)
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Vercel Ready**: Configured for easy deployment on Vercel

## Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles with company colors
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Home page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero banner section
│   ├── About.tsx           # Company information
│   ├── Services.tsx        # Services showcase
│   ├── Contact.tsx         # Contact form and info
│   └── Footer.tsx          # Footer
└── components/
    └── index.ts            # Component exports
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Building for Production

```bash
npm run build
npm start
```

## Company Information

**Global Services SARL**
- Location: Lubumbashi, Haut-Katanga Province, Democratic Republic of Congo
- Email: info@globalservices.com
- Phone: +243 979 000 444 | +243 857 000 080

## Deployment

### Vercel Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy

```bash
vercel
```

## Technologies Used

- **Framework**: Next.js 16.3+
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Linting**: ESLint

## Color Scheme

- Primary Blue: `#0066cc`
- Secondary Red: `#d32f2f`
- Background White: `#ffffff`

## Features by Section

### Hero
- Company tagline and value proposition
- Call-to-action buttons
- Key statistics display

### About
- Company history and background
- Vision and Mission statements
- Core values showcase

### Services
- 6 main service categories
- Service highlights and features
- Unique selling points

### Contact
- Contact form for inquiries
- Contact information (phone, email, address)
- Company registration details

### Footer
- Quick links navigation
- Additional company information
- Social media and contact links

## Customization

Edit the content in each component file to update:
- Company information
- Service descriptions
- Contact details
- Colors (in `globals.css` and `tailwind.config.ts`)

## Performance Optimizations

- Image optimization with Next.js Image component
- Automatic code splitting
- CSS optimization with Tailwind
- Vercel edge functions support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Global Services SARL. All rights reserved.

## Support

For questions or support, contact:
- Email: info@globalservices.com
- Phone: +243 979 000 444
