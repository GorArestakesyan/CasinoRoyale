# Casino Royale

Modern casino landing page with geolocation-based styling, multi-language support, and game integration.

## Tech Stack

- React 19.2.0
- TypeScript 5.9.3
- MUI 7.3.7
- styled-components 6.3.8
- Webpack 5.97.1
- i18next

## Features

- Responsive design matching Figma specifications
- Geolocation-based dynamic styling
- Multi-language support (EN, DE, FR, IT, ES)
- Game iframe integration

## Getting Started

```bash
yarn install
yarn run dev
```

The application will open at `http://localhost:3000`

## Build

```bash
yarn run build
```

## Project Structure

```
src/
├── assets/          # Images, icons, fonts
├── constants/       # Geolocation styles and flags
├── contexts/        # React contexts
├── i18n/           # Internationalization (translations)
├── theme/          # MUI theme configuration
├── ui-kit/         # Reusable components (Button, Select, etc.)
└── ui-modules/     # Feature modules (Hero, Footer, GameIframe)
```

## Geolocation

Supports 7 geolocations (US, UK, DE, FR, IT, ES, Default) with:
- Dynamic button and footer gradients
- Automatic language switching
- Geolocation selector in footer
- Persistent preference (localStorage)