// src/scripts/listSearch.js

// --- PUBLIC ENTRY POINT ---
export function initListSearch(inputId, targetClass) {
    const searchInput = document.getElementById(inputId);
    const noResultsMsg = document.getElementById('no-results-msg');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        // 1. Calculate visibility across all sections
        const totalVisible = updateAllSections(query, targetClass);

        // 2. Update global UI state
        updateGlobalUI(noResultsMsg, totalVisible);
    });
}

// --- AUXILIARY FUNCTIONS (Private Helpers) ---

/**
 * Loops through all sections and updates them.
 * Returns the total count of visible items across all sections.
 */
function updateAllSections(query, targetClass) {
    const sections = document.querySelectorAll(`.${targetClass}`);
    let globalCount = 0;

    sections.forEach(section => {
        const matchCount = filterSection(section, query);
        
        // Hide entire section if empty (and query exists), show if matches found or query is empty
        section.style.display = (matchCount > 0 || query === '') ? 'block' : 'none';
        
        globalCount += matchCount;
    });

    return globalCount;
}

/**
 * Filters a single section's list items.
 * Returns the number of visible items in this section.
 */
function filterSection(section, query) {
    const listItems = section.querySelectorAll('li');
    let visibleCount = 0;

    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        const isMatch = text.includes(query);
        
        toggleItem(item, isMatch);

        if (isMatch) visibleCount++;
    });

    return visibleCount;
}

/**
 * Toggles the visibility of a single DOM element.
 */
function toggleItem(element, isVisible) {
    element.style.display = isVisible ? '' : 'none';
}

/**
 * Updates the "No Results" message based on the total count.
 */
function updateGlobalUI(msgElement, count) {
    if (msgElement) {
        msgElement.style.display = count === 0 ? 'block' : 'none';
    }
}