document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.item-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;

        // Verifica se o centro do card está próximo do centro da viewport
        if (cardCenter > viewportCenter - 50 && cardCenter < viewportCenter + 50) {
            card.classList.add('scale');
        } else {
            card.classList.remove('scale');
        }
    });
});
