# Elite Technology Website - Project Documentation

## Project Overview

This is a professional static website for **Elite Technology**, a CCTV & security solutions company based in Channapatna, Karnataka. The website features beautiful animations, custom cursor effects, and Firebase integration for dynamic content management.

## Recent Changes (December 2024)

### Completed Features

1. **Complete Frontend Implementation**
   - All 8 pages built: Home, Services, Gallery, Projects, Reviews, About, Contact, Admin
   - Dark theme with colorful diagonal stripe backgrounds (red, blue, purple, orange)
   - Custom animated cursor with gradient trail effects
   - Scroll-triggered animations (fade-in-up, scale-in)
   - Micro-interactions: button pulse/glow, card lifts, ripple effects
   - Fully responsive mobile-first design

2. **Brand Identity**
   - Script font "Great Vibes" for "Elite"
   - Sans-serif "Poppins" for body text
   - Brand colors matching visiting card design
   - Gradient text effects and animated stripes

3. **Interactive Features**
   - Custom cursor that changes on hover
   - Colorful particle trail following cursor
   - Click ripple effects
   - Smooth scroll animations
   - Floating WhatsApp button
   - Mobile-optimized navigation

4. **Firebase Integration Setup**
   - Configuration structure in place
   - Schema definitions for Firestore collections
   - Helper functions for Firebase operations
   - Comprehensive setup documentation in FIREBASE_SETUP.md

## Project Architecture

### Frontend Structure
- **React + TypeScript** for type safety
- **Tailwind CSS** for styling with custom brand colors
- **Shadcn UI** components for consistent design
- **Wouter** for client-side routing
- **Custom hooks** for scroll animations

### Firebase Collections (to be connected)
- `gallery` - Image uploads from admin
- `feedback` - Customer reviews
- `enquiries` - Contact form submissions

### Key Components
- `CustomCursor.tsx` - Animated cursor with trail effects
- `Navigation.tsx` - Responsive navigation with mobile menu
- `Footer.tsx` - Site footer with contact info
- `useScrollAnimation.ts` - Hook for scroll-triggered animations

## Design System

### Colors (HSL format)
```css
--brand-red: 351 100% 61%       /* #FF3366 */
--brand-blue: 221 100% 60%      /* #3366FF */
--brand-purple: 262 100% 70%    /* #9933FF */
--brand-orange: 18 100% 60%     /* #FF6633 */
```

### Typography
- **Script**: Great Vibes (for "Elite")
- **Sans-serif**: Poppins (body text, weights 300-700)

### Animations
- Diagonal stripes: 15s continuous movement
- Cursor trail: 800ms fade-out
- Scroll animations: 600ms ease-out
- Button pulse: 1.5s infinite
- Float: 3s ease-in-out infinite

## Firebase Setup Instructions

To enable dynamic features (gallery, reviews, enquiries):

1. **Create Firebase Project**
   - Go to https://console.firebase.google.com/
   - Create new project: "elite-technology"

2. **Configure Authentication**
   - Enable Email/Password auth
   - Create admin user: elite9098@gmail.com

3. **Enable Firestore & Storage**
   - Start in test mode
   - Choose region: asia-south1

4. **Update Configuration**
   - Edit `client/src/lib/firebase-config.ts`
   - Replace placeholder values with actual Firebase credentials
   - Uncomment Firebase initialization in `client/src/lib/firebase.ts`

5. **Deploy Security Rules**
   - See FIREBASE_SETUP.md for production-ready rules

Detailed step-by-step guide: `FIREBASE_SETUP.md`

## Contact Information

### Business Details
- **Name**: Elite Technology
- **Established**: 2018
- **Services**: CCTV, Networking, Computer Support, Auto Electrical, Security Systems

### Phone Numbers
- Mohammed Kashif: +91 91088 65702
- Guru Prasad: +91 95387 37788

### Email
- elite9098@gmail.com
- mohammedkashif182@gmail.com

### Address
M.G. Road, Channapatna – 562160, Ramanagara District, Karnataka

### Branches
- Channapatna (Head Office)
- Mysore
- Bangalore
- Mandya
- Ramanagaram

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:5000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This static site can be deployed to:
- **GitHub Pages** - Free static hosting
- **Netlify** - Auto-deploy from Git
- **Vercel** - Optimized for performance

No backend server required! Firebase handles all dynamic features from the frontend.

## User Preferences

- **Static site** - No Node.js backend, pure frontend
- **Firebase only** - All dynamic features via Firebase SDK
- **Mobile-first** - Responsive design priority
- **Animations** - Creative, smooth, eye-catching
- **Brand match** - Design matches visiting card aesthetic

## Next Steps

1. Complete Firebase configuration with actual credentials
2. Test all animations and interactions
3. Verify responsive design on different devices
4. Deploy to static hosting
5. Set up custom domain (if desired)

## Notes

- Firebase config is safe to include in frontend code (security via rules)
- Admin panel accessible at `/admin` after Firebase setup
- All forms save to Firestore when Firebase is configured
- Gallery images stored in Firebase Storage
- Customer reviews require admin approval before appearing publicly
