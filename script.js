// For buttons on about
    let activeIndex = 0;

    const cards = document.getElementsByClassName("info-card");

    const handleRightClick = () => {
        //bump active index
        const nextIndex = activeIndex + 1 <= cards.length - 1 ? activeIndex + 1 : 0;

        const currentCard = document.querySelector(`[data-index="${activeIndex}"]`),
                nextCard = document.querySelector(`[data-index="${nextIndex}"]`);

        //active card becomes after
        currentCard.dataset.status = "after";

        //next carf becomes active
        nextCard.dataset.status = "becoming-active-from-before";

        setTimeout(() => {
            nextCard.dataset.status = "active";
            activeIndex = nextIndex;
        });
    }

    const handleLeftClick = () => {
        //bump active index
        const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : cards.length - 1;

        const currentCard = document.querySelector(`[data-index="${activeIndex}"]`),
                nextCard = document.querySelector(`[data-index="${nextIndex}"]`);

        //active card becomes after
        currentCard.dataset.status = "before";

        //next carf becomes active
        nextCard.dataset.status = "becoming-active-from-after";

        setTimeout(() => {
            nextCard.dataset.status = "active";
            activeIndex = nextIndex;
        });
    }

// 