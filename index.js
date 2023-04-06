anime({
    targets: '#logo-svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 2500,
    delay: 1500,
    direction: 'alternate',
    loop: false,
    complete: () => {
        anime({
            targets: "path",
            fill: '#ffffff',
            duration: 1500,
            easing: 'easeInOutQuad',
        });
    }
});
