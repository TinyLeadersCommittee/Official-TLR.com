// src/scripts/cardPreview.js

// --- STATE MANAGEMENT ---
let modal, modalImg, detailsBox, loader;
let detailsTitle, detailsDate, detailsText, detailsFooter;
let currentGroup = [];
let currentIndex = -1;

// --- PUBLIC ENTRY POINT ---
export function initCardPreview() {
    // 1. Setup the DOM
    ensureModalExists();
    cacheDOMTextElements();

    // 2. Bind Global Event Listeners
    bindGlobalEvents();
}

// --- CORE CONTROLLER ---

/**
 * Loads the data for a specific card index into the modal.
 */
async function loadCard(index) {
    if (index < 0 || index >= currentGroup.length) return;
    currentIndex = index;

    const trigger = currentGroup[index];
    
    // Extract Data
    const cardData = {
        name: trigger.textContent.trim(),
        set: trigger.getAttribute('data-set'),
        reason: trigger.getAttribute('data-reason'),
        announcement: trigger.getAttribute('data-announcement'),
        date: trigger.getAttribute('data-date'),
        status: trigger.getAttribute('data-status'),
        image: trigger.getAttribute('data-image')
    };

    // Reset UI
    modalImg.style.display = 'none';
    loader.style.display = 'block';
    
    // Update Navigation Visibility
    updateNavButtons();

    // Update Text/Details Area
    updateDetailsUI(cardData);

    // Load the Image
    await fetchAndDisplayImage(cardData);
}

// --- SUB-SYSTEMS (Private Helpers) ---

/**
 * Handles the logic for the "Details Box".
 * If data is missing (Design Page), it hides the box.
 * If data exists (Banlist Page), it populates text, dates, and badges.
 */
function updateDetailsUI(data) {
    // 1. Simple Case: No reason data? Hide everything (Design Page Mode)
    if (!data.reason) {
        detailsBox.style.display = 'none';
        modal.querySelector('.card-modal-content').classList.remove('has-details');
        return;
    }

    // 2. Rich Case: Show details
    detailsBox.style.display = 'block';
    modal.querySelector('.card-modal-content').classList.add('has-details');

    // A. Badge & Title Logic
    const existingBadge = detailsBox.querySelector('.status-badge');
    if (existingBadge) existingBadge.remove();

    if (data.status === 'watchlist') {
        const badge = document.createElement('div');
        badge.className = 'status-badge watchlist-badge';
        badge.textContent = '⚠️ Watchlist (Not Banned)';
        detailsBox.prepend(badge);
        detailsTitle.textContent = "DETAILS";
    } else {
        detailsTitle.textContent = "BAN DETAILS";
    }

    // B. Date Logic
    if (data.date) {
        detailsDate.style.display = 'block';
        const dateLabel = (data.status === 'watchlist') ? "DATE LISTED" : "DATE BANNED";
        detailsDate.textContent = `${dateLabel}: ${data.date}`;
    } else {
        detailsDate.style.display = 'none';
    }

    // C. Main Text
    detailsText.textContent = data.reason;

    // D. Footer (Link vs Text)
    if (data.announcement === "Included on the Initial Banned List") {
        detailsFooter.innerHTML = `<span class="initial-ban-text">${data.announcement}</span>`;
    } else if (data.announcement && data.announcement !== "null") {
        detailsFooter.innerHTML = `<a href="${data.announcement}" target="_blank" class="details-link">Read Announcement &rarr;</a>`;
    } else {
        detailsFooter.innerHTML = '';
    }
}

/**
 * Handles fetching the image from Scryfall or using the direct link.
 */
async function fetchAndDisplayImage(data) {
    try {
        let imageUrl = data.image;

        // If no direct link, fetch from Scryfall
        if (!imageUrl) {
            let apiUrl = `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(data.name)}`;
            if (data.set) apiUrl += `&set=${data.set}`;

            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Card not found');
            const apiData = await response.json();

            if (apiData.image_uris) {
                imageUrl = apiData.image_uris.normal;
            } else if (apiData.card_faces) {
                imageUrl = apiData.card_faces[0].image_uris.normal;
            }
        }

        // Display
        modalImg.src = imageUrl;
        modalImg.onload = () => {
            loader.style.display = 'none';
            modalImg.style.display = 'block';
        };

    } catch (error) {
        console.error(error);
        loader.innerText = 'Image not found.';
    }
}

// --- DOM & EVENT HELPERS ---

function openModal(triggerElement) {
    // Find siblings to create the gallery group
    const parentList = triggerElement.closest('ul');
    if (parentList) {
        currentGroup = Array.from(parentList.querySelectorAll('.card-trigger'));
    } else {
        currentGroup = [triggerElement];
    }
    
    const index = currentGroup.indexOf(triggerElement);
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    loadCard(index);
}

function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalImg.src = ''; // Clear image to prevent flash on next open
}

function updateNavButtons() {
    const prevBtn = modal.querySelector('.nav-prev');
    const nextBtn = modal.querySelector('.nav-next');
    
    prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = currentIndex === currentGroup.length - 1 ? 'hidden' : 'visible';
}

function bindGlobalEvents() {
    // Click Trigger
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.card-trigger');
        if (trigger) {
            e.preventDefault();
            openModal(trigger);
        }
    });

    // Modal Controls
    const closeBtn = modal.querySelector('.card-modal-close');
    const overlay = modal.querySelector('.card-modal-overlay');
    const prevBtn = modal.querySelector('.nav-prev');
    const nextBtn = modal.querySelector('.nav-next');

    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); loadCard(currentIndex - 1); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); loadCard(currentIndex + 1); });
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Keyboard Nav
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') loadCard(currentIndex - 1);
        if (e.key === 'ArrowRight') loadCard(currentIndex + 1);
    });
}

function ensureModalExists() {
    if (document.getElementById('card-modal')) return;

    const modalHtml = `
        <div id="card-modal" class="card-modal" aria-hidden="true">
            <div class="card-modal-overlay"></div>
            <button class="modal-nav nav-prev" aria-label="Previous Card">&#10094;</button>
            <button class="modal-nav nav-next" aria-label="Next Card">&#10095;</button>
            <div class="card-modal-content">
                <button class="card-modal-close" aria-label="Close">&times;</button>
                <div class="card-loader">Loading...</div>
                <div class="modal-body">
                    <img id="card-modal-img" src="" alt="Card Preview" />
                    <div id="card-modal-details" class="card-details" style="display: none;">
                        <h3 id="details-title" class="details-title">Ban Details</h3>
                        <p id="details-date" class="details-date"></p>
                        <p id="details-text" class="details-text"></p>
                        <div id="details-footer"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function cacheDOMTextElements() {
    modal = document.getElementById('card-modal');
    modalImg = document.getElementById('card-modal-img');
    loader = modal.querySelector('.card-loader');
    detailsBox = document.getElementById('card-modal-details');
    
    // Text Elements
    detailsTitle = document.getElementById('details-title');
    detailsDate = document.getElementById('details-date');
    detailsText = document.getElementById('details-text');
    detailsFooter = document.getElementById('details-footer');
}