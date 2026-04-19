// src/scripts/committeeModal.js

// --- STATE MANAGEMENT ---
const state = {
    currentMemberData: null,
    isVerticalFlipped: false,
    currentHorizontalFace: 'front',
    isShowingToken: true
};

const dom = {}; // Cached DOM elements

// --- PUBLIC ENTRY POINT ---
export function initCommitteeModal() {
    cacheDOMElements();
    if (!dom.modal) return; // Exit if not on the committee page
    
    bindStaticEvents();
    exposeGlobalAPI();
}

// --- CORE MODAL CONTROLS ---

function openModal(buttonElement) {
    parseMemberData(buttonElement);
    loadBaseImages();
    resetModalState();
    displayModalUI();
}

function closeModal() {
    dom.modal.classList.remove('visible');
    setTimeout(() => dom.modal.classList.add('hidden'), 300);
    document.body.style.overflow = '';
}

// --- FLIP LOGIC & INTERACTIONS ---

function handleVerticalFlip() {
    state.isVerticalFlipped = !state.isVerticalFlipped;
    
    if (state.isVerticalFlipped) {
        showCustomCardView();
    } else {
        showBioView();
    }
}

function handleHorizontalFlip(direction, imgSrc) {
    // If clicking the same direction again, flip back to front
    if (state.currentHorizontalFace === direction) {
        resetHorizontalFlip();
        return;
    }

    // Prepare back face image and execute flip
    dom.relatedImg.src = imgSrc;
    executeHorizontalRotation(direction);
    
    state.currentHorizontalFace = direction;
    state.isShowingToken = true; // Reset crossfade state
}

function handleCrossfade(tokenSrc, emblemSrc) {
    // If not on the left face, flip there first
    if (state.currentHorizontalFace !== 'left') {
        handleHorizontalFlip('left', tokenSrc);
        state.isShowingToken = true;
        return;
    }

    // Execute Crossfade
    dom.relatedImg.classList.add('fade-out');
    
    setTimeout(() => {
        state.isShowingToken = !state.isShowingToken;
        dom.relatedImg.src = state.isShowingToken ? tokenSrc : emblemSrc;
        dom.relatedImg.classList.remove('fade-out');
    }, 300); // Must match CSS transition time
}

// --- UI UPDATERS ---

function showCustomCardView() {
    dom.vertFlipper.classList.add('is-flipped-vert');
    dom.mainBtn.innerHTML = "← Return to Bio";
    buildSubmenu();
}

function showBioView() {
    dom.vertFlipper.classList.remove('is-flipped-vert');
    dom.mainBtn.innerHTML = "View Custom Tiny Leader";
    dom.submenu.classList.add('hidden');
    
    // Reset horizontal flipper invisibly while looking at the bio
    setTimeout(resetHorizontalFlip, 400); 
}

function executeHorizontalRotation(direction) {
    if (direction === 'right') {
        dom.horizFlipper.style.transform = 'rotateY(180deg)';
    } else if (direction === 'left') {
        dom.horizFlipper.style.transform = 'rotateY(-180deg)';
    }
}

function resetHorizontalFlip() {
    dom.horizFlipper.style.transform = 'rotateY(0deg)';
    state.currentHorizontalFace = 'front';
}

function displayModalUI() {
    dom.modal.classList.remove('hidden');
    setTimeout(() => dom.modal.classList.add('visible'), 10);
    document.body.style.overflow = 'hidden';
}

// --- DATA & SETUP HELPERS ---

function parseMemberData(buttonElement) {
    state.currentMemberData = JSON.parse(buttonElement.getAttribute('data-member'));
}

function loadBaseImages() {
    dom.bioImg.src = state.currentMemberData.cardFrontImg || '/placeholder-bio.jpg';
    dom.customImg.src = state.currentMemberData.cardBackImg || '/placeholder-custom.jpg';
}

function resetModalState() {
    state.isVerticalFlipped = false;
    state.currentHorizontalFace = 'front';
    state.isShowingToken = true;
    
    dom.vertFlipper.classList.remove('is-flipped-vert');
    dom.horizFlipper.style.transform = 'rotateY(0deg)';
    dom.mainBtn.innerHTML = "View Custom Tiny Leader";
    dom.submenu.classList.add('hidden');
}

// --- SUBMENU BUILDER ---

function buildSubmenu() {
    dom.submenu.innerHTML = '';
    const extras = state.currentMemberData.relatedCards;
    
    if (!extras) return; // Exit if no extra cards exist

    dom.submenu.classList.remove('hidden');

    if (extras.back) {
        const btn = createSubmenuBtn('Flip Back ⤻', () => handleHorizontalFlip('right', extras.back));
        dom.submenu.appendChild(btn);
    }

    if (extras.token || extras.emblem) {
        const btn = buildTokenEmblemButton(extras);
        dom.submenu.appendChild(btn);
    }
}

function buildTokenEmblemButton(extras) {
    let btnText = '';
    let btnAction = null;

    if (extras.token && !extras.emblem) {
        btnText = '⤺ View Token';
        btnAction = () => handleHorizontalFlip('left', extras.token);
    } else if (extras.emblem && !extras.token) {
        btnText = '⤺ View Emblem';
        btnAction = () => handleHorizontalFlip('left', extras.emblem);
    } else if (extras.token && extras.emblem) {
        btnText = '⤺ Token / Emblem';
        btnAction = () => handleCrossfade(extras.token, extras.emblem);
    }

    return createSubmenuBtn(btnText, btnAction, 'token-emblem-btn');
}

function createSubmenuBtn(text, onClickAction, id = null) {
    const btn = document.createElement('button');
    btn.className = 'transform-btn secondary-btn';
    btn.innerHTML = text;
    btn.onclick = onClickAction;
    if (id) btn.id = id;
    return btn;
}

// --- DOM CACHING & EVENT BINDING ---

function cacheDOMElements() {
    dom.modal = document.getElementById('mtg-card-modal');
    if (!dom.modal) return; // Prevent caching errors if modal isn't on the page

    dom.vertFlipper = document.getElementById('vertical-flipper');
    dom.horizFlipper = document.getElementById('horizontal-flipper');
    dom.bioImg = document.getElementById('modal-card-bio');
    dom.customImg = document.getElementById('modal-card-custom');
    dom.relatedImg = document.getElementById('modal-card-related');
    dom.mainBtn = document.getElementById('main-flip-btn');
    dom.submenu = document.getElementById('submenu-controls');
}

function bindStaticEvents() {
    // Close on overlay click
    dom.modal.addEventListener('click', (e) => { 
        if (e.target === dom.modal) closeModal(); 
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !dom.modal.classList.contains('hidden')) {
            closeModal();
        }
    });
}

function exposeGlobalAPI() {
    // These must be on the window object if your HTML uses inline onclick=""
    window.openCardModal = openModal;
    window.closeCardModal = closeModal;
    window.toggleVerticalFlip = handleVerticalFlip;
}