const boxes = document.querySelectorAll('.box');

for (const i of boxes) {
    i.addEventListener('mouseover', () => {
        i.style.cssText = 'transform: scale(0);'
    })
    i.addEventListener('mouseout', () => {
        setTimeout(() => {
            i.style.cssText = 'transform: scale(1);'
        }, 2000);
    })
}