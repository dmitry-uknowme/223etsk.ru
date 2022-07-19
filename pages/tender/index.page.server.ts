import { dehydrate, QueryClient } from "react-query";
import { PageContextBuiltIn } from "vite-plugin-ssr";
import fetchTender from "../../renderer/api/fetchTender";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    let tender = null;
    const { url } = pageContext;

    if (!url.startsWith("/tenders/") || url.includes(".")) return null;

    const tenderId = pageContext.routeParams.tenderId;
    if (!tenderId) return null;

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery("tender", () => fetchTender(tenderId));

    const pageProps = { tenderId, dehydratedState: dehydrate(queryClient) };
    return {
        pageContext: {
            pageProps,
        },
    };
}
