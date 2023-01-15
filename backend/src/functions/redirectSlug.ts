import { Context } from 'hono';

const redirectSlug = async (context: Context<'slug'>, slug: string) => {
  const { URLSHORTENER } = context.env;

  const url = await URLSHORTENER.get(slug);

  if (url) {
    return context.redirect(url, 302);
  }

  return context.json({ error: 'URL not found' }, 404);
};

export default redirectSlug;
