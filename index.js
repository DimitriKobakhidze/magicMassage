
const showAnswer = (dropIcon,questionNumber) => {
    const answerId = `faq-answer${questionNumber}`
    const answerElement = document.getElementById(answerId)

    answerElement.classList.toggle('display-answer')
    dropIcon.classList.toggle('rotate-up')
}
const moveSlider = (buttonId,sliderButtons) =>{
    const sliderContainer = document.getElementById('slider-container')
    sliderButtons.forEach((button,id) => {
        if(id != buttonId){
            button.classList.remove('active-slider')
        }else{
            button.classList.add('active-slider')
        }
    })
    sliderContainer.style.left = `-${buttonId*260}px`
}
const addEvents = () =>{
    const allDropDowns = document.querySelectorAll('.question-drop')
    const sliderButtons = document.querySelectorAll(".slider-button")
    const navLinks = document.querySelectorAll(".why-nav-item")

    allDropDowns.forEach((dropIcon,id) => dropIcon.addEventListener('click',()=> showAnswer(dropIcon,id+1)))
    sliderButtons.forEach((button,id) => button.addEventListener("click",() => moveSlider(id,sliderButtons)))
    navLinks.forEach((navLink,id) => navLink.addEventListener("click",() =>{
        navLinks.forEach((button,itemId) => {
            if(id != itemId){
                button.classList.remove('active-navlink')
            }else{
                button.classList.add('active-navlink')
            }
        })
    }))
}


addEvents()





