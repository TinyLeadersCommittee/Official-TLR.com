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
    color: "#3498db", // Light Royal Blue
    description: `We're Blue`
  },
  {
    title: "Consultants",
    members: consultants,
    shape: "hexagon", 
    color: "#9b59b6", // Purple
    description: `We're Purple`
  },
  {
    title: "Local Play Organizers (LPO)",
    members: lpos,
    shape: "parallelogram",
    color: "#e67e22", // Orange
    description: `The boots on the ground. LPOs run paper events, build local 
    communities, and serve as the bridge between the global online community 
    and local game stores.`
  },
  {
    title: "Advisors",
    members: advisors,
    shape: "diamond",
    color: "#11806a", // Sage Green
    description: `Veterans of the format who provide historical context, guidance 
    on difficult decisions, and sanity checks for the Core Team's proposals.`
  }
];

export const contributorConfig = {
    title: "Contributors",
    shape: "nonagon",
    color: "#e6ad0e",
    description: `Dedicated community members who help keep the machine running, 
    from discord moderation and judge calls to content creation and playtesting.`
};