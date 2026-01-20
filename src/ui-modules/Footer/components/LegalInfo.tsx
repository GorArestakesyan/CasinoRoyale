import { Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import AgeRestrictionIcon from '@/assets/icons/AgeRestrictionIcon.svg?react';
import LicenseIcon from '@/assets/icons/LicenseIcon.svg?react';

const LegalInfoContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'column',
  marginLeft: '64px',
  gap: '24px',
  maxWidth: '285px',
  [theme.breakpoints.down('xxl')]: {
    marginLeft: '40px',
    maxWidth: '250px',
  },
  [theme.breakpoints.down('lg')]: {
    marginLeft: '0',
    maxWidth: '598px',
    flexDirection: 'row',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const AgeRestriction = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
  [theme.breakpoints.down('xl')]: {
    minWidth: '287px',
  },
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: 'unset',
    maxWidth: '287px',
    width: '100%',
  },
}));

const Certification = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: 'unset',
    maxWidth: '287px',
    width: '100%',
  },
}));

const StyledLicenseIcon = styled(LicenseIcon)({
  width: '100%',
  height: '100%',
  maxWidth: '58px',
  maxHeight: '58px',
});

const AgeRestrictionText = styled(Typography)(({ theme }) => ({
  ...theme.typography.regular,
  color: '#FBFBFBB2',
}));

const CertificationText = styled(Typography)(({ theme }) => ({
  ...theme.typography.regular,
  whiteSpace: 'pre-line',
  fontSize: '16px',
  lineHeight: '22px',
  color: '#FBFBFBB2',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '287px',
    textAlign: 'center',
  },
}));

const LegalInfo = () => {
  const { t } = useTranslation();

  return (
    <LegalInfoContainer>
      <AgeRestriction>
        <AgeRestrictionIcon height={58} width={58} />
        <AgeRestrictionText variant="body2" color="white">
          {t('footer.only18Plus')}
        </AgeRestrictionText>
      </AgeRestriction>
      <Certification>
        <StyledLicenseIcon />
        <CertificationText variant="body2" color="white">
          {t('footer.certified')}
        </CertificationText>
      </Certification>
    </LegalInfoContainer>
  );
};

export default LegalInfo;
