# Elite Technology Website Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern tech/security companies with bold brand identities (like Stripe's minimalism meets creative agency boldness), while honoring the distinctive visiting card aesthetic.

## Core Visual Identity

### Brand Colors & Background Treatment
- **Primary Background**: Deep charcoal (#1a1a1a) to black (#000000)
- **Diagonal Stripe Pattern**: Animated diagonal stripes in brand colors (vibrant red #FF3366, electric blue #3366FF, rich purple #9933FF, bright orange #FF6633)
- **Stripe Animation**: Subtle gradient shift and slow diagonal movement (10-15 second loop) creating dynamic background without distraction
- **Overlay Strategy**: Semi-transparent dark overlay (rgba(0,0,0,0.7)) on striped sections to ensure text readability

### Typography System
- **"Elite" Display**: Elegant script font (Great Vibes, Pacifico, or Dancing Script) at 48-72px for hero, 36-48px for section headers
- **"Technology" & Body**: Clean sans-serif (Inter, Poppins, or Montserrat) 
- **Hierarchy**: Hero title 56px, Section headers 36px, Subheaders 24px, Body 16-18px, Small text 14px
- **Weight Distribution**: Script font regular weight, sans-serif uses 400 (body), 600 (subheaders), 700 (headers)

## Layout System

### Spacing Primitives
Tailwind units: **4, 8, 12, 16, 24, 32** for consistent rhythm (p-4, p-8, py-12, py-16, py-24, py-32)

### Page Structure for All Pages
- **Header**: Fixed/sticky navigation with dark background, logo left, nav center/right, CTA buttons with glow effects
- **Hero Sections**: 80vh height with animated stripe background, centered content, multiple CTAs with distinct visual hierarchy
- **Content Sections**: Alternating full-width and contained (max-w-7xl), py-16 to py-24 spacing
- **Footer**: Dark with subtle stripe accent, multi-column layout (company info, quick links, contact, branches)

## Animation & Interaction Strategy

### Cursor Effects
- **Custom Cursor**: Circular cursor (20px) with colorful gradient trail that follows mouse movement
- **Hover States**: Cursor expands to 40px on interactive elements, changes color based on element type
- **Trail Effect**: Fading particle trail with brand colors that dissipates over 800ms
- **Click Ripple**: Expanding circle ripple effect in brand colors on click

### Scroll-Triggered Animations
- **Fade-In-Up**: Service cards, feature sections slide up 40px and fade in (0.6s ease-out, stagger 100ms)
- **Parallax Layers**: Background stripes move slower than content (0.5x scroll speed)
- **Scale-In**: Client logos and testimonials scale from 0.9 to 1.0 with fade
- **Number Counters**: Animated counting for statistics (smooth easing over 2s)

### Micro-Interactions
- **Button Hovers**: 
  - Primary CTAs: Scale 1.05, add vibrant glow shadow, slight color shift (300ms ease)
  - Secondary buttons: Subtle background color transition, border glow
  - Icon buttons: Rotate 15deg or bounce effect
- **Card Interactions**: 
  - Lift on hover (translateY -8px, shadow elevation increase)
  - Subtle border glow in brand colors
  - Image zoom 1.1x on hover (overflow hidden)
- **Form Elements**: Focus states with animated border color transition, glow effect
- **Navigation**: Smooth color transitions, underline slide-in animation from left

### Page Transitions
- Smooth fade overlay (400ms) between page loads using JavaScript
- Route change triggers subtle diagonal wipe effect in brand colors

## Component Library

### Navigation Bar
- Logo with "Elite" in script + "Technology" in sans-serif, both with subtle glow
- Horizontal menu items with hover underline animation
- "Call Now" and "WhatsApp" CTAs with pulse animation (1.5s infinite)
- Mobile: Hamburger menu with animated slide-in panel, diagonal stripe background

### Hero Components (Home Page)
- Full-width 80vh section with animated diagonal stripes
- Layered content: Badge chips ("Since 2018", "4 Branches") with glass morphism effect
- Main headline with gradient text effect on "Elite Technology"
- 3-button CTA group: Primary "Get Free Quote", Secondary "Call Now", Tertiary "WhatsApp" - all with blur background
- Floating service icons with subtle float animation

### Service Cards (3-column grid, 2-col tablet, 1-col mobile)
- Dark card background with subtle border glow
- Icon at top (60px) with circular gradient background, gentle pulse animation
- Service title in sans-serif bold 20px
- 2-3 line description 14px with reduced opacity
- "Learn More" link with arrow icon that slides right on hover
- Card elevation on hover with color accent border

### Testimonial Section
- Auto-playing carousel with manual controls
- Card design: Customer photo (80px circle) with gradient border
- Quote text in italic 18px, 5-star rating with filled/unfilled animation
- Swipe gesture support for mobile
- Dots navigation with active state animation

### Contact CTAs (Floating & Section-based)
- Floating WhatsApp button: Fixed bottom-right, green gradient, chat icon, pulse ring animation
- Call buttons: Phone icon, gradient background, tap-to-call, vibration effect on mobile
- Form sections: Dark input fields with focus glow, animated label shift, success state with checkmark animation

### Gallery Grid
- Masonry layout (3 columns desktop, 2 tablet, 1 mobile)
- Image cards with overlay appearing on hover showing title/category
- Lightbox modal with image zoom, navigation arrows, close button with smooth transitions
- Category filter pills with active state animation (background slide)

### Admin Dashboard (admin.html)
- Login form: Centered card with glass morphism, animated input focus states
- Dashboard: Sidebar navigation with icon animations, main content area with data tables
- Upload interface: Drag-and-drop zone with dashed border animation on dragover
- Action buttons: Delete (red), Approve (green), Edit (blue) with confirmation modals

## Images

### Hero Image Strategy
**Home Page Hero**: Background image of installed CCTV system in modern office/home with dark overlay (0.6 opacity), allows diagonal stripes to show through subtly. Image should convey security, technology, professionalism.

**Service Page Headers**: Smaller hero sections (40vh) with relevant service imagery - CCTV cameras, network equipment, door locks - each with consistent dark overlay treatment.

**Gallery**: Actual project photos uploaded via admin panel - installations, completed projects, team at work.

**About Page**: Team photo or office location image in header section.

## Quality Standards
- All animations: 60fps performance, reduced-motion media query support
- Touch targets: Minimum 44x44px for mobile
- Loading states: Skeleton screens with shimmer effect for dynamic content
- Error states: Friendly messaging with retry options, brand-colored alerts
- Accessibility: ARIA labels, keyboard navigation, focus indicators matching brand colors
- Mobile optimization: Touch-optimized animations, no hover-dependent interactions