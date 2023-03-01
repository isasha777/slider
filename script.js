const sliderLine = document.querySelector(".slider_line"),
      nextButtton = document.querySelector(".right_arrow"),
      prevButton = document.querySelector(".left_arrow"),
      dots = document.querySelectorAll(".dot")

let position = 0,
    dotIndex = 0

const nextSlide = () => {
  if (position < (dots.length - 1) * 679) {
      position += 679
      dotIndex++
  } else {
      position = 0
      dotIndex = 0
  }
  sliderLine.style.left = -position + "px"
  thisSlide(dotIndex)
}

const prevSlide = () => {
  if (position > 0) {
      position -= 679
      dotIndex--
  } else {
      position = (dots.length - 1) * 679
      dotIndex = (dots.length - 1)
  }
  sliderLine.style.left = -position + "px"
  thisSlide(dotIndex)
}

const thisSlide = (index) => {
  for (let dot of dots) {
       dot.classList.remove("active")
  }
  dots[index].classList.add("active")
}

nextButtton.addEventListener("click", nextSlide)
prevButton.addEventListener("click", prevSlide)

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
  position = 679 * index
  sliderLine.style.left = -position + "px"
  dotIndex = index
  thisSlide(dotIndex)
  })
})


const sliderNavigation = document.querySelector(".navigation"),
      nextButt = document.querySelector(".right_arrow"),
      prevButt = document.querySelector(".left_arrow"),
      tabs = document.querySelectorAll(".tab")

let positions = 0,
    tabInd = 0

const nextSlider = () => {
  if (positions < (tabs.length - 1) * 679) {
      positions += 679
      tabInd++
  } else {
      positions = 0
      tabInd = 0
  }
  sliderNavigation.style.left = -positions + "px"
  thisSlider(tabInd)
}

const prevSlider = () => {
  if (positions > 0) {
      positions -= 679
      tabInd--
  } else {
      positions= (tabs.length - 1) * 679
      tabInd = (tabs.length - 1)
  }
  sliderNavigation.style.left = -positions + "px"
  thisSlider(tabInd)
}

const thisSlider = (ind) => {
  for (let tab of tabs) {
       tab.classList.remove("active-tab")
  }
  tabs[ind].classList.add("active-tab")
}

nextButt.addEventListener("click", nextSlider)
prevButt.addEventListener("click", prevSlider)

tabs.forEach((tab, ind) => {
  tab.addEventListener("click", () => {
  positions = 679 * ind
  sliderNavigation.style.left = -positions + "px"
  tabInd = ind
  thisSlider(tabInd)
  })
})

