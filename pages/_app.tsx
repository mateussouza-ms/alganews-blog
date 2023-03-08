import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import GlobalStyles from "../styles/globalStyles";
import { light } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
