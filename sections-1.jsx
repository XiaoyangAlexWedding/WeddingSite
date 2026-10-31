/* Home page + shared pieces of the banquet site */

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

/* ---------- Section heading: Chinese title + English subtitle ---------- */
const CnHeading = ({ cn, en, eyebrow }) =>
  <Reveal>
    <div className="cn-heading">
      {eyebrow && <div className="cn-eyebrow">{eyebrow}</div>}
      <h2 className="cn-title">{cn}</h2>
      {en && <div className="cn-title-en">{en}</div>}
      <div className="cn-rule" aria-hidden="true"><span>◆</span></div>
    </div>
  </Reveal>;

/* ---------- Hero ---------- */
const Hero = ({ onNavigate }) =>
  <section className="hero hero-cn-banquet">
    <CornerOrnament size={160} className="hero-corner tl" />
    <CornerOrnament size={160} className="hero-corner tr" />
    <CornerOrnament size={160} className="hero-corner bl" />
    <CornerOrnament size={160} className="hero-corner br" />

    <Reveal delay={0}>
      <div className="xi-seal" aria-hidden="true">囍</div>
      <div className="cn-eyebrow">婚礼回顾 · 答谢宴</div>
    </Reveal>

    <Reveal delay={120}>
      <h1 className="hero-cn-title">婚礼礼成 · 感恩有你</h1>
    </Reveal>

    <Reveal delay={240}>
      <div className="hero-names hero-names-inline" aria-label="Xiaoyang and Alex">
        <span className="hero-name-cn">晓扬</span> <span className="hero-amp">&amp;</span> Alex
      </div>
    </Reveal>

    <Reveal delay={360}>
      <div className="hero-motto">爱跨越山海 · 喜归故里</div>
      <div className="hero-motto-en">From Our Wedding to Our Roots</div>
      <div className="hero-date">
        <span>2026年10月17日 · 美国波特兰</span>
        <span className="hero-date-en">17 October 2026 · Portland, Oregon</span>
      </div>
    </Reveal>

    <Reveal delay={480}>
      <div className="hero-actions">
        <a className="btn btn-cn btn-red" href={rsvpHref()}>填写赴宴回执 · RSVP</a>
        <a className="btn btn-cn btn-ghost" href="#banquets" onClick={(e) => { e.preventDefault(); onNavigate("banquets"); }}>
          三城答谢宴
        </a>
      </div>
    </Reveal>
  </section>;

/* ---------- Photo strip ---------- */
const HeroPhoto = () =>
  <div className="hero-photo">
    <div className="hero-stack">
      <figure className="poloroid hpol-1">
        <img src="assets/web/engagement-1.jpg" alt="晓扬和Alex" loading="eager" />
        <figcaption>Just</figcaption>
      </figure>
      <figure className="poloroid hpol-2">
        <img src="assets/web/engagement-2.jpg" alt="晓扬和Alex" loading="eager" />
        <figcaption>married</figcaption>
      </figure>
      <figure className="poloroid hpol-3">
        <img src="assets/web/engagement-3.jpg" alt="晓扬和Alex" loading="lazy" />
        <figcaption>♥</figcaption>
      </figure>
    </div>
    <div className="monogram">X<span style={{ fontFamily: "var(--font-script)", fontSize: "0.7em" }}>&amp;</span>A</div>
  </div>;

/* ---------- Invitation letter ---------- */
const Invitation = () =>
  <section className="invite-section">
    <div className="shell-narrow">
      <Reveal>
        <div className="invite-card">
          <div className="invite-corner tl" aria-hidden="true"></div>
          <div className="invite-corner tr" aria-hidden="true"></div>
          <div className="invite-corner bl" aria-hidden="true"></div>
          <div className="invite-corner br" aria-hidden="true"></div>
          <div className="cn-eyebrow">诚 挚 邀 请</div>
          <p className="invite-text">
            2026年10月17日，我们在美国波特兰举办了婚礼，开启了人生的新篇章。
          </p>
          <p className="invite-text">
            如今，我们带着这份幸福跨越山海，回到父亲的故乡山西、母亲的故乡江苏，以及晓扬成长的北京。诚邀亲朋好友欢聚一堂，共同分享我们的新婚喜悦！
          </p>
          <p className="invite-sign">晓扬 &amp; Alex 敬邀</p>
          <p className="invite-en">
            On 17 October 2026 we were married in Portland, Oregon. This December we are bringing the
            celebration home — to Dad's hometown in Shanxi, Mom's hometown in Jiangsu, and Beijing,
            where Xiaoyang grew up. We would love for you to join us.
          </p>
        </div>
      </Reveal>
    </div>
  </section>;

/* ---------- Highlight video ----------
   preload="none" + a poster keeps the page light; the video only downloads
   when a guest taps play. playsInline keeps it in the page on iPhone/WeChat. */
