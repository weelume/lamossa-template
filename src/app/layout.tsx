import type{Metadata}from'next'
import'./globals.css'
export const metadata:Metadata={title:'Lamosa Studio · Product & Web Design',description:'Premium product and web design for SaaS.'}
export default function Layout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
