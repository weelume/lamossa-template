import type{ReactNode}from'react'
import{copy,type Copy,type Locale}from'../config'
import{Reveal,Title}from'./Motion'
import{Button}from'./Shell'
export function Heading({title,description,locale}:{title:Copy;description?:Copy;locale:Locale}){return <Reveal className="lm-heading"><h2>{title[locale]}</h2>{description&&<p>{description[locale]}</p>}</Reveal>}
export function PageHeader({title,description,locale,children}:{title:Copy;description?:Copy;locale:Locale;children?:ReactNode}){return <header className="lm-page-header lm-container" id="section-hero"><Title text={title} locale={locale} hero/>{description&&<Reveal delay={.6} y={0}><p>{description[locale]}</p></Reveal>}{children}</header>}
export function CTA({locale,basePath,compact=false}:{locale:Locale;basePath:string;compact?:boolean}){return <Reveal className={`lm-cta lm-glass ${compact?'lm-compact':''}`}><div><h3>{(compact?copy('一起开始构建','Let’s start building'):copy('你专注业务\n我们让它发生','You focus on your company.\nWe make it happen'))[locale]}</h3><p>{locale==='zh'?'值得信赖的团队，与你一起发布出色产品。':'We’re the A-team you can trust and need to launch your product'}</p><Button href={`${basePath}/contact-us`}>{locale==='zh'?'开始合作':'Get Started'}</Button></div><div className="lm-cta-symbol" aria-hidden="true"><i/><i/><i/></div></Reveal>}
