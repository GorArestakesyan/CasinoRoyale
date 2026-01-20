import { useEffect } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useGeolocation } from '@/contexts/GeolocationContext';
import { setLanguageByGeolocation } from '@/i18n/config';
import { CustomThemeProvider } from '@/theme/ThemeProvider';
import HeroSection from '@ui-modules/HeroSection';
import Footer from '@ui-modules/Footer';
import GameIframe from '@ui-modules/GameIframe';
import { useGameLauncher } from '@ui-modules/GameIframe/useGameLauncher';

const AppContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
  position: 'relative',
});

function App() {
  const { geolocation } = useGeolocation();
  const { isGameOpen, currentGameUrl, openGame, closeGame } = useGameLauncher();

  useEffect(() => {
    setLanguageByGeolocation(geolocation);
  }, [geolocation]);

  const handleOpenGame = () => {
    openGame({
      gameId: 'n2-novomatic-book-of-ra-deluxe',
      language:
        geolocation === 'us' || geolocation === 'uk' ? 'en' : geolocation,
    });
  };

  return (
    <CustomThemeProvider>
      <CssBaseline />
      <AppContainer>
        <HeroSection onOpenGame={handleOpenGame} />
        <Footer />

        {isGameOpen && (
          <GameIframe gameUrl={currentGameUrl} onClose={closeGame} />
        )}
      </AppContainer>
    </CustomThemeProvider>
  );
}

export default App;
