import { useTranslation } from 'react-i18next';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@ui-kit/Button';
import { useGeolocation } from '@/contexts/GeolocationContext';
import casinoLogoUrl from '@/assets/icons/CasinoLogo.svg?url';
import sevenSlot from '@/assets/images/SevenSlot.png';
import nightBackground from '@/assets/images/NightBackground.webp';

interface IHeroSectionProps {
  onOpenGame: () => void;
}

const HeroSectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  backgroundImage: `url(${nightBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '944px',
  [theme.breakpoints.down('xl')]: {
    minHeight: '910px',
  },
  [theme.breakpoints.down('lg')]: {
    minHeight: '854px',
  },
}));

const BodyContent = styled(Stack)({
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0,
  zIndex: 1,
});

const CasinoLogo = styled('img')({
  marginBottom: '48px',
  width: '264px',
  height: '120px',
});

const SlotImage = styled('img')({
  width: '326px',
  height: '200px',
  objectFit: 'contain',
  marginBottom: '32px',
});

const OpenGameButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== 'buttonGradient' && prop !== 'buttonHoverGradient',
})<{
  buttonGradient?: { start: string; end: string };
  buttonHoverGradient?: { start: string; end: string };
}>(({ theme, buttonGradient, buttonHoverGradient }) => ({
  ...theme.typography.semibold,
  width: '358.5px',
  fontSize: '16px',
  lineHeight: '22px',
  textTransform: 'uppercase',
  border: 'none',
  boxShadow: 'none',
  '&.MuiButton-root': {
    padding: '17px 0',
  },
  '&.MuiButton-contained': {
    background: buttonGradient
      ? `linear-gradient(180deg, ${buttonGradient.start} 0%, ${buttonGradient.end} 100%)`
      : 'linear-gradient(180deg, #ff8d6b 0%, #ffba47 100%)',
    boxShadow: 'none',
    '&:hover': {
      background: buttonHoverGradient
        ? `linear-gradient(180deg, ${buttonHoverGradient.start} 0%, ${buttonHoverGradient.end} 100%)`
        : 'linear-gradient(180deg, #ff9d7b 0%, #ffca57 100%)',
      boxShadow: 'none',
      transform: 'none',
    },
    '&:active': {
      transform: 'none',
    },
  },
  '& span': {
    textTransform: 'uppercase',
  },
  [theme.breakpoints.down('xs')]: {
    '&.MuiButton-root': {
      maxWidth: '343px',
      width: '100%',
    },
  },
}));

const HeroSection = ({ onOpenGame }: IHeroSectionProps) => {
  const { t } = useTranslation();
  const { styles } = useGeolocation();

  return (
    <HeroSectionContainer as="section">
      <BodyContent>
        <CasinoLogo src={casinoLogoUrl} alt="Casino Royale Logo" />
        <SlotImage src={sevenSlot} alt="Slot Machine" />
        <OpenGameButton
          variant="contained"
          size="large"
          onClick={onOpenGame}
          buttonGradient={styles.buttonGradient}
          buttonHoverGradient={styles.buttonHoverGradient}
        >
          {t('game.openGame')}
        </OpenGameButton>
      </BodyContent>
    </HeroSectionContainer>
  );
};

export default HeroSection;
