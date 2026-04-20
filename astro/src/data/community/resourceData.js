import manaboxImg from '../../assets/images/community/manabox-logo.png'; 
import moxfieldImg from '../../assets/images/community/moxfield-logo.jpg';
import triomeImg from '../../assets/images/community/triomelab-logo.svg';
import cockatriceImg from '../../assets/images/community/cockatrice-logo.png';
import spelltableImg from '../../assets/images/community/spelltable-logo.webp';
import mtgoImg from '../../assets/images/community/mtgo-logo.jpg';
import challongeImg from '../../assets/images/community/challonge-logo.jpg';
import topdeckImg from '../../assets/images/community/topdeck-logo.jpg';

export const buildTools = [
  {
    title: "ManaBox",
    description: "A Fast, reliable, and excellent deckbuilder for quickly drafting up decks or managing your collection on the go.",
    link: "https://manabox.app/",
    linkText: "Get the App",
    image: manaboxImg, 
    icon: "manabox", 
    bgSize: "contain", 
    bgColor: "#101010",
    isFeatured: true
  },
  {
    title: "Moxfield",
    description: "A modern interface with powerful features like price tracking, versioning, and easy sharing.",
    link: "https://www.moxfield.com",
    linkText: "Visit Site",
    image: moxfieldImg, 
    icon: "moxfield",
    bgSize: "cover",
    bgColor: "#5e3e8c",
    isFeatured: false
  },
  {
    title: "TriomeLab",
    description: "Explore the meta, Analyze trends, & Find top staples in this deep card recommendation and data analysis platform.",
    link: "https://triomelab.com/", 
    linkText: "Explore Data",
    image: triomeImg, 
    icon: "chart",
    bgSize: "contain",
    bgColor: "#1E2732", 
    isFeatured: false
  }
];

/* Scryfall Shortcuts */
export const scryfallShortcuts = [
  {
    label: "Split Cards",
    description: "Find all format-legal split cards.",
    query: "is:split"
  },
  {
    label: "Adventure Cards",
    description: "Find all format-legal adventure cards.",
    query: "t:adventure"
  },
  {
    label: "MDFCs",
    description: "Find all format-legal MDFCs.",
    query: "is:mdfc"
  }
];

export const playTools = [
  {
    title: "Cockatrice",
    description: "The standard for online play in our monthly leagues. Free, open-source, and gives you access to every card instantly.",
    link: "https://cockatrice.github.io/",
    linkText: "Download Client",
    image: cockatriceImg, 
    bgSize: "contain",
    bgColor: "#ffffff",
    hasGuide: false
  },
  {
    title: "SpellTable",
    description: "Prefer paper? Use your webcam or phone to play with your physical deck against anyone in the world.",
    link: "https://spelltable.wizards.com/",
    linkText: "Launch Web App",
    image: spelltableImg,
    bgSize: "contain",
    bgColor: "#0a0a0a", 
    hasGuide: false
  },
  {
    title: "Magic Online (MTGO)",
    description: "The official digital platform. Requires purchasing cards and specific lobby settings to play correctly.",
    link: "https://www.mtgo.com/",
    linkText: "Download MTGO",
    image: mtgoImg,
    bgSize: "contain",
    bgColor: "#ffffff",
    hasGuide: true 
  }
];

export const mtgoGuideSteps = [
  "Create a new game and select <strong>Freeform Commander</strong> as the format.",
  "Set the match to <strong>2 Players</strong> (1v1).",
  "Allow watchers if you want to let others spectate.",
  "<strong>Important:</strong> Once the game starts, you must manually set your life total to <strong>20</strong> (MTGO defaults to 40).",
  "There is no commander damage in this mode, so you do not need to track it."
];

export const competeTools = [
  {
    title: "Challonge",
    description: "The engine behind our Monthly Leagues. You will need an account here to register for official events and report your match results.",
    link: "https://challonge.com/communities/tinyleaders", 
    linkText: "Join Community",
    image: challongeImg, 
    icon: "trophy",
    bgSize: "cover",
    bgColor: "#23262B", 
    isFeatured: true
  },
  {
    title: "TopDeck.gg",
    description: "The home of competitive EDH tournament data. While we primarily use Challonge, check here for larger open event listings.",
    link: "https://topdeck.gg/", 
    linkText: "Find Events",
    image: topdeckImg, 
    icon: "chart-bar",
    bgSize: "contain",
    bgColor: "#1c2532", 
    isFeatured: false
  }
];

export const brandResources = {
  title: "Logos & Branding",
  description: "Making a video or writing an article? Feel free to use the official Tiny Leaders logos. Includes transparent PNGs and SVGs.",
  buttons: [
    {
      text: "Download Logo Pack (ZIP)",
      link: "/downloads/tl-logos.zip",
      style: "primary"
    },
    {
      text: "View Brand Guidelines",
      link: "/design/branding",
      style: "secondary"
    }
  ]
};