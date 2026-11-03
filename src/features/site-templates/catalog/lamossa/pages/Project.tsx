import Link from'next/link'
import type{SiteTemplatePageProps as TemplatePageProps}from'../../../types'
import{projects}from'../content/catalog'
import{Shell,Button}from'../components/Shell'
import{PageHeader,Heading,CTA}from'../components/Common'
import{Reveal}from'../components/Motion'
import{RichBody}from'../components/Article'
import{ProjectGrid}from'../components/Cards'
import{ContactSection}from'../components/Forms'
import{copy}from'../config'
function Project({locale='zh',basePath,index}:TemplatePageProps&{index:number}){const page=projects[index],p={locale,basePath};return <Shell {...p}><div className="lm-back lm-container"><Link href={`${basePath}/projects`}>{locale==='zh'?'返回全部项目':'Go to Projects'}</Link></div><PageHeader locale={locale} title={page.title} description={page.description}><div className="lm-header-action"><Button secondary href="#project-gallery">{locale==='zh'?'预览项目':'Preview Project'}</Button></div></PageHeader><section className="lm-container" id="project-gallery"><Reveal><img className="lm-project-main" src={page.images[0]} alt={page.title[locale]}/></Reveal><dl className="lm-specs lm-glass">{[copy('公司','Company'),copy('周期','Timeline'),copy('提供的服务','Service provided')].map((label,i)=><div key={label.en}><dt>{label[locale]}</dt><dd>{page.specs[i][locale]}</dd></div>)}</dl><div className="lm-project-story"><RichBody blocks={page.body.slice(0,-3)} locale={locale}/><aside className="lm-glass"><blockquote>{page.body[page.body.length-3].text[locale]}</blockquote><h3>{page.specs[0][locale]}</h3><p>{page.body[page.body.length-1].text[locale]}</p></aside></div><div className="lm-project-gallery">{page.images.slice(1).filter(src=>!src.endsWith('.svg')).map((src,i)=><Reveal delay={i%2*.2} key={src}><img src={src} alt={`${page.title[locale]} ${i+1}`} loading="lazy"/></Reveal>)}</div><CTA {...p}/></section><section className="lm-section lm-container"><Heading locale={locale} title={copy('更多项目\n更多出色成果','More projects.\nMasterpieces.')}/><ProjectGrid {...p} exclude={page.slug} limit={4}/></section><ContactSection locale={locale}/></Shell>}
export const Atlas=(p:TemplatePageProps)=><Project {...p} index={0}/>
export const Finlytics=(p:TemplatePageProps)=><Project {...p} index={1}/>
export const Orbital=(p:TemplatePageProps)=><Project {...p} index={2}/>
export const Echo=(p:TemplatePageProps)=><Project {...p} index={3}/>
export const Nova=(p:TemplatePageProps)=><Project {...p} index={4}/>
export const StudioZ=(p:TemplatePageProps)=><Project {...p} index={5}/>
