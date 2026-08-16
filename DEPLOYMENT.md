# Deployment Guide - Global Services SARL Website

## Quick Start

### Option 1: Deploy to Vercel (Recommended - Free)

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/global-services.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Select your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site will be live at**: `https://your-project.vercel.app`

### Option 2: Manual Deployment

**Build the project:**
```bash
npm run build
```

**Deploy to your own server:**
```bash
npm start
```

Server runs on `http://localhost:3000`

## Environment Variables

Create `.env.local` file:
```
NEXT_PUBLIC_COMPANY_NAME=Global Services SARL
NEXT_PUBLIC_COMPANY_EMAIL=info@globalservices.com
NEXT_PUBLIC_COMPANY_PHONE_1=+243 979 000 444
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Domain Setup

1. **Purchase Domain** (e.g., www.globalservices.com)
2. **Update DNS Records** to point to Vercel:
   - CNAME: `cname.vercel-dns.com`
   - Or use Vercel's nameservers

## Performance Tips

- ✅ Already optimized with Next.js
- Images are automatically optimized
- CSS is minimized
- Code is split automatically
- Fast edge caching with Vercel

## Custom Domain on Vercel

1. Go to your project settings
2. Domains section
3. Add your domain
4. Follow DNS configuration instructions

## GitHub Actions Auto-Deploy

Edit `.github/workflows/deploy.yml` with your Vercel credentials:

```bash
# Set these secrets in GitHub repo settings:
VERCEL_TOKEN=<your-token>
VERCEL_ORG_ID=<your-org-id>
VERCEL_PROJECT_ID=<your-project-id>
```

Now every push to `main` will auto-deploy!

## Monitoring & Analytics

Add Google Analytics:
1. Get tracking ID from Google Analytics
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
   ```

## SSL/HTTPS

✅ Automatically configured on Vercel
✅ Vercel provides free SSL certificates

## Troubleshooting

**Build fails?**
- Run `npm run build` locally to debug
- Check for TypeScript errors

**Styles not loading?**
- Clear `.next` folder: `rm -rf .next`
- Run `npm run build` again

**Slow performance?**
- Check Vercel Analytics dashboard
- Optimize images if needed

## Support & Contact

- **Company Email**: info@globalservices.com
- **Phone**: +243 979 000 444
- **GitHub**: Your repository URL

## Recommended Next Steps

1. ✅ Set up GitHub repository
2. ✅ Connect to Vercel
3. ✅ Add custom domain
4. ✅ Set up analytics
5. ✅ Configure email for contact form

## Cost

- **Vercel Hosting**: Free for most use cases
- **Custom Domain**: ~$10-15/year
- **Email Service** (optional): Varies by provider

For production-grade contact form handling, consider:
- Mailgun
- SendGrid
- Formspree

## Security

- ✅ Built-in CSRF protection
- ✅ Secure headers configured
- ✅ No sensitive data in frontend code
- ✅ Environment variables for secrets
