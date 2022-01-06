import { useEffect, useState } from "react";
import * as Font from "expo-font";

import { fonts } from "../constants";
import useMainMenu from "./useMainMenu";
import useLayoutNews from "./useLayoutNews";

function useAppReady() {
  const [isAppReady, setIsAppReady] = useState(false);

  const { isLoading, isFetched } = useMainMenu();
  const { isLoading: isLoadingNews, isFetched: isFetchedNews } = useLayoutNews({
    alias: "portada",
  });

  const { isLoading: isLoadingNews1, isFetched: isFetchedNews1 } =
    useLayoutNews({
      alias: "noticias",
    });

  async function onLoadApp() {
    // load fonts
    await Font.loadAsync(fonts);
    // check main menu
    isFetched && isFetchedNews && isFetchedNews1 && setIsAppReady(true);
  }

  useEffect(() => {
    (async () => {
      await onLoadApp();
    })();
  }, [isLoading, isLoadingNews, isLoadingNews1]);

  return isAppReady;
}

export default useAppReady;