const HighlightVideo = () => {
  const v = HIGHLIGHT_VIDEO;
  const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    const el = videoRef.current;
    if (el) {
      const p = el.play();
      if (p && p.catch) p.catch(() => {});
    }
  };

  return (
    <section id="film" className="film-section">
      <div className="shell">
        <CnHeading cn="婚礼精彩影片" en="Wedding Highlight Film" />
        <Reveal>
          {v.src ?
            <div className="film-frame">
              <video
                ref={videoRef}
                className="film-video"
                controls={started}
                preload="none"
                poster={v.poster || undefined}
                playsInline
                webkit-playsinline="true"
                x5-playsinline="true"
                controlsList="nodownload"
              >
                <source src={v.src} type="video/mp4" />
                {v.subtitlesZh && <track kind="subtitles" src={v.subtitlesZh} srcLang="zh-CN" label="中文字幕" default />}
                您的浏览器不支持视频播放。
              </video>
              {!started &&
                <button className="film-play" onClick={start} aria-label="播放婚礼精彩影片 · Play the highlight film">
                  <span className="film-play-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="34" height="34"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
                  </span>
                  <span className="film-play-label">点击播放 · {v.lengthCn}</span>
                </button>
              }
            </div> :
            <div className="film-frame film-soon">
              <div className="film-soon-inner">
                <span className="film-play-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="34" height="34"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
                </span>
                <div className="film-soon-cn">影片剪辑中 · 即将上线</div>
                <div className="film-soon-en">Our highlight film is on its way</div>
              </div>
            </div>
          }
          <p className="film-note">
            建议在 Wi-Fi 环境下观看 · 点击后才会开始加载，不会自动播放
          </p>
        </Reveal>
      </div>
    </section>);
};

/* ---------- One banquet card (used on the home page and the banquets page) ---------- */
const BanquetCard = ({ b, index, full }) => {
  const venueKnown = b.venueCn || b.venueEn;
  return (
    <article className={`banquet-card ${full ? "banquet-card-full" : ""}`} id={`banquet-${b.id}`}>
      <div className="banquet-num" aria-hidden="true">{["壹", "贰", "叁"][index] || index + 1}</div>
      <div className="banquet-city">{b.city}</div>
      <div className="banquet-city-en">{b.cityEn}</div>
      <div className="banquet-meaning">{b.meaningCn} · <i>{b.meaningEn}</i></div>

      <dl className="banquet-facts">
        <div>
          <dt>日期</dt>
          <dd>{b.dateCn}（{b.weekdayCn}）<span className="banquet-en">{b.dateEn}</span></dd>
        </div>
        <div>
          <dt>宴席</dt>
          <dd>{b.mealCn}<span className="banquet-en">{b.mealEn}</span></dd>
        </div>
        <div>
          <dt>地点</dt>
          <dd>
            {venueKnown ?
              <>
                {b.venueCn || b.venueEn}
                {b.venueCn && b.venueEn && <span className="banquet-en">{b.venueEn}</span>}
              </> :
              <>场地待定<span className="banquet-en">Venue to be confirmed</span></>
            }
          </dd>
        </div>
        {full &&
          <div>
            <dt>地址</dt>
            <dd>{b.address || <>详细地址稍后公布<span className="banquet-en">Address coming soon</span></>}</dd>
          </div>
        }
      </dl>

      <div className="banquet-actions">
        <a className="btn btn-cn btn-red" href={rsvpHref(b.id)}>赴宴回执</a>
        {b.mapKeyword ?
          <>
            <a className="btn btn-cn btn-ghost" href={amapHref(b)} target="_blank" rel="noopener noreferrer">高德地图</a>
            {full && <a className="btn btn-cn btn-ghost" href={baiduMapHref(b)} target="_blank" rel="noopener noreferrer">百度地图</a>}
          </> :
          full && <span className="banquet-map-soon">地址确认后提供地图导航</span>
        }
      </div>
    </article>);
};

/* ---------- Banquets preview on the home page ---------- */
const BanquetPreview = ({ onNavigate }) =>
  <section className="banquets-section">
    <div className="shell-wide">
      <CnHeading cn="三城答谢 · 与爱团圆" en="Three Cities, Three Homecomings" />
      <Reveal>
        <div className="banquet-grid">
          {BANQUETS.map((b, i) => <BanquetCard key={b.id} b={b} index={i} />)}
        </div>
      </Reveal>
      <Reveal>
        <p className="banquets-more">
          <a href="#banquets" onClick={(e) => { e.preventDefault(); onNavigate("banquets"); }}>
            查看地址与地图 · Details &amp; maps →
          </a>
        </p>
      </Reveal>
    </div>
  </section>;

/* ---------- Big RSVP call to action ---------- */
const RsvpCta = () =>
  <section className="rsvp-cta-section">
    <div className="shell-narrow">
      <Reveal>
        <div className="rsvp-cta">
          <div className="cn-eyebrow">赴 宴 回 执</div>
          <h2 className="cn-title" style={{ marginBottom: 12 }}>期待与您相聚</h2>
          <p>请填写赴宴回执，以便我们提前安排席位。<br /><span className="banquet-en">Please let us know if you can join us.</span></p>
          <a className="btn btn-cn btn-red btn-big" href={rsvpHref()}>填写赴宴回执 · RSVP</a>
        </div>
      </Reveal>
    </div>
  </section>;

