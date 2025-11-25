# Elite Technology - Static Website

Professional CCTV & Security Solutions website - 100% Static HTML/CSS/JavaScript

## 🌟 Features

- ✅ **100% Static** - No build tools, no frameworks, no backend required
- ✅ **Dark Theme** with animated diagonal stripe backgrounds
- ✅ **Custom Animated Cursor** with colorful trail effects
- ✅ **Scroll Animations** - Smooth fade-in and scale-in effects
- ✅ **Mobile Responsive** - Works perfectly on all devices
- ✅ **SEO Optimized** - Proper meta tags and descriptions
- ✅ **GitHub Pages Ready** - Deploy instantly to GitHub Pages

### Pages

- **Home** (`index.html`) - Hero section with services, testimonials, and CTA
- **Services** (`services.html`) - Detailed service descriptions with features
- **Gallery** (`gallery.html`) - Placeholder for installation photos
- **Projects** (`projects.html`) - Project categories and stats
- **Reviews** (`reviews.html`) - Customer testimonials
- **About** (`about.html`) - Company story, values, and branch locations
- **Contact** (`contact.html`) - Contact form and business details
- **Admin** (`admin.html`) - Admin placeholder page

### Animations & Interactions

- ✨ Custom animated cursor with colorful gradient trails
- 🎨 Animated diagonal stripe backgrounds matching brand identity
- 🌊 Scroll-triggered fade-in-up animations
- 🎯 Button pulse & glow effects
- 🎪 Card lift animations on hover
- 💧 Click ripple effects
- 📱 Fully responsive mobile-first design

### Design System

- **Brand Colors**:
  - Red: `hsl(351, 100%, 61%)`
  - Blue: `hsl(221, 100%, 60%)`
  - Purple: `hsl(262, 100%, 70%)`
  - Orange: `hsl(18, 100%, 60%)`
- **Typography**:
  - "Elite" - Great Vibes (script font)
  - Body - Poppins (sans-serif)

### Contact Information

- **Phone**: 
  - Mohammed Kashif: +91 91088 65702
  - Guru Prasad: +91 95387 37788
- **Email**: 
  - elite9098@gmail.com
  - mohammedkashif182@gmail.com
- **Address**: M.G. Road, Channapatna – 562160, Ramanagara Dist., Karnataka

## 📁 File Structure

```
.
├── index.html              # Home page
├── services.html           # Services page
├── gallery.html            # Gallery page
├── projects.html           # Projects page
├── reviews.html            # Reviews page
├── about.html              # About page
├── contact.html            # Contact page
├── admin.html              # Admin placeholder page
├── styles/
│   └── main.css           # All styles and animations
├── scripts/
│   └── main.js            # All interactive features
└── assets/
    └── images/            # Place your images here
```

## 🚀 Quick Start

### Local Development

1. **Open directly in browser:**
   ```bash
   # Simply open index.html in your browser
   open index.html
   ```

2. **Or use a local server:**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js http-server
   npx http-server
   ```

   Then visit: `http://localhost:8000`

### Deploy to GitHub Pages

1. **Create a new repository** on GitHub
2. **Push these files** to the repository:
   ```bash
   git init
   git add index.html services.html gallery.html projects.html reviews.html about.html contact.html admin.html styles/ scripts/ assets/
   git commit -m "Initial commit - Elite Technology static website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select "main" branch as source
   - Save

4. **Your site will be live at:**
   `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## 🎨 Customization

### Colors

All brand colors are defined in `styles/main.css`:
```css
:root {
  --brand-red: hsl(351, 100%, 61%);
  --brand-blue: hsl(221, 100%, 60%);
  --brand-purple: hsl(262, 100%, 70%);
  --brand-orange: hsl(18, 100%, 60%);
}
```

### Contact Information

Update contact details in all HTML files (search for):
- Phone numbers: `+91 91088 65702` and `+91 95387 37788`
- Email addresses: `elite9098@gmail.com` and `mohammedkashif182@gmail.com`
- WhatsApp link: `https://wa.me/919108865702`

### Content

Each HTML file can be edited directly with any text editor. No build step required!

## 🎯 Features Explained

### Custom Cursor
- Colorful animated cursor that follows your mouse
- Creates a trail effect with multiple colors
- Automatically changes size when hovering over interactive elements

### Scroll Animations
- Elements fade in and scale up as you scroll
- Uses Intersection Observer API for performance
- Smooth transitions with CSS

### Diagonal Stripes Background
- Animated multi-colored stripe background
- Creates dynamic visual interest
- Automatically adapts to dark theme

### Mobile Navigation
- Hamburger menu for mobile devices
- Touch-friendly interface
- Smooth transitions

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technology Stack

This website uses:
- **Pure HTML5** - Semantic markup
- **Pure CSS3** - Modern animations and grid/flexbox
- **Vanilla JavaScript (ES6+)** - No frameworks or libraries
- **Google Fonts** - Loaded via CDN

**No frameworks. No dependencies. No npm. No build step.**

Just open the HTML files in a browser and it works!

## 📞 Support

**Elite Technology**
- Founded: 2018
- Location: Channapatna, Ramanagara District, Karnataka
- Phone: +91 91088 65702 (Mohammed Kashif), +91 95387 37788 (Guru Prasad)
- Email: elite9098@gmail.com

## 📄 License

© 2025 Elite Technology. All rights reserved.
