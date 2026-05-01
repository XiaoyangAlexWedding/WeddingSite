/* Lower-page sections */

const Schedule = () =>
<section id="schedule" style={{ background: "var(--bg-deep)" }}>
    <div className="shell">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>The order of the day</div>
        <h2 className="section-title">Schedule</h2>
        <div className="section-title-cn">流 程 安 排</div>
      </Reveal>

      <Reveal>
        <div className="timeline">
          {[
        { t: "1:30 pm", title: "Guest Arrival", desc: "Welcome at Providence — light refreshments", cn: "宾客入场" },
        { t: "2:00 pm", title: "Ceremony Begins", desc: "Please be seated by 1:50 pm · Providence", cn: "婚礼仪式" },
        { t: "2:45 pm", title: "Shuttle to Lan Su", desc: "15-minute ride · provided for all guests", cn: "接驳车 · 前往兰苏园" },
        { t: "3:15 pm", title: "Cocktail Hour", desc: "Garden lounge · canapés · live strings", cn: "鸡尾酒会" },
        { t: "4:15 pm", title: "Tea Ceremony", desc: "A traditional offering of tea to family", cn: "敬 茶 仪 式" },
        { t: "5:00 pm", title: "Reception &amp; Dinner", desc: "Toasts, family-style courses", cn: "晚宴开席" },
        { t: "6:30 pm", title: "First Dance &amp; Dancing", desc: "The floor opens — please join us", cn: "第一支舞" },
        { t: "9:00 pm", title: "Send-Off", desc: "Sparklers under the lanterns", cn: "送别仪式" }].
        map((it, i) =>
        <div className="tl-item" key={i}>
              <div className="tl-time">{it.t}</div>
              <h4 dangerouslySetInnerHTML={{ __html: it.title }}>Guest Arrival</h4>
              <p>{it.desc} · <span style={{ fontStyle: "normal" }}>{it.cn}</span></p>
            </div>
        )}
        </div>
      </Reveal>
    </div>
  </section>;


