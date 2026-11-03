export type Locale='zh'|'en'
export interface Copy{zh:string;en:string}
export interface ContentBlock{kind:string;text:Copy;src?:string}
export interface ContentPage{slug:string;family:string;title:Copy;description:Copy;specs:Copy[];body:ContentBlock[];images:string[];authorImage?:string}
export const copy=(zh:string,en:string):Copy=>({zh,en})
export const brand={name:copy('Lamosa','Lamosa'),year:'2025',email:'hello@lamosa.studio',phone:'+1 23456778',phoneHref:'tel:+123456778',address:copy('美国纽约 Broadway 447 号二层','447 Broadway, 2nd Floor, New York city, USA'),hours:copy('周一至周五 9:00–18:00 GMT','Monday to Friday, 9 AM – 6 PM GMT')}
export const nav=[{slug:'projects',label:copy('项目案例','Projects')},{slug:'blog',label:copy('洞察文章','Blog')},{slug:'about-us',label:copy('关于我们','About us')}]
export const companyNav=[{slug:'#section-services',label:copy('设计服务','Services')},{slug:'#section-process',label:copy('合作流程','Process')},{slug:'#section-pricing',label:copy('合作方案','Pricing')},{slug:'career',label:copy('加入团队','Career')},{slug:'contact-us',label:copy('联系我们','Contact us')}]
export const photo=(file:string)=>'/templates/lamossa/photos/'+file
/** 协议登记使用规范路径；独立站仍接受参考站含括号的原始职位地址。 */
export const routeAliases:Readonly<Record<string,string>>={
 'career/no-code-web-developer-(framer-specialist)':'career/no-code-web-developer-framer-specialist',
 'career/freelance-motion-designer-(remote)':'career/freelance-motion-designer-remote',
}
