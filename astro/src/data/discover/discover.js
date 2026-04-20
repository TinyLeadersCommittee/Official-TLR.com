// src/data/discover.js

/* --- 1. IMAGE IMPORTS --- */
import rulesArt from '../../assets/images/discover/pedanticLearning.jpg';
import communityArt from '../../assets/images/discover/lootExuberantExplorer.jpg';
import banlistArt from '../../assets/images/discover/hardlightContainment.jpg';
import feedArt from '../../assets/images/discover/itThatHeraldsTheEnd.jpg';
import designArt from '../../assets/images/discover/strategicPlanning.jpg';
import aboutArt from '../../assets/images/discover/rekiHistoryOfKamigawa.jpg';

import discordBg from '../../assets/images/discover/tinybonesJoinsUp.jpg';
import youtubeArt from '../../assets/images/discover/hauntedScreen.jpg';
import blueskyArt from '../../assets/images/discover/butterfly.jpg';

/* --- 2. THE EXPLORE GRID --- */
export const exploreCards = [
  { 
    title: "Rules", 
    desc: "Master the Rule of 3 and core mechanics.", 
    action: "Read the Rules &rarr;", 
    url: "/rules/overview", 
    img: rulesArt,
    bgPos: 'center top 20%' 
  },
  { 
    title: "Banlist", 
    desc: "Check the current bans and watchlist.", 
    action: "View Banlist &rarr;", 
    url: "/banlist", 
    img: banlistArt,
    bgPos: 'center top 20%' 
  },
  { 
    title: "Design", 
    desc: "Deep dives into format philosophy.", 
    action: "Design Philosophy &rarr;", 
    url: "/design", 
    img: designArt, 
    bgPos: 'center top 8%' 
  },
  { 
    title: "Community", 
    desc: "Online Leagues, and ways to play in paper.", 
    action: "Community Hub &rarr;", 
    url: "/community", 
    img: communityArt,
    bgPos: 'center top 20%' 
  },
  { 
    title: "The Feed", 
    desc: "Latest announcements and articles.", 
    action: "Read Announcements &rarr;", 
    url: "/feed", 
    img: feedArt,
    bgPos: 'center top 20%' 
  },
  { 
    title: "About", 
    desc: "Read about our history and meet the Committee.", 
    action: "Learn our History &rarr;", 
    url: "/about", 
    img: aboutArt,
    bgPos: 'center top 20%' 
  }
];

/* --- 3. DISCORD BANNER --- */
export const discordBanner = {
  heading: "Join the Conversation",
  lead: "Our Discord is the heartbeat of the community. Join us for:",
  bullets: [
    "Competitive brewing & strategy discussions",
    "LFG (Looking for Game) channels",
    "Compete in an open year-long, online league",
    "Communicate directly with members of the Tiny Leaders Committee"
  ],
  buttonText: "Join the Community",
  buttonUrl: "https://discord.com/invite/jq9KWHAdTm",
  bgImg: discordBg
};

/* --- 4. MEDIA & SOCIAL CARDS --- */
export const mediaCards = [
  {
    platform: "YouTube",
    desc: "Watch gameplay, deck techs, and format updates on our official channel.",
    action: "YouTube Channel",
    url: "https://www.youtube.com/@TinyLeadersRebornCommittee/featured",
    cssClass: "btn-youtube",
    img: youtubeArt,
    svgPath: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
  },
  {
    platform: "Bluesky",
    desc: "Follow us for quick updates and community highlights.",
    action: "Follow on Bluesky",
    url: "https://bsky.app/profile/tinyleadersreborn.bsky.social",
    cssClass: "btn-bluesky",
    img: blueskyArt,
    viewBox: "0 0 600 530", 
    svgPath: "m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
  }
];