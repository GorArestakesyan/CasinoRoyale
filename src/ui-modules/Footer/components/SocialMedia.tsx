import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import GeolocationSelector from '@ui-modules/GeolocationSelector';
import SocialLinks from '@ui-kit/SocialLinks';

const SocialMediaContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-end',
  gap: '108px',
  marginTop: '38px',
  [theme.breakpoints.down('lg')]: {
    alignSelf: 'center',
    gap: '60px',
    width: '100%',
    marginTop: '52px',
    alignItems: 'center',
  },
  [theme.breakpoints.down('xs')]: {
    marginTop: '0px',
  },
}));

const SocialMediaText = styled(Typography)(({ theme }) => ({
  ...theme.typography.regular,
  marginBottom: '12px',
  textAlign: 'end',
  fontSize: '16px',
  lineHeight: '22px',
  color: '#BABABA',
  [theme.breakpoints.down('lg')]: {
    textAlign: 'center',
  },
}));

const SocialMedia = () => {
  const { t } = useTranslation();

  return (
    <SocialMediaContainer>
      <GeolocationSelector />
      <Box>
        <SocialMediaText variant="body2" color="white">
          {t('footer.usOnSocialMedia')}
        </SocialMediaText>
        <SocialLinks />
      </Box>
    </SocialMediaContainer>
  );
};

export default SocialMedia;
