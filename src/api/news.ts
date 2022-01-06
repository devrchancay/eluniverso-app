import { api, system } from "../constants";

export async function layoutNews({ alias = "portada", from = "0" }) {
  const query = { alias, from };
  const request = await fetch(
    `${api.endpoint}/content/fetch/collection/?query=${encodeURI(
      JSON.stringify(query)
    )}&_website=${system.siteName}`
  );

  if (!request.ok) {
    throw `Something went wrong: ${request.status}`;
  }

  const response = await request.json();

  return response;
}

export async function getNewsById({ id }: any) {
  const query = { id, published: true };
  const request = await fetch(
    `${api.endpoint}/content/fetch/content?query=${encodeURI(
      JSON.stringify(query)
    )}&_website=${system.siteName}`
  );

  if (!request.ok) {
    throw `Something went wrong: ${request.status}`;
  }

  const response = await request.json();

  return response;
}
