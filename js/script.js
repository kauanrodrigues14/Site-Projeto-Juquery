const sobreDiv = document.querySelectorAll('.comecou, .trabalhamos, .futuro')

const myObserver = new IntersectionObserver(( entries) =>{
    entries.forEach((entry) => {
   console.log(entry)
    if(entry.isIntersecting){
        entry.target.classList.add('animar')
    }else{
        entry.target.classList.remove('animar')
    }
    })
})

sobreDiv.forEach((div) => myObserver.observe(div))
