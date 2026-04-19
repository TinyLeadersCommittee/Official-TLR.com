// src/data/navigation/navigation.js
import { SITE_LINKS } from '../../config/links.js';

//helper to check exact paths (ignores trailing slashes)
export const isExact = (currentPath, targetPath) => 
  currentPath.replace(/\/$/, '') === targetPath.replace(/\/$/, '');

//central source of truth for navigation pills
export const subMenus = {
  rules: [
    { 
      label: 'Rules', 
      path: SITE_LINKS.rules.overview, 
      match: (p) => !p.includes(SITE_LINKS.rules.supplements) 
    },
    { 
      label: 'Supplements', 
      path: SITE_LINKS.rules.supplements, 
      match: (p) => p.includes(SITE_LINKS.rules.supplements) 
    }
  ],
  about: [
    { 
      label: 'About', 
      path: SITE_LINKS.navigation.about, 
      match: (p) => !p.includes(SITE_LINKS.about.committee) 
    },
    { 
      label: 'Committee', 
      path: SITE_LINKS.about.committee, 
      match: (p) => p.includes(SITE_LINKS.about.committee) 
    }
  ],
  community: [
    { 
      label: 'Community', 
      path: SITE_LINKS.navigation.community, 
      match: (p) => isExact(p, SITE_LINKS.navigation.community) || isExact(p, '/community/index.astro') 
    },
    { 
      label: 'Little League', 
      path: SITE_LINKS.community.littleLeague, 
      match: (p) => p.includes(SITE_LINKS.community.littleLeague) 
    },
    { 
      label: 'Paper Play', 
      path: SITE_LINKS.community.paperPlay, 
      match: (p) => p.includes(SITE_LINKS.community.paperPlay) 
    },
    { 
      label: 'More Ways to Play', 
      path: SITE_LINKS.community.playOptions, 
      match: (p) => p.includes(SITE_LINKS.community.playOptions) 
    },
    { 
      label: 'Resources', 
      path: SITE_LINKS.community.resources, 
      match: (p) => p.includes(SITE_LINKS.community.resources) 
    },
  ]
};

export const sidebarNav = {
  // Top standalone links
  topLinks: [
    { label: "Discover TLR", url: SITE_LINKS.navigation.discover, iconPath: null },
    { label: "The Feed", url: SITE_LINKS.navigation.feed, iconPath: "M4 11v3c3.86 0 7 3.14 7 7h3c0-5.52-4.48-10-10-10zm0-7v3c7.73 0 14 6.27 14 14h3c0-9.39-7.61-17-17-17zm0 11.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" } // RSS/Feed Icon
  ],
  // Categorized links
  categories: [
    {
      title: "Format Library",
      links: [
        { label: "Rules Overview", url: SITE_LINKS.rules.overview, iconPath: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.1C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.1.25.1.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zM21 18.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" },
        { label: "The Banlist", url: SITE_LINKS.navigation.banlist, iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" },
        { label: "Supplements & FAQ", url: SITE_LINKS.rules.supplements, iconPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" },
        { label: "Design Philosophy", url: SITE_LINKS.navigation.design, iconPath: "M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-2.06-2.9-2.69.05-.23.08-.47.08-.72a3.5 3.5 0 0 0-3.5-3.5c-.6 0-1.16.14-1.67.4L7.5 7.65V15h2.15l8.77-5.83c.89.55 1.76.65 2.22.65.65 0 1.29-.21 1.43-.46z" }
      ]
    },
    {
      title: "The Gathering",
      links: [
        { label: "Discord Community", url: SITE_LINKS.navigation.community, iconPath: "M38-428q-18-36-28-73T0-576q0-112 76-188t188-76q63 0 120 26.5t96 73.5q39-47 96-73.5T696-840q112 0 188 76t76 188q0 38-10 75t-28 73q-11-19-26-34t-35-24q9-23 14-45t5-45q0-78-53-131t-131-53q-81 0-124.5 44.5T480-616q-48-56-91.5-100T264-760q-78 0-131 53T80-576q0 23 5 45t14 45q-20 9-35 24t-26 34ZM0-80v-63q0-44 44.5-70.5T160-240q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H0Zm240 0v-65q0-65 66.5-105T480-290q108 0 174 40t66 105v65H240Zm540 0v-65q0-26-6.5-49T754-237q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780ZM480-210q-57 0-102 15t-53 35h311q-9-20-53.5-35T480-210Zm-320-70q-33 0-56.5-23.5T80-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-280Zm640 0q-33 0-56.5-23.5T720-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-280Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-440q0 50-34.5 85T480-320Zm0-160q-17 0-28.5 11.5T440-440q0 17 11.5 28.5T480-400q17 0 28.5-11.5T520-440q0-17-11.5-28.5T480-480Zm0 40Zm1 280Z" },
        { label: "Little League", url: SITE_LINKS.community.littleLeague, iconPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" },
        { label: "Paper Play Network", url: SITE_LINKS.community.paperPlay, iconPath: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" }, 
        { label: "More Ways to Play", url: SITE_LINKS.community.playOptions, iconPath: "M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" }, 
        { label: "Resources", url: SITE_LINKS.community.resources, iconPath: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" } 
      ]
    },
    {
      title: "Foundations",
      links: [
        { label: "History & Origins", url: SITE_LINKS.navigation.about, iconPath: "M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z" },
        { label: "People", url: SITE_LINKS.about.committee, iconPath: "M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z" }
      ]
    }
  ]
};