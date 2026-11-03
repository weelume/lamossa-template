'use client'
import type{ContentBlock,Copy,Locale}from'../config'
import{useLamossaBrand}from'../host'
import{Reveal}from'./Motion'
function Text({value,locale}:{value:Copy;locale:Locale}){const name=useLamossaBrand();return <>{value[locale].replace(/Lamosa(?: Studio)?/g,name[locale])}</>}
/** 连续列表和原站成组插图分别组合，段落与目录锚点保持数据顺序。 */
export function RichBody({blocks,locale,legal=false}:{blocks:ContentBlock[];locale:Locale;legal?:boolean}){
 const groups:{kind:'list'|'images'|'text';items:ContentBlock[]}[]=[];
 for(const block of blocks){const kind=block.kind==='li'?'list':block.kind==='image'?'images':'text';const last=groups[groups.length-1];if(kind!=='text'&&last?.kind===kind)last.items.push(block);else groups.push({kind,items:[block]})}
 return <div className={`lm-rich-body${legal?' lm-legal-body':''}`}>{groups.map((group,i)=>group.kind==='list'?<ul key={i}>{group.items.map((b,j)=><li key={j}><Text value={b.text} locale={locale}/></li>)}</ul>:group.kind==='images'?<div className="lm-article-figures" key={i}>{group.items.map((b,j)=><figure key={j}><Reveal delay={j*.2}><img src={b.src} alt={b.text[locale]} loading="lazy"/></Reveal></figure>)}</div>:group.items.map((b,j)=>b.kind.startsWith('h')?<h2 key={`${i}-${j}`} id={`section-${blocks.indexOf(b)}`}><Text value={b.text} locale={locale}/></h2>:<p key={`${i}-${j}`}><Text value={b.text} locale={locale}/></p>))}</div>
}
