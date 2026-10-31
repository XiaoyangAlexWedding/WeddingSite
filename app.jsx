/* App entry — paged single-page app, nav switches the active page.
   Old Portland-site links (#travel, #registry, …) are forwarded to the
   archive at /portland/ by a small script in index.html. */

const { useEffect: useAppEff, useState: useAppState } = React;

/* Page id → component */
const PAGES = {
  home: (p) => (
    <>
      <Hero onNavigate={p.onNavigate} />
      <HeroPhoto />
      <Invitation />
      <BanquetPreview onNavigate={p.onNavigate} />
      <HighlightVideo />
      <RsvpCta />
      <ShareCard />
    </>
  ),
  story: () => <Story />,
  banquets: () => <><Banquets /><RsvpCta /></>,
  memories: (p) => <Memories onNavigate={p.onNavigate} />,
};

const PAGE_TITLES = {
  home: "婚礼礼成 · 感恩有你 | 晓扬 & Alex 婚礼答谢宴",
  story: "我们的故事 | 晓扬 & Alex",
  banquets: "三城答谢宴 | 晓扬 & Alex",
  memories: "婚礼回顾 | 晓扬 & Alex",
};

const pageFromHash = () => {
  const id = (window.location.hash || "#home").replace("#", "");
  return PAGES[id] ? id : "home";
};

const App = () => {
  const [page, setPage] = useAppState(pageFromHash());
  const [transitioning, setTransitioning] = useAppState(false);

  useAppEff(() => {
    document.title = PAGE_TITLES[page] || PAGE_TITLES.home;
  }, [page]);

  // Hash listener for browser back/forward
  useAppEff(() => {
    const onHash = () => {
      const id = pageFromHash();
      if (id !== page) {
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
    if (id === page) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
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
      <Nav active={page} onNavigate={navigate} />

      <main className={`page ${transitioning ? "leaving" : "entering"}`} key={page}>
        <PageView onNavigate={navigate} />
      </main>

      <Footer />
      <MobileRsvpBar />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
