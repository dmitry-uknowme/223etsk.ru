import axios from "axios";
import { dehydrate, QueryClient } from "react-query";
import { PageContextBuiltIn } from "vite-plugin-ssr";
import fetchTender from "../../renderer/api/fetchTender";
import searchTenders, { defaultFilter } from "../../renderer/api/searchTenders";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  let tenders = null;
  let tendersCount = 0;
  const { url } = pageContext;
  if (url !== "/tenders") return;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("tenders", async () => {
    const data = await searchTenders();
    return {
      items: data.data,
      itemsCount: data.total_count,
    };
  });
  const pageProps = { dehydratedState: dehydrate(queryClient) };
  return {
    pageContext: {
      pageProps,
    },
  };
}
