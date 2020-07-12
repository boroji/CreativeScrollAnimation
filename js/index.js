// (1)- selecting all the .box classes
const boxes = document.querySelectorAll('.box');

// (2)- loop over the boxes const
for (const i of boxes) {
    // (3)- adding mouseover event listener to all boxes
    i.addEventListener('mouseover', () => {
        i.style.cssText = 'transform: scale(0);'
    })
    // (4)- adding mouseout event listener to all boxes
    i.addEventListener('mouseout', () => {
        // (5)- adding delay using setTimeout function
        setTimeout(() => {
            i.style.cssText = 'transform: scale(1);'
        }, 2000);
    })
}