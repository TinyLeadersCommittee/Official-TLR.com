// Categorized according to Design Philosophy VI: The Banlist

export const vintageRatePowerBans = [
  { name: "Ancestral Recall", set: "leb", status: "initial" },
  { name: "Balance", set: "leb", status: "initial" },
  { name: "Channel", set: "leb", status: "initial" },
  { name: "Earthcraft", set: "tmp", status: "initial" },
  { name: "Fastbond", set: "leb", status: "initial" },
  { name: "Hermit Druid", set: "sth", status: "initial" },
  { name: "Library of Alexandria", set: "arn", status: "initial" },
  { name: "Mind Twist", set: "leb", status: "initial" },
  { name: "Necropotence", set: "ice", status: "initial" },
  { name: "Skullclamp", set: "dst", status: "initial" },
  { name: "Strip Mine", set: "atq", status: "initial" },
  { name: "Time Vault", set: "leb", status: "initial" },
  { name: "Time Walk", set: "leb", status: "initial" },
  { name: "Timetwister", set: "leb", status: "initial" },
  { name: "Wheel of Fortune", set: "leb", status: "initial" },
  { name: "Yawgmoth’s Will", set: "usg", status: "initial" }
];

export const fastManaBans = [
  { name: "Black Lotus", set: "leb", status: "initial" },
  { name: "Chrome Mox", set: "mrd", status: "added" },
  { name: "Gaea’s Cradle", set: "usg", status: "added" },
  { name: "Jeweled Lotus", set: "cmr", status: "added" },
  { name: "Lion’s Eye Diamond", set: "mir", status: "added" },
  { name: "Mana Crypt", set: "phpr", status: "initial" },
  { name: "Mana Vault", set: "leb", status: "initial" },
  { name: "Mishra’s Workshop", set: "atq", status: "initial" },
  { name: "Mox Amber", set: "dom", status: "added" },
  { name: "Mox Diamond", set: "sth", status: "added" },
  { name: "Mox Emerald", set: "leb", status: "initial" },
  { name: "Mox Jet", set: "leb", status: "initial" },
  { name: "Mox Opal", set: "som", status: "added" },
  { name: "Mox Pearl", set: "leb", status: "initial" },
  { name: "Mox Ruby", set: "leb", status: "initial" },
  { name: "Mox Sapphire", set: "leb", status: "initial" },
  { name: "Sol Ring", set: "leb", status: "initial" },
  { name: "Tolarian Academy", set: "usg", status: "initial" }
];

export const tutorBans = [
  { name: "Demonic Tutor", set: "leb", status: "initial" },
  { name: "Imperial Seal", set: "ptk", status: "initial" },
  { name: "Mystical Tutor", set: "mir", status: "added" },
  { name: "Survival of the Fittest", set: "exo", status: "initial" },
  { name: "Vampiric Tutor", set: "vis", status: "initial" }
];

export const formatStructureBans = [
  { name: "Counterbalance", set: "csp", status: "initial" },
  { name: "Deflecting Swat", set: "c20", status: "added" },
  { name: "Fierce Guardianship", set: "c20", status: "added" },
  { name: "Karakas", set: "leg", status: "initial" },
  { name: "Lutri, the Spellchaser", set: "iko", status: "added" },
  { name: "Price of Progress", set: "exo", status: "added" },
  { name: "Tasha’s Hideous Laughter", set: "afr", status: "added" }
];

export const multiPlayerDesignBans = [
  { name: "Court of Cunning", set: "cmr", status: "added" },
  { name: "Forth Eorlingas!", set: "ltc", status: "added" },
  { name: "Maddening Hex", set: "afc", status: "added" },
  { name: "True-Name Nemesis", set: "c13", status: "added" },
  { name: "White Plume Adventurer", set: "clb", status: "added" }
];

export const logisticsBans = [
  { name: "Chaos Orb", set: "leb", status: "initial" },
  { name: "Falling Star", set: "leg", status: "initial" },
  { name: "Shahrazad", set: "arn", status: "initial" }
];

export const playExperienceBans = [
  { name: "Grindstone", set: "tmp", status: "initial" },  
  { name: "High Tide", set: "fem", status: "initial" },  
  { name: "Oko, Thief of Crowns", set: "eld", status: "added" },
  { name: "Teferi, Time Raveler", set: "war", status: "added" },
  { name: "Thassa’s Oracle", set: "thb", status: "added" },
  { name: "The Tabernacle at Pendrell Vale", set: "leg", status: "initial" },
  { name: "Umezawa’s Jitte", set: "bok", status: "initial" }
];

/** * COMMANDER BANS
 * Banned as Tiny Leader (Command Zone access).
 */
export const commanderBans = [
  { name: "Ajani, Nacatl Pariah", set: "mh3", status: "added" },
  { name: "Ashiok, Dream Render", set: "war", status: "added" },
  { name: "Derevi, Empyrial Tactician", set: "c13", status: "initial" },
  { name: "Erayo, Soratami Ascendant", set: "sok", status: "initial" },
  { name: "Jeska, Thrice Reborn", set: "cmr", status: "added" },
  { name: "Ketramose, the New Dawn", set: "dft", status: "added" },
  { name: "Nadu, Winged Wisdom", set: "mh3", status: "added" },
  { name: "Rofellos, Llanowar Emissary", set: "uds", status: "initial" },
  { name: "Uro, Titan of Nature’s Wrath", set: "thb", status: "added" },
  { name: "Wrenn and Six", set: "mh1", status: "added" }
];