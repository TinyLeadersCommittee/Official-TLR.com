/* src/data/committee/contributor-config.js */

// 1. Import the specific team lists
import { discordTeam } from './discord-team.js';
import { youtubeTeam } from './youtube-team.js'; 
import { testingTeam } from './testing-team.js';

// 2. Define the Teams (These become the "Team Cards")
export const contributorTeams = [
  {
    id: "discord", // Unique ID for the JS toggle
    title: "Discord Team",
    members: discordTeam, 
    shape: "circle", 
    color: "#888888", // Gray
    description: "The moderators keeping the server safe, organized, and welcoming for everyone.",
    icon: "💬" // Simple emoji placeholder for now
  },
  {
    id: "youtube",
    title: "YouTube Team",
    members: [youtubeTeam], // Empty for now until you create the file
    shape: "circle", 
    color: "#FF0000", // YouTube Red
    description: "Editors, scriptwriters, and content creators growing the format.",
    icon: "📺"
  },
  {
    id: "testing",
    title: "Testing Team",
    members: [testingTeam], 
    shape: "circle", 
    color: "#4caf50", // Green
    description: "Dedicated grinders who break the format so we don't have to ban things later.",
    icon: "🧪"
  }
];