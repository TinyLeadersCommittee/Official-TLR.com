// A helper to respect Scryfall's rate limits (100ms between requests)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getRuleOfThreeCards(query) {
  let allCards = [];
  let url = `https://api.scryfall.com/cards/search?q=${encodeURIComponent(query)}`;

  try {
    while (url) {
      const res = await fetch(url);
      if (!res.ok) break;
      const data = await res.json();
      allCards = allCards.concat(data.data);
      
      // Pagination: If there are more pages, get the next URL
      url = data.has_more ? data.next_page : null;
      if (url) await delay(100); 
    }
  } catch (e) {
    console.error("Scryfall fetch error:", e);
  }

  // --- THE BULLETPROOF MV CALCULATOR ---
  const getFaceMV = (face) => {
    // 1. Check modern Scryfall property
    if (face.mana_value !== undefined) return face.mana_value;
    
    // 2. Check legacy Scryfall property
    if (face.cmc !== undefined) return face.cmc;
    
    // 3. Fallback: Manually count the raw "{2}{B}" string
    if (!face.mana_cost) return 0; // MDFC Lands have no mana cost string
    
    let mv = 0;
    const symbols = face.mana_cost.match(/\{[^}]+\}/g) || [];
    
    for (const sym of symbols) {
      const val = sym.replace(/[{}]/g, '');
      if (!isNaN(val)) {
        mv += parseInt(val, 10); // Generic mana like {2} or {10}
      } else if (val === 'X' || val === 'Y' || val === 'Z') {
        mv += 0; // X spells count as 0 for base MV
      } else if (val.includes('/')) {
        const parts = val.split('/');
        const num = parts.find(p => !isNaN(p));
        mv += num ? parseInt(num, 10) : 1; // e.g., {2/B} is 2, {U/B} is 1
      } else {
        mv += 1; // Standard colored mana like {W}, {U}, {C}
      }
    }
    return mv;
  };

  // The Rule of 3 Filter: Every independent face/spell must have an MV of 3 or less
  return allCards.filter(card => {
    if (!card.card_faces) return false;
    return card.card_faces.every(face => getFaceMV(face) <= 3);
  }).sort((a, b) => a.name.localeCompare(b.name));
}