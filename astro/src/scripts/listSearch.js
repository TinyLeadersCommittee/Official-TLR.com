// src/scripts/listSearch.js

export function initListSearch(inputId, sectionClass) {
    const searchInput = document.getElementById(inputId);
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            const term = e.target.value.toLowerCase();
            const sections = document.querySelectorAll(`.${sectionClass}`);

            sections.forEach(section => {
                const listItems = section.querySelectorAll('li');
                
                listItems.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    if (text.includes(term)) {
                        item.style.display = ''; 
                    } else {
                        item.style.display = 'none'; 
                    }
                });
            });
        });
    }
}