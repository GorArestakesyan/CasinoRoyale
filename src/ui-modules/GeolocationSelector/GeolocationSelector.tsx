import { Box, styled } from '@mui/material';
import { useGeolocation } from '@/contexts/GeolocationContext';
import { GEOLOCATIONS, GEOLOCATION_FLAGS } from '@/constants/geolocation';
import Select from '@ui-kit/Select';

const FlagIconBox = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  minWidth: '24px',
  minHeight: '24px',
  borderRadius: '100%',
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.51)',
  border: '0.75px solid rgba(255,255,255,1)',
  flexShrink: 0,
  '& > *': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    fontSize: '14px',
    lineHeight: 1,
  },
});

const GeolocationSelector = () => {
  const { geolocation, setGeolocation } = useGeolocation();

  const optionsWithIcons = GEOLOCATIONS.map((option) => ({
    ...option,
    icon: <FlagIconBox>{GEOLOCATION_FLAGS[option.value]}</FlagIconBox>,
  }));

  return (
    <Select
      value={geolocation}
      onChange={(e) => setGeolocation(e.target.value as typeof geolocation)}
      options={optionsWithIcons}
    />
  );
};

export default GeolocationSelector;
