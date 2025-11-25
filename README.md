# Elite Technology Website

Professional CCTV & Security Solutions website for Elite Technology - serving Channapatna, Ramanagara, Mysore, Bangalore, and Mandya since 2018.

## 🌟 Features

### Pages
- **Home** - Hero section with animated diagonal stripes, service cards, testimonials
- **Services** - Detailed service descriptions with use cases
- **Gallery** - Image gallery with category filters (will connect to Firebase)
- **Projects** - Showcase of completed installations
- **Reviews** - Customer testimonials and feedback form
- **About** - Company story, values, and branch locations
- **Contact** - Contact form with business details
- **Admin** - Dashboard for managing gallery, feedback, and enquiries (Firebase)

### Animations & Interactions
- ✨ Custom animated cursor with colorful gradient trails
- 🎨 Animated diagonal stripe backgrounds matching brand identity
- 🌊 Scroll-triggered fade-in-up animations
- 💫 Parallax effects on hero sections
- 🎯 Button pulse & glow effects
- 🎪 Card lift animations on hover
- 💧 Click ripple effects
- 📱 Fully responsive mobile-first design

### Design System
- **Brand Colors**:
  - Red: #FF3366
  - Blue: #3366FF
  - Purple: #9933FF
  - Orange: #FF6633
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

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will run on `http://localhost:5000`

### Firebase Setup (For Dynamic Features)

1. Follow the detailed instructions in `FIREBASE_SETUP.md`
2. Create a Firebase project at https://console.firebase.google.com/
3. Update `client/src/lib/firebase-config.ts` with your Firebase credentials
4. Enable Authentication, Firestore, and Storage
5. Create admin user: elite9098@gmail.com

### Deployment

This is a static site ready for deployment to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

#### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

#### Deploy to GitHub Pages

1. Update `vite.config.ts` base path if needed
2. Build: `npm run build`
3. Deploy `dist` folder to `gh-pages` branch

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/           # Shadcn UI components
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Reviews.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Admin.tsx
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.ts
│   │   ├── lib/
│   │   │   ├── firebase-config.ts  # Firebase configuration
│   │   │   ├── firebase.ts         # Firebase helper functions
│   │   │   └── utils.ts
│   │   ├── App.tsx
│   │   └── index.css
│   └── index.html
├── FIREBASE_SETUP.md      # Detailed Firebase setup guide
└── README.md
```

## 🎨 Customization

### Update Brand Colors

Edit `client/src/index.css`:
```css
--brand-red: 351 100% 61%;
--brand-blue: 221 100% 60%;
--brand-purple: 262 100% 70%;
--brand-orange: 18 100% 60%;
```

### Update Contact Information

Update contact details in:
- `client/src/components/Navigation.tsx`
- `client/src/components/Footer.tsx`
- `client/src/pages/Home.tsx`
- `client/src/pages/Contact.tsx`

## 🔧 Tech Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Routing**: Wouter
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Build**: Vite
- **Animations**: Custom CSS animations

## 📱 SEO Optimization

The site includes:
- Proper meta tags for each page
- Open Graph tags for social sharing
- Descriptive page titles
- Local business keywords
- Structured contact information

## 🔐 Admin Panel

Access: `/admin`

Login credentials (after Firebase setup):
- Email: elite9098@gmail.com
- Password: (set during Firebase user creation)

Features:
- Upload and manage gallery images
- Approve/reject customer reviews
- View customer enquiries
- Delete unwanted content

## 📞 Support

For website support:
- Mohammed Kashif: +91 91088 65702
- Email: elite9098@gmail.com

## 📄 License

© 2024 Elite Technology. All rights reserved.
