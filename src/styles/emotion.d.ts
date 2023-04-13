import CustomTheme from "./CustomTheme";

import "@emotion/react";

type ThemeType = typeof CustomTheme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
