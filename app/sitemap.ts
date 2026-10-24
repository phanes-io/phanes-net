import type { MetadataRoute } from 'next';
import { connection } from 'next/server';
import { getAllPosts } from '@/lib/blog';
// Only public, currently published content. Do not fabricate lastmod on each build.
export default async function sitemap():Promise<MetadataRoute.Sitemap> {
  await connection();
  const posts=await getAllPosts();
  return [...['/','/projects','/blog'].map(p=>({url:'https://phanes.net'+p})),...posts.map(p=>({url:'https://phanes.net/blog/'+p.slug}))];
}