const Travel = () =>
<section id="travel">
    <div className="shell">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>Travel &amp; Lodging</div>
        <h2 className="section-title">Getting There</h2>
        <div className="section-title-cn">交 通 与 住 宿</div>
      </Reveal>

      <Reveal>
        <div className="travel-grid">
          <div className="travel-card">
            <div className="label">Airport · 机场</div>
            <h4>Portland International (PDX)</h4>
            <p>~25 minutes from the venue by car. Rideshare and rental cars available curbside.</p>
          </div>
        <div className="travel-card">
            <div className="label">Hotel Block · 酒店</div>
            <h4>The Benson Portland</h4>
            <p className="addr-line" style={{ marginBottom: 16 }}>
              Curio Collection by Hilton<br />
              309 SW Broadway, Portland, OR 97205
            </p>
            <p style={{ marginBottom: 8 }}>
              Group rate is <strong>$159/night</strong> for a King Urban View or Two Queen Urban View <em>(Note: the final price may appear differently until checkout)</em>.
            </p>
            <p style={{ marginBottom: 16 }}>
              <a href="https://group.curiocollection.com/293rd7" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
                Book your room online here →
              </a>
            </p>
            <p style={{ fontSize: 13, color: "var(--ink-soft)", fontStyle: "italic", margin: 0, lineHeight: 1.5, borderTop: "1px solid var(--rule)", paddingTop: 12 }}>
              <strong>Booking issues?</strong> Contact Danny Feist, Reservation Coordinator:<br />
              <a href="mailto:DFeist@bensonhotel.com" style={{ fontSize: 13, fontWeight: "normal" }}>DFeist@bensonhotel.com</a> &nbsp;·&nbsp; 503.228.2000 x 161
            </p>
          </div>
          <div className="travel-card">
            <div className="label">Shuttle · 接 驳 车</div>
            <h4>Providence ↔ Lan Su</h4>
            <p>A complimentary shuttle will take guests from the hotel to the ceremony at Providence and from Providence to the reception at Lan Su Chinese Garden — about a 15-minute ride. Departs right after the ceremony.</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="travel-map">
          
          <iframe 
            src="https://www.google.com/maps/d/u/0/embed?mid=1nLR6raRxSCf0YJpbVlEh-2ZD1cZ4URY&ehbc=2E312F&noprof=1" 
            width="100%" 
            height="480" 
            style={{ border: 0, display: "block" }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Wedding Locations Map"
          ></iframe>

        </div>
      </Reveal>
    </div>
  </section>;


const Gallery = () =>
<section id="gallery" style={{ background: "var(--bg-deep)" }}>
    <div className="shell">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>Moments</div>
        <h2 className="section-title">Gallery</h2>
        <div className="section-title-cn">回 忆 集</div>
      </Reveal>

      <Reveal>
        <div className="gallery">
          <div className="g-cell"><img src="assets/IMG_2715.JPG" alt="Second date, friend party" loading="lazy" style={{ objectPosition: "50% 30%" }} /><span className="g-cap">2nd date · first friend party</span></div>
          <div className="g-cell"><img src="assets/20190713_203004.jpg" alt="Hermann Park, Houston" loading="lazy" style={{ objectPosition: "50% 60%" }} /><span className="g-cap">2019 · Hermann Park, Houston</span></div>
          <div className="g-cell g-contain"><img src="assets/IMG_3650.JPG" alt="Run Alex Run sign" loading="lazy" style={{ objectFit: "contain", background: "var(--bg-deep)" }} /><span className="g-cap">Houston · Run, Alex, Run!</span></div>
          <div className="g-cell"><img src="assets/20191128_100141.jpg" alt="Macy's Parade, NYC" loading="lazy" style={{ objectPosition: "50% 30%" }} /><span className="g-cap">Nov 2019 · NYC, Macy's Parade</span></div>
          <div className="g-cell"><img src="assets/20201216_132654.jpg" alt="Sand dunes" loading="lazy" style={{ objectPosition: "50% 55%" }} /><span className="g-cap">Dec 2020 · sand dunes</span></div>
          <div className="g-cell"><img src="assets/20210117_193339.jpg" alt="Date night" loading="lazy" style={{ objectPosition: "50% 20%" }} /><span className="g-cap">Jan 2021 · date night</span></div>
          <div className="g-cell"><img src="assets/christmas-cat.jpg" alt="Christmas with the cat" loading="lazy" style={{ objectPosition: "50% 40%" }} /><span className="g-cap">Christmas · with our cat</span></div>
          <div className="g-cell"><img src="assets/20230528_214053.jpg" alt="A toast" loading="lazy" style={{ objectPosition: "50% 50%" }} /><span className="g-cap">May 2023 · a toast</span></div>
          <div className="g-cell"><img src="assets/20240831_191608.jpg" alt="Kayaking" loading="lazy" style={{ objectPosition: "50% 50%" }} /><span className="g-cap">Aug 2024 · kayaking</span></div>
          <div className="g-cell"><img src="assets/mmexport1728564791837.jpg" alt="Qing Feng pavilion, China" loading="lazy" style={{ objectPosition: "50% 60%" }} /><span className="g-cap">2024 · 清风亭 · China</span></div>
          <div className="g-cell"><img src="assets/20250411_141737.jpg" alt="Tulip fields" loading="lazy" style={{ objectPosition: "50% 50%" }} /><span className="g-cap">Apr 2025 · tulip fields</span></div>
          <div className="g-cell"><img src="assets/van-show.jpg" alt="RV show" loading="lazy" style={{ objectPosition: "50% 45%" }} /><span className="g-cap">2025 · van life dreams</span></div>
          <div className="g-cell"><img src="assets/halloween-2025.jpg" alt="Halloween 2025" loading="lazy" style={{ objectPosition: "50% 35%" }} /><span className="g-cap">Halloween 2025 · Saiki K</span></div>
          <div className="g-cell"><img src="assets/20241005_105830.jpg" alt="Japan trip" loading="lazy" style={{ objectPosition: "50% 60%" }} /><span className="g-cap">Oct 2024 · Japan</span></div>
        </div>
        <p style={{ textAlign: "center", marginTop: 24, fontStyle: "italic", color: "var(--ink-soft)", fontSize: 14 }}>
          More moments coming soon — closer to the day.
        </p>
      </Reveal>
    </div>
  </section>;


const Registry = () =>
<section id="registry">
    <div className="shell-narrow">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>With grateful hearts</div>
        <h2 className="section-title">Gift Registry</h2>
        <div className="section-title-cn">礼 物 心 意</div>
      </Reveal>

      <Reveal>
        <p style={{ textAlign: "center", color: "var(--ink-soft)", fontStyle: "italic", marginBottom: 40 }}>
          Your presence is the greatest gift. If you'd like to give something more, we've gathered a small list — and a couple of links for those traveling far.
        </p>

        {/* HOME REGISTRY (Updated with QR code) */}
        <div className="registry-row">
          <div className="registry-qr">
            <img src="assets/Alex Zelle.jfif" alt="Home Registry QR Code" style={{ width: "90%", height: "90%", objectFit: "contain" }} />
          </div>
          <div>
            <h4>Home Registry</h4>
            <p style={{ margin: "0 0 8px", color: "var(--ink-soft)", fontStyle: "italic" }}>
             For the moment we may not have a traditional registry, if you're patient, we may in the future — if you're in a rush, we'd love for you to contribute to a chapter of our life together. Whether it's our kitchen, our living room, a cozy bedroom retreat, or our entertainment setup, feel free to Zelle us toward whatever feels right, and leave a note in the comments letting us know which part of our home you'd like to help build.
            </p>
            <a href="assets/Alex Zelle.jfif">Request Transfer Details</a>
          </div>
        </div>

           {/* HONEYMOON FUND (Kept the botanical icon here) */}
        <div className="registry-row">
          <div className="registry-qr">
            <img src="assets/Xiaoyang Zelle.jfif" alt="WeChat and Zelle QR Code" style={{ width: "90%", height: "90%", objectFit: "contain" }} />
          </div>
          <div>
            <h4>The Honeymoon Fund</h4>
            <p style={{ margin: "0 0 8px", color: "var(--ink-soft)", fontStyle: "italic" }}>
              Help us toast somewhere new — a coffee in Lisbon, a sunset in Kyoto.
            </p>
            <a href="assets/Xiaoyang Zelle.jfif">Request Transfer Details →</a>
          </div>
        </div>

        {/* WECHAT(Updated with QR code) */}
        <div className="registry-row">
          <div className="registry-qr">
            <img src="assets/Xiaoyang Wechat.jfif" alt="WeChat and Zelle QR Code" style={{ width: "90%", height: "90%", objectFit: "contain" }} />
          </div>
          <div>
            <h4>WeChat &amp; Zelle 红包</h4>
            <p style={{ margin: "0 0 8px", color: "var(--ink-soft)", fontStyle: "italic" }}>
              For family abroad — a traditional 红包 by WeChat is warmly received.
            </p>
            <a href="assets/Xiaoyang Wechat.jfif">Request transfer details →</a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;


const Notes = () =>
<section id="notes" style={{ background: "var(--bg-deep)" }}>
    <div className="shell">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>Words from family</div>
        <h2 className="section-title">家 人 寄 语</h2>
        <div className="section-title-cn">N o t e s &nbsp; F r o m &nbsp; F a m i l y</div>
      </Reveal>

      <Reveal>
        <div className="notes-grid">
          <div className="note">
            <h4>From the Bride's Mother</h4>
            <p>"愿你们的爱情像一首歌 — 简单、真诚、长长久久。从你们第一次见面那天起，我就知道这一天会到来。"</p>
            <p style={{ fontStyle: "normal", fontSize: 13, letterSpacing: "0.1em", marginTop: 8 }}>— 妈 妈</p>
          </div>
          <div className="note">
            <h4>From the Groom's Father</h4>
            <p>"Two stubborn, wonderful people — we couldn't be prouder. Welcome to the family, Xiaoyang. Take good care of him; he means the world to us."</p>
            <p style={{ fontStyle: "normal", fontSize: 13, letterSpacing: "0.1em", marginTop: 8 }}>— Dad &amp; Mom</p>
          </div>
          <div className="note">
            <h4>From the Bride's Sister</h4>
            <p>"姐姐，你终于嫁出去啦！开个玩笑 — 看到你这么幸福，我也跟着幸福。Alex，请永远对她好。"</p>
            <p style={{ fontStyle: "normal", fontSize: 13, letterSpacing: "0.1em", marginTop: 8 }}>— 妹 妹</p>
          </div>
          <div className="note">
            <h4>From the Groom's Best Man</h4>
            <p>"I've watched this man wait seven years to ask the right question to the right person. He finally did. Couldn't be happier for them both."</p>
            <p style={{ fontStyle: "normal", fontSize: 13, letterSpacing: "0.1em", marginTop: 8 }}>— Daniel</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>;


const FAQ = () => {
  const items = [
  { q: "What time should I arrive?", a: "Doors open at 1:30 pm at Providence. Please be seated by 1:50 pm — the ceremony begins promptly at 2:00 pm. A complimentary shuttle will then take guests to Lan Su for the tea ceremony and reception (about 15 minutes)." },
  { q: "Is the venue indoor or outdoor?", a: "The ceremony is in a covered garden chapel; the reception flows between the pavilion and the stone garden, all roofed in case of rain." },
  { q: "Are children welcome?", a: "We adore your kids, but we've planned an adult evening. Childcare can be arranged at the host hotel — please ask us if you'd like a referral." },
  { q: "Will there be vegetarian / halal options?", a: "Yes — please let us know on your RSVP and we'll make sure you're well looked after." },
  { q: "Can I bring a plus-one?", a: "Plus-ones are listed on your invitation. If you don't see one and would like to bring someone, please reach out and we'll do our best." },
  { q: "When should I RSVP by?", a: "Please respond no later than August 15, 2026 (请于2026年8月15日前回复) so we can finalize the seating chart." }];

  return (
    <section id="faq">
      <div className="shell-narrow">
        <Reveal>
          <div className="eyebrow" style={{ textAlign: "center" }}>Good to know</div>
          <h2 className="section-title">FAQ</h2>
          <div className="section-title-cn">常 见 问 题</div>
        </Reveal>
        <Reveal>
          {items.map((it, i) =>
          <details key={i} className="faq-item">
              <summary className="faq-q">{it.q} <span className="plus">+</span></summary>
              <div className="faq-a">{it.a}</div>
            </details>
          )}
        </Reveal>
      </div>
    </section>);

};

const RSVP = () =>
<section id="rsvp" style={{ background: "var(--bg-deep)" }}>
    <div className="shell-narrow">
      <Reveal>
        <div className="eyebrow" style={{ textAlign: "center" }}>Kindly respond</div>
        <h2 className="section-title">RSVP</h2>
        <div className="section-title-cn">回 复 卡</div>
      </Reveal>

      <Reveal>
        <div className="rsvp-block">
          <p style={{ fontStyle: "italic", color: "var(--ink-soft)", marginBottom: 24 }}>
            Your reply means the world to us. Please respond by <strong>August 15, 2026</strong>.
          </p>
          <p style={{ fontStyle: "italic", color: "var(--ink-soft)", marginBottom: 32 }}>
            请于 2026 年 8 月 15 日前回复
          </p>
          <a className="btn" href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
            Respond Now &nbsp;·&nbsp; 立 即 回 复
          </a>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-soft)", marginTop: 24 }}>
            Opens our Google Form — takes ~2 minutes
          </p>
        </div>
      </Reveal>
    </div>
  </section>;


const Footer = ({ onNavigate }) =>
<footer>
    <div className="shell">
      <Reveal>
        <div className="footer-monogram">X &amp; A</div>
        <div className="divider"><Botanical variant="sprig" size={24} /></div>
        <div className="footer-meta" style={{ marginTop: 24 }}>Xiaoyang Li &nbsp;·&nbsp; Alexander Joachim</div>
        <div className="footer-meta" style={{ marginTop: 8 }}>17 · 10 · 2026 &nbsp;·&nbsp; Portland, Oregon</div>
        <div className="footer-hash">#XiaoyangAndAlex</div>
        <div className="footer-meta" style={{ marginTop: 32, fontSize: 12 }}>
          <a href="mailto:xiaoalex.joachli@gmail.com">XIAOYANGALEX.WEDDING</a>
        </div>
        <div className="footer-meta" style={{ marginTop: 32, fontSize: 11, opacity: 0.6, letterSpacing: "0.3em" }}>
          With love · 用 爱 相 守
        </div>
      </Reveal>
    </div>
  </footer>;


Object.assign(window, { Schedule, Travel, Gallery, Registry, Notes, FAQ, RSVP, Footer });
