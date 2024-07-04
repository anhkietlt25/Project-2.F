const Dots = document.querySelectorAll('.feedback .dots .dot');
// console.log(Dots);
const feedbackItems = document.querySelectorAll('.feedback-list .feedback-item');
// console.log(feedbackItems);

// Dots.forEach((item, index) => {
//     item.addEventListener('click', () => {
//         feedbackItems.forEach((item) => {
//             item.classList.remove('active');
//         });
//         feedbackItems[index].classList.add('active');
//     });
// });

// Sử dụng forEach để lần lượt gán sự kiện click cho từng đoạn feedback và chuyển đổi feedback hiện tại
Dots.forEach((itemDots, index) => {
    itemDots.addEventListener('click', () => {
        // console.log(itemDots, index);
        removeActive(Dots);

        if(index > feedbackItems.length - 1) {
            index = 0;
        }
        feedbackItems.forEach((item) => {
            item.style.transform = `translateX(-${1170 * index}px)`;
            itemDots.classList.add('active');
            console.log(item.style.transform = `translateX(-${1170 * index}px)`);
        });
    });
});

function removeActive(Dots) {
    Dots.forEach((itemRemove) => {
        itemRemove.classList.remove('active');
    });
}