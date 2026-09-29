import React from "react";
import{createRoot}from"react-dom/client";
import"./styles.css";

const eps=[
{n:"01",title:"The Story So Far",tag:"PREVIOUSLY ON SIDDHARTHA",copy:"Marketing, content, social media, operations — basically whatever needed fixing.",kind:"ABOUT"},
{n:"02",title:"The Originals",tag:"A FEW THINGS I MADE",copy:"Campaigns, content, websites, brand ideas and projects that escaped the group chat.",kind:"PROJECTS"},
{n:"03",title:"Behind The Scenes",tag:"HOW THE CHAOS WORKS",copy:"Research first. Strategy next. Then we make the thing people said would take three weeks.",kind:"PROCESS"},
{n:"04",title:"The Cast",tag:"PEOPLE I HAVE WORKED WITH",copy:"Brands, founders, teams and clients who trusted me with their problems.",kind:"WORK"}
];

function App(){
 const[start,setStart]=React.useState(false);
 const[toast,setToast]=React.useState("");
 const notify=(x)=>{setToast(x);setTimeout(()=>setToast(""),2400)};
 if(!start)return <main className="splash" onClick={()=>setStart(true)}><div className="noise"/><div className="splashContent"><small>OTT • BENGAL • ORIGINAL</small><h1>Mache Bhate<br/><em>Bangali</em></h1><div className="bengali">কারণ বাঙালি।</div><p>A Siddhartha Sarkar Original</p><button>START WATCHING</button><span>Click anywhere. We won't ask you to subscribe.</span></div></main>;
 return <div className="site">
  <header><div className="wordmark">MACHE<span>BHATE</span>BANGALI</div><nav>{eps.map(e=><a href={"#ep"+e.n} key={e.n}>EP {e.n}</a>)}</nav><a className="navlink" href="https://www.linkedin.com/in/heysiddhartha/" target="_blank" rel="noreferrer">LinkedIn ↗</a></header>
  <section className="hero">
   <div className="heroCopy"><small>SEASON 01 • 2026 • ORIGINAL</small><h2>Marketing guy.<br/>Content guy.<br/><i>Somehow, also the guy who fixes the website.</i></h2><p>I make brands look less confusing, content feel less forced, and ideas actually leave the notebook.</p><div className="buttons"><a href="#ep01" className="play">▶ Play portfolio</a><button onClick={()=>notify("Added to your list. Obviously.")}>＋ My List</button></div></div>
   <div className="poster"><small>NOW STREAMING</small><div>THE<br/>SIDDHARTHA<br/><b>SHOW</b></div><footer>Marketing • Content • Strategy • Chaos</footer></div>
  </section>
  <section className="break dark"><div><strong>“Ektu darao.<br/><span>Idea ache.</span>”</strong><p>Every good idea needs unnecessary dramatic music.</p></div></section>
  <section className="episodes"><div className="heading"><div><small>CONTINUE WATCHING</small><h3>Your first four episodes.</h3></div><span>Because apparently portfolios need seasons now.</span></div>
   {eps.map(e=><article id={"ep"+e.n} className="episode" key={e.n}><div className="num">EP<strong>{e.n}</strong></div><div><small>{e.tag}</small><h4>{e.title}</h4><p>{e.copy}</p><button onClick={()=>notify(e.kind+" episode loading…")}>WATCH EPISODE →</button></div><div className="preview"><b>▶</b><span>{e.kind}</span></div></article>)}
  </section>
  <section className="break light"><div><strong>“Are you still watching?”</strong><p>Obviously. We haven't reached the good part yet.</p><button onClick={()=>notify("Good choice. Carry on.")}>YES, OBVIOUSLY</button></div></section>
  <section className="contact"><small>FINAL EPISODE</small><h3>Let's make something<br/><em>worth watching.</em></h3><p>Available for marketing strategy, content strategy, social media, operations and production-heavy projects.</p><a href="https://www.linkedin.com/in/heysiddhartha/" target="_blank" rel="noreferrer" className="play">Start a conversation ↗</a><footer>Created by Siddhartha Sarkar • <a href="https://www.linkedin.com/in/heysiddhartha/" target="_blank" rel="noreferrer">LinkedIn</a></footer></section>
  {toast&&<div className="toast">{toast}</div>}
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);