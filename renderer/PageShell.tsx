import React from "react";
import logo from "./logo.svg";
import { PageContextProvider } from "./usePageContext";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import type { PageContext } from "./types";
import "./PageShell.css";
import { Link } from "./Link";
// import { ReactQueryDevtools } from "react-query/devtools";

export { PageShell };

function PageShell({
    children,
    pageContext,
}: {
    children: React.ReactNode;
    pageContext: PageContext;
}) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                {/* <Layout> */}
                {/* <Link href="/da">
            <>da</>
          </Link> */}
                {/* <Sidebar>
            <Logo />
            <Link className="navitem" href="/">
              Home
            </Link>
            <Link className="navitem" href="/about">
              About
            </Link>
          </Sidebar> */}
                {children}
                {/* </Layout> */}
            </PageContextProvider>
        </React.StrictMode>
    );
}

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                display: "flex",
                maxWidth: 900,
                margin: "auto",
            }}
        >
            {children}
        </div>
    );
}

function Content({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                padding: 20,
                paddingBottom: 50,
                borderLeft: "2px solid #eee",
                minHeight: "100vh",
            }}
        >
            {children}
        </div>
    );
}
