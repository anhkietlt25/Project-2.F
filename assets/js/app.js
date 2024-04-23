const list = document.querySelector('.feedback .feedback-list')
// console.log(list)
const itemList = document.querySelectorAll('.feedback .feedback-list .feedback-item')
// console.log(itemList)
const dots = document.querySelectorAll('.dots .dot')
// console.log(dots)
const next = document.getElementById('next')
// console.log(next)
const pre = document.getElementById('previous')
// console.log(pre)

let active = 0

next.onclick = function() {
    active += 1
    renderFeedBack()
}

function renderFeedBack() {
    let checkLeft = itemList[active].offsetLeft
    list.style.left = -checkLeft + 'px'
}
