import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const episodes = [
  { n:"01", title:"The Origin Story", tag:"ACT I · THE SETUP", copy:"From Chennai to Kerala to Bengal — then into marketing, content, operations and whatever needed fixing.", kind:"ORIGIN" },
  { n:"02", title:"The Originals", tag:"ACT II · THE WORK", copy:"Campaigns, content, websites, brand ideas and production work that made it out of the notebook.", kind:"PROJECTS" },
  { n:"03", title:"The Method", tag:"ACT III · THE CHAOS", copy:"Research. Strategy. Production. Distribution. Repeat until the idea stops looking like an idea and starts working.", kind:"PROCESS" },
  { n:"04", title:"The Cast", tag:"ACT IV · THE PEOPLE", copy:"Brands, founders, teams and clients. The people who make the credits longer.", kind:"WORK" }
];

const projects = [
  ["COGITO","Marketing · Content · Social","Handled the work end-to-end, except paid ads."],
  ["3 TREE","Marketing · Operations · Web","Marketing, operations, website and business management."],
  ["SREELEATHERS","Content · Campaigns","Brand and content work built around real-world marketing."],
  ["MEEVENT","Content · Digital","Digital work across ideas, content and execution."],
  ["HUSTLE LAB","Marketing · Content","Ideas, strategy and production with a little chaos."],
  ["WEBBIES","Digital · Creative","Web and digital work where strategy meets execution."]
];

