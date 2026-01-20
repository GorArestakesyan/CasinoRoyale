import { useState, useCallback } from 'react';
import { useGeolocation } from '@/contexts/GeolocationContext';

const GAME_BASE_URL =
  'https://gateway.eva-digital-playground.com/v0/casino/games/launch';

interface GameLaunchParams {
  gameId: string;
  channel?: 'desktop' | 'mobile';
  partnerKey?: string;
  lobbyUrl?: string;
  mode?: 'demo' | 'real';
  language?: string;
}

export const useGameLauncher = () => {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [currentGameUrl, setCurrentGameUrl] = useState<string>('');
  const { geolocation } = useGeolocation();

  const buildGameUrl = useCallback((params: GameLaunchParams): string => {
    const {
      gameId,
      channel = 'desktop',
      partnerKey = '0wl',
      lobbyUrl = 'https://chinchincasino.com',
      mode = 'demo',
      language = 'en',
    } = params;

    const url = new URL(GAME_BASE_URL);
    url.searchParams.set('gameId', gameId);
    url.searchParams.set('channel', channel);
    url.searchParams.set('partnerKey', partnerKey);
    url.searchParams.set('lobbyUrl', lobbyUrl);
    url.searchParams.set('mode', mode);
    url.searchParams.set('language', language);

    return url.toString();
  }, []);

  const openGame = useCallback(
    (params: GameLaunchParams) => {
      const gameUrl = buildGameUrl({
        ...params,
        language:
          geolocation === 'us' || geolocation === 'uk' ? 'en' : geolocation,
      });
      setCurrentGameUrl(gameUrl);
      setIsGameOpen(true);
    },
    [buildGameUrl, geolocation]
  );

  const closeGame = useCallback(() => {
    setIsGameOpen(false);
    setCurrentGameUrl('');
  }, []);

  return {
    isGameOpen,
    currentGameUrl,
    openGame,
    closeGame,
  };
};
