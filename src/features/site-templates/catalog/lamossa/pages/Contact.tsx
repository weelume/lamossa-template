import type{SiteTemplatePageProps as TemplatePageProps}from'../../../types'
import{Shell}from'../components/Shell'
import{ContactSection}from'../components/Forms'
import{FAQ}from'../components/Sections'
export default function Contact({locale='zh',basePath}:TemplatePageProps){return <Shell locale={locale} basePath={basePath}><div className="lm-contact-page"><ContactSection locale={locale} primary/></div><FAQ locale={locale} basePath={basePath}/></Shell>}
