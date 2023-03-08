import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/globals.css";
import GlobalStyles from "../styles/globalStyles";
import { light } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Header />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}
