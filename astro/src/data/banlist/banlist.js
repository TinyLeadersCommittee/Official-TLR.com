export const watchlist = [
    { 
      name: "Light-Paws, Emperor's Voice", 
      set: "neo", 
      type: "creature",
      date: "2026-01-27",
      reason: 'Placed on the Watchlist to monitor if the metagame can adapt to its speed and protection suite, or if its polarizing impact necessitates a future ban.',
      announcement: 'https://tiny-leaders-reborn.blogspot.com/2026/01/lorwyn-eclipsed-ban-watchlist.html'
    }
]

// src/data/banlist/banlist.js

export const categoryBans = [
  { 
    // COMPLEX ENTRY: Contains multiple links in one line
    parts: [
      { label: "Silver-bordered", query: "border:silver (mv<=3 or is:land)" },
      { label: ", " }, // Separator text
      { label: "Gold-bordered", query: "border:gold (mv<=3 or is:land)" },
      { label: ", or " }, // Separator text
      { label: "Acorn-stamped cards", query: "stamp:acorn (mv<=3 or is:land)" }
    ]
  },
  { 
    label: "Cards with the card type Conspiracy", 
    query: "type:conspiracy (mv<=3 or is:land)" 
  },
  { 
    label: "Racially or culturally offensive cards", 
    // Wrapped in parens to ensure the OR logic works with the MV check
    query: "(!Clebnse or !Crusade or !Imprison or !\"Invoke Prejudice\" or !Jihad or !\"Pradesh Gypsies\" or !\"Stone-Throwing Devils\") (mv<=3 or is:land)" 
  },
  { 
    label: "Cards that reference playing for ante", 
    query: "o:\"playing for ante\" (mv<=3 or is:land)" 
  },
  { 
    label: "Cards that bring stickers or attractions into the game", 
    query: "(oracle:sticker or type:attraction) (mv<=3 or is:land)" 
  }
];

export const commanderBans = [
  { 
    name: "Ajani, Nacatl Pariah", set: "mh3", type: "planeswalker", date: "2024-11-15",
    reason: 'Banned as a Leader for efficient snowballing. He offers guaranteed, low-mana access to bodies, removal, and damage that takes over the game before opponents can stabilize.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2024/11/banlist-update-november-15-2024.html' 
  },
  { 
    name: "Ashiok, Dream Render", set: "war", type: "planeswalker", date: "2021-07-23",
    reason: 'Banned for oppressive denial. Guaranteed access to a one-sided search ban shuts down fetch lands and tutors, while the graveyard hate incidentally invalidates entire strategies for just 3 mana.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/07/tlr-ban-list-and-rules-update.html' 
  },
  { name: "Derevi, Imperial Tactician", set: "c13", type: "creature", date: "2018-00-00", 
    reason: 'Banned for bypassing Commander Tax. Her ability to return instantly for a fixed cost creates a persistent engine of mana advantage and tap-down effects.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { name: "Erayo, Soratami Ascendant", set: "sok", type: "creature", date: "2018-00-00", 
    reason: 'Banned for ease of execution. In a format defined by cheap spells, flipping her is too reliable, allowing players to establish a game-ending lock with minimal effort.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Jeska, Thrice Reborn", set: "cmr", type: "planeswalker", date: "2024-01-01",
    reason: 'Banned for effortless burst damage. Her ability to triple damage output scales inevitably throughout the game, allowing for sudden kills with minimal board commitment.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2024/01/ban-list-update-january-1-2024.html' 
  },
  { 
    name: "Ketramose, the New Dawn", set: "dft", type: "creature", date: "2025-09-01",
    reason: 'Banned for doing too much. Combining powerful card draw and interaction with an indestructible, lifelinking body creates a Commander that is virtually impossible to race or grind out.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2025/09/marvels-spider-man-format-update-ban.html' 
  },
  { 
    name: "Nadu, Winged Wisdom", set: "mh3", type: "creature", date: "2024-08-02",
    reason: 'Banned for explosive, self-sustaining loops. Nadu turns cheap targeting effects into a massive engine of card draw and ramp that buries opponents in a single turn.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2024/08/banlist-update-august-2-2024.html' 
  },
  { name: "Rofellos, Llanowar Emissary", set: "uds", type: "creature", date: "2018-00-00", 
    reason: 'Banned for extreme acceleration. Having a mana doubler in the Command Zone trivializes costs, allowing you to power out game-ending threats while opponents are still developing.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Uro, Titan of Nature’s Wrath", set: "thb", type: "creature", date: "2021-07-01",
    reason: 'Banned for inevitable value. Uro stabilizes the game with life gain while ramping and drawing cards, creating a recurring engine that grinds every other strategy to dust.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/07/tlr-ban-list-and-rules-update.html' 
  },
  { 
    name: "Wrenn and Six", set: "mh1", type: "planeswalker", date: "2021-07-01",
    reason: 'Banned for complete board control. It stabilizes your mana, kills small creatures, and enables a recursive Wasteland lock that prevents opponents from playing Magic.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/07/tlr-ban-list-and-rules-update.html' 
  }
];

