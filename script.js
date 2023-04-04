const contentBoxes = document.querySelectorAll('.content');

window.addEventListener('scroll', checkB)

checkB()

function checkB(){   
     const  trig = window.innerHeight / 5 * 4 
    
    contentBoxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < trig){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}