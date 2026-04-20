// src/data/footer/nav-footer.js
import { SITE_LINKS } from '../../config/links.js';

export const footerNav = [
  {
    title: "Discover",
    links: [
      { label: "Format Overview", url: SITE_LINKS.navigation.rules },
      { label: "Banlist", url: SITE_LINKS.navigation.banlist },
      { label: "Rules Supplements", url: SITE_LINKS.rules.supplements }
    ]
  },
  {
    title: "Connect",
    links: [
      { label: "Discord", url: SITE_LINKS.socials.discord },
      { label: "YouTube", url: SITE_LINKS.socials.youtube },
      { label: "Bluesky", url: SITE_LINKS.socials.bluesky }
    ]
  },
  {
    title: "About",
    links: [
      { label: "Origins", url: SITE_LINKS.navigation.about },
      { label: "People", url: SITE_LINKS.about.committee },
      { label: "Governance", url: SITE_LINKS.tlc.portal } 
    ]
  }
];