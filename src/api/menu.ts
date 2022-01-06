import { api, system } from "../constants";

export async function mainMenu() {
  const query = { hierarchy: "MainMenu" };
  const request = await fetch(
    `${api.endpoint}/content/fetch/navigation/?query=${encodeURI(
      JSON.stringify(query)
    )}&_website=${system.siteName}`
  );

  if (!request.ok) {
    throw `Something went wrong: ${request.status}`;
  }

  const response = await request.json();

  return response;
}
