# Sankalpa Catering Website

A beautiful, fully responsive website for authentic South Indian catering services, featuring chutney pudis, traditional laddus, and vegetarian catering options.

## 🌟 Features

- **Modern Design**: Clean, professional design matching your brand colors
- **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **WhatsApp Integration**: Direct ordering and inquiry via WhatsApp
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Structured for search engine visibility
- **Smooth Animations**: Professional scroll and hover effects
- **Product Showcase**: Beautiful product cards with categories
- **Catering Services**: Dedicated section for event catering
- **Contact Information**: Easy-to-find contact details

## 📁 Project Structure

```
sankalpa-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Your product images (add your images here)
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Open Locally (Immediate Preview)

1. Download all files
2. Double-click `index.html`
3. Opens in your browser!

### Option 2: Use a Local Server (Recommended for Testing)

```bash
# If you have Python installed:
python -m http.server 8000

# Or use Node.js:
npx serve

# Then open: http://localhost:8000
```

## 🌐 Deployment Options

### Option 1: Netlify (FREE - Recommended)

**Steps:**
1. Go to [netlify.com](https://www.netlify.com)
2. Sign up (free)
3. Drag and drop your `sankalpa-website` folder
4. Done! Your site is live
5. Get URL like: `sankalpa-catering.netlify.app`

**Add Custom Domain:**
1. Buy `sankalpacatering.com` from Namecheap
2. In Netlify: Site settings → Domain management
3. Add custom domain
4. Update DNS at Namecheap (Netlify provides instructions)

### Option 2: Vercel (FREE)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project folder
cd sankalpa-website

# Deploy
vercel

# Follow prompts
```

### Option 3: GitHub Pages (FREE)

1. Create GitHub account
2. Create repository: `sankalpa-catering`
3. Upload all files
4. Go to Settings → Pages
5. Enable GitHub Pages
6. Site live at: `username.github.io/sankalpa-catering`

### Option 4: Traditional Web Hosting

**Recommended Indian Hosts:**
- Hostinger India (₹149/month)
- BigRock (₹99/month)
- Bluehost India (₹199/month)

**Steps:**
1. Purchase hosting + domain
2. Access cPanel/File Manager
3. Upload all files to `public_html`
4. Done!

## ✏️ Customization Guide

### Update Contact Information

**In `index.html`, find and replace:**

```html
<!-- Phone Number -->
+91 98765 43210  →  YOUR ACTUAL NUMBER

<!-- Email -->
info@sankalpacatering.com  →  YOUR EMAIL

<!-- Location -->
Chennai, Tamil Nadu  →  YOUR LOCATION

<!-- WhatsApp Number (IMPORTANT: No spaces, no +) -->
919876543210  →  91XXXXXXXXXX
```

**Quick find & replace locations:**
1. Line ~370: Phone/WhatsApp card
2. Line ~380: Email card
3. Line ~390: Location card
4. Line ~410: WhatsApp button link
5. Line ~550: Footer contact info
6. Line ~600: WhatsApp floating button

### Update Colors (Optional)

**In `css/styles.css`, find `:root` section:**

```css
:root {
    --color-primary: #FF5722;     /* Main orange */
    --color-secondary: #FFF3E0;   /* Light beige */
    --color-accent: #4CAF50;      /* Green */
    --color-brown: #3E2723;       /* Dark brown */
    /* Modify these to match your brand */
}
```

### Add Your Product Images

1. Add images to `images/products/` folder
2. Update `index.html` product cards:

```html
<!-- Find this: -->
<div class="product-image-placeholder">🌶️</div>

<!-- Replace with: -->
<img src="images/products/gun-powder.jpg" alt="Gun Powder">
```

**Recommended image sizes:**
- Product images: 800x800px (square)
- Hero image: 1920x1080px (landscape)
- Logo: 200x200px (transparent PNG)

### Update Logo

1. Save your logo as `images/logo.png`
2. In `index.html`, find line ~20:

```html
<!-- Replace the SVG with: -->
<img src="images/logo.png" alt="Sankalpa Catering" class="logo-icon">
```

## 📱 WhatsApp Configuration

### Update WhatsApp Number

**CRITICAL: Format correctly!**

❌ **WRONG:**
- `+91 98765 43210` (has + and spaces)
- `91-98765-43210` (has dashes)

✅ **CORRECT:**
- `919876543210` (country code + number, no symbols)

**All WhatsApp links in the code:**

```javascript
// In index.html and script.js:
https://wa.me/919876543210  →  https://wa.me/91XXXXXXXXXX

// Pre-filled message (optional):
?text=Hi!%20I'm%20interested%20in%20Sankalpa%20Catering
```

### Test WhatsApp Links

1. Open website on mobile
2. Click WhatsApp button
3. Should open WhatsApp with your number
4. Message should be pre-filled

## 🎨 Adding Real Product Images

### Step 1: Prepare Images

