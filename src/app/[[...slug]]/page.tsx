import{notFound}from'next/navigation'
import{lamossaTemplate}from'../../features/site-templates/catalog/lamossa/meta'
import{routeAliases}from'../../features/site-templates/catalog/lamossa/config'
export function generateStaticParams(){return [...lamossaTemplate.surfaces[0].pages.map(page=>page.slug),...Object.keys(routeAliases)].flatMap(slug=>['zh','en'].map(locale=>({slug:[...(locale==='en'?['en']:[]),...slug.split('/').filter(Boolean)]})))}
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){const segments=(await params).slug??[],locale=segments[0]==='en'?'en':'zh',raw=(locale==='en'?segments.slice(1):segments).join('/'),slug=routeAliases[raw]??raw;const page=lamossaTemplate.surfaces[0].pages.find(page=>page.slug===slug);if(!page)notFound();const{default:View}=await page.load();return <View locale={locale} basePath={locale==='en'?'/en':''}/>}
