// import { hydrateRoot } from "react-dom/client";yar

import ReactDOM from "react-dom";
// import { hydrateRoot } from "react-dom/client";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { PageShell } from "./PageShell";
import type { PageContext } from "./types";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  ChakraProvider,
  ColorModeScript,
  CSSReset,
  theme,
  ThemeProvider,
} from "@chakra-ui/react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./assets/styles/app.sass";
import axios from "axios";

hydrate();
async function hydrate() {
  const dehydratedState = window.__REACT_QUERY_STATE__;
  const queryClient = new QueryClient();
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>();
  const { Page, pageProps } = pageContext;

  ReactDOM.render(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        {/* <ColorModeScript /> */}
        <PageShell pageContext={pageContext}>
          {/* <ThemeProvider theme={theme}> */}
          {/* <ChakraProvider theme={theme}> */}
          <Page {...pageProps} />
          {/* </ChakraProvider> */}
          {/* </ThemeProvider> */}
        </PageShell>
        <ReactQueryDevtools initialIsOpen />
      </Hydrate>
    </QueryClientProvider>,
    document.getElementById("page-view")
  );
}
