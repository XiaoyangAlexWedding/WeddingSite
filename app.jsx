/* App entry — paged single-page app, nav switches active page */

const { useEffect: useEff, useState: useAppState } = React;

const PALETTES = {
  terracotta: {
    "--bg": "#f4ebe0",
    "--bg-deep": "#ecdfd0",
    "--paper": "#faf3e9",
    "--ink": "#2a1e16",
    "--ink-soft": "#5a4538",
    "--accent": "#b86b4b",
    "--accent-deep": "#8a4a35",
    "--line": "#c9a48a",
    "--rule": "rgba(138, 74, 53, 0.25)",
  },
  sage: {
    "--bg": "#f4f1e8",
    "--bg-deep": "#e8e4d4",
    "--paper": "#fbf9f2",
    "--ink": "#28302a",
    "--ink-soft": "#56604f",
    "--accent": "#7a8a6a",
    "--accent-deep": "#4a5a3a",
    "--line": "#a8b298",
    "--rule": "rgba(74, 90, 58, 0.22)",
  },
  blush: {
    "--bg": "#fbf3ef",
    "--bg-deep": "#f3e6df",
    "--paper": "#fdf8f5",
    "--ink": "#2e201c",
    "--ink-soft": "#6a4f48",
    "--accent": "#c98878",
    "--accent-deep": "#9a5848",
    "--line": "#d6b0a4",
    "--rule": "rgba(154, 88, 72, 0.22)",
  },
  midnight: {
    "--bg": "#1c1a18",
    "--bg-deep": "#15130f",
    "--paper": "#26211c",
    "--ink": "#f0e6d8",
    "--ink-soft": "#bfa890",
    "--accent": "#d4a26a",
    "--accent-deep": "#e6b878",
    "--line": "#7a5a3a",
    "--rule": "rgba(212, 162, 106, 0.3)",
  },
};

const TYPE_PAIRS = {
  romantic: {
    "--font-display": '"Cormorant Garamond", serif',
    "--font-script": '"Pinyon Script", cursive',
    "--font-body": '"EB Garamond", Georgia, serif',
  },
  editorial: {
    "--font-display": '"Playfair Display", serif',
    "--font-script": '"Allura", cursive',
    "--font-body": '"Cormorant Garamond", serif',
  },
  modern: {
    "--font-display": '"DM Serif Display", serif',
    "--font-script": '"Tangerine", cursive',
    "--font-body": '"Lora", serif',
  },
};

/* Page id → component */
const PAGES = {
  home:     () => (<><Hero /><HeroPhoto /></>),
  story:    () => <Story />,
  details:  () => <Details />,
  dress:    () => <DressGuide />,
  schedule: () => <Schedule />,
  travel:   () => <Travel />,
  gallery:  () => <Gallery />,
  registry: () => <Registry />,
  notes:    () => <Notes />,
  faq:      () => <FAQ />,
  rsvp:     () => <RSVP />,
};

const App = () => {
  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "palette": "terracotta",
    "typePair": "romantic",
    "heroLayout": "stacked"
  }/*EDITMODE-END*/;

  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Read initial page from URL hash, default to home
  const initial = (window.location.hash || "#home").replace("#", "");
  const [page, setPage] = useAppState(PAGES[initial] ? initial : "home");
  const [transitioning, setTransitioning] = useAppState(false);

  useEff(() => {
    const root = document.documentElement;
    const p = PALETTES[tweaks.palette] || PALETTES.terracotta;
    Object.entries(p).forEach(([k, v]) => root.style.setProperty(k, v));
    const t = TYPE_PAIRS[tweaks.typePair] || TYPE_PAIRS.romantic;
    Object.entries(t).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [tweaks.palette, tweaks.typePair]);

  // Hash listener for browser back/forward
  useEff(() => {
    const onHash = () => {
      const id = (window.location.hash || "#home").replace("#", "");
      if (PAGES[id] && id !== page) {
        setTransitioning(true);
        setTimeout(() => {
          setPage(id);
          setTransitioning(false);
          window.scrollTo({ top: 0, behavior: "auto" });
        }, 200);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [page]);

  const navigate = (id) => {
    if (id === page) return;
    setTransitioning(true);
    setTimeout(() => {
      window.history.pushState(null, "", `#${id}`);
      setPage(id);
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 200);
  };

  const PageView = PAGES[page] || PAGES.home;

  return (
    <>
      <Nav active={page} onNavigate={navigate} heroLayout={tweaks.heroLayout} />

      <main className={`page ${transitioning ? "leaving" : "entering"}`} key={page}>
        <PageView heroLayout={tweaks.heroLayout} />
      </main>

      <Footer onNavigate={navigate} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Palette">
          <TweakSelect
            label="Color direction"
            value={tweaks.palette}
            onChange={(v) => setTweak("palette", v)}
            options={[
              { value: "terracotta", label: "Terracotta · Cream (default)" },
              { value: "sage", label: "Sage · Linen" },
              { value: "blush", label: "Blush · Rose" },
              { value: "midnight", label: "Midnight · Gold" },
            ]}
          />
        </TweakSection>

        <TweakSection title="Typography">
          <TweakRadio
            label="Type pairing"
            value={tweaks.typePair}
            onChange={(v) => setTweak("typePair", v)}
            options={[
              { value: "romantic", label: "Romantic" },
              { value: "editorial", label: "Editorial" },
              { value: "modern", label: "Modern" },
            ]}
          />
        </TweakSection>

        <TweakSection title="Hero layout">
          <TweakRadio
            label="Names arrangement"
            value={tweaks.heroLayout}
            onChange={(v) => setTweak("heroLayout", v)}
            options={[
              { value: "stacked", label: "Stacked" },
              { value: "inline", label: "Inline" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
