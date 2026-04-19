// src/scripts/scryfallHelper.js

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Fetches cards matching a query and strictly filters out cards 
// where any individual face has an MV > 3. Returns a sorted array of cards.
export async function getRuleOfThreeCards(query) {
    const allCards = await fetchAllScryfallCards(query);

    return allCards
        .filter(isRuleOfThreeCompliant)
        .sort((a, b) => a.name.localeCompare(b.name));
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Handles fetching, pagination, and rate-limiting from the Scryfall API.
// Returns an array containing all raw card data objects from the search.
async function fetchAllScryfallCards(query) {
    let allCards = [];
    let url = `https://api.scryfall.com/cards/search?q=${encodeURIComponent(query)}`;

    try {
        while (url) {
            const res = await fetch(url);
            if (!res.ok) break;
            
            const data = await res.json();
            allCards = allCards.concat(data.data);
            
            url = data.has_more ? data.next_page : null;
            if (url) await delay(100); 
        }
    } catch (e) {
        console.error("Scryfall fetch error:", e);
    }

    return allCards;
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Returns TRUE if every independent face/spell on the card has an MV of 3 or less
// Returns FALSE if any face exceeds an MV of 3, or if the card lacks faces.
function isRuleOfThreeCompliant(card) {
    if (!card.card_faces) return false;
    
    return card.card_faces.every(face => getManaValue(face) <= 3);
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Helper functions to determine mana value, accounting for multi-face cards 
// and various complex mana cost representations.
function getManaValue(cardOrFace) {
    return (
        cardOrFace.mana_value ??
        cardOrFace.cmc ??
        parseManaCostString(cardOrFace.mana_cost)
    );
}

function parseManaCostString(manaCostString) {
    if (!manaCostString) return 0;

    let total = 0;
    const symbols = manaCostString.match(/\{[^}]+\}/g) ?? [];

    for (const symbol of symbols) {
        const content = symbol.slice(1, -1); 
        total += getSymbolValue(content);
    }

    return total;
}

function getSymbolValue(content) {
    if (!isNaN(content)) return parseInt(content, 10);
    if (['X', 'Y', 'Z'].includes(content)) return 0;
    if (content.includes('/')) return evaluateSplitSymbol(content);
    return 1;
}

function evaluateSplitSymbol(content) {
    const parts = content.split('/');
    const num = parts.find(p => !isNaN(p));
    return num ? parseInt(num, 10) : 1;
}
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\