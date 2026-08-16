# Customization Guide - Global Services SARL Website

## Easy Customizations

### 1. Update Company Information

**File**: `src/app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: "Global Services SARL - Your Title Here",
  description: "Your description here",
};
```

### 2. Change Colors

**File**: `src/app/globals.css`
```css
:root {
  --gs-blue: #0066cc;      /* Change primary blue */
  --gs-red: #d32f2f;       /* Change primary red */
  --gs-white: #ffffff;     /* Change white */
}
```

**File**: `tailwind.config.ts`
Add custom colors to extend theme

### 3. Update Hero Section

**File**: `src/components/Hero.tsx`
- Line 9: Main heading text
- Line 14: Description text
- Line 18: Button text

### 4. Modify Services

**File**: `src/components/Services.tsx`
- Update the `services` array (lines 3-22)
- Add/remove service categories
- Change icons (use emoji or React icons)

### 5. Change Contact Information

**File**: `src/components/Contact.tsx`
- Lines 32-50: Update contact details
- Line 60: Update company info box with real registration numbers

### 6. Update Footer

**File**: `src/components/Footer.tsx`
- Lines 14-20: Company description
- Lines 23-28: Quick links
- Lines 31-36: Services links
- Lines 39-46: Contact info

### 7. Add Navigation Links

**File**: `src/components/Header.tsx`
- Add/remove menu items in the navigation array
- Update scroll sections with IDs

## Adding Features

### Add a Blog Section

1. Create `src/components/Blog.tsx`
2. Add it to `src/app/page.tsx`
3. Create blog posts folder

### Add Testimonials

Create `src/components/Testimonials.tsx`:
```typescript
export default function Testimonials() {
  const testimonials = [
    { name: "Client Name", text: "Great service!", company: "Company" },
    // Add more...
  ];
  
  return (
    <section className="py-20">
      {testimonials.map(t => (
        <div key={t.name}>
          <p>{t.text}</p>
          <p>{t.name} - {t.company}</p>
        </div>
      ))}
    </section>
  );
}
```

### Add Image/Logo

1. Place images in `public/` folder
2. Import in components:
```typescript
import Image from "next/image";

<Image 
  src="/logo.png" 
  alt="Logo" 
  width={100} 
  height={100} 
/>
```

## Form Integration

### Contact Form Backend

**Option 1: Formspree (Free)**
1. Go to formspree.io
2. Create form
3. Update form action in `Contact.tsx`

**Option 2: Create API Route**

Create `src/app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json();
  // Send email here
  return Response.json({ success: true });
}
```

Then update Contact.tsx:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

## Styling Tips

### Add Custom Fonts

In `src/app/layout.tsx`:
```typescript
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400" });
```

### Create New Component

```typescript
// src/components/MyComponent.tsx
export default function MyComponent() {
  return (
    <div className="bg-white p-8 rounded-lg shadow">
      {/* Content */}
    </div>
  );
}
```

### Use Company Colors

In any component:
```typescript
<button className="bg-blue-600">Blue Button</button>
<button className="bg-red-600">Red Button</button>
```

## Performance Tips

1. **Lazy Load Images**: Use Next.js Image component
2. **Code Splitting**: Automatic with Next.js
3. **Minification**: Automatic build process
4. **SEO**: Update metadata in each page/component

## Common Changes

### Update Phone Number
- Header.tsx
- Contact.tsx  
- Footer.tsx
- layout.tsx metadata

### Update Email
- Contact.tsx
- Footer.tsx
- layout.tsx metadata

### Change Site Tagline
- Hero.tsx (line 10)
- Footer.tsx (line 79)

### Add Social Media Links

In Footer.tsx, add:
```typescript
<div className="flex gap-4">
  <a href="https://facebook.com/globalservices">Facebook</a>
  <a href="https://linkedin.com/company/global-services">LinkedIn</a>
</div>
```

## File Structure Reference

```
src/
├── app/
│   ├── globals.css           ← Global styles & colors
│   ├── layout.tsx            ← Main layout & metadata
│   ├── page.tsx              ← Home page
│   └── favicon.ico           ← Browser tab icon
├── components/
│   ├── Header.tsx            ← Navigation
│   ├── Hero.tsx              ← Hero banner
│   ├── About.tsx             ← About section
│   ├── Services.tsx          ← Services showcase
│   ├── Contact.tsx           ← Contact form
│   ├── Footer.tsx            ← Footer
│   └── index.ts              ← Exports
├── next.config.ts            ← Next.js config
└── tailwind.config.ts        ← Tailwind config

public/
├── images/                   ← Add your images here
└── documents/                ← Add PDFs, etc.
```

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev

## Testing Changes Locally

```bash
npm run dev
```

Visit http://localhost:3000 and make changes - they'll hot-reload!

## Before Deploying

1. Test all links
2. Check mobile responsiveness
3. Verify contact form works
4. Check all images load
5. Test on different browsers
6. Run build: `npm run build`
