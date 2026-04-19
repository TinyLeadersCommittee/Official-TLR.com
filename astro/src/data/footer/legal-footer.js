// src/data/footer/legal-footer.js
import { SITE_LINKS } from '../../config/links.js'

export const legalBlocks = [
  {
    title: "Credits",
    paragraphs: [
      "Tiny Leaders Reborn developed by founding Committee members: " +
      "<strong>Clément Sillière</strong>, <strong>Arnaud Chalendard" +
      "</strong>, and <strong>Olivier Manin</strong> (2018).",
      
      "Tiny Leaders Original Format created by <strong>Charlotte " +
      "Tackaberry</strong>, with <strong>Steven Hamonic</strong>, and " +
      "<strong>Matthew Turnbull</strong> (2013)."
    ]
  },
  {
    title: "Unofficial Fan Content",
    paragraphs: [
      `Official-TL.com and Tiny Leaders is unofficial Fan Content permitted under
       the <a href="${SITE_LINKS.external.wizardsFanPolicy}" target="_blank" 
       rel="noopener noreferrer">Fan Content Policy</a>. Not approved/endorsed 
       by Wizards. Portions of the materials used are property of Wizards of the 
       Coast. ©Wizards of the Coast LLC.`
    ]
  },
  {
    title: "Card Data & Imagery",
    paragraphs: [
      `Card imagery and oracle text are provided courtesy of 
      <a href="${SITE_LINKS.external.scryfall}" target="_blank" 
      rel="noopener noreferrer">Scryfall</a>. Scryfall is not 
      endorsed by, sponsored by, or affiliated with the Tiny 
      Leaders Committee.`
    ]
  },
  {
    title: "Legal & Trademarks",
    paragraphs: [
      `Magic: The Gathering, Wizards of the Coast, and their logos are trademarks
       or registered trademarks of Wizards of the Coast LLC in the U.S.A. and 
       other countries. All rights reserved.`
    ]
  }
];

export const devCredits = {
  lead: {
    role: "Lead Developer",
    name: "Mike Plata",
    url: SITE_LINKS.tlc.mike
  },
  team: {
    role: "Maintained by",
    name: "The TLC Digital Team",
    url: SITE_LINKS.tlc.digitalTeam
  }
};