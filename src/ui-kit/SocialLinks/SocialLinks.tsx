import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@/assets/icons/InstagramIcon.svg?react';
import TelegramIcon from '@/assets/icons/TelegramIcon.svg?react';
import XIcon from '@/assets/icons/XIcon.svg?react';
import MailIcon from '@/assets/icons/MailIcon.svg?react';

const SocialLinksContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
  justifyContent: 'flex-end',
});

const SocialLinkBox = styled(Box)<{
  background?: string;
}>(({ background }) => ({
  width: '52px',
  height: '52px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid rgba(255,255,255,0.4)',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  background: background || '#000000',
  '&:hover': {
    transform: 'scale(1.05)',
    opacity: 0.9,
  },
  '& svg': {
    width: '24px',
    height: '24px',
    fill: 'white',
  },
}));

const InstagramBox = styled(SocialLinkBox)({
  background:
    'radial-gradient(circle at 33% 100%, #feda75 0%, #fa7e1e 30%, #d62976 55%, #962fbf 100%, #4f5bd5 100%)',
});

const TelegramBox = styled(SocialLinkBox)({
  background: '#398FFF',
});

const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <InstagramBox>
        <InstagramIcon />
      </InstagramBox>
      <TelegramBox>
        <TelegramIcon />
      </TelegramBox>
      <SocialLinkBox>
        <XIcon />
      </SocialLinkBox>
      <SocialLinkBox>
        <MailIcon />
      </SocialLinkBox>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
