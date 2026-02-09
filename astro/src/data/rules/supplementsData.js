// src/data/rules/supplementsData.js

export const officialDocs = [
  {
    acronym: "TSMCR",
    title: "Comprehensive Rules",
    // Link to the Preamble we created in the tsmcr folder
    viewLink: "/rules/tsmcr/00_preamble", 
    downloadLink: "/docs/TSMCR_Supplement.pdf"
  },
  {
    acronym: "TSMTR",
    title: "Tournament Rules",
    // Link to the Preamble we created in the tsmtr folder
    viewLink: "/rules/tsmtr/00_preamble",
    downloadLink: "/docs/TSMTR_Supplement.pdf"
  }
];

export const philosophyUpdate = {
  date: "September 24, 2025",
  blocks: [
    {
      title: "The Result",
      text: "A card is said to have multiple sets of characteristics if it has " +
            "more than one of each of the following:",
      list: ["Name", "Mana Cost", "Type Line", "Rules Text"],
      ruling: "In TL:R: Every set of characteristics on a card must have a " +
              "mana value ≤ 3. If a card has multiple sets of characteristics " +
              "that may be chosen for casting, each set must independently " +
              "meet this limit."
    },
    {
      title: "The Logic",
      text: "From a design perspective, cards with more than one set of " +
            "characteristics are multiple cards sharing one piece of " +
            "cardboard. Every card must have a mana value ≤ 3 as determined " +
            "by each distinct set of characteristics."
    }
  ]
};

export const faqSections = [
  {
    header: "General Legality & Construction",
    items: [
      {
        q: "Can I use digital-only or Alchemy cards?",
        a: "No. TLR is a paper format. All cards use their Oracle text found on Gatherer."
      },
      {
        q: "Can I change my Commander between games/matches?",
        a: "No. Your configuration is locked at the start of the event. You can swap cards between your 49 and sideboard, but the Commander(s) never change."
      },
      {
        q: "How many colors can I play?",
        a: "There is no limit aside from your Commander's identity. If you find a legal 5-color Commander, you can play 5 colors."
      },
      {
        q: "How do I determine Color Identity?",
        a: "Identity includes all colors in the Mana Cost, Rules Text, and Color Indicators. For double-faced cards, always check the back side (except for Meld cards)."
      },
      {
        q: "Can I use a Companion?",
        a: "Yes. Your companion and your deck/commander(s) must all meet the Companion's restrictions and the TSMCR."
      }
    ]
  },
  {
    header: "Card Evaluation (The Rule of 3)",
    items: [
      {
        q: "Can I use cards with X in the casting cost?",
        a: "Yes. We look at the mana value with X=0. If the card has MV 3 or less with X=0, it is legal."
      },
      {
        q: "Can I use Split Cards (such as Fire//Ice)?",
        a: "<strong>Discrete Philosophy Check:</strong> Split cards are evaluated by checking each half independently. All halves must have a mana value of 3 or less for the card to be legal."
      },
      {
        q: "Can I use Adventure cards?",
        a: "<strong>Discrete Philosophy Check:</strong> Every part of the card must be MV 3 or less. You must check the creature AND the Adventure spell. If either part is MV 4+, the entire card is illegal."
      },
      {
        q: "How do I determine Mana Value of MDFCs?",
        a: "<strong>Discrete Philosophy Check:</strong> For Modal Double-Faced Cards, both sides must, independent of the other, meet the MV 3 restriction and the color identity of your Commander(s)."
      },
      {
        q: "How do I know if a meld card is legal?",
        a: "We only look at the front face. The back is ignored when considering Mana Value, Color Identity, or other restrictions."
      },
      {
        q: "How do I know if I can use a flip card?",
        a: "We only look at the 'default' (unflipped) characteristics. The flipped state is ignored for legality."
      }
    ]
  },
  {
    header: "Commander Mechanics & Game Start",
    items: [
      {
        q: "How does Partner / Background work?",
        a: "As long as both cards meet deckbuilding restrictions, you can use them. If you play with more than one commander, you start the game with a forced mulligan."
      },
      {
        q: "Does having multiple Commanders affect my hand?",
        a: "Yes. If you have more than one, you take a forced mulligan at the start of the game."
      },
      {
        q: "How does the forced mulligan work?",
        a: "Draw an opening seven, then put one on the bottom of your library. This counts as your first mulligan."
      },
      {
        q: "Can I use Serum Powder on the forced mulligan?",
        a: "No. Since the first mulligan is forced and involves no choice, Serum Powder cannot replace it. It can apply to future mulligans."
      }
    ]
  },
  {
    header: "Specific Interactions",
    items: [
      {
        q: "How does Urza's Bauble work?",
        a: "Looking at a card is a one-sided reveal. Your hand remains your hand. In a physical game, looking at a card with an opponent is essentially looking at it together."
      }
    ]
  }
];

export const authorProfile = {
  name: "Gray",
  credentials: "Rules Manager • Level 2 Judge",
  discordLink: "https://discord.gg/tiny-leaders",
  bio: [
    "<strong>Gray</strong> is a Level 2 Magic Judge and the TLR " +
    "Committee’s Rules Manager, responsible for authoring and maintaining " +
    "Tiny Leaders: Reborn’s supplemental rules. His work is focused on " +
    "clarity, internal consistency, and ensuring that the format remains " +
    "aligned with Magic’s comprehensive rules and tournament policy.",
    
    "Gray’s involvement with Magic judging began at the Eldritch Moon " +
    "prerelease, an experience that shaped his early relationship with the " +
    "game and ultimately led to formal judge certification. Since then, he " +
    "has supported events across multiple levels of play, contributed to " +
    "judge stewardship, and continued to deepen his expertise in both " +
    "general and format-specific rules.",
    
    "In addition to his work with TLR, Gray has consulted with the " +
    "Commander Sealed team, a grassroots charity event focused on " +
    "LGBTQIA plus empowerment. In early 2022, he served on the Monarch " +
    "consulting team, contributing to the development of one of the " +
    "earliest cEDH tournament policy documents, and contributes to the " +
    "MSMTR writer team.",
    
    "Guided by a commitment to clear expectations and fair play, Gray " +
    "approaches rules writing with the goal of supporting players, " +
    "organizers, and the communities that form around the game."
  ]
};