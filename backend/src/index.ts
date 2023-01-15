import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { cache } from 'hono/cache';
import createSlug, { PostedDataInterface } from './functions/createSlug';
import checkSlug from './functions/checkSlug';
import redirectSlug from './functions/redirectSlug';

export interface Env {
  URLSHORTENER: KVNamespace;
  FINALURL: string;
}

const app = new Hono()
  .use('*', logger(), cors())
  .post('/shorten', async (context) => {
    const json = await context.req.json<PostedDataInterface>();

    return createSlug(context, json);
  })
  .get(
    '/:slug_to_check/check',
    async (context) => {
      const slug = context.req.param('slug_to_check');

      return checkSlug(context, slug);
    },
    cache({ cacheName: '', cacheControl: 'max-age=10000000000' }),
  )
  .get(
    '/:slug',
    async (context) => {
      const slug = context.req.param('slug');

      return redirectSlug(context, slug);
    },
    cache({ cacheName: '', cacheControl: 'max-age=10000000000' }),
  );

export default app;
