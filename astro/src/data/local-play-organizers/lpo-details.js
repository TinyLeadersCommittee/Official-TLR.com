/*
    {
        role: "Local Play Organizer",
        name: "",
        discordUsername: "",
        location: ``,
        details: ``,
        image: ``, // String URL (e.g., a profile picture)
        bgImage: ``, // String URL (e.g., a favorite card image)
        places: [
            {
                place: ``,
                location: ``,
                frequency: ``,
                website: ``
            }
        ]
            
    }
*/

import joePfp from '../../assets/images/lpo/esior.jpg';
import joeFavCard from '../../assets/images/lpo/acererak.jpg';
import juanPfp from '../../assets/images/lpo/otterPenguin.jpg';
import juanFavCard from '../../assets/images/lpo/doctorWho.jpg';
import nathanPfp from '../../assets/images/lpo/ashiokDream.jpg';
import nathanFavCard from '../../assets/images/lpo/frayingSanity.jpg';
import lucasPfp from '../../assets/images/lpo/tezzeret.jpg';
import lucasFavCard from '../../assets/images/lpo/tifa.jpg';
import rorroPfp from '../../assets/images/lpo/chevill.jpg';
import rorroFavCard from '../../assets/images/lpo/sarulf.jpg';

export const lpoDetails = [
    {
        role: "Consultant & LPO",
        name: "Joe",
        discordUsername: "@Laglaunt",
        location: `Northern California, USA`,
        details: `Organizes regional events and coordinates with local shops`,
        image: joePfp,
        bgImage: joeFavCard,
        places: [
            {
                place: `Sword & Board Games`,
                location: `Ukiah, CA, USA`,
                frequency: `Monthly`,
                website: `https://swordandboard.net/`
            }
        ]
    },

     {
        role: "Local Play Organizer",
        name: "Nushio",
        discordUsername: "@nushio",
        location: "Monterrey, Nuevo León, México",
        details: `Unanse a jugar Tiny Leaders: Reborn`,
        image: juanPfp,
        bgImage: juanFavCard,
        places: [
            {
                place: `Goblin Depot`,
                location: `Monterrey, Nuevo León, México`,
                frequency: `Segundo Sábado del mes`,
                website: `https://goblindepot.com/`
            },
             {
                place: `Lion's Dice`,
                location: `Monterrey, Nuevo León, México`,
                frequency: `Último Sábado del mes`,
                website: `https://www.facebook.com/profile.php?id=61567241976689`
            }
        ]
            
    },

    {
        role: "Local Play Organizer",
        name: "Nathan",
        discordUsername: "@vvhizard",
        location: `Huntsville, Alabama, USA`,
        details: `Sunday TLR Locals! We have a proxy-friendly community of Tiny 
        Leaders players, and we're always looking for more people to share the 
        format with!`,
        image: nathanPfp,
        bgImage: nathanFavCard,
        places: [
            {
                place: `JC's House of Cards`,
                location: `7425 Hwy 72 W, Madison, AL 35758, USA`,
                frequency: `Every Sunday at 12:00 PM CST`,
                website: `https://www.facebook.com/Jcshouseofcards`
            }
        ]
    },

    {
        role: "Local Play Organizer",
        name: "Lucas",
        discordUsername: "@Xaggaroth",
        location: `Grand Falls-Windsor, Newfoundland, CAN`,
        details: `All are welcome to come to the exploits lanes alley to 
        participate in tiny leaders tournaments and casual nights! Lots of 
        people to help with the format and deck building!`,
        image: lucasPfp,
        bgImage: lucasFavCard,
        places: [
            {
                place: `Exploits Lanes`,
                location: `20 Lincoln Rd, Grand Falls-Windsor, NL, CAN`,
                frequency: `Fridays/Saturdays. Tournaments being held once a month!`,
                website: `https://www.facebook.com/share/1At2ZYRFXD/`
            }
        ]
    },

    {
        role: "Local Play Organizer",
        name: "El Rorro",
        discordUsername: "@rorrostark",
        location: `Coquimbo, CHL`,
        details: `Si estás en Coquimbo, Chile, no dudes en pasar por Apolo Store Tcg
        para jugar Tiny Leaders. Organizamos eventos anuales y siempre estamos
        abiertos a nuevos jugadores.`,
        image: rorroPfp,
        bgImage: rorroFavCard,
        places: [
            {
                place: `Apolo Store Tcg`,
                location: `Coquimbo, CHL`,
                frequency: `Anual`,
                website: `https://www.facebook.com/p/Apolo-Store-Tcg-100063972696377/`
            }
        ]
    }
]