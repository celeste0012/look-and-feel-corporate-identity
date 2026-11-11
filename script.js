const searchInput = document.querySelector('.search-input');
const items = document.querySelectorAll('.icons img');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const v = this.value.toLowerCase();
        items.forEach(function(item) {
            if (item.alt.toLowerCase().includes(v)) {
                item.parentNode.hidden = false;
            } else {
                item.parentNode.hidden = true;
            }
        })
    })
}