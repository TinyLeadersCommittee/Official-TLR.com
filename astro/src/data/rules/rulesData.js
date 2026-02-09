// src/data/rules/rulesData.js

export const keyRules = [
    { 
        label: "1v1 Play", 
        text: "Intended for one-on-one games." 
    },
    { 
        label: "3 Mana Value Restriction*", 
        text: "Every card must have a mana value of 3 or less." 
    },
    { 
        label: "Commander Requirement", 
        text: "A legendary creature or planeswalker must be designated as a commander." 
    },
    { 
        label: "Deck Size", 
        text: "Exactly 50 cards, including commander(s)." 
    },
    { 
        label: "Sideboard", 
        text: "No more than 10 cards." 
    },
    { 
        label: "Singleton Rule", 
        text: "Every card (except basic lands) must have a different English name." 
    },
    { 
        label: "Starting Life Total", 
        text: "Each player begins with 20 life." 
    }
];

export const additionalRules = [
    { 
        label: "Color Identity", 
        text: "All cards in your deck must fit within the color identity of your commander(s). Identity includes mana symbols in the cost and rules text, plus any color indicators." 
    },
    { 
        label: "Commander Tax", 
        text: "{2} for each previous time cast from the command zone." 
    },
    { 
        label: "Commander Movement", 
        text: "May move to command zone from graveyard or exile as a state-based action." 
    },
    { 
        label: "Forced Mulligan", 
        text: "With multiple commanders, draw 7 and put one on the bottom. Counts as the first mulligan." 
    },
    { 
        label: "Wish Effects", 
        text: "May only choose cards from the sideboard." 
    }
];

export const philosophyPoints = [
    { 
        title: "Metagame Diversity", 
        text: "A healthy format supports a variety of viable decks and strategies, avoiding excessive dominance by any single archetype." 
    },
    { 
        title: "Competitive Balance", 
        text: "While power levels will vary, the format should remain balanced enough that no strategy is overwhelmingly superior." 
    },
    { 
        title: "Counterplay & Interaction", 
        text: "Decks should have meaningful ways to interact with opponents, preventing non-games where one player has little agency." 
    },
    { 
        title: "Format Identity", 
        text: "Tiny Leaders: Reborn retains its unique playstyle by adhering to its structural rules and design elements, such as 3 MV or lower cards and 50-card decks, while evolving naturally over time." 
    },
    { 
        title: "Player Engagement & Enjoyment", 
        text: "The format should be fun, rewarding to play, and accessible to a broad audience, from casual to competitive players, but leaning competitively." 
    }
];