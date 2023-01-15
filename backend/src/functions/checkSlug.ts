import { Context } from 'hono';

const checkSlug = async (context: Context<'slug_to_check'>, slug: string) => {
  const { URLSHORTENER } = context.env;

  const exists = await URLSHORTENER.get(slug);

  if (!!exists) {
    return context.json({ error: 'already used' }, 400);
  }

  return context.json({ success: 'not used' }, 200);
};

export default checkSlug;
