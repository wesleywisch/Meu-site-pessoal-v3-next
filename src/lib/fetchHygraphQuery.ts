import { HomePageData } from '../types/PageInfoType'

export async function fetchHygraphQuery(
  query: string,
  revalidate?: number,
): Promise<HomePageData> {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate,
    },
  }).then((response) => response.json())

  const { data } = response

  return data
}