/* ---------- Share: link + QR code (long-press to scan inside WeChat) ---------- */
const ShareCard = () =>
  <section className="share-section">
    <div className="shell-narrow">
      <Reveal>
        <div className="share-card">
          <img className="share-qr" src="assets/share-qr.png" width="160" height="160" alt="网站二维码 · QR code for xiaoyangalex.wedding" />
          <div>
            <div className="cn-eyebrow" style={{ textAlign: "left" }}>分 享 给 亲 友</div>
            <p className="share-text">长按识别或截图分享二维码，或复制链接：</p>
            <p className="share-url">xiaoyangalex.wedding</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;

/* ---------- Our story ---------- */
const Story = () =>
  <section id="story">
    <div className="shell">
      <CnHeading cn="我们的故事" en="Our Story" />

      <Reveal>
        <div className="story-cn">
          <p><b>2018 · 休斯顿</b>　跨年夜的一场派对上，头戴触角发箍、活力满满的晓扬一出场就吸引了 Alex 的目光。那一晚以一场即兴的“国际乒乓球赛”收尾，我们的故事也从此开始。</p>
          <p><b>2021 · 加州 Sunnyvale</b>　晓扬博士毕业后，我们带着三条腿的猫咪 Luigi 一路向西；不久，猫咪 Coco 也加入了这个小家。我们一起划皮划艇、徒步、开着露营车自驾，也一起去了中国、日本、韩国和澳大利亚。</p>
          <p><b>2025 · 求婚</b>　在我们最爱的 Felipe's Market 买菜时，Alex 轻声向晓扬求婚——一个早已知道答案的问题，一声水到渠成的“我愿意”。</p>
          <p><b>2026 · 礼成</b>　我们搬到了萨克拉门托，并于10月17日在美国波特兰举行了婚礼。12月，我们带着这份幸福回到中国，与家人和朋友们欢聚庆祝。</p>
        </div>
      </Reveal>

      <Reveal>
        <div className="story-layout" style={{ marginTop: 72 }}>
          <div className="story-photo story-stack">
            <figure className="poloroid pol-1">
              <img src="assets/web/story-1.jpg" alt="Cocktails together" loading="lazy" />
              <figcaption>cheers · early days</figcaption>
            </figure>
            <figure className="poloroid pol-2">
              <img src="assets/web/story-2.jpg" alt="Surprise moment" loading="lazy" />
              <figcaption>family · holidays</figcaption>
            </figure>
            <figure className="poloroid pol-3">
              <img src="assets/web/story-3.jpg" alt="The proposal — ring on her finger" loading="lazy" />
              <figcaption>she said yes</figcaption>
            </figure>
          </div>
          <div className="story-text">
            <div className="eyebrow">Our story</div>
            <h3 className="display" style={{ fontSize: 48, fontStyle: "italic", color: "var(--accent-deep)", margin: "8px 0 16px", fontWeight: 400 }}>
              How it began
            </h3>
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
              <p>With her PhD in hand, Xiaoyang headed west and the two embarked on a cross-country move — now a party of three, thanks to Luigi, their spirited three-legged cat. Their second cat, Coco, joined the family just in time for their first Christmas in Sunnyvale, rounding out the crew. Together they dove headfirst into Northern California life: kayaking, hiking, road trips, and eventually a camper van that opened up the whole Pacific Northwest and Central Valley. When they weren't exploring their backyard, they were crossing oceans — China, Japan, Korea and Australia all got a visit.</p>
            </div>

            <div className="story-chapter">
              <div className="year">2025 · SUNNYVALE, CA</div>
              <h4>The proposal</h4>
              <p>Alex had been quietly planning for a while — surprising Xiaoyang with a visit to a jewelry store where the two picked out her ring together. She just didn't know when he'd actually pop the question. That moment came during one of their favorite rituals, a produce run to Felipe's Market. A quiet question, an answer they'd both known for years, and a yes that felt completely inevitable.</p>
            </div>

            <div className="story-chapter">
              <div className="year">2026 · SACRAMENTO</div>
              <h4>A new home</h4>
              <p>Xiaoyang, Alex, and the cats loaded up the van and set their sights on Sacramento, where they are now happily settled in.</p>
            </div>

            <div className="story-chapter">
              <div className="year">2026 · PORTLAND &amp; CHINA</div>
              <h4>We said “I do”</h4>
              <p>On October 17, 2026, surrounded by family and friends at Providence Academy and Lan Su Chinese Garden, Xiaoyang and Alex said “I do.” This December they are carrying the celebration across the ocean — to Xinzhou, Jiangyan and Beijing — to share it with family and friends in China.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;

Object.assign(window, {
  Reveal, CnHeading, Hero, HeroPhoto, Invitation, HighlightVideo,
  BanquetCard, BanquetPreview, RsvpCta, ShareCard, Story,
});
