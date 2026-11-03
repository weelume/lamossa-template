import type{SiteTemplatePageProps as TemplatePageProps}from'../../../types'
import{copy}from'../config'
import{Shell}from'../components/Shell'
import{PageHeader}from'../components/Common'
import{ProjectGrid,Testimonials}from'../components/Cards'
import{FAQ}from'../components/Sections'
export default function Projects({locale='zh',basePath}:TemplatePageProps){const p={locale,basePath};return <Shell {...p}><PageHeader locale={locale} title={copy('大胆的想法\n出色的成果','Bold ideas,\nStunning results.')} description={copy('我们以清晰的策略和细致的设计，让产品被看见、被信任、被使用。','We build conversion-driven websites and marketing that attract, engage, and convert.')}/><section className="lm-container"><ProjectGrid {...p}/></section><Testimonials {...p}/><FAQ {...p}/></Shell>}
