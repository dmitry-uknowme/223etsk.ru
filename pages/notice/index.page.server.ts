import { dehydrate, QueryClient } from "react-query";
import { PageContextBuiltIn } from "vite-plugin-ssr";
import fetchNotice from "../../renderer/api/fetchNotice";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  let notice = null;
  const { url } = pageContext;

  if (!url.startsWith("/notice/") || url.includes(".")) return;

  const noticeId = pageContext.routeParams.noticeId;
  if (!noticeId) return null;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("notice", async () => {
    const data = await fetchNotice(noticeId);
    return { notice: data };
  });

  const pageProps = { noticeId, dehydratedState: dehydrate(queryClient) };
  return {
    pageContext: {
      pageProps,
    },
  };
}
