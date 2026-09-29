import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  { name:"COGITO", role:"MARKETING / CONTENT / SOCIAL", copy:"End-to-end brand, content and social execution." },
  { name:"3 TREE", role:"MARKETING / OPERATIONS / WEB", copy:"Marketing, operations, website and business management." },
  { name:"SREELEATHERS", role:"CONTENT / CAMPAIGNS", copy:"Campaign and content work built for real-world audiences." },
  { name:"MEEVENT", role:"CONTENT / DIGITAL", copy:"Digital ideas translated into practical execution." },
  { name:"HUSTLE LAB", role:"MARKETING / CONTENT", copy:"Strategy, content and production across the brand." },
  { name:"WEBBIES", role:"DIGITAL / CREATIVE", copy:"Digital work where strategy meets execution." }
];

function Web({className=""}) {
  return <div className={"web "+className} aria-hidden="true"><i/><i/><i/><i/><i/></div>;
}

function HeroFigure() {
  return <div className="hero-figure" aria-hidden="true">
    <div className="figure-glow"/>
    <div className="hero-silhouette">
      <div className="mask">
        <span className="eye left"/><span className="eye right"/>
        <div className="mask-web"/>
      </div>
      <div className="neck"/>
      <div className="torso"><div className="chest-web"/><div className="spider-mark"><i/><i/><i/><i/><i/><i/></div></div>
      <div className="arm arm-left"/><div className="arm arm-right"/>
      <div className="leg leg-left"/><div className="leg leg-right"/>
    </div>
    <div className="figure-shadow"/>
  </div>
}

function App(){
  const [menu,setMenu]=React.useState(false);
  const [project,setProject]=React.useState(null);

  return <div className="site">
    <header className="nav">
      <a href="#home" className="brand"><span>SS</span><b>SIDDHARTHA</b></a>
      <nav className={menu ? "open":""}>
        <a href="#work" onClick={()=>setMenu(false)}>WORK</a>
        <a href="#about" onClick={()=>setMenu(false)}>ABOUT</a>
        <a href="#skills" onClick={()=>setMenu(false)}>CAPABILITIES</a>
        <a href="#contact" onClick={()=>setMenu(false)}>CONTACT</a>
      </nav>
      <button className="menu" onClick={()=>setMenu(!menu)}>{menu ? "CLOSE" : "MENU"}</button>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="city"/>
        <Web className="web-a"/><Web className="web-b"/>
        <div className="hero-content">
          <div className="kicker"><span>MARKETING · CONTENT · STRATEGY</span><span>INDIA / 2026</span></div>
          <h1>BUILD.<br/><em>MOVE.</em><br/>IMPACT.</h1>
          <p>I work across marketing strategy, content, social media, operations and production — turning ideas into things people can actually see.</p>
          <a className="cta" href="#work">EXPLORE THE WORK <span>↓</span></a>
        </div>
        <HeroFigure/>
        <div className="hero-index">01 / 05</div>
        <div className="scroll">SCROLL <span>↓</span></div>
      </section>

      <section id="work" className="work section">
        <div className="section-top"><span>SELECTED WORK</span><span>02 / 05</span></div>
        <div className="work-intro"><h2>Ideas with<br/><em>an execution.</em></h2><p>A selection of projects across marketing, content, digital and operations.</p></div>
        <div className="projects">
          {projects.map((p,i)=><button className="project-card" key={p.name} onClick={()=>setProject(p)}>
            <div className={"project-art art-"+i}><span>{String(i+1).padStart(2,"0")}</span><div className="orb"/><div className="grid-lines"/></div>
            <div className="project-info"><div><h3>{p.name}</h3><small>{p.role}</small></div><b>VIEW <span>↗</span></b></div>
            <p>{p.copy}</p>
          </button>)}
        </div>
      </section>

      <section id="about" className="about section">
        <div className="section-top"><span>ABOUT</span><span>03 / 05</span></div>
        <div className="about-grid">
          <div><div className="portrait-card"><div className="portrait-glow"/><div className="portrait-symbol">SS</div><div className="portrait-lines"/></div></div>
          <div className="about-copy"><span className="label">THE PERSON BEHIND THE WORK</span><h2>Strategy is only useful when it <em>moves.</em></h2><p>My work sits between ideas and execution. I move from research and positioning to content, production, social and the operational details that make the work happen.</p><p>That means I can work with a creative team, build the plan, coordinate production and stay close enough to the final output to know whether it actually works.</p><a className="text-link" href="https://www.linkedin.com/in/heysiddhartha/" target="_blank" rel="noreferrer">MORE ABOUT ME ↗</a></div>
        </div>
      </section>

      <section id="skills" className="capabilities section">
        <div className="section-top"><span>CAPABILITIES</span><span>04 / 05</span></div>
        <div className="cap-grid">
          {["MARKETING STRATEGY","CONTENT STRATEGY","SOCIAL MEDIA","PRODUCTION","OPERATIONS","BRAND DEVELOPMENT"].map((x,i)=><div className="cap" key={x}><span>0{i+1}</span><h3>{x}</h3><i>↗</i></div>)}
        </div>
      </section>

      <section id="contact" className="contact section">
        <Web className="contact-web"/>
        <div className="section-top"><span>CONTACT</span><span>05 / 05</span></div>
        <div className="contact-inner"><span className="label">LET'S BUILD SOMETHING</span><h2>Make the next<br/><em>move.</em></h2><a className="cta light" href="https://www.linkedin.com/in/heysiddhartha/" target="_blank" rel="noreferrer">CONNECT ON LINKEDIN <span>↗</span></a></div>
        <footer><span>© 2026 SIDDHARTHA SARKAR</span><span>MARKETING / CONTENT / STRATEGY</span><a href="https://www.linkedin.com/in/heysiddhartha/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></footer>
      </section>
    </main>

    {project && <div className="modal" onClick={()=>setProject(null)}><div className="modal-inner" onClick={e=>e.stopPropagation()}><button onClick={()=>setProject(null)}>CLOSE ×</button><span>{project.role}</span><h2>{project.name}</h2><p>{project.copy}</p><div className="modal-art"><div className="orb"/></div></div></div>}
  </div>
}

createRoot(document.getElementById("root")).render(<App/>);
