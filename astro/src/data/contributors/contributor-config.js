// src/data/committee/contributor-config.js

import { discordTeam } from './discord-team.js';
import { youtubeTeam } from './youtube-team.js'; 
import { testingTeam } from './testing-team.js';
import testingImg from '../../assets/images/about/teamPennant.jpg'; // Ensure this path is correct!

// FIX #2: Added exact Brand Colors (fill="#5865F2" and fill="#FF0000")
const discordSvg = `<svg viewBox="0 0 24 24" fill="#5865F2"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>`;
const youtubeSvg = `<svg viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C.001 8.07 0 12 0 12s.001 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C23.999 15.93 24 12 24 12s-.001-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;

export const contributorTeams = [
  {
    id: "discord", 
    title: "Discord Team",
    members: discordTeam, 
    shape: "none", // FIX #1: Removed the Nonagon frame for the folder!
    color: "#5865F2", 
    description: "The moderators keeping the server safe, organized, and welcoming for everyone.",
    iconHtml: discordSvg 
  },
  {
    id: "youtube",
    title: "YouTube Team",
    members: youtubeTeam, 
    shape: "none", // FIX #1: Removed the Nonagon frame for the folder!
    color: "#FF0000", 
    description: "Editors, scriptwriters, and content creators growing the format.",
    iconHtml: youtubeSvg 
  },
  {
    id: "testing",
    title: "Testing Team",
    members: testingTeam, 
    shape: "pentagon", 
    color: "#e91e63", 
    description: "Dedicated grinders who break the format.",
    img: testingImg 
  }
];