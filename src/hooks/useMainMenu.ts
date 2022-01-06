import { useQuery } from "react-query";
import { mainMenu } from "../api/menu";

interface IMenuChildrenResponse {
  display_name: string;
  url: string;
  external: boolean;
  node_type: string;
}

function useMainMenu() {
  const { data, ...queryResult } = useQuery("mainMenu", () => mainMenu());

  const initialMenu = [
    {
      id: 0,
      label: "Home",
      url: "/",
      external: false,
      type: "link",
      alias: "portada",
    },
  ];

  const menu =
    data?.children
      .filter((i: IMenuChildrenResponse) => i.node_type === "section")
      .map((item: IMenuChildrenResponse, index: number) => ({
        id: index + 1,
        label: item.display_name,
        url: item.url,
        external: item.external,
        type: item.node_type,
        alias: item.display_name.toLowerCase(),
      })) ?? [];

  return { items: [...initialMenu, ...menu], ...queryResult };
}

export default useMainMenu;
