const characters = document.querySelectorAll('.charc-cont');

characters.forEach((charc) => {

    const iframe = charc.querySelector('iframe');
    if (iframe) {
        iframe.dataset.url = iframe.src;
        iframe.src = '';
    }
    charc.addEventListener('click', (e) => {
        if(e.target.closest('.song-card') || e.target.closest('.charc-details')) {
            return;
        }
        e.stopPropagation();

        const isActive = charc.classList.contains('active');

        characters.forEach((item) => {
            item.classList.remove('active');
            const frame = item.querySelector('iframe');
            if (frame) frame.src ='';
        });

        if (!isActive) {
            charc.classList.add('active');
            if (iframe) iframe.src = iframe.dataset.url;
        }
    });
});

document.addEventListener('click', () => {
    characters.forEach((item) => {
        item.classList.remove('active');
        const frame = item.querySelector('iframe');
        if (frame) frame.src = '';
    });
});