import { Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { useGeolocation } from '@/contexts/GeolocationContext';
import Button from '@ui-kit/Button';
import DashedGradientBorder from '@ui-kit/DashedGradientBorder';
import DownloadIcon from '@/assets/icons/DownloadIcon.svg?react';
import { BLUR_EFFECTS } from '@/theme/blur';
import casinoLogoUrl from '@/assets/icons/CasinoLogo.svg?url';
import appHero from '@/assets/images/AppHero.png';

const AppDownloadContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '54px',
  [theme.breakpoints.down('xxl')]: {
    gap: '40px',
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const AppHeroImage = styled('img')(({ theme }) => ({
  width: 'clamp(240px, 16.67vw, 288px)',
  height: 'clamp(240px, 16.67vw, 288px)',
  objectFit: 'contain',
  flexShrink: 0,
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

const DownloadContainer = styled(DashedGradientBorder)<{
  gradientColors?: { start: string; end: string };
}>(({ theme }) => ({
  padding: '24px 68px',
  width: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 0,
  background: 'rgba(255, 255, 255, 0.04)',
  transition: 'all 0.3s ease',
  ...BLUR_EFFECTS.blur10,
  [theme.breakpoints.down('lg')]: {
    width: '350px',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    height: 'min-content',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
  },
}));

const CasinoLogo = styled('img')({
  width: '176.8px',
  height: '80px',
  objectFit: 'contain',
  marginBottom: '24px',
});

const TextBlock = styled(Stack)({
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
  marginBottom: '24px',
});

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.bold,
  fontSize: '32px',
  lineHeight: '40px',
  color: 'white',
  textAlign: 'center',
  margin: 0,
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.regular,
  fontSize: '16px',
  lineHeight: '22px',
  color: '#bababa',
  textAlign: 'center',
  margin: 0,
}));

const InstallButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== 'buttonGradient' && prop !== 'buttonHoverGradient',
})<{
  buttonGradient?: { start: string; end: string };
  buttonHoverGradient?: { start: string; end: string };
}>(({ theme, buttonGradient, buttonHoverGradient }) => ({
  ...theme.typography.semibold,
  width: '250px',
  height: '56px',
  padding: '0 !important',
  background: buttonGradient
    ? `linear-gradient(180deg, ${buttonGradient.start} 0%, ${buttonGradient.end} 100%) !important`
    : 'linear-gradient(180deg, #ff8d6b 0%, #ffba47 100%) !important',
  fontSize: '16px !important',
  lineHeight: '22px !important',
  border: 'none !important',
  boxShadow: 'none !important',
  '&:hover': {
    background: buttonHoverGradient
      ? `linear-gradient(180deg, ${buttonHoverGradient.start} 0%, ${buttonHoverGradient.end} 100%) !important`
      : 'linear-gradient(180deg, #ff9d7b 0%, #ffca57 100%) !important',
    boxShadow: 'none !important',
  },
  '& .MuiButton-root': {
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
}));

const AppDownload = () => {
  const { t } = useTranslation();
  const { styles } = useGeolocation();

  const buttonGradient = styles.buttonGradient || {
    start: '#ff8d6b',
    end: '#ffba47',
  };
  const buttonHoverGradient = styles.buttonHoverGradient || {
    start: '#ff9d7b',
    end: '#ffca57',
  };

  return (
    <AppDownloadContainer>
      <AppHeroImage src={appHero} alt="App Hero" />
      <DownloadContainer
        borderRadius={14}
        gradientColors={buttonGradient}
        dashPattern="4 4"
      >
        <CasinoLogo src={casinoLogoUrl} alt="Casino Logo" />
        <TextBlock>
          <Title as="h2">{t('footer.downloadCasino')}</Title>
          <Subtitle as="p">{t('footer.playAnywhere')}</Subtitle>
        </TextBlock>
        <InstallButton
          variant="contained"
          size="medium"
          icon={<DownloadIcon />}
          iconPlacement="left"
          buttonGradient={buttonGradient}
          buttonHoverGradient={buttonHoverGradient}
        >
          {t('footer.installApp')}
        </InstallButton>
      </DownloadContainer>
    </AppDownloadContainer>
  );
};

export default AppDownload;
