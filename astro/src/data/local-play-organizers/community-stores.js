/* src/data/local-play-organizers/community-stores.js */
import moxLogo from '../../assets/images/gameStores/moxBadgeLogo.webp';
import hareruyaLogo from '../../assets/images/gameStores/hareruyaRed.jpg';
import patriotLogo from '../../assets/images/gameStores/patriotGamesLogo.png';
import defaultLogo from '../../assets/images/gameStores/obscuraStorefront.jpg'; // Your fallback!

export const communityStores = [
  {
    name: "Mox Boarding House",
    location: "Seattle, WA, USA",
    frequency: "Occasional events",
    website: "https://www.moxboardinghouse.com/",
    image: moxLogo
  },
  {
    name: "Hareruya Tournament Center",
    location: "Tokyo, Japan",
    frequency: "Community reported",
    website: "https://www.hareruyamtg.com/en/",
    image: hareruyaLogo,
    bgColor: "#e3000f"
  },
  {
    name: "Patriot Games",
    location: "Sheffield, UK",
    frequency: "Weekly",
    website: "https://patriotgames.uk/",
    image: patriotLogo,
    bgColor: "#ffffff"
  }
];