import type{SiteTemplatePageProps as TemplatePageProps}from'../../../types'
import{copy}from'../config'
import{Shell}from'../components/Shell'
import{PageHeader}from'../components/Common'
import{ArticleGrid}from'../components/Cards'
export default function Blog({locale='zh',basePath}:TemplatePageProps){return <Shell locale={locale} basePath={basePath}><PageHeader locale={locale} title={copy('来自团队的\n新鲜洞察与想法','Fresh insights & ideas\nfrom the team.')} description={copy('以融合设计、技术与营销的策略，带来可衡量的增长。','Stay ahead with strategies uniting design, technology, and marketing to deliver measurable growth.')}/><section className="lm-container lm-section"><ArticleGrid locale={locale} basePath={basePath} filter/></section></Shell>}
