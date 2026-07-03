// src/data/banlist/latestUpdate.js
import { SITE_LINKS } from "../../config/links";

export const latestAnnouncement = {
  date: "June 30, 2026",
  title: "Marvel Super Heroes — Post-Release Update",
  link: SITE_LINKS.banlist.latestAnnouncement, // Where the "Full Announcement" button goes
  changes: [
    { 
      card: "The Fantasticar", 
      status: "Banned" 
    },
    { 
      card: "Light-Paws, Emperor's Voice", 
      status: "Banned as Tiny Leader (Commander)" 
    },
    { 
      card: "Flawless Maneuver", 
      status: "Added to the Watchlist (again!)" 
    }
  ]
};