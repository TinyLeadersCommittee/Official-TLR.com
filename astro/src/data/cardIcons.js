// src/data/cardIcons.js

const iconPaths = {
  creature: "/assets/cardTypeIcons/creature.svg",
  enchantment: "/assets/cardTypeIcons/enchantment.svg",
  land: "/assets/cardTypeIcons/land.svg",
  instant: "/assets/cardTypeIcons/instant.svg",
  sorcery: "/assets/cardTypeIcons/sorcery.svg",
  artifact: "/assets/cardTypeIcons/artifact.svg",
  planeswalker: "/assets/cardTypeIcons/planeswalker.webp",
  battle: "/assets/cardTypeIcons/battle.svg",
  multi: "/assets/cardTypeIcons/multi.svg",
  futuresight: "/assets/cardTypeIcons/future.svg",
  default: "/assets/cardTypeIcons/future.svg" 
};

export const getIcon = (type) => {
  const safeType = type ? type.toLowerCase() : 'default';
  const url = iconPaths[safeType] || iconPaths.default;
  
  // CHANGED: Returns a span with the URL stored in a variable
  return `<span class="type-symbol" style="--icon-url: url('${url}')"></span>`;
};