'use client'
import{useState}from'react'
import{motion,useReducedMotion,useScroll,useTransform}from'framer-motion'
import{copy,type Locale}from'../config'
import{heroReviews}from'../content/site'
import{Liquid}from'./Liquid'
import{LogoMarquee}from'./Logos'
import{Title,Reveal}from'./Motion'
import{Button}from'./Shell'
export function Hero({locale,basePath}:{locale:Locale;basePath:string}){const [replay,setReplay]=useState(0);return <section className="lm-hero" id="section-hero"><Liquid locale={locale}/><ReviewCards locale={locale} key={replay}/><div className="lm-hero-content"><Title hero locale={locale} text={copy('为 SaaS 打造出色的\n产品与网站设计','Premium Product &\nWeb Design for SaaS')}/><Reveal delay={.6} y={0}><p className="lm-hero-description">{locale==='zh'?'以重视转化的网站与营销，吸引用户、建立参与，让增长发生。':'We build conversion-driven websites and marketing that attract, engage, and convert.'}</p></Reveal><Reveal delay={.8} y={0} className="lm-actions"><Button href={`${basePath}/contact-us`}>{locale==='zh'?'预约交流':'Book A Call'}</Button><Button secondary href="#section-projects">{locale==='zh'?'查看项目':'See Projects'}</Button></Reveal><Reveal delay={.9} y={0}><span className="lm-available"><i/>{locale==='zh'?'开放合作中':'Open for Work'}</span></Reveal></div><Reveal delay={1} y={0}><LogoMarquee locale={locale}/></Reveal><button className="lm-review-pause" onClick={()=>setReplay(replay+1)}>{locale==='zh'?'重播评价动效':'Replay review animation'}</button></section>}
/** 原站评价为等待 4 秒后移动一格并停留，不是持续滚动的轮播。 */
function ReviewCards({locale}:{locale:Locale}){const reduced=useReducedMotion(),{scrollY}=useScroll(),parallax=useTransform(scrollY,y=>y*.4);const initial=[297,162.5,28,-150],final=[445,297,162.5,28];return <div className="lm-review-sides" aria-hidden="true">{[0,1].map(side=><motion.div className={`lm-review-track lm-review-${side}`} key={side} style={reduced?{}:{y:parallax}}><motion.div className="lm-review-enter" initial={reduced?false:{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{type:'spring',stiffness:66,damping:20,delay:reduced?0:1.4}}>{heroReviews.slice(side===0?4:0,side===0?8:4).map((r,i)=>{const sign=side===0?-1:1;return <motion.div className="lm-hero-review lm-glass" key={r.name} initial={reduced?false:{top:initial[i],rotate:(i-2)*4*sign}} animate={{top:final[i],rotate:(i-1)*4*sign}} transition={{delay:reduced?0:4,duration:reduced?0:.6,ease:[.8,0,.2,1.01]}}><span>”</span><p>{r.text[locale]}</p><small>– {r.name}</small></motion.div>})}</motion.div></motion.div>)}</div>}

export {Featured} from './Featured'
