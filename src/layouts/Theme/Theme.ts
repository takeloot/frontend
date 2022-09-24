import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  breakpoints: {
    sm: "320px",
    sm2: "480",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});
