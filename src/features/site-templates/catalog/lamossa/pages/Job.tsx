import Link from'next/link'
import type{SiteTemplatePageProps as TemplatePageProps}from'../../../types'
import{jobs}from'../content/catalog'
import{Shell,Button}from'../components/Shell'
import{PageHeader}from'../components/Common'
import{RichBody}from'../components/Article'
import{ContactSection}from'../components/Forms'
function Job({locale='zh',basePath,index}:TemplatePageProps&{index:number}){const page=jobs[index];return <Shell locale={locale} basePath={basePath}><div className="lm-back lm-container"><Link href={`${basePath}/career`}>{locale==='zh'?'返回职位列表':'Go to Career'}</Link></div><PageHeader locale={locale} title={page.title} description={page.description}><div className="lm-job-tags">{page.specs.slice(2).map(s=><span className="lm-glass" key={s.en}>{s[locale]}</span>)}</div><p>{locale==='zh'?'发布于：':'Posted on: '}{page.specs[0][locale]} · {locale==='zh'?'截止日期：':'Deadline: '}{page.specs[1][locale]}</p><Button href="#application">{locale==='zh'?'填写演示申请':'Apply Now'}</Button></PageHeader><article className="lm-container lm-job-body"><RichBody blocks={page.body} locale={locale}/></article><ContactSection locale={locale} application/></Shell>}
export const Creative=(p:TemplatePageProps)=><Job {...p} index={0}/>
export const MotionJob=(p:TemplatePageProps)=><Job {...p} index={1}/>
export const Developer=(p:TemplatePageProps)=><Job {...p} index={2}/>
export const Senior=(p:TemplatePageProps)=><Job {...p} index={3}/>
