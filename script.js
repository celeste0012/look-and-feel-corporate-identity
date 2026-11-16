const searchInput = document.querySelector('.input-search');
const items = document.querySelectorAll('.icons button img');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const v = this.value.toLowerCase();
        items.forEach(function(item) {
            if (item.alt.toLowerCase().includes(v)) {
                item.closest("li").hidden = false;
            } 
            else {
                item.closest("li").hidden = true;
            }
        })
    })
}