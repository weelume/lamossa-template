import Link from'next/link'
import type{SiteTemplatePageProps as TemplatePageProps}from'../../../types'
import{findPage}from'../content/catalog'
import{Shell}from'../components/Shell'
import{PageHeader}from'../components/Common'
import{RichBody}from'../components/Article'
function Legal({locale='zh',basePath,slug}:TemplatePageProps&{slug:string}){const page=findPage('legal-pages/'+slug);return <Shell locale={locale} basePath={basePath}><div className="lm-back lm-container"><Link href={basePath||'/'}>{locale==='zh'?'返回首页':'Go Home'}</Link></div><PageHeader locale={locale} title={page.title} description={page.description}/><article className="lm-container lm-legal"><p className="lm-form-note">{locale==='zh'?'以下为参考模板政策示例。本站演示没有支付、分析跟踪或业务数据保存；表单仅本地校验。正式运营前请根据真实业务更新政策。':'The following is sample policy content from the reference template. This demo has no payments, analytics tracking, or business data storage; forms validate locally only. Update policies to reflect your actual business before operating.'}</p><RichBody blocks={page.body} locale={locale} legal/></article></Shell>}
export const Privacy=(p:TemplatePageProps)=><Legal {...p} slug="privacy-policy"/>
export const Terms=(p:TemplatePageProps)=><Legal {...p} slug="terms-of-service"/>
