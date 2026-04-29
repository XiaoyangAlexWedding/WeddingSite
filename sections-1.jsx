/* Main sections of the wedding site */

const { useEffect, useState, useRef } = React;

/* ---------- Reveal-on-scroll wrapper ---------- */
const Reveal = ({ children, delay = 0, className = "", ...rest }) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Immediately reveal if already in viewport on mount
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
    // Safety fallback: ensure visible after 1.5s no matter what
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
            <p>We met on New Year's Eve, 2018 — two strangers at a party that turned into seven years, three cities, and one ridiculously stubborn houseplant. Houston, San Jose, and now Sacramento have each shaped us in their own way.



          </p>

            <div className="story-chapter">
              <div className="year">2018 · HOUSTON</div>
              <h4>The party that started it all</h4>
              <p>A New Year's Eve </p>
            </div>

            <div className="story-chapter">
              <div className="year">2021 · SAN JOSE</div>
              <h4>Building a life together</h4>
              <p>Two cross-country moves, one apartment with too many bookshelves, and weekends spent finding our favorite coffee shop.</p>
            </div>

            <div className="story-chapter">
              <div className="year">2025 · Sacramento</div>
              <h4>The proposal</h4>
              <p>A quiet morning, a question we'd both known the answer to for years, and a yes that felt inevitable.</p>
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
            <div className="when">2 PM </div>
            <div className="addr" style={{ marginTop: 12 }}>
              Providence Academy<br />
              400 E Evergreen Blvd, Vancouver, WA 98660<br />
              <em>Wedding Ceremony</em>
            </div>
          </div>

          <div>
            <div className="detail-illus"><Botanical variant="pavilion" size={88} /></div>
            <h3>The Reception</h3>
            <div className="where">晚 宴 · Lan Su 兰 苏 园</div>
            <div className="when">Saturday · October 17, 2026</div>
            <div className="when">4PM</div>
            <div className="addr" style={{ marginTop: 12 }}>
              Lan Su Chinese Garden<br />
              239 NW Everett St, Portland, Oregon<br />
              Tea Ceremony · Dinner · Dancing
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Counting down · 倒 计 时</div>
          <Countdown />
        </div>
      </Reveal>
    </div>
  </section>;


/* ---------- Dress Guide ---------- */
const DressGuide = () =>
<section id="dress">
    <div className="shell">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>What to wear</div>
        <h2 className="section-title">Dress Guide</h2>
        <div className="section-title-cn">着 装 指 南</div>
      </Reveal>

      <Reveal>
        <div className="shell-narrow" style={{ padding: 0 }}>
          <div className="dress-item">
            <div className="dress-icon"><Botanical variant="rose" size={44} /></div>
            <div>
              <h4>Dress Code</h4>
              <p>We invite you to celebrate in style — our dress code is <em>Formal</em>. Long dresses, suits, or your most-loved evening look.</p>
              <p className="cn">着装：正式 · 欢迎您以最美的样子出席</p>
            </div>
          </div>

          <div className="dress-item">
            <div className="dress-icon"><Botanical variant="floral" size={44} /></div>
            <div>
              <h4>Color Accents</h4>
              <p>We'd love to see guests in rich jewel tones, muted autumn shades, soft earth tones, or garden-inspired neutrals. We've included some examples for inspiration below.</p>
              <p className="cn">着装色调：宝石色 · 秋日色 · 大地色 · 自然柔和色</p>
              <div className="swatches">
                <div className="swatch" style={{ background: "#1F4D3A" }} title="Forest green"></div>
                <div className="swatch" style={{ background: "#064E57" }} title="Deep teal"></div>
                <div className="swatch" style={{ background: "#6E1F35" }} title="Wine"></div>
                <div className="swatch" style={{ background: "#C1664A" }} title="Terracotta"></div>
                <div className="swatch" style={{ background: "#6F4E37" }} title="Mocha"></div>
                <div className="swatch" style={{ background: "#9AA68C" }} title="Sage"></div>
                <div className="swatch" style={{ background: "#5F728C" }} title="Slate blue"></div>
              </div>
            </div>
          </div>

          <div className="dress-item">
            <div className="dress-icon"><Botanical variant="branch" size={44} /></div>
            <div>
              <h4>Cultural &amp; Traditional Attire</h4>
              <p>Traditional or cultural attire is highly welcomed and warmly encouraged. Cheongsams, hanfu, sherwanis — wear what feels like home.</p>
              <p className="cn">欢迎穿着传统民族服饰 · 旗袍、汉服皆可</p>
            </div>
          </div>

          <div className="dress-item">
            <div className="dress-icon"><Botanical variant="leaf" size={44} /></div>
            <div>
              <h4>Footwear Note</h4>
              <p>The garden pathways are made of a beautiful but uneven mosaic of river stones. For your safety and comfort, please avoid pointy stilettos — wedges, block heels, or stylish flats are recommended.</p>
              <p className="cn">花园小径由不平整的鹅卵石铺就 · 建议穿着粗跟鞋或时尚平底鞋</p>
            </div>
          </div>

          <div className="dress-item">
            <div className="dress-icon"><Botanical variant="sprig" size={44} /></div>
            <div>
              <h4>Weather &amp; Comfort</h4>
              <p>The garden area will be roofed in case of rain, but October evenings in Portland can turn cool — please bring a formal jacket, wrap, or shawl to keep you warm through the celebration.</p>
              <p className="cn">建议携带正装外套或披肩 · 以备夜晚降温</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;


Object.assign(window, { Reveal, Hero, HeroPhoto, Countdown, Story, Details, DressGuide });