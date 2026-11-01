/* Home page and story — same visual language as the original wedding site */

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
    if (!("IntersectionObserver" in window)) {
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

/* ---------- Section heading (eyebrow · title · Chinese subtitle) ---------- */
const SectionHead = ({ eyebrow, title, cn }) =>
  <Reveal>
    <div className="eyebrow" style={{ textAlign: "center" }}>{eyebrow}</div>
    <h2 className="section-title">{title}</h2>
    <div className="section-title-cn">{cn}</div>
  </Reveal>;

/* ---------- Hero ---------- */
const Hero = () =>
  <section className="hero">
    <CornerOrnament size={160} className="hero-corner tl" />
    <CornerOrnament size={160} className="hero-corner tr" />
    <CornerOrnament size={160} className="hero-corner bl" />
    <CornerOrnament size={160} className="hero-corner br" />

    <Reveal delay={0}>
      <div className="hero-stamp hero-stamp-cn">婚礼礼成 · 感恩有你</div>
    </Reveal>

    <Reveal delay={150}>
      <h1 className="hero-names">
        <span className="name-row">Xiaoyang</span>
        <span className="hero-amp">&amp;</span>
        <span className="name-row">Alex</span>
      </h1>
    </Reveal>

    <Reveal delay={300}>
      <div className="hero-sub">Beijing · Shanxi · Jiangsu · December 2026</div>
      <div className="hero-cn">爱跨越山海 · 喜归故里</div>
    </Reveal>
  </section>;

/* ---------- Photo strip ---------- */
const HeroPhoto = () =>
  <div className="hero-photo">
    <div className="hero-stack">
      <figure className="poloroid hpol-1">
        <img src="../assets/web/wedding-12.jpg" alt="Providence Academy" loading="eager" />
        <figcaption>Just</figcaption>
      </figure>
      <figure className="poloroid hpol-2">
        <img src="../assets/web/wedding-33.jpg" alt="Lan Su Chinese Garden" loading="eager" />
        <figcaption>married</figcaption>
      </figure>
      <figure className="poloroid hpol-3">
        <img src="../assets/web/wedding-44.jpg" alt="Silk ball toss" loading="lazy" />
        <figcaption>&amp; coming home</figcaption>
      </figure>
    </div>
    <div className="monogram">X<span style={{ fontFamily: "var(--font-script)", fontSize: "0.7em" }}>&amp;</span>A</div>
  </div>;

/* ---------- Invitation ---------- */
const Intro = () =>
  <section className="intro">
    <div className="shell-narrow">
      <Reveal>
        <p className="cn-p">2026年10月17日，我们在美国波特兰举办了婚礼，开启了人生的新篇章。</p>
        <p className="cn-p">如今，我们带着这份幸福跨越山海，回到父亲的故乡山西、母亲的故乡江苏，以及晓扬成长的北京。诚邀亲朋好友欢聚一堂，共同分享我们的新婚喜悦！</p>
        <p className="sign">晓扬 &amp; Alex 敬邀</p>
        <p className="en-p">
          On 17 October 2026 we were married in Portland. This December we are bringing the celebration
          home — to Dad's hometown in Shanxi, Mom's hometown in Jiangsu, and Beijing, where Xiaoyang grew up.
        </p>
      </Reveal>
    </div>
  </section>;

/* ---------- Journey: from the wedding to the banquets, one timeline ---------- */
const Journey = ({ onNavigate }) => {
  const go = (id) => (e) => { e.preventDefault(); onNavigate(id); };
  const banquets = BANQUETS.slice().sort((a, b) => a.date.localeCompare(b.date));
  return (
    <section id="journey" style={{ background: "var(--bg-deep)" }}>
      <div className="shell">
        <SectionHead eyebrow="From our wedding to our roots" title="Our Journey" cn="一 路 走 来" />
        <Reveal>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-time">2018</div>
              <div className="tl-place">HOUSTON</div>
              <h4>We met <span className="cn">· 相识</span></h4>
              <p>A New Year's Eve party, and a ping pong tournament.</p>
            </div>
            <div className="tl-item">
              <div className="tl-time">2025</div>
              <div className="tl-place">SUNNYVALE</div>
              <h4>The proposal <span className="cn">· 求婚</span></h4>
              <p>A quiet question on a produce run, and a yes.</p>
            </div>
            <div className="tl-item">
              <div className="tl-time">Oct 17</div>
              <div className="tl-place">PORTLAND, OREGON</div>
              <h4>We were married <span className="cn">· 礼成</span></h4>
              <p>Providence Academy and Lan Su Chinese Garden. <a className="tl-link" href="#memories" onClick={go("memories")}>婚礼回顾 →</a></p>
            </div>
            {banquets.map((b) =>
              <div className="tl-item tl-next" key={b.id}>
                <div className="tl-time">Dec {Number(b.date.slice(8))}</div>
                <div className="tl-place"><span className="cn">{b.city}</span> · {b.cityEn.split(",")[0].toUpperCase()}</div>
                <h4><span className="cn">{b.meaningCn}</span></h4>
                <p>{b.meaningEn} · <span className="cn">{b.mealCn}</span> {b.mealEn}{(b.venueCn || b.venueEn) ? <> · <span className="cn">{b.venueCn || b.venueEn}</span></> : null}</p>
              </div>
            )}
          </div>
        </Reveal>
        <Reveal>
          <p className="soft-note">
            <a href="#banquets" onClick={go("banquets")} className="cn">答谢宴详情与地图 · Banquet details →</a>
          </p>
        </Reveal>
      </div>
    </section>);
};

/* ---------- Highlight film ----------
   Nothing downloads until play is tapped; plays inline on iPhone/WeChat. */
const HighlightVideo = ({ background }) => {
  const v = HIGHLIGHT_VIDEO;
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);
  if (!v.src) return null;
  const [aw, ah] = (v.aspect || "16:9").split(":").map(Number);
  // padding-top % is measured against the parent's width, so the wrapper sets the width
  const framePad = (ah / aw) * 100 + "%";
  const frameMax = aw === ah ? 560 : 760;

  const start = () => {
    setStarted(true);
    const el = videoRef.current;
    if (el) {
      const p = el.play();
      if (p && p.catch) p.catch(() => {});
    }
  };

  return (
    <section id="film" style={background ? { background } : undefined}>
      <div className="shell">
        <SectionHead eyebrow="The highlights" title="Our Wedding Film" cn="婚 礼 精 彩 影 片" />
        <Reveal>
          <div style={{ maxWidth: frameMax, margin: "0 auto" }}>
          <div className="film-frame" style={{ paddingTop: framePad }}>
            <video
              ref={videoRef}
              className="film-video"
              controls={started}
              preload="none"
              poster={v.poster || undefined}
              playsInline
              webkit-playsinline="true"
              x5-playsinline="true"
            >
              <source src={v.src} type="video/mp4" />
              {v.subtitlesZh && <track kind="subtitles" src={v.subtitlesZh} srcLang="zh-CN" label="中文字幕" default />}
            </video>
            {!started &&
              <button className="film-play" onClick={start} aria-label="播放 · Play">
                <span><svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5v14l11-7z" fill="currentColor" /></svg></span>
              </button>
            }
          </div>
          </div>
        </Reveal>
      </div>
    </section>);
};

