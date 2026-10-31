/* Top navigation — banquet site (Chinese-first).
   The Portland wedding site lives on, unchanged, at /portland/ (美国婚礼纪念). */

const { useEffect: useNavEff } = React;

const NAV_ITEMS = [
  { id: "home", label: "首页", en: "Home" },
  { id: "story", label: "我们的故事", en: "Our Story" },
  { id: "banquets", label: "三城答谢宴", en: "Banquets" },
  { id: "memories", label: "婚礼回顾", en: "Memories" },
];

const Nav = ({ active, onNavigate }) => {
  const handle = (e, id) => {
    e.preventDefault();
    onNavigate(id);
  };

  // On phones the links are a horizontally scrolling row; keep the current
  // page's link in view so guests can see where they are.
  useNavEff(() => {
    const el = document.querySelector(".nav-links a.active");
    if (el) el.scrollIntoView({ block: "nearest", inline: "center" });
  }, [active]);

  return (
    <nav className="nav scrolled nav-cn">
      <a className="nav-mono" href="#home" onClick={(e) => handle(e, "home")} aria-label="返回首页 · Home">
        晓扬 <span className="nav-mono-amp">&amp;</span> Alex
      </a>

      {/* Phone-only RSVP in the top bar; the in-row RSVP is hidden on phones */}
      <a href={rsvpHref()} className="nav-rsvp nav-rsvp-mobile">
        赴宴回执
      </a>

      <div className="nav-links">
        {NAV_ITEMS.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            onClick={(e) => handle(e, it.id)}
            className={active === it.id ? "active" : ""}
          >
            {it.label}
            <span className="nav-en">{it.en}</span>
          </a>
        ))}

        {/* Archive of the Portland wedding website — a separate page */}
        <a href="portland/" className="nav-archive">
          美国婚礼纪念
          <span className="nav-en">Portland Wedding</span>
        </a>

        <a href={rsvpHref()} className="nav-rsvp">
          赴宴回执
          <span className="nav-en">RSVP</span>
        </a>
      </div>
    </nav>
  );
};

Object.assign(window, { Nav, NAV_ITEMS });
