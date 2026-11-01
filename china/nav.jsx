/* Top navigation for the banquet pages (/china/).
   The main wedding site is linked from the 婚礼回顾 page. */

const { useEffect: useNavEff } = React;

const NAV_ITEMS = [
  { id: "home", label: "首页" },
  { id: "story", label: "我们的故事" },
  { id: "banquets", label: "答谢宴" },
  { id: "memories", label: "婚礼回顾" },
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
      <a className="nav-mono" href="#home" onClick={(e) => handle(e, "home")} aria-label="首页 · Home">
        X &amp; A
      </a>

      {/* Phone-only RSVP in the top bar; the in-row RSVP is hidden on phones */}
      <a href={rsvpHref()} className="nav-rsvp nav-rsvp-mobile">赴宴回执</a>

      <div className="nav-links">
        {NAV_ITEMS.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            onClick={(e) => handle(e, it.id)}
            className={active === it.id ? "active" : ""}
          >
            {it.label}
          </a>
        ))}

        {/* The main wedding website (gallery, photographer photos) */}

        <a href={rsvpHref()} className="nav-rsvp">赴宴回执</a>
      </div>
    </nav>
  );
};

Object.assign(window, { Nav, NAV_ITEMS });
