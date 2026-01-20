import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

export interface IGameIframeProps {
  gameUrl: string;
  onClose: () => void;
  gameId?: string;
}

const IframeContainer = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 9999,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  display: 'flex',
  flexDirection: 'column',
});

const CloseButtonContainer = styled('div')({
  position: 'absolute',
  top: 16,
  right: 16,
  zIndex: 10000,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '50%',
  padding: 8,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    transform: 'scale(1.1)',
  },
});

const StyledIframe = styled('iframe')({
  width: '100%',
  height: '100%',
  border: 'none',
  flex: 1,
});

const LoadingContainer = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontSize: '18px',
});

const GameIframe = ({ gameUrl, onClose, gameId }: IGameIframeProps) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <IframeContainer>
      <CloseButtonContainer onClick={onClose}>
        <IconButton
          size="small"
          aria-label={t('common.close')}
          sx={{ color: 'black' }}
        >
          <CloseIcon />
        </IconButton>
      </CloseButtonContainer>

      {isLoading && <LoadingContainer>{t('game.loading')}</LoadingContainer>}

      {hasError ? (
        <LoadingContainer>{t('game.error')}</LoadingContainer>
      ) : (
        <StyledIframe
          src={gameUrl}
          onLoad={handleLoad}
          onError={handleError}
          title={gameId || 'Game'}
          allow="fullscreen; autoplay; payment"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      )}
    </IframeContainer>
  );
};

export default GameIframe;
