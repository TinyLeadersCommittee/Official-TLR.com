const BANNED_CARDS_ARRAY = [
    "Ancestral Recall", "Balance", "Black Lotus", "Channel", "Chaos Orb", 
    "Chrome Mox", "Counterbalance", "Court of Cunning", "Deflecting Swat", 
    "Demonic Tutor", "Earthcraft", "Falling Star", "Fastbond", 
    "Fierce Guardianship", "Forth Eorlingas!", "Gaea's Cradle", 
    "Grindstone", "Hermit Druid", "High Tide", "Imperial Seal", 
    "Jeweled Lotus", "Karakas", "Library of Alexandria", 
    "Lion's Eye Diamond", "Maddening Hex", 
    "Mana Crypt", "Mana Vault", "Mind Twist", "Mishra's Workshop", 
    "Mox Amber", "Mox Diamond", "Mox Emerald", "Mox Jet", "Mox Opal", 
    "Mox Pearl", "Mox Ruby", "Mox Sapphire", "Mystical Tutor", 
    "Necropotence", "Oko, Thief of Crowns", "Price of Progress", 
    "Shahrazad", "Skullclamp", "Sol Ring", "Strip Mine", 
    "Survival of the Fittest", "Tasha's Hideous Laughter", 
    "Teferi, Time Raveler", "Thassa's Oracle", 
    "The Tabernacle at Pendrell Vale", "Time Vault", "Time Walk", 
    "Timetwister", "Tolarian Academy", "True-Name Nemesis", 
    "Umezawa's Jitte", "Vampiric Tutor", "Wheel of Fortune", 
    "White Plume Adventurer", "Yawgmoth's Will"
];

const BANNED_AS_COMPANION = [
    "Lutri, the Spellchaser"
];

const BANNED_AS_COMMANDER = [
    "Ajani, Nacatl Pariah", "Ashiok, Dream Render", 
    "Derevi, Empyrial Tactician", "Erayo, Soratami Ascendant // Erayo's Essence", 
    "Jeska, Thrice Reborn", "Ketramose, the New Dawn","Nadu, Winged Wisdom",
    "Rofellos, Llanowar Emissary", "Uro, Titan of Nature's Wrath", "Wrenn and Six"
];

const BANNED_CARDS_SET = new Set(BANNED_CARDS_ARRAY);
const BANNED_AS_COMPANION_SET = new Set(BANNED_AS_COMPANION);
const BANNED_COMMANDERS_SET = new Set(BANNED_AS_COMMANDER);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Checks if the card is banned in Tiny Leaders either due to format constraints
// or because it's on the banned list for deck construction
export function isBannedInTinyLeaders(card) {
    return (
        isBannedFromDeckConstruction(card.name) ||
        failsFormatConstraints(card)
    );
}

// Checks if the card is banned as a companion 
export function isBannedAsTinyCompanion(card) {
    return (
        isBannedAsCompanion(card.name) ||
        failsCompanionRequirements(card) ||
        isBannedInTinyLeaders(card)
    );
}

// Checks if the card is banned in Tiny Leaders either due to format constraints 
// or because it's on the banned as commander list
export function isBannedAsTinyLeader(card) {
    return (
        isBannedAsCommander(card.name) ||
        failsCommanderRequirements(card) ||
        isBannedInTinyLeaders(card)
    );
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Returns TRUE if the card doesn't meet the format constraints (problem found)
// Returns FALSE if the card meets the format constraints (no problems)
function failsFormatConstraints(card) {
    return (
        isCategoricallyIllegal(card) ||  
        isNotTiny(card)
    );
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Checks for structural issues, non-tournament cards, and mechanics banned 
// from eternal play (Catches Digital, Un-sets, Acorn, Conspiracies, Attractions, 
// Ante, Dexterity cards, etc.)
function isCategoricallyIllegal(card) {
    const vintageLegality = card.legalities?.vintage;

    return vintageLegality === "not_legal" || vintageLegality === "banned";
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//checks for mana value and rules text that would make the card illegal under 
// the "Rule of Three"
function isNotTiny(card) {
    // Multi-face card
    if (card.card_faces?.length) {
        return card.card_faces.some(face => getManaValue(face) > 3);
    }

    // Single-face card
    return getManaValue(card) > 3;
}

// Helper function to determine mana value, accounting for multi-face cards and 
// various mana cost representations
function getManaValue(cardOrFace) {
    return (
        cardOrFace.mana_value ??
        cardOrFace.cmc ??
        parseManaCostString(cardOrFace.mana_cost)
    );
}

// Parses a mana cost string (e.g., "{2}{U}{U/B}") and calculates its total 
// mana value
function parseManaCostString(manaCostString) {
    if (!manaCostString) return 0;

    let total = 0;
    const symbols = manaCostString.match(/\{[^}]+\}/g) ?? [];

    for (const symbol of symbols) {
        const content = symbol.slice(1, -1); // remove braces
        total += getSymbolValue(content);
    }

    return total;
}

// Evaluates the value of a single mana symbol, accounting for various formats
function getSymbolValue(content) {
    // 1. Generic mana (e.g., "2", "10")
    if (!isNaN(content)) {
        return parseInt(content, 10);
    }
    
    // 2. Variables (e.g., "X", "Y", "Z")
    if (['X', 'Y', 'Z'].includes(content)) {
        return 0;
    }
    
    // 3. Split / Hybrid / Twobrid / Phyrexian (e.g., "U/B", "2/W", "W/P")
    if (content.includes('/')) {
        return evaluateSplitSymbol(content);
    }
    
    // 4. Standard colored mana (e.g., "W", "C", "S")
    return 1;
}

// Evaluates split/hybrid/twobrid/phyrexian symbols by taking the highest 
// possible value
function evaluateSplitSymbol(content) {
    const parts = content.split('/');
    const num = parts.find(p => !isNaN(p));
    
    return num ? parseInt(num, 10) : 1;
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//checks for legendary status and allowed types that would make the card legal 
// as a commander
function failsCommanderRequirements(card) {
    const typeLine = card.type_line ?? "";

    const isLegendary = typeLine.includes("Legendary");

    const isAllowedType =
        typeLine.includes("Creature") ||
        typeLine.includes("Planeswalker") ||
        typeLine.includes("Vehicle") ||
        typeLine.includes("Spacecraft");

    return !(isLegendary && isAllowedType);
}

function failsCompanionRequirements(card) {
    const oracleText = card.oracle_text?.toLowerCase() ?? ""; 
    
    const isCompanion = oracleText.includes("companion —");

    return !isCompanion;
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//checks if the card is on the banned list for deck construction
function isBannedFromDeckConstruction(cardName) {
    return BANNED_CARDS_SET.has(cardName);
}

//checks if the card is on the banned list for being a companion
function isBannedAsCompanion(cardName) {
    return BANNED_AS_COMPANION_SET.has(cardName);
}

//checks if the card is on the banned list for being a commander
function isBannedAsCommander(cardName) {
    return BANNED_COMMANDERS_SET.has(cardName);
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
