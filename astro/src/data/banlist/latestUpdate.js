// src/data/banlist/latestUpdate.js
import { SITE_LINKS } from "../../config/links";

export const latestAnnouncement = {
  date: "August 17, 2026",
  title: "The Hobbit — Post-Release Update",
  link: SITE_LINKS.banlist.latestAnnouncement, // Where the "Full Announcement" button goes
  changes: [
    { 
      card: "Flawless Maneuver", 
      status: "Banned" 
    },
    { 
      card: "Rograkh, Son of Rohgahh", 
      status: "Watchlisted" 
    },
    { 
      card: "Flawless Maneuver", 
      status: "Watchlisted" 
    }
  ]
};