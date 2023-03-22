const heartIcons = document.querySelectorAll('.heart');
const marked = document.querySelectorAll('.mark-as-read');
const deletedBtn = document.querySelectorAll('.EachCard .delete');

//Function for like function. When a user clicks on the heart, it should become blue.
heartIcons.forEach((heartIcon) =>{
    heartIcon.addEventListener('click', ()=>{
        heartIcon.classList.toggle('on');
    })
})
//Function for mark news as read.
marked.forEach((marks) =>{
  marks.addEventListener('click', ()=>{
      marks.classList.toggle('on');
  })
})

//Function  for remove news from the newsfeed
deletedBtn.forEach(item => {
  item.addEventListener("click", () => {
    const card = item.closest('.EachCard')
    card.parentNode.removeChild(card);
  })
})