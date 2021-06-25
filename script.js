const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerScroll = window.innerHeight / 7 * 4 /* Formula para que se active el scroll inicial */

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerScroll) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}