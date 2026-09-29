import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import * as THREE from "three";

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

function ThreeHero(){
  const ref=React.useRef(null);
  React.useEffect(()=>{
    const el=ref.current;if(!el)return;
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(34,el.clientWidth/el.clientHeight,.1,50);
    camera.position.set(.7,.2,7.5);
    const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.6));renderer.setSize(el.clientWidth,el.clientHeight);renderer.outputColorSpace=THREE.SRGBColorSpace;el.appendChild(renderer.domElement);
    scene.add(new THREE.AmbientLight(0x9fb7df,1.7));
    const key=new THREE.DirectionalLight(0xffffff,3);key.position.set(-3,5,6);scene.add(key);
    const red=new THREE.PointLight(0xd7193f,14,10);red.position.set(3,1,4);scene.add(red);
    const blue=new THREE.PointLight(0x1677ff,12,10);blue.position.set(-3,0,2);scene.add(blue);
    const hero=new THREE.Group();hero.position.set(1,-.15,0);scene.add(hero);
    const R=new THREE.MeshStandardMaterial({color:0xb20d2d,roughness:.55});
    const B=new THREE.MeshStandardMaterial({color:0x071d3d,roughness:.7});
    const W=new THREE.MeshBasicMaterial({color:0xf4f7ff});
    const body=new THREE.Mesh(new THREE.CapsuleGeometry(.72,1.35,8,18),R);body.scale.set(1.05,1.15,.6);body.position.y=.15;hero.add(body);
    const head=new THREE.Mesh(new THREE.SphereGeometry(.54,24,18),R);head.position.y=1.72;head.scale.z=.82;hero.add(head);
    [-1,1].forEach(s=>{const e=new THREE.Mesh(new THREE.SphereGeometry(.16,12,8),W);e.scale.set(.6,1.5,.15);e.position.set(.19*s,1.82,.44);e.rotation.z=.2*s;hero.add(e)});
    const limb=(m,l,r,x,y,z)=>{const q=new THREE.Mesh(new THREE.CapsuleGeometry(r,l,6,12),m);q.position.set(x,y,0);q.rotation.z=z;hero.add(q)};
    limb(R,.72,.22,-.92,.42,-.55);limb(R,.72,.22,.92,.42,.55);limb(B,.95,.18,-1.38,-.08,-.85);limb(B,.95,.18,1.38,-.08,.85);limb(B,.9,.27,-.42,-1.45,-.18);limb(B,.9,.27,.42,-1.45,.18);limb(R,1.05,.2,-.54,-2.32,-.25);limb(R,1.05,.2,.54,-2.32,.25);
    const spiderMat=new THREE.LineBasicMaterial({color:0x02040a});const addLine=(a,b)=>hero.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(...a),new THREE.Vector3(...b)]),spiderMat));
    addLine([0,.3,.62],[0,-.32,.62]);for(let i=0;i<3;i++){const y=.12-i*.17,s=.28-i*.04;addLine([0,y,.62],[-s,y-.1,.62]);addLine([0,y,.62],[s,y-.1,.62])}
    const floor=new THREE.Mesh(new THREE.PlaneGeometry(16,16),new THREE.MeshStandardMaterial({color:0x05070d,roughness:.9}));floor.rotation.x=-Math.PI/2;floor.position.y=-2.95;scene.add(floor);
    const buildings=new THREE.Group();for(let i=0;i<30;i++){const h=.6+Math.random()*2.5,b=new THREE.Mesh(new THREE.BoxGeometry(.25+Math.random()*.55,h,.35+Math.random()*.5),new THREE.MeshStandardMaterial({color:0x090d16}));b.position.set(-7+i*.48,-2.95+h/2,-2-Math.random()*2);buildings.add(b)}scene.add(buildings);
    const pointer={x:0,y:0};const move=e=>{pointer.x=e.clientX/innerWidth-.5;pointer.y=e.clientY/innerHeight-.5};const resize=()=>{camera.aspect=el.clientWidth/el.clientHeight;camera.updateProjectionMatrix();renderer.setSize(el.clientWidth,el.clientHeight)};addEventListener("pointermove",move);addEventListener("resize",resize);
    let id;const tick=()=>{hero.rotation.y+=(pointer.x*.42-.2-hero.rotation.y)*.04;hero.rotation.x+=(-pointer.y*.1-hero.rotation.x)*.04;hero.position.y+=(-.15-scrollY/innerHeight*.35-hero.position.y)*.02;camera.position.x+=(.7+pointer.x*.65-camera.position.x)*.025;camera.lookAt(.2,-.5,0);renderer.render(scene,camera);id=requestAnimationFrame(tick)};tick();
    return()=>{cancelAnimationFrame(id);removeEventListener("pointermove",move);removeEventListener("resize",resize);renderer.dispose();el.removeChild(renderer.domElement)};
  },[]);
  return <div className="three-hero" ref={ref} aria-hidden="true"/>;
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
        <ThreeHero/>
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
