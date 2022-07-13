import '@emotion/react';

declare module '@emotion/react' {
  export interface DefaultTheme {
    fontSizes: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };
    colors: {
      black: string;
      white: string;
      dark: string;
      primary: string;
      secondary: string;
    };
  }
}
