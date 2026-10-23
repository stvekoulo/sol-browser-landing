import Link from 'next/link';
import './brand-hero.css';

export function SunriseHero() {
  return <section className="brand-hero" aria-labelledby="hero-title">
    <img className="brand-hero-wallpaper" src="/wallpaper.png" alt="" fetchPriority="high" draggable={false}/>
    <div className="brand-hero-copy">
      <p className="brand-eyebrow"><span/> A NEW PERSPECTIVE ON THE WEB</p>
      <h1 id="hero-title">Less noise.<br/>More <em>possibility.</em></h1>
      <p className="brand-intro">Your tabs, your ideas, your next move.<br/>One space to make it all come together.</p>
      <div className="brand-hero-actions">
        <a className="brand-download" href="https://gitlab.com/stevencrdkoulo/sol-browser/-/releases" target="_blank" rel="noopener noreferrer">Download Sol <span aria-hidden>↗</span></a>
        <Link className="brand-explore" href="/features">Explore the browser <span aria-hidden>→</span></Link>
      </div>
      <p className="brand-availability">FREE FOR WINDOWS · X64 / ARM64 / X86</p>
    </div>
    <footer className="brand-hero-footer"><span className="brand-name">sol<span> / </span> YOUR WEB WORKSPACE</span><span>Built for the way you think.</span></footer>
  </section>;
}
