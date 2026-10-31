/* Banquets page, memories page, footer */

/* ---------- 答谢宴 ---------- */
const BANQUET_ICONS = ["pavilion", "arch", "floral"];

const Banquets = () =>
  <section id="banquets" style={{ background: "var(--bg-deep)" }}>
    <div className="shell">
      <SectionHead eyebrow="December 2026" title="Banquets" cn="三 城 答 谢 宴" />

      <Reveal>
        <div className="detail-grid three">
          {BANQUETS.map((b, i) => {
            const venue = b.venueCn || b.venueEn;
            return (
              <div key={b.id} id={`banquet-${b.id}`}>
                <div className="detail-illus"><Botanical variant={BANQUET_ICONS[i] || "sprig"} size={72} /></div>
                <h3 className="cn">{b.city}</h3>
                <div className="where">{b.cityEn}</div>
                <div className="when cn">{b.dateCn.slice(5)}（{b.weekdayCn}）· {b.mealCn}</div>
                <div className="when">{b.dateEn} · {b.mealEn}</div>
                <div className="addr" style={{ marginTop: 12 }}>
                  {venue ? venue : <><span className="cn">场地待定</span> · Venue to be confirmed</>}
                  {b.address && <><br /><span className="cn">{b.address}</span></>}
                  <br /><span className="cn">{b.meaningCn}</span> · {b.meaningEn}
                </div>
                <div className="detail-links cn">
                  <a href={rsvpHref(b.id)}>赴宴回执</a>
                  {b.mapKeyword && <a href={amapHref(b)} target="_blank" rel="noopener noreferrer">高德地图</a>}
                  {b.mapKeyword && <a href={baiduMapHref(b)} target="_blank" rel="noopener noreferrer">百度地图</a>}
                </div>
              </div>);
          })}
        </div>
      </Reveal>
    </div>
  </section>;

/* ---------- 婚礼回顾 ---------- */
const Memories = () => {
  const photos = WEDDING_PHOTOS || [];
  return (
    <>
      <section id="memories">
        <div className="shell">
          <SectionHead eyebrow="Portland · 17 October 2026" title="Memories" cn="婚 礼 回 顾" />
          <Reveal>
            {photos.length ?
              <div className="gallery">
                {photos.map((p, i) =>
                  <div className="g-cell" key={i}>
                    <img src={p.src} alt={p.cn || p.en || "Wedding photo"} loading="lazy" />
                    {(p.cn || p.en) && <span className="g-cap">{[p.cn, p.en].filter(Boolean).join(" · ")}</span>}
                  </div>
                )}
              </div> :
              <p className="soft-note">
                Photos from Providence Academy and Lan Su are on their way.<br />
                <span className="cn">婚礼照片整理中，敬请期待。</span>
              </p>
            }
            <p className="soft-note">
              <a href="portland/" className="cn">波特兰婚礼网站存档 · Portland wedding site →</a>
            </p>
          </Reveal>
        </div>
      </section>

      <HighlightVideo background="var(--bg-deep)" />
    </>);
};

/* ---------- Footer ---------- */
const Footer = () =>
  <footer>
    <div className="shell">
      <Reveal>
        <div className="footer-monogram">X &amp; A</div>
        <div className="divider"><Botanical variant="sprig" size={24} /></div>
        <div className="footer-meta" style={{ marginTop: 24 }}>Xiaoyang Li &nbsp;·&nbsp; Alexander Joachim</div>
        <div className="footer-meta" style={{ marginTop: 8 }}>Portland &nbsp;→&nbsp; China &nbsp;·&nbsp; 2026</div>
        <div className="footer-hash">#XiaoyangAndAlex</div>
        <div className="footer-meta" style={{ marginTop: 32, fontSize: 12 }}>
          <a href="mailto:xiaoalex.joachli@gmail.com">XIAOYANGALEX.WEDDING</a>
        </div>
      </Reveal>
    </div>
  </footer>;

Object.assign(window, { Banquets, Memories, Footer });
