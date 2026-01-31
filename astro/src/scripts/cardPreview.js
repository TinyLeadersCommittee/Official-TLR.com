// src/scripts/cardPreview.js

export function initCardPreview() {
    // 1. Create Modal HTML with Navigation Arrows
    // src/scripts/cardPreview.js (Partial update)
    if (!document.getElementById('card-modal')) {
        const modalHtml = `
            <div id="card-modal" class="card-modal" aria-hidden="true">
                <div class="card-modal-overlay"></div>
                
                <button class="modal-nav nav-prev" aria-label="Previous Card">&#10094;</button>
                <button class="modal-nav nav-next" aria-label="Next Card">&#10095;</button>

                <div class="card-modal-content">
                    <button class="card-modal-close" aria-label="Close">&times;</button>
                    <div class="card-loader">Loading...</div>
                    <img id="card-modal-img" src="" alt="Card Preview" />
                    <div class="card-modal-caption"></div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    // Elements
    const modal = document.getElementById('card-modal');
    const modalImg = document.getElementById('card-modal-img');
    const caption = modal.querySelector('.card-modal-caption');
    const loader = modal.querySelector('.card-loader');
    const closeBtn = modal.querySelector('.card-modal-close');
    const overlay = modal.querySelector('.card-modal-overlay');
    const prevBtn = modal.querySelector('.nav-prev');
    const nextBtn = modal.querySelector('.nav-next');

    // State
    let currentGroup = []; // The list of card elements we are currently viewing
    let currentIndex = -1; // Which one is active

    // --- Core Loading Function ---
    const loadCard = async (index) => {
        if (index < 0 || index >= currentGroup.length) return;
        
        currentIndex = index;
        const trigger = currentGroup[index];
        const cardName = trigger.textContent.trim();
        const setCode = trigger.getAttribute('data-set');
        let directImageUrl = trigger.getAttribute('data-image');

        // Reset UI
        modalImg.style.display = 'none';
        loader.style.display = 'block';
        caption.innerText = cardName;
        
        // Update Buttons (Hide left if first, hide right if last)
        prevBtn.style.visibility = index === 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = index === currentGroup.length - 1 ? 'hidden' : 'visible';

        try {
            if (!directImageUrl) {
                let apiUrl = `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(cardName)}`;
                if (setCode) apiUrl += `&set=${setCode}`;

                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error('Card not found');
                const data = await response.json();
                
                if (data.image_uris) {
                    directImageUrl = data.image_uris.normal;
                } else if (data.card_faces) {
                    directImageUrl = data.card_faces[0].image_uris.normal;
                } else {
                    throw new Error('Image not found');
                }
            }

            modalImg.src = directImageUrl;
            modalImg.onload = () => {
                loader.style.display = 'none';
                modalImg.style.display = 'block';
            };

        } catch (error) {
            console.error(error);
            loader.innerText = 'Image not found.';
        }
    };

    const openModal = (triggerElement) => {
        // 1. Find all siblings in the same list to build the "Group"
        const parentList = triggerElement.closest('ul');
        if (parentList) {
            currentGroup = Array.from(parentList.querySelectorAll('.card-trigger'));
        } else {
            // Fallback for isolated triggers
            currentGroup = [triggerElement];
        }

        // 2. Find where we clicked
        const index = currentGroup.indexOf(triggerElement);
        
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // 3. Load it
        loadCard(index);
    };

    const closeModal = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        modalImg.src = '';
    };

    // --- Event Listeners ---
    
    // Global Click for Triggers
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.card-trigger');
        if (trigger) {
            e.preventDefault();
            openModal(trigger);
        }
    });

    // Navigation Clicks
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Don't close modal
        loadCard(currentIndex - 1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        loadCard(currentIndex + 1);
    });

    // Keyboard Nav (Left/Right Arrows)
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;

        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') loadCard(currentIndex - 1);
        if (e.key === 'ArrowRight') loadCard(currentIndex + 1);
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
}