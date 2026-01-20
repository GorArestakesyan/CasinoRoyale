import { Box, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useGeolocation } from '@/contexts/GeolocationContext';
import AppDownload from './components/AppDownload';
import LegalInfo from './components/LegalInfo';
import SocialMedia from './components/SocialMedia';

const FooterContainer = styled('footer')<{
  footerGradient?: string;
}>(({ theme, footerGradient }) => ({
  background:
    footerGradient || 'linear-gradient(-90deg, #06225d 0%, #02011f 40%)',
  padding: '60px 32px 0px 32px',
  [theme.breakpoints.down('xxl')]: {
    padding: '60px 15px 0px 32px',
  },
  [theme.breakpoints.down('xs')]: {
    padding: '60px 26px',
  },
}));

const FooterContent = styled(Container)(({ theme }) => ({
  maxWidth: '1920px !important',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: 0,
  justifyContent: 'space-between',
  [theme.breakpoints.down('xl')]: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  [theme.breakpoints.down('xs')]: {
    gap: '52px',
  },
}));

const Line = styled(Box)({
  height: '12px',
  width: '100%',
  marginTop: '49px',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
});

const ContentRow = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  columnGap: '32px',
  rowGap: '32px',
  justifyContent: 'space-between',
  width: '100%',
  [theme.breakpoints.down('xl')]: {
    justifyContent: 'space-around',
  },
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    rowGap: '52px',
  },
}));

const Footer = () => {
  const { styles } = useGeolocation();

  return (
    <FooterContainer footerGradient={styles.footerGradient}>
      <FooterContent>
        <AppDownload />
        <ContentRow>
          <LegalInfo />
          <SocialMedia />
        </ContentRow>
      </FooterContent>
      <Line />
    </FooterContainer>
  );
};

export default Footer;
