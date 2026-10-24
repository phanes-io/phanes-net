import ts from 'typescript';
import {readFileSync,writeFileSync,unlinkSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
const files=[];
try{for(const name of ['publication','blog']){let source=readFileSync(new URL('../lib/'+name+'.ts',import.meta.url),'utf8');source=source.replace("import 'server-only';",'').replace("'./publication'","'./publication.generated.mjs'");const file=new URL('./'+name+'.generated.mjs',import.meta.url);writeFileSync(file,ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText);files.push(file);}const r=spawnSync(process.execPath,['--test',new URL('./publication.test.mjs',import.meta.url).pathname],{stdio:'inherit'});process.exitCode=r.status??1;}finally{for(const file of files)unlinkSync(file);}
