/* --- 1. COLLAPSIBLE ACCORDION LOGIC --- */
window.toggleAccordion = function(sectionId) {
  const wrapper = document.getElementById(`wrapper-${sectionId}`);
  const icon = document.getElementById(`icon-${sectionId}`);
  
  if (wrapper.classList.contains('open')) {
    wrapper.classList.remove('open');
    icon.style.transform = 'rotate(-90deg)';
  } else {
    wrapper.classList.add('open');
    icon.style.transform = 'rotate(0deg)';
  }
}

/* --- 2. MEMBER EXPANSION LOGIC --- */
window.toggleMember = function(sectionId, index, btnElement) {
  const sectionGrid = btnElement.parentElement;
  const detailPanel = document.getElementById(`details-${sectionId}`);
  
  if (btnElement.classList.contains('active-card')) {
    closeAllDetails();
    return;
  }

  const allCards = sectionGrid.querySelectorAll('.member-card');
  allCards.forEach(card => card.classList.remove('active-card'));

  btnElement.classList.add('active-card');

  const data = JSON.parse(btnElement.dataset.member);
  
  const setText = (cls, text) => {
      const el = detailPanel.querySelector(cls);
      if(el) el.innerHTML = text || ""; 
  };

  // 1. Basic Identity (SAFE VERSION - Won't break on Team Folders)
  const rawHandle = data.discordUsername || "";
  const fallbackName = data.name || data.title || "Unknown Legend";
  let cleanName = "";

  if (rawHandle && typeof rawHandle === 'string') {
      cleanName = rawHandle.startsWith('@') ? rawHandle.substring(1) : rawHandle;
  } else {
      cleanName = fallbackName;
  }

  setText('.member-name-target', cleanName);
  setText('.role-target', data.mtgType || `Legendary Creature — ${data.role || data.title || "Committee Member"}`);

  // 2. Mythic Textbox Content
  setText('.hails-target', data.hailsFrom);
  setText('.known-target', data.knownFor);
  setText('.card-target', data.faveCard);
  setText('.bio-target', data.bio); // Bio is now the Italicized Flavor Text

  // 3. Collector Info Footer
  setText('.since-target', data.sinceYear ? `Since ${data.sinceYear}` : "");
  setText('.deck-target', data.petDeck);

  // 4. Power / Toughness
  const ptBox = detailPanel.querySelector('.pt-target');
  if (ptBox) {
      if (data.mtgPT === "none" || data.mtgPT === false) {
          ptBox.style.display = 'none';
      } else {
          ptBox.style.display = 'block';
          ptBox.textContent = data.mtgPT || "3 / 3";
      }
  }

  // 5. Mana Cost Renderer
  const manaString = data.mtgMana || "";
  let manaHtml = "";
  if (manaString) {
      const matches = manaString.match(/\{.*?\}/g) || [];
      manaHtml = matches.map(m => {
          let sym = m.replace(/[\{\}]/g, '');
          let bg = '#cccccc'; 
          let color = '#000000';
          if (sym === 'W') bg = '#f8f6d8';
          if (sym === 'U') bg = '#c1d7e9';
          if (sym === 'B') bg = '#bab1ab'; 
          if (sym === 'R') bg = '#e49977';
          if (sym === 'G') bg = '#a3c095';
          return `<span class="mana-symbol" style="background-color: ${bg}; color: ${color};">${sym}</span>`;
      }).join('');
  }
  setText('.mana-target', manaHtml);

  // 6. Card Hover Logic
  const hoverImg = detailPanel.querySelector('.hover-img-target');
  const hoverContainer = detailPanel.querySelector('.hover-container');
  if (hoverImg && hoverContainer) {
     if (data.faveCardImg) {
         hoverImg.src = data.faveCardImg; 
         hoverImg.style.display = 'block';
         hoverContainer.classList.add('has-image');
     } else {
         hoverImg.src = ''; 
         hoverImg.style.display = 'none'; 
         hoverContainer.classList.remove('has-image');
     }
  }

  // 7. Card Art Image Load
  const artTarget = detailPanel.querySelector('.art-target');
  if (artTarget) {
      artTarget.src = data.img?.src || data.img || ""; 
  }

  // 8. Show the Modal Overlay!
  detailPanel.classList.add('open');
};

/* --- 3. GLOBAL UTILS --- */
window.closeAllDetails = function() {
  document.querySelectorAll('.details-panel').forEach(p => {
      p.classList.remove('open');
  });
  document.querySelectorAll('.member-card').forEach(c => c.classList.remove('active-card'));
}

window.showTeam = function(teamId) {
  document.getElementById('contrib-teams-list').style.display = 'none';
  const teamView = document.getElementById(`team-view-${teamId}`);
  teamView.classList.remove('hidden');
  teamView.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.showTeamsList = function() {
  document.querySelectorAll('.team-detail-view').forEach(el => {
      el.classList.add('hidden');
  });
  const list = document.getElementById('contrib-teams-list');
  list.style.display = 'grid'; 
}