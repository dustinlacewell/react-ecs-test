import "styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/layout";
import { AppProps } from "next/app";
import Head from "next/head";
import customTheme from "styles/customTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
