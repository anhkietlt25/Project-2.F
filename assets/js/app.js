const Dots = document.querySelectorAll('.feedback .dots .dot');
// console.log(Dots);
const feedbackItems = document.querySelectorAll('.feedback-list .feedback-item');
// console.log(feedbackItems);
let index = 0;

// Dots.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         feedbackItems.forEach((item) => {
//             item.classList.remove('active');
//         });
//         feedbackItems[index].classList.add('active');
//     });
// });

Dots.forEach((itemDots, index) => {
    itemDots.addEventListener('click', () => {
        Dots.forEach((itemRemove) => {
            itemRemove.classList.remove('active');
        });

        if(index > feedbackItems.length - 1) {
            index = 0;
        }
        feedbackItems.forEach((item) => {
            item.style.transform = `translateX(-${1170 * index}px)`;
            itemDots.classList.add('active');
            // console.log(item.style.transform = `translateX(-${1170 * index}px)`);
        });
    });
});
