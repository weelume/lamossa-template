import Link from'next/link'
import type{SiteTemplatePageProps as TemplatePageProps}from'../../../types'
import{copy}from'../config'
import{articles}from'../content/catalog'
import{Shell}from'../components/Shell'
import{PageHeader,Heading}from'../components/Common'
import{Reveal}from'../components/Motion'
import{RichBody}from'../components/Article'
import{ArticleGrid}from'../components/Cards'
function BlogArticle({locale='zh',basePath,index}:TemplatePageProps&{index:number}){const page=articles[index],p={locale,basePath};return <Shell {...p}><div className="lm-back lm-container"><Link href={`${basePath}/blog`}>{locale==='zh'?'返回全部文章':'Go to Blog'}</Link><span>{page.specs[2][locale]} {locale==='zh'?'分钟阅读':'min read'}</span></div><PageHeader locale={locale} title={page.title} description={page.description}/><section className="lm-container"><Reveal><img className="lm-article-hero" src={page.images[0]} alt={page.title[locale]}/></Reveal><div className="lm-article-layout"><aside className="lm-article-meta lm-glass"><p>{locale==='zh'?'作者':'Author'}</p>{page.authorImage&&<img className="lm-author-avatar" src={page.authorImage} alt=""/>}<b>{page.specs[0][locale]}</b><p>{locale==='zh'?'发布日期':'Published on'}</p><b>{page.specs[1][locale]}</b><p>{locale==='zh'?'阅读目录':'On this page'}</p>{page.body.filter(b=>b.kind.startsWith('h')).map(b=><a href={`#section-${page.body.indexOf(b)}`} key={b.text.en}>{b.text[locale]}</a>)}</aside><RichBody blocks={page.body} locale={locale}/></div></section><section className="lm-section lm-container"><Heading locale={locale} title={copy('来自团队的\n更多洞察','More insights\nfrom our team.')}/><ArticleGrid {...p} limit={4} exclude={page.slug}/></section></Shell>}
export const MotionArticle=(p:TemplatePageProps)=><BlogArticle {...p} index={0}/>
export const Psychology=(p:TemplatePageProps)=><BlogArticle {...p} index={1}/>
export const MVP=(p:TemplatePageProps)=><BlogArticle {...p} index={2}/>
export const Marketing=(p:TemplatePageProps)=><BlogArticle {...p} index={3}/>
export const MarketingCopy=(p:TemplatePageProps)=><BlogArticle {...p} index={4}/>
export const MVPCopy=(p:TemplatePageProps)=><BlogArticle {...p} index={5}/>
