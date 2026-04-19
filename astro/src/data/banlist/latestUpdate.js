// src/data/banlist/latestUpdate.js
import { SITE_LINKS } from "../../config/links";

export const latestAnnouncement = {
  date: "March 09, 2026",
  title: "TMNT — Post-Release Update",
  link: SITE_LINKS.banlist.latestAnnouncement, // Where the "Full Announcement" button goes
  changes: [
    { 
      card: "New Banned Category Added", 
      status: "Banned as Companion" 
    },
    { 
      card: "Lutri, the Spellchaser", 
      status: "Moved from Banned to Banned as Companion" 
    }
  ]
};