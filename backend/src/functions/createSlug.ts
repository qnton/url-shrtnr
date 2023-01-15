import { Context } from 'hono';
import { generateSlug } from 'random-word-slugs';

export interface PostedDataInterface {
  url: string;
  slug?: string;
}

const createSlug = async (
  context: Context,
  postedData: PostedDataInterface,
) => {
  const { URLSHORTENER, FINALURL } = context.env;

  const url = postedData?.url;
  const slug = postedData?.slug || generateSlug();
  const exists = await URLSHORTENER.get(slug);

  if (!!exists) {
    return context.json({ error: 'already used' }, 403);
  }

  await URLSHORTENER.put(slug, url);

  return context.json({ url: FINALURL ? `${FINALURL}/${slug}` : slug });
};

export default createSlug;
