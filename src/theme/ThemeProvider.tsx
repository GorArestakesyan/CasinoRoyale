import { useMemo, type ReactNode } from 'react';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { useGeolocation } from '@/contexts/GeolocationContext';

interface ICustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider = ({
  children,
}: ICustomThemeProviderProps) => {
  const { styles } = useGeolocation();

  const fontFamily = styles.fontFamily || 'Arial, sans-serif';

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: styles.primaryColor,
          },
          secondary: {
            main: styles.secondaryColor,
          },
          background: {
            default: '#02011f',
            paper: '#06225d',
          },
        },
        typography: {
          fontFamily,
          h1: { letterSpacing: 0 },
          h2: { letterSpacing: 0 },
          h3: { letterSpacing: 0 },
          h4: { letterSpacing: 0 },
          h5: { letterSpacing: 0 },
          h6: { letterSpacing: 0 },
          body1: { letterSpacing: 0 },
          body2: { letterSpacing: 0 },
          button: { letterSpacing: 0 },
          caption: { letterSpacing: 0 },
          overline: { letterSpacing: 0 },
          regular: {
            fontFamily,
            fontWeight: 400,
            letterSpacing: 0,
          },
          medium: {
            fontFamily,
            fontWeight: 500,
            letterSpacing: 0,
          },
          semibold: {
            fontFamily,
            fontWeight: 600,
            letterSpacing: 0,
          },
          bold: {
            fontFamily,
            fontWeight: 700,
            letterSpacing: 0,
          },
        },
        shape: {
          borderRadius: 12,
        },
        breakpoints: {
          values: {
            xs: 375,
            sm: 480,
            md: 768,
            lg: 1200,
            xl: 1440,
            xxl: 1920,
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                fontFamily,
                letterSpacing: 0,
              },
            },
          },
        },
      }),
    [styles, fontFamily]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
