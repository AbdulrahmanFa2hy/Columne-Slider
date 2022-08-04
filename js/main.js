let btnPrev = document.querySelector('.btn-prev')
let btnNext = document.querySelector('.btn-next')
let content = document.querySelector('.content')

let px = 0
let sliderHeight =
  content.children.length * content.children[0].clientHeight - 180 * 5

btnPrev.addEventListener('click', function () {
  btnNext.classList.remove('end')
  if (px > -sliderHeight) {
    px -= 180
    if (px == -sliderHeight) {
      btnPrev.classList.add('end')
    }
  }
  content.style.transform = `translateY(${px}px)`
})

btnNext.addEventListener('click', function () {
  btnPrev.classList.remove('end')
  if (px < sliderHeight) {
    px += 180;
  }
  content.style.transform = `translateY(${px}px)`
  if (px == sliderHeight) {
    btnNext.classList.add('end')
  }
})
