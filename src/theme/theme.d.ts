import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }

  interface TypographyVariants {
    regular: React.CSSProperties;
    medium: React.CSSProperties;
    semibold: React.CSSProperties;
    bold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    regular?: React.CSSProperties;
    medium?: React.CSSProperties;
    semibold?: React.CSSProperties;
    bold?: React.CSSProperties;
  }
}
