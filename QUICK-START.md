# 🚀 QUICK START GUIDE - Sankalpa Catering Website

## Get Your Website Live in 30 Minutes!

### Step 1: Update Your Information (5 minutes)

Open `index.html` and do a Find & Replace (Ctrl+F):

**Find & Replace These:**

1. **Phone Number**
   - Find: `+91 9008488279`
   - Replace with: `+91 9008488279`

2. **WhatsApp Number** (IMPORTANT!)
   - Find: `919008488279`
   - Replace with: `919008488279` (no spaces, no +)

3. **Email**
   - Find: `info@sankalpacaterers.com`
   - Replace with: `info@sankalpacaterers.com``

4. **Location**
   - Find: `Chennai, Tamil Nadu`
   - Replace with: `Bengaluru, Karnataka`

5. **Working Hours** (if different)
   - Find: `Mon - Sun: 8 AM - 8 PM`
   - Replace with: `YOUR HOURS`

### Step 2: Deploy to Netlify (15 minutes)

**Easiest Way to Get Your Site Live:**

1. Go to https://www.netlify.com
2. Click "Sign Up" (use Google/GitHub)
3. Click "Add new site" → "Deploy manually"
4. **Drag and drop** your `sankalpa-website` folder
5. Wait 30 seconds...
6. **Done!** Your site is live!

You'll get a URL like: `random-name-123.netlify.app`

### Step 3: Add Custom Domain (10 minutes)

**Buy Domain:**
1. Go to https://www.namecheap.com
2. Search: `sankalpacatering.com`
3. Purchase (~₹650/year)

**Connect to Netlify:**
1. In Netlify: Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `sankalpacatering.com`
4. Netlify shows DNS settings

**Update DNS:**
1. Log into Namecheap
2. Manage domain → Advanced DNS
3. Add records Netlify provides:
   ```
   A Record: @ → 75.2.60.5
   CNAME: www → your-site.netlify.app
   ```
4. Wait 24 hours for DNS to update

### Step 4: Test Everything

✅ **Checklist:**
- [ ] Open site on phone
- [ ] Click WhatsApp button → Opens your WhatsApp
- [ ] All links work
- [ ] Contact info shows YOUR details
- [ ] Site loads fast

---

## Alternative: 5-Minute Local Test

**Test Before Deploying:**

### Windows:
1. Right-click `index.html`
2. Open with Chrome/Edge
3. Done!

### Mac:
1. Double-click `index.html`
2. Opens in Safari
3. Done!

### Better Local Server:

**If you have Python:**
```bash
cd sankalpa-website
python -m http.server 8000
```
Open: http://localhost:8000

**If you have Node.js:**
```bash
cd sankalpa-website
npx serve
```

---

## Need Help?

### WhatsApp Link Not Working?

**Check format:**
- ❌ Wrong: `+91 98765 43210` (has + and spaces)
- ❌ Wrong: `91-98765-43210` (has dashes)
- ✅ Correct: `919876543210` (just numbers with country code)

### Site Not Loading?

1. Check all files are in same folder
2. File structure should be:
   ```
   sankalpa-website/
   ├── index.html
   ├── css/styles.css
   ├── js/script.js
   └── README.md
   ```

### Want to Add Your Logo?

1. Save logo as `images/logo.png` (200x200px)
2. In `index.html` line ~20, replace SVG with:
   ```html
   <img src="images/logo.png" alt="Sankalpa Catering">
   ```

### Want to Add Product Photos?

1. Create folder: `images/products/`
2. Save photos as: `gun-powder.jpg`, `sambar-podi.jpg`, etc.
3. In HTML, replace emoji placeholders with:
   ```html
   <img src="images/products/gun-powder.jpg" alt="Gun Powder">
   ```

---

## What You Get

✅ **Fully Responsive Website**
- Works perfectly on mobile, tablet, desktop

✅ **WhatsApp Integration**
- Direct ordering via WhatsApp button

✅ **Professional Design**
- Matches your brand colors
- Smooth animations
- Modern layout

✅ **SEO Optimized**
- Will appear in Google search
- Fast loading
- Mobile-friendly

✅ **Easy to Update**
- Simple HTML/CSS
- No coding knowledge needed
- Clear documentation

---

## Costs

### Free Option:
- Netlify hosting: **FREE**
- Domain: ₹650/year
- **Total: ₹650/year**

### Paid Option:
- Web hosting: ₹99-299/month
- Domain: Usually included
- **Total: ₹1,188-3,588/year**

**Recommendation:** Use Netlify (free) + Namecheap domain (₹650)

---

## After Launch

### Immediate (First Week):
1. Share site on WhatsApp status
2. Add to Instagram bio
3. Create Google My Business listing
4. Respond quickly to inquiries

### This Month:
1. Ask customers for reviews
2. Add testimonials to site
3. Take more product photos
4. Share on Facebook/Instagram

### Ongoing:
1. Update products/prices
2. Add seasonal offers
3. Share customer reviews
4. Post regularly on social media

---

## Pro Tips

💡 **Get Orders Fast:**
- Share WhatsApp product links directly
- Respond within 15 minutes
- Offer first-order discounts

💡 **Improve Google Ranking:**
- Submit to Google Search Console
- Create Google My Business listing
- Ask happy customers for Google reviews
- Share site link everywhere

💡 **Grow Your Business:**
- Take beautiful food photos
- Share recipes on Instagram
- Offer referral discounts
- Create combo packages

---

## Ready to Launch? 🚀

1. ✅ Update contact info in `index.html`
2. ✅ Deploy to Netlify (drag & drop!)
3. ✅ Buy domain from Namecheap
4. ✅ Connect domain to Netlify
5. ✅ Test WhatsApp button
6. ✅ Share your new website!

**You're now live! 🎉**

---

**Need More Help?**

Read the full `README.md` for:
- Detailed customization guide
- Advanced features
- SEO optimization
- Troubleshooting
- And much more!

---

**Congratulations on your new website!**

*Authentic South Indian Flavors Are Now Online* 🌶️
