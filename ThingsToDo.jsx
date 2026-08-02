/* This site has no bundler: React is a UMD global and each .jsx exposes its
   component on window (see nav.jsx / sections-*.jsx). No import/export here. */
const { useEffect: useTtdEffect, useRef: useTtdRef } = React;

/**
 * Things to Do — guest activities page.
 *
 * Self-contained: all styles are scoped under .ttd- prefixes and injected
 * with the component, so it won't collide with the rest of the site.
 *
 * To edit content, change the SECTIONS array below. Nothing else needs to move.
 */

const TRAIL_GUIDE =
  "https://www.pdxmonthly.com/travel-and-outdoors/best-forest-park-hikes-hiking-trails-outdoors";

const SECTIONS = [
  {
    id: "downtown",
    seal: "城",
    title: "Downtown Portland",
    navLabel: "Downtown Portland",
    items: [
      { name: "Powell’s Books" },
      { name: "Screen door", rest: " brunch restaurant reservation" },
      { name: "Mother’s", rest: " for brunch" },
      { name: "Spirit cruise", rest: " on the Willamette!" },
      {
        name: "Black Cat Frozen Custard & Coffee + hidden speakeasy",
        rest: " – Gothic Themed Frozen Custard Shop and Speakeasy",
      },
      { name: "Portland Zoo", rest: " – accessible via light rail/has parking" },
      {
        name: "Forest Park",
        rest: (
          <>
            {" – hiking basically within the city ("}
            <a href={TRAIL_GUIDE} target="_blank" rel="noreferrer">
              trail guide
            </a>
            {")"}
          </>
        ),
      },
      {
        name: "Washington Park and the Portland Japanese Garden",
        rest: " (proclaimed to be the most beautiful and authentic Japanese garden outside of Japan and one of Oregon’s most beloved spaces) – right near Zoo",
      },
      {
        name: "Portland Trailblzers vs. Golden State Warriors Preseason Game",
        rest: " @ the Moda Center – 10/16 @ 7pm",
      },
      {
        name: "Cocktail’s @ Tear Drop Lounge",
        rest: " – expertly crafted inventive cocktail’s with unique ingredients!",
      },
      {
        name: "Next Level Pinball Shop & Museum",
        rest: ", One of best arcades in country ~$20 all games free, 805/grinds coffee and food next door! 34,000 sqft over 800 games!",
        children: [
          {
            text: "Okay It’s not in downtown Portland, you could take the Max Redline to Hillsboro Fairground and it’s a 1 mile walk! It’s really cool so you should consider it.",
          },
        ],
      },
    ],
  },
  {
    id: "nature",
    seal: "山",
    title: "Nature/Hiking",
    navLabel: "Nature/Hiking",
    items: [
      {
        name: "Forest park hike",
        rest: (
          <>
            {" – ("}
            <a href={TRAIL_GUIDE} target="_blank" rel="noreferrer">
              trail guide
            </a>
            {")"}
          </>
        ),
      },
      {
        name: "Fully Paved",
        rest: (
          <>
            {" - "}
            <a
              href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=104"
              target="_blank"
              rel="noreferrer"
            >
              Banks-Vernonia State Trail
            </a>
            {" is Oregon’s first rails-to-trails park, spanning a 21-mile paved multi-use path between the towns of Banks and Vernonia"}
          </>
        ),
      },
      {
        name: "Wildwood Trail",
        rest: " – partially paved trail/Packed Dirt, starts near Oregon zoo, multiple access points",
      },
      { name: "Forestry station", rest: " on way to Tillamook" },
      {
        name: "Columbia gorge",
        rest: " – Multnomah Falls, Latourell Falls, and Wahclella Falls",
      },
      {
        name: "Winter Falls Loop at Silver Falls State Park",
        children: [
          {
            text: "7 waterfalls, 5 mile moderate loop, can do a shorter variation with fewer waterfalls",
          },
          { text: "If really ambitious can do Trail of Ten Falls" },
        ],
      },
      {
        name: "Mounthood",
        children: [
          {
            text: "Easier Trails",
            children: [
              { text: "Tamanawas Falls 4.7 miles" },
              { text: "Lookout Mountain 3 miles" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "coast",
    seal: "海",
    title: "Oregon Coast",
    navLabel: "Oregon Coast",
    items: [
      { name: "Cannon beach" },
      {
        name: "Kelly’s Brighton Marina",
        rest: " – 2hr Boat rental and crabbing equipment, get crabbing, they’ll cook your crabs and you can hang out by their fire pits by the beach. You can also do dock crabbing",
      },
      { name: "Tidepooling at haystack rock", rest: ", can see starfish" },
      {
        name: "Oswald West state park",
        rest: " (between Cannon Beach and Manzanita)",
      },
    ],
    subsections: [
      {
        title: "Further South",
        items: [{ name: "Thorswell/Lincoln City" }, { name: "Boiler Bay" }],
      },
    ],
  },
  {
    id: "wineries",
    seal: "酒",
    title: "Wineries!",
    navLabel: "Wineries",
    pull: "Everywhere! Find your favorite!",
  },
  {
    id: "kids",
    seal: "童",
    title: "Kids!",
    navLabel: "Kids",
    items: [
      {
        name: "OMSI",
        rest: " – Oregon Museum of Science and Industry – interactive science exhibits for children! It’s quite fun for the whole family!",
      },
      { name: "Oregon Zoo" },
      {
        name: "Next Level Pinball Shop & Museum",
        rest: " – Hillsboro, OR (on your way to Tillamook Forest Center and Oregon Coast)",
      },
      {
        name: "Tillamook Forest Center",
        rest: (
          <>
            {", ranger station to climb the top of, easy access to trails, along the way to Tillamook and Oregon Coast "}
            <a
              className="ttd-maplink"
              href="https://share.google/8qthCj0j1gbJiKFJs"
              target="_blank"
              rel="noreferrer"
            >
              Map
            </a>
          </>
        ),
      },
      {
        name: "Sauvie Island Pumpkin Patch and Corn Maze",
        rest: (
          <>
            {" "}
            <a
              className="ttd-maplink"
              href="https://share.google/HWETTR8bIZ7dt26vZ"
              target="_blank"
              rel="noreferrer"
            >
              Map
            </a>
          </>
        ),
      },
    ],
  },
];

function TtdSubList({ nodes }) {
  return (
    <ul>
      {nodes.map((node, i) => (
        <li key={i}>
          {node.text}
          {node.children && <TtdSubList nodes={node.children} />}
        </li>
      ))}
    </ul>
  );
}

function TtdItemList({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          <span className="ttd-name">{item.name}</span>
          {item.rest}
          {item.children && <TtdSubList nodes={item.children} />}
        </li>
      ))}
    </ul>
  );
}

function ThingsToDo() {
  const rootRef = useTtdRef(null);

  useTtdEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const targets = root.querySelectorAll(".ttd-reveal");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("ttd-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ttd-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="ttd" ref={rootRef}>
      <style>{CSS}</style>

      <header className="ttd-masthead">
        <div className="ttd-wrap">
          <p className="ttd-eyebrow">Portland &middot; October 2026</p>
          <h1>
            Things to <em>Do</em>
          </h1>
          <p className="ttd-cjk-title">波特兰游玩指南</p>
        </div>
      </header>

      <nav className="ttd-index" aria-label="Sections">
        <div className="ttd-wrap">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              <span className="ttd-seal" aria-hidden="true">
                {s.seal}
              </span>
              {s.navLabel}
            </a>
          ))}
        </div>
      </nav>

      <main className="ttd-wrap">
        {SECTIONS.map((s) => (
          <section key={s.id} id={s.id} className="ttd-reveal">
            <div className="ttd-sec-head">
              <span className="ttd-seal" aria-hidden="true">
                {s.seal}
              </span>
              <h2>{s.title}</h2>
            </div>

            {s.pull && <p className="ttd-pull">{s.pull}</p>}
            {s.items && <TtdItemList items={s.items} />}

            {s.subsections?.map((sub, i) => (
              <div key={i}>
                <h3 className="ttd-sub">{sub.title}</h3>
                <TtdItemList items={sub.items} />
              </div>
            ))}
          </section>
        ))}
      </main>

      <footer className="ttd-footer">
        <div className="ttd-wrap">
          <span className="ttd-cjk">囍</span>
          {/* Static multi-page site — no router/Link, so a plain home link is correct */}
          <a href="/">Back to the wedding site</a>
        </div>
      </footer>
    </div>
  );
}

