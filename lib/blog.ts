import 'server-only';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { isPublished, safePostSlug } from './publication';
const BLOG_DIR = path.join(process.cwd(),'content/blog');
export interface PostMeta { slug:string; title:string; date:string; description:string; }
export interface Post extends PostMeta { content:string; }
function meta(slug:string,data:Record<string,unknown>):PostMeta {
  return {slug,title:typeof data.title==='string'?data.title:slug,date:typeof data.date==='string'?data.date:'',description:typeof data.description==='string'?data.description:''};
}
export async function getAllPosts(now = new Date()):Promise<PostMeta[]> {
  let files:string[];
  try { files=await fs.readdir(BLOG_DIR); } catch { return []; }
  const posts=await Promise.all(files.filter(f=>f.endsWith('.mdx')&&safePostSlug(f.slice(0,-4))).map(async file=>{
    const {data}=matter(await fs.readFile(path.join(BLOG_DIR,file),'utf8'));
    return meta(file.slice(0,-4),data);
  }));
  return posts.filter(p=>isPublished(p.date,now)).sort((a,b)=>b.date.localeCompare(a.date));
}
export async function getPost(slug:string,now = new Date()):Promise<Post> {
  if(!safePostSlug(slug)) throw new Error('Post unavailable');
  const {data,content}=matter(await fs.readFile(path.join(BLOG_DIR,slug+'.mdx'),'utf8'));
  const post=meta(slug,data);
  if(!isPublished(post.date,now)) throw new Error('Post unavailable');
  return {...post,content};
}
