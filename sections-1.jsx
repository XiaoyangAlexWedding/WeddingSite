/* Main sections of the wedding site */

const { useEffect, useState, useRef } = React;

/* ---------- Reveal-on-scroll wrapper ---------- */
const Reveal = ({ children, delay = 0, className = "", ...rest }) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      setSeen(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSeen(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    const fallback = setTimeout(() => setSeen(true), 1500);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return (
    <div ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </div>);
};

/* ---------- Hero ---------- */
const Hero = ({ heroLayout }) => {
  return (
    <section className="hero">
      <CornerOrnament size={160} className="hero-corner tl" />
      <CornerOrnament size={160} className="hero-corner tr" />
      <CornerOrnament size={160} className="hero-corner bl" />
      <CornerOrnament size={160} className="hero-corner br" />

      <Reveal delay={0}>
        <div className="hero-stamp">CELEBRATION OF LOVE</div>
      </Reveal>

      <Reveal delay={150}>
        {heroLayout === "stacked" ?
        <h1 className="hero-names">
            <span className="name-row">Xiaoyang</span>
            <span className="hero-amp">&amp;</span>
            <span className="name-row">Alex</span>
          </h1> :

        <h1 className="hero-names" style={{ fontSize: "clamp(56px, 11vw, 132px)" }}>
            Xiaoyang <span className="hero-amp">&amp;</span> Alex
          </h1>
        }
      </Reveal>

      <Reveal delay={300}>
        <div className="hero-sub">Portland, Oregon · 17 October 2026</div>
        <div className="hero-cn">
</div>
      </Reveal>
    </section>);
};

/* ---------- Hero photo strip ---------- */
const HeroPhoto = () =>
<div className="hero-photo">
    <div className="hero-stack">
      <figure className="poloroid hpol-1">
        <img src="assets/engagement-1.jpg" alt="Engagement portrait" loading="eager" />
        <figcaption>We're</figcaption>
      </figure>
      <figure className="poloroid hpol-2">
        <img src="assets/engagement-2.jpg" alt="Engagement carry" loading="eager" />
        <figcaption>Getting</figcaption>
      </figure>
      <figure className="poloroid hpol-3">
        <img src="assets/engagement-3.jpg" alt="Engagement laughing" loading="eager" />
        <figcaption>married!</figcaption>
      </figure>
    </div>
    <div className="monogram">X<span style={{ fontFamily: "var(--font-script)", fontSize: "0.7em" }}>&amp;</span>A</div>
  </div>;


/* ---------- Countdown ---------- */
const Countdown = () => {
  const target = new Date("2026-10-17T14:00:00-07:00").getTime();
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff % 86400000 / 3600000);
  const mins = Math.floor(diff % 3600000 / 60000);
  const secs = Math.floor(diff % 60000 / 1000);
  return (
    <div className="countdown">
      {[
      { n: days, l: "Days" },
      { n: hours, l: "Hours" },
      { n: mins, l: "Minutes" },
      { n: secs, l: "Seconds" }].
      map((u, i) =>
      <div key={i} className="unit">
          <div className="num">{String(u.n).padStart(2, "0")}</div>
          <div className="label">{u.l}</div>
        </div>
      )}
    </div>);

};

/* ---------- Story ---------- */
const Story = () =>
<section id="story">
    <div className="shell">
      <Reveal>
        <div className="story-layout">
          <div className="story-photo story-stack">
            <figure className="poloroid pol-1">
              <img src="assets/story-1.jpg" alt="Cocktails together" loading="lazy" />
              <figcaption>cheers · early days</figcaption>
            </figure>
            <figure className="poloroid pol-2">
              <img src="assets/story-2.jpg" alt="Surprise moment" loading="lazy" />
              <figcaption>family · holidays</figcaption>
            </figure>
            <figure className="poloroid pol-3">
              <img src="assets/story-3.jpg" alt="The proposal — ring on her finger" loading="lazy" />
              <figcaption>she said yes</figcaption>
            </figure>
          </div>
          <div className="story-text">
            <div className="eyebrow">Our story</div>
            <h2 className="display" style={{ fontSize: 56, fontStyle: "italic", color: "var(--accent-deep)", margin: "8px 0 16px" }}>
              How it began
            </h2>
            <div className="section-rule"></div>
            
            <p>We met on New Year's Eve, 2018 — two strangers at a party that turned into seven years, three cities, and two furry friends. Houston, Sunnyvale, and now Sacramento have each shaped us in their own way.</p>

            <div className="story-chapter">
              <div className="year">2018 · HOUSTON</div>
              <h4>The party that started it all</h4>
              <p>A New Year's Eve party at the Secret Group — not exactly Xiaoyang's usual scene. Erol and Alex had just finished moving and were out chasing a balloon money drop; Xiaoyang and Jiajie had pivoted from a last-minute change in plans to a night out. Xiaoyang arrived in true form, sporting an antenna headband that broadcast her energy and spontaneity to the entire room. Alex, drawn in immediately, offered to buy her a drink — one he'd eventually find himself sipping warm two hours later. The night took a turn toward the wonderfully nerdy: an impromptu international ping pong tournament at Neil's Bahr. Team USA pulled off the upset, but more importantly, the seeds of future diplomatic relations had been planted.</p>
            </div>

            <div className="story-chapter">
              <div className="year">2021 · SUNNYVALE, CA</div>
              <h4>Building a life together</h4>
              <p>With her PhD in hand, Xiaoyang headed west and the two embarked on a cross-country move — now a party of three, thanks to Luigi, their spirited three-legged cat. Coco joined the family just in time for their first Christmas in Sunnyvale, rounding out the crew. Together they dove headfirst into Northern California life: kayaking, hiking, road trips, and eventually a camper van that opened up the whole Pacific Northwest and Central Valley. When they weren't exploring their backyard, they were crossing oceans — China, Japan, and Korea all got a visit.</p>
            </div>

            <div className="story-chapter">
              <div className="year">2025 · SUNNYVALE, CA</div>
              <h4>The proposal</h4>
              <p>Alex had been quietly planning for a while — surprising Xiaoyang with a visit to a jewelry store where the two picked out her ring together. She just didn't know when he'd actually pop the question. That moment came during one of their favorite rituals, a produce run to Felipe's Market. A quiet question, an answer they'd both known for years, and a yes that felt completely inevitable.</p>
            </div>

            <div className="story-chapter">
              <div className="year">2026 · SACRAMENTO</div>
              <h4>The next chapter</h4>
              <p>Xiaoyang, Alex, and the cats loaded up the van and set their sights on Sacramento. Now happily settled in, the two are deep in wedding mode — and counting down the days until they get to celebrate with everyone in October.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;

/* ---------- Wedding Details ---------- */
const Details = () =>
<section id="details" style={{ background: "var(--bg-deep)" }}>
    <div className="shell">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>The day of</div>
        <h2 className="section-title">Wedding Details</h2>
        <div className="section-title-cn">婚 礼 安 排</div>
      </Reveal>

      <Reveal>
        <div className="detail-grid">
          <div>
            <div className="detail-illus"><Botanical variant="arch" size={88} /></div>
            <h3>The Ceremony</h3>
            <div className="where">仪 式 · PROVIDENCE ACADEMY</div>
            <div className="when">Saturday · October 17, 2026</div>
            <div className="when">2 PM </div>
            <div className="addr" style={{ marginTop: 12 }}>
              Providence Academy<br />
              400 E Evergreen Blvd, Vancouver