const CSS = `
/* Fonts are loaded globally by the host page; colors + type here map to the
   site's shared tokens defined on :root in styles.css. */
.ttd{
  --ttd-ink:var(--ink);
  --ttd-ink-soft:var(--ink-soft);
  --ttd-seal:var(--accent-deep);
  --ttd-burgundy:var(--accent-deep);
  --ttd-paper:var(--paper);
  --ttd-paper-deep:var(--bg-deep);
  --ttd-jade:var(--accent);
  --ttd-brass:var(--line);
  --ttd-rule:var(--rule);
  --ttd-display:var(--font-display);
  --ttd-body:var(--font-body);
  --ttd-cjk:var(--font-body);

  background:var(--ttd-paper);
  color:var(--ttd-ink);
  font-family:var(--ttd-body);
  font-size:17px;
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
}
.ttd *{box-sizing:border-box}
.ttd-wrap{max-width:760px;margin:0 auto;padding:0 24px}

.ttd-masthead{
  background:var(--ttd-ink);
  color:var(--ttd-paper);
  padding:72px 0 64px;
  position:relative;
  overflow:hidden;
}
.ttd-masthead::before{
  content:"";
  position:absolute;inset:0;
  background-image:
    linear-gradient(var(--ttd-paper) 1px,transparent 1px),
    linear-gradient(90deg,var(--ttd-paper) 1px,transparent 1px),
    linear-gradient(45deg,transparent 47%,var(--ttd-paper) 47%,var(--ttd-paper) 48%,transparent 48%);
  background-size:48px 48px,48px 48px,48px 48px;
  opacity:.07;
}
.ttd-masthead .ttd-wrap{position:relative}
.ttd-eyebrow{
  font-size:12px;letter-spacing:.22em;text-transform:uppercase;
  color:var(--ttd-brass);margin:0 0 20px;
}
.ttd-masthead h1{
  font-family:var(--ttd-display);
  font-weight:300;
  font-size:clamp(44px,8vw,80px);
  line-height:1.02;
  letter-spacing:-.02em;
  margin:0;
  font-variation-settings:"SOFT" 40,"WONK" 1;
}
.ttd-masthead h1 em{font-style:italic;color:var(--accent)}
.ttd-cjk-title{
  font-family:var(--ttd-cjk);
  font-size:15px;letter-spacing:.4em;
  color:rgba(242,241,234,.6);
  margin:22px 0 0;
}

.ttd-seal{
  font-family:var(--ttd-cjk);
  display:inline-flex;align-items:center;justify-content:center;
  background:var(--ttd-seal);
  color:var(--ttd-paper);
  border-radius:3px;line-height:1;flex:0 0 auto;
  box-shadow:inset 0 0 0 1px rgba(242,241,234,.28);
}

.ttd-index{
  position:sticky;top:0;z-index:20;
  background:rgba(242,241,234,.92);
  backdrop-filter:blur(8px);
  border-bottom:1px solid var(--ttd-rule);
}
.ttd-index .ttd-wrap{
  display:flex;gap:10px;
  padding-top:12px;padding-bottom:12px;
  overflow-x:auto;scrollbar-width:none;
}
.ttd-index .ttd-wrap::-webkit-scrollbar{display:none}
.ttd-index a{
  display:flex;align-items:center;gap:9px;
  text-decoration:none;border-bottom:0;
  color:var(--ttd-ink-soft);
  font-size:13px;letter-spacing:.05em;white-space:nowrap;
  padding:6px 12px 6px 6px;border-radius:999px;
  transition:background .18s ease,color .18s ease;
}
.ttd-index a .ttd-seal{width:26px;height:26px;font-size:14px}
.ttd-index a:hover,.ttd-index a:focus-visible{background:var(--ttd-paper-deep);color:var(--ttd-ink)}

.ttd main{padding:8px 0 40px}
.ttd section{padding:56px 0 8px;border-bottom:1px solid var(--ttd-rule);scroll-margin-top:88px}
.ttd section:last-of-type{border-bottom:0}

.ttd-sec-head{display:flex;align-items:center;gap:18px;margin-bottom:28px}
.ttd-sec-head .ttd-seal{width:52px;height:52px;font-size:28px;transform:rotate(-2deg)}
.ttd-sec-head h2{
  font-family:var(--ttd-display);
  font-weight:500;
  font-size:clamp(28px,4.4vw,38px);
  letter-spacing:-.015em;line-height:1.1;margin:0;
  font-variation-settings:"SOFT" 30,"WONK" 1;
}

.ttd-sub{
  font-family:var(--ttd-display);
  font-weight:500;font-style:italic;font-size:22px;
  margin:38px 0 16px;color:var(--ttd-burgundy);
}

.ttd ul{list-style:none;margin:0;padding:0}
.ttd li{position:relative;padding-left:26px;margin-bottom:20px}
.ttd li::before{
  content:"";position:absolute;left:2px;top:.72em;
  width:9px;height:9px;border:1px solid var(--ttd-jade);transform:rotate(45deg);
}
.ttd li ul{margin-top:14px}
.ttd li ul li{margin-bottom:12px;font-size:15.5px;color:var(--ttd-ink-soft);padding-left:22px}
.ttd li ul li::before{
  top:.7em;width:12px;height:1px;border:0;background:var(--ttd-brass);transform:none;
}
.ttd li ul li ul li::before{background:var(--ttd-rule)}

.ttd-name{font-weight:700;letter-spacing:-.005em}

.ttd a{color:var(--ttd-burgundy);text-decoration:none;border-bottom:1px solid rgba(107,21,38,.35)}
.ttd a:hover{border-bottom-color:var(--ttd-burgundy)}
.ttd a:focus-visible{outline:2px solid var(--ttd-jade);outline-offset:3px;border-radius:2px}

.ttd-maplink{
  display:inline-block;
  font-size:12px;letter-spacing:.14em;text-transform:uppercase;
  border:1px solid rgba(107,21,38,.35);border-radius:999px;
  padding:3px 11px;margin-left:4px;vertical-align:1px;white-space:nowrap;
}
.ttd-maplink:hover{background:var(--ttd-burgundy);color:var(--ttd-paper);border-color:var(--ttd-burgundy)}

.ttd-pull{
  font-family:var(--ttd-display);
  font-weight:300;
  font-size:clamp(26px,4.6vw,40px);
  line-height:1.25;letter-spacing:-.02em;
  color:var(--ttd-burgundy);margin:0;
  font-variation-settings:"SOFT" 60,"WONK" 1;
}

.ttd-footer{
  background:var(--ttd-ink);
  color:rgba(242,241,234,.7);
  padding:44px 0;font-size:14px;text-align:center;
}
.ttd-footer a{color:var(--line);border-bottom-color:var(--rule)}
.ttd-cjk{
  font-family:var(--ttd-cjk);letter-spacing:.3em;color:var(--ttd-seal);
  font-size:22px;display:block;margin-bottom:14px;
}

.ttd-reveal{opacity:0;transform:translateY(14px)}
.ttd-reveal.ttd-in{opacity:1;transform:none;transition:opacity .6s ease,transform .6s ease}
@media (prefers-reduced-motion:reduce){
  .ttd-reveal,.ttd-reveal.ttd-in{opacity:1;transform:none;transition:none}
}

@media (max-width:600px){
  .ttd{font-size:16px}
  .ttd-masthead{padding:52px 0 44px}
  .ttd-sec-head{gap:14px}
  .ttd-sec-head .ttd-seal{width:44px;height:44px;font-size:23px}
}
`;

Object.assign(window, { ThingsToDo });
