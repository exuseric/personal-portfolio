import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient(import.meta.env.ASTRO_HYGRAPH_ENDPOINT);


export const getContent = async (query: string): Promise<any> => {
  const response = await client.request(query);
  return response;
}