/* ---------- RSVP ---------- */
const RsvpSection = () =>
  <section id="rsvp">
    <div className="shell-narrow">
      <SectionHead eyebrow="Kindly respond" title="RSVP" cn="赴 宴 回 执" />
      <Reveal>
        <div className="rsvp-block">
          <p className="cn">请填写赴宴回执，以便我们提前安排席位。</p>
          <p style={{ fontStyle: "italic", color: "var(--ink-soft)", marginBottom: 32 }}>
            Please let us know which banquet you'll join.
          </p>
          <a className="btn cn" href={rsvpHref()}>填写回执 · RSVP</a>
        </div>
      </Reveal>
    </div>
  </section>;

/* ---------- Our story ---------- */
const Story = () =>
  <section id="story">
    <div className="shell">
      <Reveal>
        <div className="story-layout">
          <div className="story-photo story-stack">
            <figure className="poloroid pol-1">
              <img src="../assets/web/story-1.jpg" alt="Cocktails together" loading="lazy" />
              <figcaption>cheers · early days</figcaption>
            </figure>
            <figure className="poloroid pol-2">
              <img src="../assets/web/story-2.jpg" alt="Surprise moment" loading="lazy" />
              <figcaption>family · holidays</figcaption>
            </figure>
            <figure className="poloroid pol-3">
              <img src="../assets/web/story-3.jpg" alt="The proposal — ring on her finger" loading="lazy" />
              <figcaption>she said yes</figcaption>
            </figure>
          </div>
          <div className="story-text">
            <div className="eyebrow">Our story · 我们的故事</div>
            <h2 className="display" style={{ fontSize: 56, fontStyle: "italic", color: "var(--accent-deep)", margin: "8px 0 16px" }}>
              How it began
            </h2>
            <div className="section-rule"></div>

            <p className="cn">2018年跨年夜，我们在休斯顿的一场派对上相遇。之后一起搬到加州，养了两只猫，走过许多地方。2025年，一个平常的周末过后，Alex 在我们硅谷的家中拿出戒指，向晓扬求婚。2026年10月17日，我们在美国波特兰举行了婚礼；12月，我们回到山西、江苏和北京，与家人朋友们一起庆祝。</p>

            <p>We met on New Year's Eve, 2018 — two strangers at a party that turned into seven years, three cities, and two furry friends. Houston, Sunnyvale, and now Sacramento have each shaped us in their own way.</p>

            <div className="story-chapter">
              <div className="year">2018 · HOUSTON</div>
              <h4>The party that started it all</h4>
              <p>A New Year's Eve party at the Secret Group — not exactly Xiaoyang's usual scene. Erol and Alex had just finished moving and were out chasing a balloon money drop; Xiaoyang and Jiajie had pivoted from a last-minute change in plans to a night out. Xiaoyang arrived in true form, sporting an antenna headband that broadcast her energy and spontaneity to the entire room. Alex, drawn in immediately, offered to buy her a drink — one he'd eventually find himself sipping warm two hours later. The night took a turn toward the wonderfully nerdy: an impromptu international ping pong tournament at Neil's Bahr. Team USA pulled off the upset, but more importantly, the seeds of future diplomatic relations had been planted.</p>
            </div>

            <div className="story-chapter">
              <div className="year">2021 · SUNNYVALE, CA</div>
              <h4>Building a life together</h4>
              <p>With her PhD in hand, Xiaoyang headed west and the two embarked on a cross-country move — now a party of three, thanks to Luigi, their spirited three-legged cat. Their second cat, Coco, joined the family just in time for their first Christmas in Sunnyvale, rounding out the crew. Together they dove headfirst into Northern California life: kayaking, hiking, road trips, and eventually a camper van that opened up the whole Pacific Northwest and Central Valley. When they weren't exploring their backyard, they were crossing oceans — China, Japan, Korea and Australia all got a visit.</p>
            </div>

            <div className="story-chapter">
              <div className="year">2025 · SUNNYVALE, CA</div>
              <h4>The proposal</h4>
              <p>Alex had been quietly planning for a while — surprising Xiaoyang with a visit to a jewelry store where the two picked out her ring together. She just didn't know when he'd actually pop the question. That moment came during one of their favorite rituals, a produce run to Felipe's Market. A quiet question, an answer they'd both known for years, and a yes that felt completely inevitable.</p>
            </div>

            <div className="story-chapter">
              <div className="year">2026 · SACRAMENTO &amp; PORTLAND</div>
              <h4>We said “I do”</h4>
              <p>Xiaoyang, Alex, and the cats loaded up the van and settled in Sacramento. On October 17, 2026, surrounded by family and friends at Providence Academy and Lan Su Chinese Garden, they were married.</p>
            </div>

            <div className="story-chapter">
              <div className="year">DECEMBER 2026 · CHINA</div>
              <h4>Coming home</h4>
              <p>This December they are bringing the celebration home — to Xinzhou, Jiangyan and Beijing — to share it with family and friends in China.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;

Object.assign(window, { Reveal, SectionHead, Hero, HeroPhoto, Intro, Journey, HighlightVideo, RsvpSection, Story });
