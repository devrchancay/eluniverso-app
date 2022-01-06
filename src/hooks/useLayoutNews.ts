import { useQuery } from "react-query";
import { layoutNews } from "../api/news";

function useLayoutNews({ alias }: { alias: string }) {
  const { isLoading, data, isFetched } = useQuery(`layoutNews-${alias}`, () =>
    layoutNews({ alias })
  );

  return { isLoading, data, isFetched };
}

export default useLayoutNews;
