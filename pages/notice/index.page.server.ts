import { dehydrate, QueryClient } from "react-query";
import { PageContextBuiltIn } from "vite-plugin-ssr";
import fetchNotice from "../../renderer/api/fetchNotice";
import fetchTender from "../../renderer/api/fetchTender";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  let notice = null;
  let procedureId = null;
  const { url } = pageContext;

  if (
    (!url.startsWith("/tenders/") && !url.includes("/notice/")) ||
    url.includes(".")
  )
    return;

  const noticeId = pageContext.routeParams.noticeId;
  const tenderId = pageContext.routeParams.tenderId;
  if (!noticeId) return null;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("notice", async () => {
    const data = await fetchNotice(noticeId);
    const procedure = await fetchTender(tenderId);

    // console.log("noticeeee", data);
    procedureId = procedure.id;
    return { notice: data, procedure: procedure };
  });
  await queryClient.prefetchQuery("procedure", async () => {
    if (!procedureId) return;
    const data = await fetchTender(procedureId);
    return { procedure: data };
  });

  const pageProps = {
    noticeId,
    procedureId,
    dehydratedState: dehydrate(queryClient),
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
