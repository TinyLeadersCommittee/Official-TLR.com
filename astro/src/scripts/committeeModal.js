// src/scripts/committeeModal.js

let currentMemberData = null;
let isVerticalFlipped = false;
let currentHorizontalFace = 'front'; 
let isShowingToken = true; 

window.openCardModal = function(buttonElement) {
  const modal = document.getElementById('mtg-card-modal');
  const vertFlipper = document.getElementById('vertical-flipper');
  const horizFlipper = document.getElementById('horizontal-flipper');
  const bioImg = document.getElementById('modal-card-bio');
  const customImg = document.getElementById('modal-card-custom');
  const mainBtn = document.getElementById('main-flip-btn');
  const submenu = document.getElementById('submenu-controls');

  currentMemberData = JSON.parse(buttonElement.getAttribute('data-member'));
  
  // Load base images
  bioImg.src = currentMemberData.cardFrontImg || '/placeholder-bio.jpg';
  customImg.src = currentMemberData.cardBackImg || '/placeholder-custom.jpg';
  
  // Reset state
  isVerticalFlipped = false;
  currentHorizontalFace = 'front';
  isShowingToken = true;
  
  vertFlipper.classList.remove('is-flipped-vert');
  horizFlipper.style.transform = 'rotateY(0deg)';
  mainBtn.innerHTML = "View Custom Tiny Leader";
  submenu.classList.add('hidden');
  
  // Open Modal
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.add('visible'), 10);
  document.body.style.overflow = 'hidden';
};

window.closeCardModal = function() {
  const modal = document.getElementById('mtg-card-modal');
  modal.classList.remove('visible');
  setTimeout(() => modal.classList.add('hidden'), 300);
  document.body.style.overflow = '';
};

window.toggleVerticalFlip = function() {
  const vertFlipper = document.getElementById('vertical-flipper');
  const horizFlipper = document.getElementById('horizontal-flipper');
  const mainBtn = document.getElementById('main-flip-btn');
  const submenu = document.getElementById('submenu-controls');

  isVerticalFlipped = !isVerticalFlipped;
  
  if (isVerticalFlipped) {
    vertFlipper.classList.add('is-flipped-vert');
    mainBtn.innerHTML = "← Return to Bio";
    buildSubmenu();
  } else {
    vertFlipper.classList.remove('is-flipped-vert');
    mainBtn.innerHTML = "View Custom Tiny Leader";
    submenu.classList.add('hidden');
    
    // Reset horizontal flipper invisibly while looking at the bio
    setTimeout(() => {
      horizFlipper.style.transform = 'rotateY(0deg)';
      currentHorizontalFace = 'front';
    }, 400); 
  }
};

function buildSubmenu() {
  const submenu = document.getElementById('submenu-controls');
  submenu.innerHTML = '';
  const extras = currentMemberData.relatedCards;
  
  if (!extras) return; 

  submenu.classList.remove('hidden');

  // 1. The "Back" Button (MDFC Flip Right)
  if (extras.back) {
    const btn = document.createElement('button');
    btn.className = 'transform-btn secondary-btn';
    btn.innerHTML = 'Flip Back ⤻';
    btn.onclick = () => handleHorizontalFlip('right', extras.back);
    submenu.appendChild(btn);
  }

  // 2. The "Token/Emblem" Button (Flip Left)
  if (extras.token || extras.emblem) {
    const btn = document.createElement('button');
    btn.className = 'transform-btn secondary-btn';
    btn.id = 'token-emblem-btn';
    
    if (extras.token && !extras.emblem) {
      btn.innerHTML = '⤺ View Token';
      btn.onclick = () => handleHorizontalFlip('left', extras.token);
    } 
    else if (extras.emblem && !extras.token) {
      btn.innerHTML = '⤺ View Emblem';
      btn.onclick = () => handleHorizontalFlip('left', extras.emblem);
    } 
    else if (extras.token && extras.emblem) {
      btn.innerHTML = '⤺ Token / Emblem';
      btn.onclick = () => handleCrossfade(extras.token, extras.emblem);
    }
    
    submenu.appendChild(btn);
  }
}

function handleHorizontalFlip(direction, imgSrc) {
  const horizFlipper = document.getElementById('horizontal-flipper');
  const relatedImg = document.getElementById('modal-card-related');

  // If clicking the same direction again, flip back to front
  if (currentHorizontalFace === direction) {
      horizFlipper.style.transform = 'rotateY(0deg)';
      currentHorizontalFace = 'front';
      return;
  }

  // Set the image on the hidden back face before flipping
  relatedImg.src = imgSrc;

  if (direction === 'right') {
      horizFlipper.style.transform = 'rotateY(180deg)';
  } else if (direction === 'left') {
      horizFlipper.style.transform = 'rotateY(-180deg)';
  }
  
  currentHorizontalFace = direction;
  isShowingToken = true; 
}

function handleCrossfade(tokenSrc, emblemSrc) {
  const relatedImg = document.getElementById('modal-card-related');

  if (currentHorizontalFace !== 'left') {
      handleHorizontalFlip('left', tokenSrc);
      isShowingToken = true;
      return;
  }

  relatedImg.classList.add('fade-out');
  
  setTimeout(() => {
      isShowingToken = !isShowingToken;
      relatedImg.src = isShowingToken ? tokenSrc : emblemSrc;
      relatedImg.classList.remove('fade-out');
  }, 300); 
}

// Ensure the DOM is fully loaded before attaching the background/escape key events
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('mtg-card-modal');
  
  if(modal) {
    modal.addEventListener('click', (e) => { 
        if (e.target === modal) window.closeCardModal(); 
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          window.closeCardModal();
      }
    });
  }
});