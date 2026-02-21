/*
    {
        role: "Core Member",
        name: "",
        discordUsername: "",
        focusedContribution: ``,
        region: "",
        bio: ``,
        petDeck: ``,
        faveCard: ``,
        // --- MTG CUSTOMIZATION (Optional) ---
        faveCardImg: ``, // String URL (e.g., a Scryfall image link)
        mtgMana: ``,     // e.g., "{1}{W}{U}"
        mtgType: ``,     // e.g., "Legendary Creature — Core Member"
        mtgPT: ``        // e.g., "2 / 2" (or set to false to hide the box)
    }
*/
// Image Imports
import SarahImg from '../../assets/images/committee/core-members/sarah.jpg';
import MikeImg from '../../assets/images/committee/core-members/mike.jpg';
import LyonImg from '../../assets/images/committee/core-members/lyon.jpg';
//

/* export const coreMembers = [
    {
        role: "Core Member",
        name: "Sarah",
        discordUsername: "@Sarah | Tiny Leader",
        focusedContribution: "Rules and Policy; Admin of the TLR Discord Server",
        region: "Los Angeles, CA, USA",
        bio: "",
        petDeck: "",
        faveCard: "",
        img: SarahImg,
        imgStyle: "transform: scale(1) translateY(1px);"
    },

    {
        role: "Core Member",
        name: "Mike",
        discordUsername: "@M1-K3",
        focusedContribution: "Blogspot Maintenance; T.O. of the SCT and Titans Tournaments",
        region: "Los Angeles, CA, USA",
        bio: `I started playing MTG off and on since 1997, but fairly consistently 
        since 2013. Lover of affinity I tried to play robots in every format I could 
        which included Modern, Legacy, Vintage, and Pauper.`,
        petDeck: `In 2015 when I began my journey with Tiny there was one deck 
        that I wanted to play the most which I still play and that's Geist of 
        Saint Traft. “I dance to one song and one song only.`,
        faveCard: `My favorite card in Tiny, surprise, surprise. . . is Geist 
        of Saint Traft. I just love that GoST!`,
        img: MikeImg,
        imgStyle: "transform: scale(1.70) translateY(30px);",
        faveCardImg: "https://cards.scryfall.io/normal/front/0/b/0ba5dd1a-6906-4b45-bbf7-2f10cb955083.jpg", 
        mtgMana: "{1}{W}{U}",
        mtgType: "Legendary Creature — Core Member Spirit",
        mtgPT: "2 / 2"
    },

    {
        role: "Core Member",
        name: "Lyon",
        discordUsername: "@Lyon, Spikiest Spike Apparent",
        focusedContribution: "Ban List Testing",
        region: "Classified",
        bio: `I joined Tiny at the behest of a friend. Since then, I've become 
        a member of the group that makes ban decisions. So, if a card you love 
        gets banned, blame me for it. I started about M12 and mostly play CEDH.`,
        petDeck: "My pet deck is Dack Fayden. I built Najeela and Ghyrson Starn",
        faveCard: `My favorite card, to name one of many: Nissa, Vital Force. I 
        loved her in Standard and she remains a pet card in Commander and Cube 
        to this day.`,
        img: LyonImg,
        imgStyle: "transform: scale(1.5) translateY(-30px);"
    }
] */

export const coreMembers = [
    {
        name: "Sarah",
        discordUsername: "@Sarah | Tiny Leader",
        mtgMana: "{1}{W}{B}", // Admin/Rules energy (Orzhov)
        mtgType: "Legendary Creature — Human Advisor",
        hailsFrom: "Los Angeles, CA",
        knownFor: "Safeguarding the laws of the format and the peace of the digital realm.",
        faveCard: "Thalia, Guardian of Thraben",
        faveCardImg: "https://cards.scryfall.io/normal/front/c/9/c9f8b8fb-1cd8-450e-a1fe-892e7a323479.jpg", 
        petDeck: "Death & Taxes",
        sinceYear: "2014",
        bio: "Order is not a suggestion; it is the foundation of the game.",
        mtgPT: "2 / 1",
        img: SarahImg,
        imgStyle: "transform: scale(1) translateY(1px);"
    },

    {
        name: "Mike",
        discordUsername: "@M1-K3",
        mtgMana: "{1}{W}{U}", // Azorius / Spirits flavor
        mtgType: "Legendary Creature — Human Wizard",
        hailsFrom: "Los Angeles, CA",
        knownFor: "Registering robots in every format possible and curating the grand archives.",
        faveCard: "Geist of Saint Traft",
        faveCardImg: "https://cards.scryfall.io/normal/front/0/b/0ba5dd1a-6906-4b45-bbf7-2f10cb955083.jpg", 
        petDeck: "Geist of Saint Traft",
        sinceYear: "1997",
        bio: "I dance to one song and one song only.",
        mtgPT: "2 / 2",
        img: MikeImg,
        imgStyle: "transform: scale(1.70) translateY(30px);"
    },

    {
        name: "Lyon",
        discordUsername: "@Lyon, Spikiest Spike Apparent",
        mtgMana: "{U}{B}{R}", // Grixis Spiky energy
        mtgType: "Legendary Creature — Human Spellshaper",
        hailsFrom: "Classified",
        knownFor: "Weighing the balance of power and deciding the fate of forbidden spells.",
        faveCard: "Nissa, Vital Force",
        faveCardImg: "https://cards.scryfall.io/normal/front/b/b/bbaaa98a-ec40-4ff1-8762-a719cf1c475d.jpg", 
        petDeck: "Dack Fayden",
        sinceYear: "2011",
        bio: "If a card you love is lost to the void, know that I was the one who cast the vote.",
        mtgPT: "3 / 1",
        img: LyonImg,
        imgStyle: "transform: scale(1.5) translateY(-30px);"
    }
];