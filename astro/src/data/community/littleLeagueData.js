import formatImg from '../../assets/images/community/swornCompanions.jpg';
import platformImg from '../../assets/images/community/cockatrice.jpg';
import stakesImg from '../../assets/images/community/treasureRavnica.jpg';
import goalImg from '../../assets/images/community/sarkhanDragonAscendant.jpg';
import sctImg from '../../assets/images/community/chanceForGlory.jpg';
import titansImg from '../../assets/images/community/pactOfTheTitan.jpg';

export const leagueSchedule = [
  // --- JANUARY ---
  { 
    date: "Jan 5 - Jan 25", 
    event: "Tiny Titans '25/'26 Championship", 
    type: "championship" 
  },

  // --- SPRING SEASON ---
  { 
    date: "Jan 26 - Feb 22", 
    event: "February Monthly", 
    type: "qualifier" 
  },
  { 
    date: "Mar 2 - Mar 29", 
    event: "March Monthly", 
    type: "qualifier" 
  },
  { 
    date: "Apr 6 - May 3", 
    event: "April Monthly", 
    type: "qualifier" 
  },
  { 
    date: "May 15 - Jun 28", 
    event: "Spring SCT", 
    type: "major" 
  },
  { 
    date: "May 18 - Jun 11",
    event: "Spring Monthly", 
    type: "standard" 
  },

  // --- SUMMER SEASON ---
  { 
    date: "Jun 22 - Jul 19", 
    event: "Summer Monthly", 
    type: "standard" 
  },
  { 
    date: "Jul 1 - Aug 9", 
    event: "Tiny Rivals (Tentative)", 
    type: "major" 
  },
  

  // --- FALL SEASON ---
  { 
    date: "Jul 27 - Aug 23", 
    event: "August Monthly", 
    type: "qualifier" 
  },
  { 
    date: "Aug 31 - Sep 27", 
    event: "September Monthly", 
    type: "qualifier" 
  },
  { 
    date: "Oct 5 - Nov 1", 
    event: "October Monthly", 
    type: "qualifier" 
  },
  { 
    date: "Nov 9 - Dec 20", 
    event: "Fall SCT", 
    type: "major" 
  },
  { 
    date: "Nov 16 - Dec 13", 
    event: "Fall Monthly", 
    type: "standard" 
  },

  // --- WINTER SPECIAL ---
  { 
    date: "Dec 26 - Jan 15, '27", 
    event: "Winter Special Event", 
    type: "special" 
  }
];

export const leagueRules = [
  {
    title: "The Format",
    image: formatImg,
    position: "center 30%",
    iconPath: "M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z",
    text: "<strong>Swiss Pairings.</strong><br>Typically 4 rounds. You have " +
          "one full week per round to schedule and play your match."
  },
  {
    title: "The Platform",
    image: platformImg,
    position: "center 20%",
    iconPath: "M20 3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h3l-1 1v2h12v-2l-1-1h3c1.1 " +
              "0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H4V5h16v11z",
    text: "Registration on <strong>Challonge</strong>.<br>" +
          "Communication through <strong>Discord</strong>.<br>" +
          "Games played on <strong>Cockatrice</strong>."
  },
  {
    title: "The Stakes",
    image: stakesImg,
    position: "center 30%",
    iconPath: "M9.68 13.69L12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 " +
              "11.09 9H8.25l2.31 1.84-.88 2.85zM20 10c0-4.42-3.58-8-8-8s-8 " +
              "3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72c1.24-1.41 " +
              "2-3.25 2-5.28zm-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6 " +
              "-6 2.69-6 6-6z",
    text: "<strong>Bragging rights.</strong><br>Plus prizes for Top " +
          "Supporters and a chance to qualify for the SCT."
  },
  {
    title: "The Goal",
    image: goalImg,
    position: "center 20%",
    iconPath: "M19 9l1.25-2.75L23 5l-2.75-1.25L19 2l-1.25 2.75L15 5l2.75 " +
              "1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 " +
              "12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75" +
              "L23 19l-2.75-1.25L19 15z",
    text: "<strong>Have Fun. Meet cool people.</strong><br> And possibly, " +
          "qualify for the Tiny Titans Top 8 Championship."
  }
];

export const seasonalEvents = [
  {
    title: "The Second Chances Tournament (SCT)",
    image: sctImg,
    position: "center 25%",
    meta: "Double Elimination | End of Season",
    description: "Held bianually, a double-elim bracket where every win " +
                 "counts, but everyone gets a second chance.",
    specs: [
      "<strong>Qualification:</strong> Place in the Top 14 at the end of the current season",
      "<strong>Cost:</strong> Free for qualified players",
      "<strong>Prizes:</strong> Awards for Top 3 finishers and the Top 4 qualify for Tiny Titans"
    ],
    // Optional field: If present, renders the alert box
    warning: "<strong>Important:</strong> If you qualify for Tiny Titans in " +
             "the Spring, you cannot play in the Fall SCT. We save those " +
             "seats for new challengers!",
    // CSS class to distinguish styling
    cssClass: "sct-card"
  },
  {
    title: "Tiny Titans Top 8 Championship",
    image: titansImg,
    position: "center 15%",
    meta: "Single Elimination | January",
    description: "<strong>The Pinnacle.</strong> An annual event where the " +
                 "best of the best face off in January to kick off the new year.",
    specs: [
      "<strong>Qualification:</strong> Top 4 Spring SCT + Top 4 Fall SCT",
      "<strong>The Prize:</strong> Cash prizes and the title of <strong>Mightiest Tiniest Leader</strong>."
    ],
    cssClass: "championship-card"
  }
];