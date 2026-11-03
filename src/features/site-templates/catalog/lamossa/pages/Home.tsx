import type{SiteTemplatePageProps as TemplatePageProps}from'../../../types'
import{Shell}from'../components/Shell'
import{Hero,Featured}from'../components/Hero'
import{Stats,Services,Process,Pricing,FAQ}from'../components/Sections'
import{ProjectSection,Testimonials,BlogSection}from'../components/Cards'
import{ContactSection}from'../components/Forms'
export default function Home({locale='zh',basePath}:TemplatePageProps){const p={locale,basePath};return <Shell {...p}><Hero {...p}/><Featured {...p}/><Stats {...p}/><Services {...p}/><ProjectSection {...p}/><Process {...p}/><Pricing {...p}/><Testimonials {...p}/><FAQ {...p}/><ContactSection {...p}/><BlogSection {...p}/></Shell>}
