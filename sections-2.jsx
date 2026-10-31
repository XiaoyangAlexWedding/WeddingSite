/* Banquets page, memories page, footer */

/* ---------- 三城答谢宴 (full details) ---------- */
const Banquets = () =>
  <section id="banquets" className="banquets-section banquets-page">
    <div className="shell-wide">
      <CnHeading cn="三城答谢 · 与爱团圆" en="Three Cities, Three Homecomings" eyebrow="婚 礼 答 谢 宴" />

      <Reveal>
        <p className="banquets-intro">
          父亲的故乡山西、母亲的故乡江苏，以及晓扬成长的北京——<br className="hide-sm" />
          三座城市，三场团圆，感谢一路陪伴我们的每一位亲友。
          <span className="banquet-en">Dad's hometown, Mom's hometown, and the city where Xiaoyang grew up.</span>
        </p>
      </Reveal>

      <Reveal>
        <div className="banquet-grid">
          {BANQUETS.map((b, i) => <BanquetCard key={b.id} b={b} index={i} full />)}
        </div>
      </Reveal>

      <Reveal>
        <p className="banquets-note">
          具体时间与座位安排将另行通知。如有任何问题，欢迎直接微信联系我们。
          <span className="banquet-en">Exact times will be shared closer to the date. Questions? Message us on WeChat.</span>
        </p>
      </Reveal>
    </div>
  </section>;

/* ---------- 婚礼回顾 (memories) ---------- */
const Memories = ({ onNavigate }) => {
  const photos = WEDDING_PHOTOS || [];
  return (
    <>
      <section id="memories" className="memories-section">
        <div className="shell">
          <CnHeading cn="婚礼回顾" en="Our Wedding Day · Portland, 17 October 2026" />
          <Reveal>
            <div className="memories-venues">
              <div>
                <div className="memories-venue-cn">仪式 · Providence Academy</div>
                <div className="banquet-en">Ceremony · Vancouver, Washington</div>
              </div>
              <div>
                <div className="memories-venue-cn">晚宴 · 兰苏园 Lan Su Chinese Garden</div>
                <div className="banquet-en">Reception · Portland, Oregon</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            {photos.length ?
              <div className="gallery memories-gallery">
                {photos.map((p, i) =>
                  <div className="g-cell" key={i}>
                    <img src={p.src} alt={p.cn || p.en || "婚礼照片"} loading="lazy" />
                    {(p.cn || p.en) && <span className="g-cap">{[p.cn, p.en].filter(Boolean).join(" · ")}</span>}
                  </div>
                )}
              </div> :
              <div className="soon-card">
                <div className="soon-cn">婚礼照片整理中 · 敬请期待</div>
                <div className="banquet-en">Wedding photos are on their way.</div>
              </div>
            }
          </Reveal>
        </div>
      </section>

      <HighlightVideo />

      <section className="memories-section">
        <div className="shell">
          <CnHeading cn="三城答谢回忆" en="Banquet Memories" />
          <Reveal>
            <div className="soon-card">
              <div className="soon-cn">12月答谢宴之后，我们会在这里分享与大家相聚的照片。</div>
              <div className="banquet-en">Photos from the banquets in Shanxi, Jiangsu and Beijing will be shared here after December.</div>
            </div>
          </Reveal>
          <Reveal>
            <p className="banquets-more" style={{ marginTop: 48 }}>
              <a href="portland/">美国婚礼纪念 · 查看波特兰婚礼网站存档 →</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>);
};

/* ---------- Phone-only floating RSVP bar ---------- */
const MobileRsvpBar = () =>
  <a className="mobile-rsvp-bar" href={rsvpHref()}>
    填写赴宴回执 <span className="banquet-en" style={{ display: "inline", color: "inherit" }}>RSVP</span> →
  </a>;

/* ---------- Footer ---------- */
const Footer = () =>
  <footer>
    <div className="shell">
      <Reveal>
        <div className="footer-monogram">X &amp; A</div>
        <div className="divider"><Botanical variant="sprig" size={24} /></div>
        <div className="footer-names">晓扬 &amp; Alex</div>
        <div className="footer-meta" style={{ marginTop: 8 }}>Xiaoyang Li &nbsp;·&nbsp; Alexander Joachim</div>
        <div className="footer-cn" style={{ marginTop: 16 }}>2026.10.17 美国波特兰 · 2026.12 山西 · 江苏 · 北京</div>
        <div className="footer-hash">#XiaoyangAndAlex</div>
        <div className="footer-meta" style={{ marginTop: 32, fontSize: 12 }}>
          <a href="portland/">美国婚礼纪念 · Portland wedding archive</a>
        </div>
        <div className="footer-meta" style={{ marginTop: 12, fontSize: 12 }}>
          <a href="mailto:xiaoalex.joachli@gmail.com">XIAOYANGALEX.WEDDING</a>
        </div>
        <div className="footer-cn" style={{ marginTop: 32, opacity: 0.7 }}>
          感 恩 有 你 · With love
        </div>
      </Reveal>
    </div>
  </footer>;

Object.assign(window, { Banquets, Memories, MobileRsvpBar, Footer });
