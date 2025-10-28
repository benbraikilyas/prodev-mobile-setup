# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
   



   # prodev-mobile-setup

## 📱 Objective
Set up the first mobile application using the Expo Router template, and understand the file structure of a React Native app built with Expo.

---

## 🧩 Steps for Scaffolding

1. Navigate to the project directory:
   ```bash
   cd prodev-mobile-setup
   ```

2. Initialize the Expo project:
   ```bash
   npx create-expo-app@latest .
   ```

3. Modify the Home Screen:
   - Open `app/(tabs)/index.tsx`.
   - Change:
     ```tsx
     <Text>Welcome!</Text>
     ```
     to
     ```tsx
     <Text>First App Created</Text>
     ```

4. Start and test the app:
   ```bash
   npx expo start
   ```
   - Scan the QR code with the Camera app (iOS) or Expo Go (Android).

5. Reset the project:
   ```bash
   npm run reset-project
   ```

---

## 🔍 Observations from `reset-project`

Running `npm run reset-project`:
- Cleared the build cache.
- Removed temporary and configuration files.
- Restored the project to its original initialized state.
- Ensured no old build artifacts interfere with fresh runs.

---

## 📁 Project Structure Overview

```
prodev-mobile-app-0x00/
│
├── app/
│   ├── (tabs)/
│   │   └── index.tsx      # Home screen
│   ├── _layout.tsx        # Router layout
│
├── constants/
│   └── Colors.tsx         # Color definitions
│
├── package.json
├── README.md
└── App.tsx
```

---

## 🧠 Summary

- Expo Router simplifies navigation structure.
- The `reset-project` command is useful for clearing cached builds.
- The project can be previewed instantly using the Expo Go app.