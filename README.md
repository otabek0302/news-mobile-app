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



# React Native News App

This is a **React Native News App** that fetches and displays the latest news articles using a News API. The app includes features like category-based filters, detailed news screens, and smooth navigation.

---

## Features 🚀

- Fetch and display the latest news articles
- Filter articles by categories (e.g., Technology, Sports, Business)
- Detailed screen for full article view
- Smooth navigation between screens using React Navigation
- Clean and maintainable code with custom hooks
- Supports both **Android** and **iOS**

---

## Screenshots 📸

| **Home Screen**            | **Detail Screen**           |
|----------------------------|-----------------------------|
| ![Home Screen](https://i.ibb.co/LXX8p9tz/Simulator-Screenshot-i-Phone-15-2025-03-05-at-13-22-58.png) | ![Detail Screen](https://i.ibb.co/7xqK9Rj1/Simulator-Screenshot-i-Phone-15-2025-03-05-at-13-22-55.png) |

---

## Getting Started ⚡

Follow the steps below to set up the project.

### Prerequisites
- Node.js (https://nodejs.org)
- React Native CLI (https://reactnative.dev/docs/environment-setup)
- Android Studio (for Android) or Xcode (for iOS)

---

### 1. Clone the Repository 🛠️
```bash
git clone https://github.com/yourusername/news-app-react-native.git
cd news-app-react-native
```

---

### 3. Add Your API Key 🔑
1. Sign up at [NewsAPI.org](https://newsapi.org) to get a free API key.
2. Replace `YOUR_API_KEY` in the file `newsApi.js` under `src/services`:

```javascript
const API_KEY = 'YOUR_API_KEY'; // Replace this with your NewsAPI key
export const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
```
### 4. Run the App ▶️

Run the following commands to launch the app:

#### For Android:
```bash
npx react-native run-android
```
#### For iOS:
```bash
npx react-native run-ios
```
### Project Structure 🗂️

The project is organized as follows for clarity and maintainability:

NewsApp/
│-- src/
│   ├── components/          # Reusable UI components
│   │   ├── NewsCard.js      # A card component for displaying articles
│   ├── screens/             # App screens (pages)
│   │   ├── HomeScreen.js    # Main screen displaying news articles
│   │   ├── DetailScreen.js  # Detailed view of a selected news article
│   ├── hooks/               # Custom React hooks
│   │   ├── useFetchNews.js  # Hook for fetching news data
│   ├── services/            # API service configurations
│   │   ├── newsApi.js       # Handles API URL and requests
│   ├── navigation/          # Navigation configurations
│   │   ├── AppNavigator.js  # App navigation using React Navigation
│   ├── App.js               # Entry point of the application
├── assets/                  # Images, fonts, etc.
├── package.json             # Project dependencies
├── README.md                # Project documentation


## How It Works ⚙️

- **Home Screen**: Fetches and displays the latest news articles in a list.
- **Filter Functionality**: Filter articles based on categories (e.g., `Technology`, `Sports`, `Business`).
- **Detail Screen**: Navigate to the article details page when an item is clicked to view the full content.
- **API Integration**: Fetches data using a custom API service and `Axios` from the NewsAPI.
- **Navigation**: Implemented using `React Navigation` for smooth and intuitive screen switching.

---

## Learnings 📚

Through this project, you will learn:

- **React Native setup and development**: How to configure and run a React Native project.
- **Fetching and displaying data from an external API**: Using `Axios` to retrieve data from the News API.
- **React Navigation for screen routing**: Navigating between multiple screens smoothly.
- **State management**: Managing data flow with `useState` and `useEffect`.
- **Creating custom hooks**: Writing reusable hooks for cleaner and modular code.
- **Best practices for scalable architecture**: Organizing components, services, hooks, and screens effectively.

---

## Dependencies 🛠️

The following libraries and tools are used in this project:

- **React Native**: Framework for building cross-platform mobile applications.
- **React Navigation**: For smooth and seamless navigation between screens.
- **Axios**: For making HTTP requests to fetch data from the News API.
- **React Native Paper**: A library for implementing beautiful UI components.
- **NewsAPI.org**: External API for retrieving the latest news articles.


## API Credit 🔗

This app uses the [NewsAPI.org](https://newsapi.org) for fetching the latest news articles. Sign up for a free API key to get started.

---

## License 📄

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute this code under the terms of the license.

---

## Contributing 🤝

Contributions are welcome! If you'd like to contribute to this project, follow these steps:

1. **Fork the repository**.

2. **Create a new branch**:
   ```bash
   git checkout -b feature-name

3. **Commit your changes**:
   git commit -m "Add a new feature"

4. **Push to the branch**:
   git push origin feature-name

5. **Open a Pull Request**:
   Your contributions will be reviewed, and once approved, merged into the main branch.

## Contact 📧
For questions, feedback, or suggestions, feel free to reach out:

Gmail: otabekjon0302@gmail.com
Email: otabekjon2002@mail.ru
