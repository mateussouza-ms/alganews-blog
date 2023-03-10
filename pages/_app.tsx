import ProgressBar from "@badrap/bar-of-progress";
import type { AppProps as NextAppProps } from "next/app";
import Error from "next/error";
import { Router } from "next/router";
import { ThemeProvider } from "styled-components";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/globals.css";
import GlobalStyles from "../styles/globalStyles";
import { light } from "../styles/theme";

const progress = new ProgressBar({
  size: 2,
  color: light.primaryBackground,
  delay: 100,
});

interface CustomAppProps extends NextPageProps {}

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

export default function App({
  Component,
  pageProps,
}: AppProps<CustomAppProps>) {
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  }

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

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
