import { test, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { readdir, readFile } from 'node:fs/promises'
import { setTimeout } from 'node:timers/promises'
import { createServer } from 'node:net'
import { articles } from '../src/features/site-templates/catalog/lamossa/content/catalog.ts'
import { countries, phoneCountries } from '../src/features/site-templates/catalog/lamossa/content/countries.ts'
import { lamossaTemplate } from '../src/features/site-templates/catalog/lamossa/meta.ts'
const probe = createServer()
await new Promise(resolve => probe.listen(0, '127.0.0.1', resolve))
const port = probe.address().port
await new Promise(resolve => probe.close(resolve))
const origin = `http://127.0.0.1:${port}`
let child, output = ''
before(async () => {
  child = spawn(process.execPath, ['scripts/next.mjs', 'start'], { env: { ...process.env, PORT: String(port) }, stdio: ['ignore', 'pipe', 'pipe'] })
  child.stdout.on('data', bytes => { output += bytes }); child.stderr.on('data', bytes => { output += bytes })
  for (let i=0;i<100;i++) { if(child.exitCode !== null) throw new Error(output); if(output.includes('Ready in')){const response=await fetch(origin);assert.equal(response.status,200);return} await setTimeout(150) }
  throw new Error('服务启动超时\n'+output)
})
after(async () => { if(child && child.exitCode === null){child.kill('SIGTERM');await new Promise(resolve=>child.once('exit',resolve))} })
test('全部双语页面真实 HTTP 响应与模板身份',async()=>{
  for(const locale of ['zh','en'])for(const page of lamossaTemplate.surfaces[0].pages){const path=`${locale==='en'?'/en':''}${page.slug?'/'+page.slug:''}`||'/';const response=await fetch(origin+path);assert.equal(response.status,200,path);const html=await response.text();assert.match(html,/data-template="lamossa"/);assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,path);const visible=html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<a[^>]*class="lm-language"[^>]*>[\s\S]*?<\/a>/g,'').replace(/<[^>]*>/g,'');if(locale==='en')assert.doesNotMatch(visible,/[\u3400-\u9fff]/,path);assert.doesNotMatch(html.replace(/<script[\s\S]*?<\/script>/g,''),/>undefined<|>NaN<|Internal Server Error/)}
})
test('未知页面明确返回 404',async()=>{for(const path of ['/unknown-page','/en/unknown-page'])assert.equal((await fetch(origin+path)).status,404)})
test('保留参考站含括号的两条职位路径别名',async()=>{for(const locale of ['','/en'])for(const slug of ['no-code-web-developer-(framer-specialist)','freelance-motion-designer-(remote)'])assert.equal((await fetch(origin+locale+'/career/'+slug)).status,200)})
test('全部运行图片与字体通过真实服务加载',async()=>{
  const walk=async prefix=>{const entries=await readdir('public'+prefix,{withFileTypes:true});return(await Promise.all(entries.map(e=>e.isDirectory()?walk(prefix+'/'+e.name):[prefix+'/'+e.name]))).flat()}
  for(const path of await walk('/templates/lamossa')){if(!/\.(jpg|png|webp|svg|frag|woff2|css)$/.test(path))continue;const response=await fetch(origin+path);assert.equal(response.status,200,path);assert.ok((await response.arrayBuffer()).byteLength>0,path)}
  const source=await readFile('src/features/site-templates/catalog/lamossa/theme.css','utf8');assert.doesNotMatch(source,/https:\/\//)
})

test('地区与国际区号使用原组件的固定195项数据，避免ICU水合差异',()=>{assert.equal(countries.length,195);assert.equal(phoneCountries.length,195);assert.equal(new Set(countries.map(c=>c.code)).size,195);for(const c of phoneCountries){assert.ok(countries.some(n=>n.code===c.code));assert.match(c.phoneCode,/^\+[0-9]+$/)}})

test('六篇文章封面与作者头像分离，并保留41张正文插图',()=>{assert.equal(articles.length,6);assert.equal(articles.flatMap(p=>p.body.filter(b=>b.kind==='image')).length,41);for(const page of articles){assert.notEqual(page.images[0],page.authorImage);assert.ok(page.authorImage);assert.ok(page.body.some(b=>b.kind==='image'));}})
