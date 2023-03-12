/**
 * https://popmotion.io/
 */ const popmotion;
const ball = document.querySelector(".ball");
popmotion.animate({
    from: "-100px",
    to: "100px",
    repeat: Infinity,
    repeatType: "mirror",
    type: "spring",
    onUpdate (update) {
        ball.style.left = update;
    }
});

//# sourceMappingURL=index.672d4772.js.map
