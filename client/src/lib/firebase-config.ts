// Firebase Configuration
// IMPORTANT: Replace these placeholder values with your actual Firebase project credentials
// You can find these values in your Firebase Console > Project Settings > General

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// HOW TO SET UP FIREBASE:
// 
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select an existing one
// 3. Click on "Project Settings" (gear icon)
// 4. Scroll down to "Your apps" section
// 5. Click on the Web icon (</>) to create a web app
// 6. Register your app with a nickname (e.g., "Elite Technology Website")
// 7. Copy the firebaseConfig object values and replace the placeholders above
// 
// 8. Enable Authentication:
//    - Go to Authentication > Sign-in method
//    - Enable "Email/Password" sign-in provider
//    - Add admin email: elite9098@gmail.com with a secure password
// 
// 9. Enable Firestore Database:
//    - Go to Firestore Database
//    - Click "Create database"
//    - Choose "Start in test mode" for development
//    - Select a Cloud Firestore location (closest to India)
// 
// 10. Enable Storage:
//    - Go to Storage
//    - Click "Get started"
//    - Choose "Start in test mode" for development
// 
// 11. Set up Security Rules (after initial testing):
//    - Update Firestore rules to restrict access
//    - Update Storage rules to allow uploads only from authenticated admins
