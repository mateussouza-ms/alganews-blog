import type { AppProps as NextAppProps } from "next/app";
import Error from "next/error";
import { ThemeProvider } from "styled-components";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/globals.css";
import GlobalStyles from "../styles/globalStyles";
import { light } from "../styles/theme";

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