function App(){
  const [started,setStarted]=React.useState(false);
  const [credits,setCredits]=React.useState(false);
  const [toast,setToast]=React.useState("");
  const [selected,setSelected]=React.useState(null);

  const notify=(x)=>{setToast(x);window.clearTimeout(window.__toast);window.__toast=window.setTimeout(()=>setToast(""),2200)};

  if(!started) return (
    <main className="opening" onClick={()=>setStarted(true)}>
      <div className="film-grain"/>
      <div className="opening-top"><span>AN ORIGINAL</span><span>MBBC-01</span></div>
      <div className="opening-center">
        <div className="production">SIDDHARTHA SARKAR PRESENTS</div>
        <h1>Mache Bhate<br/><i>Bangali</i></h1>
        <div className="bengali">কারণ বাঙালি।</div>
        <p>A portfolio disguised as a movie.</p>
        <button>▶ ENTER THE FILM</button>
        <small>Click anywhere to begin</small>
      </div>
      <div className="opening-bottom"><span>MARKETING · CONTENT · STRATEGY</span><span>2026</span></div>
    </main>
  );

  return <div className="film">
    <header className="topbar">
      <a className="logo" href="#top">MACHE <b>BHATE</b> BANGALI</a>
      <nav>{episodes.map(e=><a key={e.n} href={"#act"+e.n}>{e.n}</a>)}</nav>
      <button className="credits-btn" onClick={()=>setCredits(true)}>CREDITS</button>
    </header>

    <main id="top">
      <section className="hero-scene">
        <div className="hero-vignette"/>
        <div className="hero-copy">
          <div className="eyebrow"><span>FEATURE PRESENTATION</span><span>SEASON 01 · 2026</span></div>
          <h2>Marketing guy.<br/>Content guy.<br/><em>Somehow, also the guy who fixes the website.</em></h2>
          <p>I make brands look less confusing, content feel less forced, and ideas actually leave the notebook.</p>
          <div className="hero-actions">
            <a href="#act01" className="primary">▶ WATCH THE STORY</a>
            <button onClick={()=>notify("Added to your watchlist. Very important cinema.")}>＋ WATCHLIST</button>
          </div>
        </div>
        <div className="hero-poster">
          <div className="poster-no">A SIDDHARTHA SARKAR ORIGINAL</div>
          <div className="poster-title">THE<br/><span>SIDDHARTHA</span><br/>SHOW</div>
          <div className="poster-stamp">18+<br/><small>IDEAS</small></div>
          <div className="poster-credit">A story about making things work.</div>
        </div>
        <div className="scroll-cue">SCROLL TO PLAY <b>↓</b></div>
      </section>

      <section className="intermission red">
        <div className="scene-number">SCENE 00</div>
        <blockquote>“Ektu darao.<br/><em>Idea ache.</em>”</blockquote>
        <p>Every good idea deserves at least one unnecessarily dramatic pause.</p>
      </section>

      <section className="acts" id="story">
        <div className="section-head"><div><span>THE FEATURE</span><h3>Four acts.<br/><em>One slightly chaotic career.</em></h3></div><p>Not a résumé. Not a corporate slideshow.<br/>A story about what I actually do.</p></div>
        {episodes.map((e,i)=>
          <article className="act" id={"act"+e.n} key={e.n}>
            <div className="act-meta"><span>ACT {e.n}</span><i>0{i+1}/04</i></div>
            <div className="act-copy"><span>{e.tag}</span><h4>{e.title}</h4><p>{e.copy}</p><button onClick={()=>setSelected(e)}>OPEN SCENE ↗</button></div>
            <div className={"act-frame frame-"+e.n}><div className="frame-number">{e.n}</div><div className="frame-word">{e.kind}</div><div className="frame-play">▶</div></div>
          </article>
        )}
      </section>

      <section className="intermission black">
        <div className="typing"><span>DIRECTOR:</span> Siddhartha<br/><span>GENRE:</span> Marketing / Comedy / Mild Panic<br/><span>STATUS:</span> Still making things</div>
      </section>

      <section className="reel">
        <div className="section-head"><div><span>THE REEL</span><h3>Selected work.</h3></div><p>Some of the names from the end credits.</p></div>
        <div className="project-grid">
          {projects.map(([name,meta,copy])=><button className="project" key={name} onClick={()=>notify(name+" — scene loading…")}><span className="project-number">01</span><strong>{name}</strong><small>{meta}</small><p>{copy}</p><b>VIEW SCENE →</b></button>)}
        </div>
      </section>

      <section className="intermission light">
        <div className="scene-number">POST-CREDITS SCENE</div>
        <blockquote>“Are you still watching?”</blockquote>
        <p>Obviously. We haven't reached the good part yet.</p>
        <a href="#finale" className="dark-btn">YES, OBVIOUSLY ↓</a>
      </section>

      <section className="finale" id="finale">
        <div className="finale-card">
          <span>THE END? · NOT REALLY</span>
          <h3>Let's make something<br/><em>worth watching.</em></h3>
          <p>Marketing strategy, content strategy, social media, operations and production-heavy projects.</p>
          <a className="primary" href="https://www.linkedin.com/in/heysiddhartha/" target="_blank" rel="noreferrer">START A CONVERSATION ↗</a>
        </div>
        <footer><span>CREATED BY SIDDHARTHA SARKAR</span><a href="https://www.linkedin.com/in/heysiddhartha/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><span>THE END</span></footer>
      </section>
    </main>

    {selected && <div className="modal" onClick={()=>setSelected(null)}><div className="modal-card" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setSelected(null)}>×</button><span>{selected.tag}</span><h3>{selected.title}</h3><p>{selected.copy}</p><div className="modal-line">SCENE {selected.n} · MORE COMING SOON</div></div></div>}
    {credits && <div className="credits" onClick={()=>setCredits(false)}><div className="credits-inner"><small>A SIDDHARTHA SARKAR ORIGINAL</small><h3>MACHE BHATE BANGALI</h3><p>Written, directed, produced and occasionally debugged by Siddhartha Sarkar.</p><div className="credit-list"><span>MARKETING</span><span>CONTENT</span><span>STRATEGY</span><span>SOCIAL</span><span>OPERATIONS</span><span>PRODUCTION</span></div><small>CLICK TO CLOSE</small></div></div>}
    {toast && <div className="toast">{toast}</div>}
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);
