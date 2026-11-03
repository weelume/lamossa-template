'use client'
import Link from 'next/link'
import {useEffect,useRef,useState} from 'react'
import {AnimatePresence,motion,useInView,useReducedMotion} from 'framer-motion'
import {copy,photo,type Locale} from '../config'
import {Reveal} from './Motion'
import {Button} from './Shell'
const slides=[
 {slug:'redesigning-atlas',title:copy('Atlas 体验重塑','Redesigning Atlas'),result:copy('参与度提升 45% · 流失率降低 20%','+45% engagement, -20% churn'),image:photo('zyjp5Y6zWoxpqbarL2yaUHTG0.png')},
 {slug:'launch-mvp-for-finlytics',title:copy('Finlytics MVP 发布','Launch MVP for Finlytics'),result:copy('27 天上线 · 1,200 多位早期用户','Live in 27 days, 1,200+ early users'),image:photo('WqQf4wcmdILCz9dZMRSewAqbnmg.png')},
 {slug:'orbital-website-redesign',title:copy('Orbital 网站改版','Orbital Website Redesign'),result:copy('注册转化率提升 21%','+21% signup conversion rate'),image:photo('pk3fNpARsXfFpX9PHXLTmp1voEs.jpg')},
]
/** 原站每 6 秒轮换，当前长图同周期从顶部向底部平移；按钮及缩略图保留手动操作。 */
export function Featured({locale,basePath}:{locale:Locale;basePath:string}){
 const ref=useRef<HTMLElement>(null),visible=useInView(ref),reduced=useReducedMotion(),[active,setActive]=useState(0),[paused,setPaused]=useState(false),[point,setPoint]=useState({x:0,y:0});
 useEffect(()=>{if(reduced||paused||!visible)return;const timer=setTimeout(()=>setActive(n=>(n+1)%slides.length),6000);return()=>clearTimeout(timer)},[active,paused,reduced,visible]);
 const slide=slides[active];
 return <section ref={ref} id="section-features" className="lm-feature lm-container"><Reveal delay={1.6} y={60}><div className="lm-feature-shell lm-glass" data-slide={active} data-paused={paused||reduced||!visible}>
 <div className="lm-card-top"><AnimatePresence mode="wait"><motion.div key={active} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{type:'spring',stiffness:66,damping:20}}><h3>{slide.title[locale]}</h3><p>{slide.result[locale]}</p></motion.div></AnimatePresence><Button secondary href={basePath+'/projects/'+slide.slug}>{locale==='zh'?'查看项目':'View Project'}</Button></div>
 <div className="lm-feature-stage" onPointerMove={e=>{const r=e.currentTarget.getBoundingClientRect();setPoint({x:e.clientX-r.x-r.width*.7+24,y:e.clientY-r.y-r.height*.6+24})}}><AnimatePresence initial={false}><motion.div key={active} className="lm-feature-frame" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced?0:.4,ease:[.6,0,.4,1.01]}}><Link href={basePath+'/projects/'+slide.slug} className="lm-feature-image" aria-label={slide.title[locale]}><img src={slide.image} alt={slide.title[locale]} className="lm-feature-pan" style={{animationPlayState:paused?'paused':'running'}}/></Link></motion.div></AnimatePresence><motion.span className="lm-follow-label" animate={point} transition={{type:'spring',stiffness:300,damping:60,mass:2}}>{locale==='zh'?'查看项目':'View Project'}</motion.span></div>
 <div className="lm-feature-controls"><button aria-label={locale==='zh'?'上一个项目':'Previous project'} onClick={()=>setActive((active+slides.length-1)%slides.length)}>‹</button><div className="lm-feature-thumbs">{slides.map((s,i)=><button key={s.slug} aria-label={s.title[locale]} aria-pressed={active===i} onClick={()=>setActive(i)}><img src={s.image} alt=""/>{active===i&&<i key={active} style={{animationPlayState:paused?'paused':'running'}}/>}</button>)}</div><button aria-label={locale==='zh'?'下一个项目':'Next project'} onClick={()=>setActive((active+1)%slides.length)}>›</button><button aria-pressed={paused} onClick={()=>setPaused(!paused)}>{locale==='zh'?(paused?'继续':'暂停'):(paused?'Resume':'Pause')}</button></div>
 </div></Reveal></section>
}