export const cardBans = [
  { 
    name: "Ancestral Recall", set: "leb", type: "instant", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Black Lotus", set: "leb", type: "artifact", date: "2018-00-00",
    reason: 'Banned for breaking the format\'s pacing. Fast mana allows players to skip the early game entirely, turning opening hands into explosive, non-interactive wins.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Balance", set: "leb", type: "sorcery", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Channel", set: "leb", type: "sorcery", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Chaos Orb", set: "leb", type: "artifact", date: "2018-00-00",
    reason: 'Banned for requiring manual dexterity. Physical coordination creates accessibility barriers and shouldn\'t determine the winner of a strategy game.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Chrome Mox", set: "mrd", type: "artifact", date: "2018-02-26",
    reason: 'Banned to eliminate undesirable early-game variance and prevent Commanders from providing immediate, disproportionate card advantage too early in the match.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2022/01/02262018-ban-list-update.html' 
  },
  { 
    name: "Counterbalance", set: "csp", type: "enchantment", date: "2018-00-00",
    reason: 'Banned for exploiting the mana curve. With every legal card costing 3 or less, blind flips become oppressively consistent, effectively countering spells for free.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Court of Cunning", set: "cmr", type: "enchantment", date: "2021-09-01",
    reason: 'Banned for being an engine that provides both card advantage (Monarch) and an inevitable mill win condition.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/09/ban-list-update.html' 
  },
  { 
    name: "Deflecting Swat", set: "c20", type: "instant", date: "2021-09-01",
    reason: 'Banned because it\'s free interaction that is virtually always "on" due to the low-cost nature of Commanders in this format.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/09/ban-list-update.html' 
  },
  { 
    name: "Demonic Tutor", set: "leb", type: "sorcery", date: "2018-00-00",
    reason: 'Banned for undermining singleton variance. Cheap, unconditional tutors make decks too consistent, turning unique games into repetitive, predictable patterns.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { name: "Earthcraft", set: "tmp", type: "enchantment", date: "2018-00-00", 
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Falling Star", set: "leg", type: "sorcery", date: "2018-00-00",
    reason: 'Banned for requiring manual dexterity. Physical coordination creates accessibility barriers and shouldn\'t determine the winner of a strategy game.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Fastbond", set: "leb", type: "enchantment", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Fierce Guardianship", set: "c20", type: "instant", date: "2021-09-01",
    reason: 'Banned because it\'s free interaction that is virtually always "on" due to the low-cost nature of Commanders in this format.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/09/ban-list-update.html' 
  },
  { 
    name: "Forth Eorlingas!", set: "ltc", type: "sorcery", date: "2024-11-15",
    reason: 'Banned due to its excessive efficiency and the historically oppressive nature of the Monarch ability in a 1v1 setting.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2024/11/banlist-update-november-15-2024.html' 
  },
  { 
    name: "Gaea’s Cradle", set: "usg", type: "land", date: "2018-01-15",
    reason: 'Banned to lower the raw power ceiling of creature-combo decks while encouraging more balanced alternatives like Nykthos or Growing Rites of Itlimoc.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2022/01/011518-ban-list-update.html' 
  },
  { name: "Grindstone", set: "tmp", type: "artifact", date: "2018-00-00", 
    reason: 'Banned for raw efficiency. Whether through specific interactions or sheer value, these cards create an insurmountable advantage that forces every deck to look the same just to compete.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { name: "Hermit Druid", set: "sth", type: "creature", date: "2018-00-00", 
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { name: "High Tide", set: "fem", type: "instant", date: "2018-00-00", 
    reason: 'Banned for raw efficiency. Whether through specific interactions or sheer value, these cards create an insurmountable advantage that forces every deck to look the same just to compete.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Imperial Seal", set: "ptk", type: "sorcery", date: "2018-00-00",
    reason: 'Banned for undermining singleton variance. Cheap, unconditional tutors make decks too consistent, turning unique games into repetitive, predictable patterns.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Jeweled Lotus", set: "cmr", type: "artifact", date: "2021-07-01",
    reason: 'Banned for providing an immediate and disproportionate tempo advantage that outclasses all other deck starts.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/07/tlr-ban-list-and-rules-update.html' 
  },
  { 
    name: "Karakas", set: "leg", type: "land", date: "2018-00-00",
    reason: 'Banned for invalidating the Command Zone. Since every deck relies on a Commander, this land offers a repeatable, hard-to-interact-with bounce effect that punishes players simply for playing the game.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Library of Alexandria", set: "arn", type: "land", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Lion’s Eye Diamond", set: "mir", type: "artifact", date: "2021-09-01",
    reason: 'Powerful fast mana that circumvents the previous bans on Mox Diamond and Chrome Mox.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/09/ban-list-update.html' 
  },
  { 
    name: "Lutri, the Spellchaser", set: "iko", type: "creature", date: "2025-08-01",
    reason: 'Banned for zero opportunity cost. In a singleton format, the companion condition is free, granting an automatic 8th card that doubles as a lethal late-game finisher with minimal setup.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2025/08/edge-of-eternities-format-update-ban.html' 
  },
  { 
    name: "Maddening Hex", set: "afc", type: "enchantment", date: "2021-09-01",
    reason: 'Banned due to being a high-variance, high-impact damage designed for multiplayer that is too punishing in a 1v1 setting.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/09/ban-list-update.html' 
  },
  { 
    name: "Mana Crypt", set: "phpr", type: "artifact", date: "2018-00-00",
    reason: 'Banned for breaking the format\'s pacing. Fast mana allows players to skip the early game entirely, turning opening hands into explosive, non-interactive wins.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Mana Vault", set: "leb", type: "artifact", date: "2018-00-00",
    reason: 'Banned for breaking the format\'s pacing. Fast mana allows players to skip the early game entirely, turning opening hands into explosive, non-interactive wins.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { name: "Mind Twist", set: "leb", type: "sorcery", date: "2018-00-00", 
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Mishra’s Workshop", set: "atq", type: "land", date: "2018-00-00",
    reason: 'Banned for breaking the format\'s pacing. Fast mana allows players to skip the early game entirely, turning opening hands into explosive, non-interactive wins.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Mox Amber", set: "dom", type: "artifact", date: "2021-09-01",
    reason: 'Powerful fast mana that circumvents the previous bans on Mox Diamond and Chrome Mox.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/09/ban-list-update.html' 
  },
  { 
    name: "Mox Diamond", set: "sth", type: "artifact", date: "2018-02-26",
    reason: 'Banned to eliminate undesirable early-game variance and prevent Commanders from providing immediate, disproportionate card advantage too early in the match.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2022/01/02262018-ban-list-update.html' 
  },
  { 
    name: "Mox Emerald", set: "leb", type: "artifact", date: "2018-00-00",
    reason: 'Banned for breaking the format\'s pacing. Fast mana allows players to skip the early game entirely, turning opening hands into explosive, non-interactive wins.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Mox Jet", set: "leb", type: "artifact", date: "2018-00-00",
    reason: 'Banned for breaking the format\'s pacing. Fast mana allows players to skip the early game entirely, turning opening hands into explosive, non-interactive wins.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Mox Opal", set: "som", type: "artifact", date: "2021-09-01",
    reason: 'Powerful fast mana that circumvents the previous bans on Mox Diamond and Chrome Mox.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/09/ban-list-update.html' 
  },
  { 
    name: "Mox Pearl", set: "leb", type: "artifact", date: "2018-00-00",
    reason: 'Banned for breaking the format\'s pacing. Fast mana allows players to skip the early game entirely, turning opening hands into explosive, non-interactive wins.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Mox Ruby", set: "leb", type: "artifact", date: "2018-00-00",
    reason: 'Banned for breaking the format\'s pacing. Fast mana allows players to skip the early game entirely, turning opening hands into explosive, non-interactive wins.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Mox Sapphire", set: "leb", type: "artifact", date: "2018-00-00",
    reason: 'Banned for breaking the format\'s pacing. Fast mana allows players to skip the early game entirely, turning opening hands into explosive, non-interactive wins.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Mystical Tutor", set: "mir", type: "instant", date: "2022-01-01",
    reason: 'Banned for providing unrestricted instant-speed access to any instant or sorcery for a single mana.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2022/01/tlr-website-announcement-and-ban-list.html' 
  },
  { name: "Necropotence", set: "ice", type: "enchantment", date: "2018-00-00", 
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Oko, Thief of Crowns", set: "eld", type: "planeswalker", date: "2021-07-01",
    reason: 'Banned for having an overwhelming power level and loyalty-to-cost ratio.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/07/tlr-ban-list-and-rules-update.html' 
  },
  { 
    name: "Price of Progress", set: "exo", type: "instant", date: "2022-03-01",
    reason: 'Banned for excessive damage efficiency. Exploiting non-basic mana bases, it routinely deals 8–12 damage for two mana, serving as an instant-speed finisher that is impossible to race.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2022/03/tlr-ban-list-and-rules-update.html' 
  },
  { 
    name: "Shahrazad", set: "arn", type: "sorcery", date: "2018-00-00",
    reason: 'Banned for logistical nightmares. Sub-games destroy tournament pacing and create tracking issues that grind the match to a halt.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Skullclamp", set: "dst", type: "artifact", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Sol Ring", set: "leb", type: "artifact", date: "2018-00-00",
    reason: 'Banned for breaking the format\'s pacing. Fast mana allows players to skip the early game entirely, turning opening hands into explosive, non-interactive wins.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Strip Mine", set: "atq", type: "land", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Survival of the Fittest", set: "exo", type: "enchantment", date: "2018-00-00",
    reason: 'Banned for undermining singleton variance. Cheap, unconditional tutors make decks too consistent, turning unique games into repetitive, predictable patterns.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Tasha’s Hideous Laughter", set: "afr", type: "sorcery", date: "2021-07-01",
    reason: 'Banned for disproportionate lethality. The combination of 50-card decks and a low mana curve transforms this from a utility spell into a one-card win condition that mill strategies were never meant to have.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/07/tlr-ban-list-and-rules-update.html' 
  },
  { 
    name: "Teferi, Time Raveler", set: "war", type: "planeswalker", date: "2022-01-01",
    reason: 'Banned for being an oppressive "must-answer" threat that simplifies the game too much for the controller while locking the opponent out of instant-speed play.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2022/01/tlr-website-announcement-and-ban-list.html' 
  },
  { 
    name: "Thassa’s Oracle", set: "thb", type: "creature", date: "2021-07-01",
    reason: 'Banned due to being a high-efficiency combo piece that is too easy to enable in a 50-card format with powerful tutors.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2021/07/tlr-ban-list-and-rules-update.html' 
  },
  { name: "The Tabernacle at Pendrell Vale", set: "leg", type: "land", date: "2018-00-00", 
    reason: 'Banned for raw efficiency. Whether through specific interactions or sheer value, these cards create an insurmountable advantage that forces every deck to look the same just to compete.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Time Vault", set: "leb", type: "artifact", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Time Walk", set: "leb", type: "sorcery", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Timetwister", set: "leb", type: "sorcery", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Tolarian Academy", set: "usg", type: "land", date: "2018-00-00",
    reason: 'Banned for breaking the format\'s pacing. Fast mana allows players to skip the early game entirely, turning opening hands into explosive, non-interactive wins.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "True-Name Nemesis", set: "c13", type: "creature", date: "2018-01-15",
    reason: 'Too difficult to manage within the $CMC \le 3$ constraints of the format, especially with new tribal power-creep from Ixalan.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2022/01/011518-ban-list-update.html' 
  },
  { name: "Umezawa’s Jitte", set: "bok", type: "artifact", date: "2018-00-00", 
    reason: 'Banned for raw efficiency. Whether through specific interactions or sheer value, these cards create an insurmountable advantage that forces every deck to look the same just to compete.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Vampiric Tutor", set: "vis", type: "instant", date: "2018-00-00",
    reason: 'Banned for undermining singleton variance. Cheap, unconditional tutors make decks too consistent, turning unique games into repetitive, predictable patterns.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "Wheel of Fortune", set: "leb", type: "sorcery", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  },
  { 
    name: "White Plume Adventurer", set: "clb", type: "creature", date: "2025-02-14",
    reason: 'Banned because the Initiative mechanic provides overwhelming, compounding value for a 3-mana investment, especially when deployed early.', 
    announcement: 'https://tiny-leaders-reborn.blogspot.com/2025/02/banlist-update-february-14-2025.html' 
  },
  { 
    name: "Yawgmoth’s Will", set: "usg", type: "sorcery", date: "2018-00-00",
    reason: 'Banned to set a clear power ceiling. It’s an efficiency outlier that forces the rest of the format to warp around it, killing diversity.', 
    announcement: 'Included on the Initial Banned List' 
  }
];