**Tools for image optimization:**
- [TinyPNG](https://tinypng.com) - Compress images
- [Squoosh](https://squoosh.app) - Resize and compress
- [Remove.bg](https://remove.bg) - Remove backgrounds

**Recommended specs:**
- Format: JPG or WebP
- Size: 800x800px (products), 1920x1080px (hero)
- File size: Under 200KB each
- Quality: 80-85%

### Step 2: Upload Images

Create folder structure:
```
images/
├── logo.png
├── hero-bg.jpg
└── products/
    ├── gun-powder.jpg
    ├── sambar-podi.jpg
    ├── rasam-podi.jpg
    ├── besan-laddu.jpg
    └── ...
```

### Step 3: Update HTML

```html
<!-- Before (placeholder): -->
<div class="product-image" style="background: linear-gradient(...);">
    <div class="product-image-placeholder">🌶️</div>
</div>

<!-- After (real image): -->
<div class="product-image">
    <img src="images/products/gun-powder.jpg" alt="Gun Powder Chutney Pudi">
</div>
```

## 🔧 Advanced Customizations

### Add Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking code
3. Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add Facebook Pixel

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

### Add Contact Form

Add this after the contact cards in `index.html`:

```html
<div class="contact-form-section">
    <h3>Send us a Message</h3>
    <form id="contactForm" class="contact-form">
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="email" name="email" placeholder="Your Email" required>
        <input type="tel" name="phone" placeholder="Your Phone">
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
</div>
```

Form handling options:
- [Formspree](https://formspree.io) - Free, easy integration
- [Netlify Forms](https://www.netlify.com/products/forms/) - Free with Netlify
- [EmailJS](https://www.emailjs.com) - Send emails from client-side

## 🔍 SEO Optimization

### Update Meta Tags

In `index.html` `<head>` section:

```html
<!-- Title -->
<title>Sankalpa Catering | Authentic South Indian Chutney Pudis & Catering Chennai</title>

<!-- Description -->
<meta name="description" content="Order authentic South Indian chutney pudis, homemade laddus, and book vegetarian catering in Chennai. 100% pure ingredients, Jain-friendly options available.">

<!-- Keywords -->
<meta name="keywords" content="chutney pudi Chennai, gun powder podi, vegetarian catering Chennai, Jain catering, South Indian catering, traditional laddus, sambar podi">

<!-- Open Graph (for social media sharing) -->
<meta property="og:title" content="Sankalpa Catering - Authentic South Indian Flavors">
<meta property="og:description" content="Authentic South Indian chutney pudis and vegetarian catering services in Chennai">
<meta property="og:image" content="https://yourdomain.com/images/og-image.jpg">
<meta property="og:url" content="https://yourdomain.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Sankalpa Catering">
<meta name="twitter:description" content="Authentic South Indian flavors">
<meta name="twitter:image" content="https://yourdomain.com/images/twitter-image.jpg">
```

### Create sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sankalpacatering.com/</loc>
    <lastmod>2024-02-08</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Create robots.txt

```
User-agent: *
Allow: /

Sitemap: https://sankalpacatering.com/sitemap.xml
```

## 📊 Performance Optimization

### Image Optimization

```bash
# Install image optimizer
npm install -g imagemin-cli

# Optimize all images
imagemin images/* --out-dir=images/optimized
```

### Enable Compression

**For Netlify** (automatic)
- Gzip enabled by default

**For traditional hosting**, add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>
```

## 🐛 Troubleshooting

### WhatsApp Link Not Working

**Problem:** WhatsApp doesn't open when clicking button

**Solution:**
1. Check phone number format: `919876543210` (no +, no spaces)
2. Test on actual mobile device (desktop may open WhatsApp Web)
3. Make sure WhatsApp is installed

### Images Not Loading

**Problem:** Placeholder emojis show instead of images

**Solution:**
1. Check image paths are correct
2. Ensure images are in `images/` folder
3. File names match HTML (case-sensitive!)

### Mobile Menu Not Working

**Problem:** Menu doesn't toggle on mobile

**Solution:**
1. Check `script.js` is loaded
2. Open browser console (F12) for errors
3. Ensure IDs match: `mobileMenuToggle` and `mainNav`

### Site Not Visible on Google

**Problem:** Site doesn't appear in search results

**Solutions:**
1. Wait 1-2 weeks after launching
2. Submit to Google Search Console
3. Create and submit sitemap.xml
4. Share site on social media for backlinks
5. Add Google My Business listing

## 📞 Support

### Need Help?

If you need help customizing or deploying:

1. Check this README thoroughly
2. Search for error messages online
3. Ask specific questions with details

### Professional Services

Need custom features?
- Custom payment integration
- Advanced booking system
- Custom design changes
- SEO optimization
- Ongoing maintenance

## 📝 Checklist Before Launch

- [ ] Update all contact information (phone, email, address)
- [ ] Update WhatsApp number in all links
- [ ] Add real product images
- [ ] Add company logo
- [ ] Test all links (especially WhatsApp)
- [ ] Test on mobile device
- [ ] Update meta tags and title
- [ ] Add Google Analytics
- [ ] Create Google My Business listing
- [ ] Test form submissions (if added)
- [ ] Check all pages load fast
- [ ] Spell check all content
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Set up custom domain
- [ ] Enable SSL/HTTPS
- [ ] Test on different browsers
- [ ] Share on social media

## 🎉 Launch Day Tasks

1. **Double-check everything** using checklist above
2. **Submit to Google Search Console**
3. **Create Google My Business listing**
4. **Share on social media** (Instagram, Facebook)
5. **Send to friends and family** for feedback
6. **Monitor WhatsApp messages** for orders
7. **Celebrate!** 🎊

## 📈 Post-Launch

### Week 1
- Monitor WhatsApp inquiries
- Respond quickly to all messages
- Fix any reported issues
- Share customer testimonials

### Week 2
- Check Google Analytics
- Improve SEO if needed
- Add more product photos
- Create social media content

### Ongoing
- Regular updates to menu/products
- Seasonal promotions
- Customer testimonials
- Blog posts (optional)

## 🔐 Security Best Practices

1. Always use HTTPS (SSL certificate)
2. Keep software updated
3. Use strong passwords
4. Regular backups
5. Don't expose sensitive info in code

## 📄 License

This website template is provided for Sankalpa Catering.
Feel free to customize and use as needed.

---

**Built with ❤️ for Sankalpa Catering**

*Authentic South Indian Flavors for Every Occasion*
