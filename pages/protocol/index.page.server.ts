import { dehydrate, QueryClient } from "react-query";
import { PageContextBuiltIn } from "vite-plugin-ssr";
import fetchNotice from "../../renderer/api/fetchNotice";
import fetchTender from "../../renderer/api/fetchTender";
import getProcedureProtocol from "../../renderer/api/getProcedureProtocol";

export { onBeforeRender };

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  let protocol = null;
  let procedureId = null;
  const { url } = pageContext;

  if (
    (!url.startsWith("/tenders/") && !url.includes("/protocol/")) ||
    url.includes(".")
  )
    return;

  const protocolId = pageContext.routeParams.protocolId;
  const tenderId = pageContext.routeParams.tenderId;
  if (!protocolId) return null;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("protocol", async () => {
    const data = await getProcedureProtocol(protocolId);
    const procedure = await fetchTender(tenderId);

    // console.log("noticeeee", data);
    procedureId = procedure.id;
    return { protocol: data, procedure: procedure };
  });
  await queryClient.prefetchQuery("procedure", async () => {
    if (!procedureId) return;
    const data = await fetchTender(procedureId);
    return { procedure: data };
  });

  const pageProps = {
    protocolId,
    procedureId,
    dehydratedState: dehydrate(queryClient),
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
