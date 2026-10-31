/* =====================================================================
   SITE CONTENT — edit this file to update banquet details, the
   highlight video and wedding photos. Everything else reads from here.

   Tips for editing on GitHub:
   - Keep the quotes "" around every value and the commas at line ends.
   - Leave a value as "" when it is not confirmed yet; the site will
     show a friendly "待定 / to be confirmed" instead of a blank.
   ===================================================================== */

/* ---------- Three banquets (cards and RSVP list use this order;
   the home-page timeline sorts them by date) ----------
   venueCn / venueEn : venue name in Chinese / English
   address           : full Chinese address, once final
   mapKeyword        : what to search on Amap/Baidu (usually the Chinese
                       venue name). Leave "" until the venue is confirmed —
                       the map buttons only appear once this is filled in.
   mapCity           : city used to narrow the map search
   rsvpOption        : MUST match the option text in the Tally form exactly */
const BANQUETS = [
  {
    id: "beijing",
    date: "2026-12-19",
    city: "北京",
    cityEn: "Beijing",
    province: "北京市",
    dateCn: "2026年12月19日",
    weekdayCn: "周六",
    dateEn: "Saturday, 19 December 2026",
    mealCn: "中午",
    mealEn: "Lunch",
    venueCn: "",
    venueEn: "",
    address: "",
    mapKeyword: "",
    mapCity: "北京",
    meaningCn: "晓扬成长的地方",
    meaningEn: "Where Xiaoyang grew up",
    rsvpOption: "北京 · 12月19日（周六）中午",
  },
  {
    id: "shanxi",
    date: "2026-12-11",
    city: "山西忻州",
    cityEn: "Xinzhou, Shanxi",
    province: "山西省",
    dateCn: "2026年12月11日",
    weekdayCn: "周五",
    dateEn: "Friday, 11 December 2026",
    mealCn: "中午",
    mealEn: "Lunch",
    venueCn: "",
    venueEn: "Fan Hua Grand Hotel",
    address: "",
    mapKeyword: "",
    mapCity: "忻州",
    meaningCn: "父亲的故乡",
    meaningEn: "Dad's hometown",
    rsvpOption: "山西忻州 · 12月11日（周五）中午",
  },
  {
    id: "jiangsu",
    date: "2026-12-13",
    city: "江苏泰州（姜堰）",
    cityEn: "Jiangyan, Taizhou, Jiangsu",
    province: "江苏省",
    dateCn: "2026年12月13日",
    weekdayCn: "周日",
    dateEn: "Sunday, 13 December 2026",
    mealCn: "晚上",
    mealEn: "Dinner",
    venueCn: "",
    venueEn: "Jiangyan Hotel",
    address: "",
    mapKeyword: "",
    mapCity: "泰州",
    meaningCn: "母亲的故乡",
    meaningEn: "Mom's hometown",
    rsvpOption: "江苏泰州 · 12月13日（周日）晚上",
  },
];

/* ---------- Highlight video (about 90 seconds) ----------
   Put the files in assets/video/ and fill in the paths below.
   src         : an .mp4 (H.264 + AAC, 720p, "faststart") — plays in WeChat
   poster      : a .jpg thumbnail shown before playing
   subtitlesZh : optional Chinese subtitles, a .vtt file
   While src is "", a "coming soon" card is shown instead. */
const HIGHLIGHT_VIDEO = {
  src: "",
  poster: "",
  subtitlesZh: "",
  lengthCn: "约 90 秒",
};

/* ---------- Wedding-day photos (婚礼回顾) ----------
   Add one line per photo, e.g.
   { src: "assets/wedding/ceremony-01.jpg", cn: "Providence Academy · 仪式", en: "Ceremony" },
   Resize photos to about 1600px wide first so the page stays fast in China. */
const WEDDING_PHOTOS = [];

/* ---------- Links ---------- */
const SITE_URL = "https://xiaoyangalex.wedding/";

/* RSVP page link, optionally pre-selecting a banquet (beijing/shanxi/jiangsu) */
const rsvpHref = (banquetId) => "RSVP/" + (banquetId ? "?city=" + banquetId : "");

/* Map search links — Amap (高德) and Baidu (百度) work inside mainland China and WeChat */
const amapHref = (b) =>
  "https://uri.amap.com/search?keyword=" + encodeURIComponent(b.mapKeyword) +
  "&city=" + encodeURIComponent(b.mapCity) + "&src=xiaoyangalex.wedding&callnative=1";
const baiduMapHref = (b) =>
  "https://api.map.baidu.com/place/search?query=" + encodeURIComponent(b.mapKeyword) +
  "&region=" + encodeURIComponent(b.mapCity) + "&output=html&src=xiaoyangalex.wedding";

Object.assign(window, {
  BANQUETS, HIGHLIGHT_VIDEO, WEDDING_PHOTOS, SITE_URL, rsvpHref, amapHref, baiduMapHref,
});
