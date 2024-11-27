import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      WHITE: string;
      GREEN: string;
      TEXT_COLOR: string;
      LABEL_COLOR: string;
    }
  }
};
