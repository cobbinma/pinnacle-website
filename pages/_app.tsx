import React from "react";
import { AppProps } from 'next/app';
import Head from "next/head";
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import theme from "../theme";
import {createClient} from "contentful";

export const client = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <React.Fragment>
        <Head>
          <title>Pinnacle Acoustic Consultants</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
      )
}

export default MyApp
