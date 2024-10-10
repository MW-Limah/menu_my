document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.item-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardTop = rect.top;
        const cardBottom = rect.bottom;

        // Verifica se alguma parte do card está no centro do viewport
        if ((cardTop >= 0 && cardTop <= windowHeight / 2) || 
            (cardBottom >= windowHeight / 4 && cardBottom <= windowHeight) ||
            (cardTop <= 0 && cardBottom >= windowHeight)) {
            card.classList.add('scale');
        } else {
            card.classList.remove('scale');
        }
    });
});
