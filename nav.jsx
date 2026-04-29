/* Top navigation — page-switcher mode */

const { useState: useNavState, useEffect: useNavEff } = React;

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "details", label: "Details" },
  { id: "dress", label: "Dress" },
 // { id: "schedule", label: "Schedule" },
  { id: "travel", label: "Travel" },
  { id: "gallery", label: "Gallery" },
  { id: "registry", label: "Registry" },
 // { id: "faq", label: "FAQ" },
];

const Nav = ({ active, onNavigate }) => {
  const [open, setOpen] = useNavState(false);

  const handle = (e, id) => {
    e.preventDefault();
    setOpen(false);
    onNavigate(id);
  };

  return (
    <nav className="nav scrolled">
      <button className="nav-mono" onClick={(e) => handle(e, "home")} aria-label="Back to home">
        X &amp; A
      </button>

      <button
        className="nav-burger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          {open ? (
            <>
              <path d="M5 5 L19 19" />
              <path d="M19 5 L5 19" />
            </>
          ) : (
            <>
              <path d="M4 7 L20 7" />
              <path d="M4 12 L20 12" />
              <path d="M4 17 L20 17" />
            </>
          )}
        </svg>
      </button>

      <div className={`nav-links ${open ? "open" : ""}`}>
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

        {/*
        <a
          href="#rsvp"
          onClick={(e) => handle(e, "rsvp")}
          className={`nav-rsvp ${active === "rsvp" ? "active" : ""}`}
        >
          RSVP
        </a>
        */}
      </div>
    </nav>
  );
};

Object.assign(window, { Nav });
