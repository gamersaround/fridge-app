# Fridge App

A modern mobile application to manage your fridge inventory and track food expiration dates.

## Features

- Add products manually, via barcode scanning, or voice recognition
- Track expiration dates
- Get notifications for products nearing expiration
- View inventory in list or calendar view
- Get recipe suggestions based on available products
- Track food waste and consumption habits

## Getting Started

### Prerequisites

- Node.js >= 14
- React Native development environment setup
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gamersaround/fridge-app.git
cd fridge-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on iOS:
```bash
npm run ios
```

5. Run on Android:
```bash
npm run android
```

## Project Structure

```
/app
  /components          # Reusable UI components
  /screens            # Main application screens
  /navigation         # Navigation configuration
  /redux             # Global state management
  /services          # External services (API, scanning, voice)
  /hooks             # Custom hooks
  /utils             # Utility functions
  /assets            # Images, icons, fonts
  /localization      # Translation files
```

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.