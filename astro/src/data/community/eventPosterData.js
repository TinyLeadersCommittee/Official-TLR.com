// Import art for each event type
import brawlImg from '../../assets/images/community/tyvar.jpg';
import cubeImg from '../../assets/images/community/doublingCube.jpg';
import tasteImg from '../../assets/images/community/hierophantsChalice.jpg';
import variantImg from '../../assets/images/community/jwariShapeshifter.jpg';
import lfgImg from '../../assets/images/community/delney.jpg';

export const eventPosters = [
  {
    title: "Weekly Tiny Brawl",
    status: "Ongoing",
    statusColor: "ongoing", // maps to CSS class
    image: brawlImg,
    description: "A week-long, round-robin testing league designed to push deckbuilding to the bleeding edge.",
    details: [
      "Games played via Cockatrice",
      "One deck revision allowed after match 1",
      "Top performer earns title: <strong>Most Wicked Weekly Warrior</strong>"
    ]
  },
  {
    title: "Tiny Cube",
    status: "Ongoing",
    statusColor: "ongoing",
    image: cubeImg,
    description: "A draft-based experience using custom-built cubes curated by the Rules Manager.",
    details: [
      "Curated on Cube Cobra",
      "Drafted on draftmancer.com",
      "Played on Cockatrice"
    ]
  },
  {
    title: "Taste Testing",
    status: "Coming Soon",
    statusColor: "soon",
    image: tasteImg,
    description: "Short-form deckbuilding exercises centered around specific themes, constraints, or mechanics.",
    details: []
  },
  {
    title: "Community Variants",
    status: "Periodic",
    statusColor: "periodic",
    image: variantImg,
    description: "Experimental events with additional rules like Tiny Vintage, Two-Headed Gnome, or Pauper.",
    details: [
      "Organized via Challonge",
      "Rules vary by event"
    ]
  },
  {
    title: "Looking for Games (LFG)",
    status: "Always Available",
    statusColor: "always",
    image: lfgImg,
    description: "Sometimes you just want a game. The LFG channel exists for exactly that.",
    details: [
      "Post in #lfg channel",
      "Ping @LFG role",
      "Roles for Cockatrice & SpellTable"
    ]
  }
];