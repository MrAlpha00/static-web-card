# Firebase Setup Instructions for Elite Technology Website

This guide will help you set up Firebase for the Elite Technology website to enable dynamic features like gallery management, customer reviews, and enquiry forms.

## Prerequisites

- A Google account
- Basic understanding of web development
- The Elite Technology website files

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: `elite-technology` (or your preferred name)
4. Accept terms and click "Continue"
5. You can disable Google Analytics for now
6. Click "Create project" and wait for it to be ready

## Step 2: Register Web App

1. In your Firebase project, click the **Web icon** (`</>`) under "Get started by adding Firebase to your app"
2. Enter app nickname: `Elite Technology Website`
3. **Do NOT check** "Also set up Firebase Hosting" (we'll use static hosting instead)
4. Click "Register app"
5. You'll see a code snippet with your Firebase configuration - **copy the config object**

## Step 3: Update Firebase Configuration

1. Open `client/src/lib/firebase-config.ts` in your project
2. Replace the placeholder values with your actual Firebase config:

```typescript
export const firebaseConfig = {
  apiKey: "AIzaSyC...", // Your actual API key
  authDomain: "elite-technology.firebaseapp.com",
  projectId: "elite-technology",
  storageBucket: "elite-technology.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123..."
};
```

## Step 4: Enable Authentication

1. In Firebase Console, go to **Authentication** (left sidebar)
2. Click "Get started"
3. Click on **"Email/Password"** under "Sign-in method"
4. Toggle "Enable" and click "Save"
5. Go to the **"Users"** tab
6. Click "Add user"
7. Enter email: `elite9098@gmail.com`
8. Enter a strong password (save this somewhere secure!)
9. Click "Add user"

## Step 5: Set Up Firestore Database

1. In Firebase Console, go to **Firestore Database** (left sidebar)
2. Click "Create database"
3. Select **"Start in test mode"** (we'll update security rules later)
4. Choose Cloud Firestore location closest to India (e.g., `asia-south1`)
5. Click "Enable"

### Create Collections

The collections will be created automatically when data is first added, but here are the schemas:

**Gallery Collection** (`gallery`):
- `imageUrl` (string): URL of uploaded image
- `title` (string): Image title
- `description` (string): Image description
- `category` (string): Category (Home/Shop/School/Factory/Office/Apartment)
- `createdAt` (timestamp): Upload date

**Feedback Collection** (`feedback`):
- `name` (string): Customer name
- `phone` (string): Phone number
- `location` (string): City/area
- `rating` (number): 1-5 stars
- `comment` (string): Review text
- `approved` (boolean): Admin approval status
- `createdAt` (timestamp): Submission date

**Enquiries Collection** (`enquiries`):
- `name` (string): Customer name
- `phone` (string): Phone number
- `email` (string, optional): Email address
- `city` (string): City/area
- `requirement` (string): Customer's needs
- `createdAt` (timestamp): Submission date
- `status` (string): new/contacted/completed

## Step 6: Set Up Firebase Storage

1. In Firebase Console, go to **Storage** (left sidebar)
2. Click "Get started"
3. Accept the default security rules (test mode)
4. Choose the same location as your Firestore
5. Click "Done"

This will be used for uploading gallery images.

## Step 7: Install Firebase SDK

Run this command in your project directory:

```bash
npm install firebase
```

## Step 8: Update Security Rules (Important!)

After testing, update your Firestore and Storage rules for better security:

### Firestore Rules

Go to Firestore Database > Rules and replace with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Gallery - read for all, write for authenticated admins
    match /gallery/{document} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == 'elite9098@gmail.com';
    }
    
    // Feedback - read approved for all, write for anyone (form submission), manage for admin
    match /feedback/{document} {
      allow read: if true;
      allow create: if true;
      allow update, delete: if request.auth != null && request.auth.token.email == 'elite9098@gmail.com';
    }
    
    // Enquiries - write for anyone (form submission), read/manage for admin only
    match /enquiries/{document} {
      allow create: if true;
      allow read, update, delete: if request.auth != null && request.auth.token.email == 'elite9098@gmail.com';
    }
  }
}
```

### Storage Rules

Go to Storage > Rules and replace with:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /gallery/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == 'elite9098@gmail.com';
    }
  }
}
```

## Step 9: Enable Firebase Functions

Once your config is set up:

1. Open `client/src/lib/firebase.ts`
2. Uncomment the Firebase SDK imports
3. Uncomment the initialization code
4. The helper functions will now work with Firebase

## Step 10: Test the Integration

1. Go to `/admin` on your website
2. Log in with `elite9098@gmail.com` and your password
3. Try uploading an image to the gallery
4. Check if it appears in Firebase Storage and Firestore
5. Test the feedback form and check if it saves to Firestore
6. Test the contact form and check if enquiries are saved

## Deployment Notes

### For GitHub Pages / Netlify:

Your Firebase config is safe to include in your frontend code because:
- The API key is not a secret (it's publicly visible in your app)
- Security is enforced through Firebase Security Rules
- Only authenticated admin users can modify data

### Environment Variables (Optional):

If you prefer to use environment variables:

1. Create `.env` file (add to `.gitignore`):
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

2. Update `firebase-config.ts`:
```typescript
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // ... etc
};
```

## Troubleshooting

### "Firebase not configured" error:
- Verify you've replaced all placeholder values in `firebase-config.ts`
- Check that Firebase SDK is installed: `npm install firebase`
- Uncomment the initialization code in `firebase.ts`

### Authentication fails:
- Verify Email/Password is enabled in Firebase Console
- Check that admin user is created with correct email
- Ensure Security Rules are properly configured

### Images won't upload:
- Verify Storage is enabled in Firebase Console
- Check Storage rules allow authenticated admin writes
- Ensure file size is under Firebase limits (default 5GB)

### Data not saving to Firestore:
- Check Firestore Security Rules
- Verify collections exist (they auto-create on first write)
- Check browser console for error messages

## Support

For Firebase-specific issues, refer to:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com/)

For website-specific issues, contact Mohammed Kashif at +91 91088 65702 or elite9098@gmail.com
