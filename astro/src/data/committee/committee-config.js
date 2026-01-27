// src/data/committee/committee-config.js

import { coreMembers } from './core-members.js';
import { consultants } from './consultants.js';
import { lpos } from './lpo.js';
import { advisors } from './advisors.js';

export const mainCommitteeSections = [
  {
    title: "Core Members",
    members: coreMembers,
    shape: "triangle",
    color: "#658cfa", // Light Royal Blue
    description: `The stewards of the format. The Core Team manages the website, 
    organizes major tournaments, maintains the banlist, and steers the overall 
    direction of Tiny Leaders Reborn.`
  },
  {
    title: "Consultants",
    members: consultants,
    shape: "hexagon", 
    color: "#9d4edd", // Purple
    description: `Specialized experts who manage specific domains of the format, 
    such as the Rules & Policy documents, specific competitive initiatives, or 
    web development.`
  },
  {
    title: "Local Play Organizers (LPO)",
    members: lpos,
    shape: "square",
    color: "#fb8500", // Orange
    description: `The boots on the ground. LPOs run paper events, build local 
    communities, and serve as the bridge between the global online community 
    and local game stores.`
  },
  {
    title: "Advisors",
    members: advisors,
    shape: "diamond",
    color: "#8FBC8F", // Sage Green
    description: `Veterans of the format who provide historical context, guidance 
    on difficult decisions, and sanity checks for the Core Team's proposals.`
  }
];

export const contributorConfig = {
    title: "Contributors",
    shape: "circle",
    color: "#888888",
    description: `Dedicated community members who help keep the machine running, 
    from discord moderation and judge calls to content creation and playtesting.`
};