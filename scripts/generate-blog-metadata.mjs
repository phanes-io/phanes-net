import fs from 'node:fs';
import matter from 'gray-matter';
const rows=fs.readdirSync('content/blog').filter(f=>f.endsWith('.mdx')).map(file=>{
 const {data}=matter(fs.readFileSync('content/blog/'+file,'utf8'));
 if(typeof data.date!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(data.date))throw new Error('Invalid date: '+file);
 const offset=Number(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Berlin',hour:'2-digit',hourCycle:'h23'}).format(new Date(data.date+'T00:00:00Z')));
 return {slug:file.slice(0,-4),title:data.title,date:data.date,publishAt:data.date+'T00:00:00+'+String(offset).padStart(2,'0')+':00'};
}).sort((a,b)=>b.date.localeCompare(a.date));
if(rows.length!==6)throw new Error('Expected two existing and four newly authored posts');
fs.writeFileSync('lib/blog-posts.json',JSON.stringify(rows,null,2)+'\n');
console.log('blog metadata:',rows.length);
