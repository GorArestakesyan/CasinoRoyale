import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/fonts/fonts.css';
import './index.css';
import './i18n/config';
import App from './App';
import { GeolocationProvider } from './contexts/GeolocationContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GeolocationProvider>
      <App />
    </GeolocationProvider>
  </StrictMode>
);
