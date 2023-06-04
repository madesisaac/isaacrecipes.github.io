const foodItems=document.querySelectorAll('[content]')

foodItems.forEach(food => {
  food.addEventListener("click",toggleVisible)
})

function toggleVisible(e){
  const button=e.target
  let sectionName=button.getAttribute("content")
  let section=document.querySelector('['+sectionName+']')
  section.classList.remove("off")
  section.classList.add("on")
  button.removeEventListener("click",toggleVisible)
  button.addEventListener("click",toggleHidden)
  button.classList.add("clicked")
}

function toggleHidden(e){
  const button=e.target
  button.removeEventListener("click",toggleHidden)
  button.addEventListener("click",toggleVisible)
  let sectionName=button.getAttribute("content")
  let section=document.querySelector('['+sectionName+']')
  section.classList.remove("on")
  section.classList.add("off")
  button.classList.remove("clicked")

}