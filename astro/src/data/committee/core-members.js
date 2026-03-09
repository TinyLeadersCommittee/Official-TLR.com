/*
{
        name: "Lyon",
        discordUsername: "@Lyon",
        img: LyonImg,
        cardFrontImg: LyonBioCard.src,
        cardBackImg: LyonCustomCardFront.src,
        
        // Add this block only if they need extra cards!
        relatedCards: {
            back: LyonCustomCardBack.src,  // Flip right
            token: LyonZombieToken.src,    // Flip left
            emblem: LyonEmblem.src         // Crossfades with token on the left
        }
    }
*/

// Image Imports (Portraits for the grid buttons)
import SarahImg from '../../assets/images/committee/core-members/sarah.jpg';
import MikeImg from '../../assets/images/committee/core-members/mike.jpg';
import LyonImg from '../../assets/images/committee/core-members/lyon.jpg';

//Import Bio-cards and custom Tiny Leader cards
import SarahBioCard from '../../assets/images/committee/core-members/sarah-bio.jpg';
//import SarahCustomCard from '../../assets/images/committee/core-members/sarah-custom.jpg';

import MikeBioCard from '../../assets/images/committee/core-members/mike-bio.jpg';
import MikeCustomCard from '../../assets/images/committee/core-members/mike-custom-front.jpg';
import MikeCustomCardBack from '../../assets/images/committee/core-members/mike-custom-back.jpg';
import MikeCustomToken from '../../assets/images/committee/core-members/Data-Cache.jpg';

import LyonBioCard from '../../assets/images/committee/core-members/lyon-bio.jpg';
//import LyonCustomCard from '../../assets/images/committee/core-members/lyon-custom.png';

export const coreMembers = [
    {
        name: "Sarah",
        discordUsername: "@Sarah | Tiny Leader",
        img: SarahImg,
        imgStyle: "transform: scale(1) translateY(1px);",
        
        // The new 3D Modal Images
        cardFrontImg: SarahBioCard.src,
        //cardBackImg: SarahCustomCard.src
    },
    {
        name: "Mike",
        discordUsername: "@M1-K3",
        img: MikeImg,
        imgStyle: "transform: scale(1.70) translateY(30px);",
        
        // The new 3D Modal Images
        cardFrontImg: MikeBioCard.src,
        cardBackImg: MikeCustomCard.src,

        relatedCards: {
            back: MikeCustomCardBack.src,  // Flip right
            token: MikeCustomToken.src     // Flip left
        }
    },
    {
        name: "Lyon",
        discordUsername: "@Lyon, Spikiest Spike Apparent",
        img: LyonImg,
        imgStyle: "transform: scale(1.5) translateY(-30px);",
        
        // The new 3D Modal Images
        cardFrontImg: LyonBioCard.src,
        //cardBackImg: LyonCustomCard.src
    }
];