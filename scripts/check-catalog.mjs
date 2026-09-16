import {readFileSync,existsSync} from 'node:fs';
const people=JSON.parse(readFileSync('data/people.json','utf8'));
const {records,recordHref}=await import('../data/catalog.ts');
if(people.length!==40)throw new Error('Expected 40 profiles');
const paths=['/','/people','/projects','/events','/practice','/about','/archive','/topics/food-ecology',...people.map(p=>'/people/'+p.id),...records.map(recordHref)];
for(const item of [...people,...records])if(item.image&&!existsSync('public'+item.image))throw new Error('Missing '+item.image);
for(const r of records)for(const id of r.related)if(id!=='food-ecology'&&!records.some(p=>p.slug===id))throw new Error('Missing relation '+id);
let failures=[];
for(const path of paths){const r=await fetch('http://localhost:5173'+path);if(!r.ok)failures.push([path,r.status]);}
console.log(JSON.stringify({profiles:people.length,records:records.length,routes:paths.length,failures}));
if(failures.length)process.exitCode=1;
