
let altura = 0

function mudarT(){
	altura = window.innerHeight
	
	console.log(altura)

    if(altura > 1119){
        document.querySelector('.home').style.height = "1117px"
    }else{
        document.querySelector('.home').style.height = "100vh"
    }
}

mudarT()

window.onscroll = () =>{
    
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active')
    }else{
        document.querySelector('.header').classList.remove('active')
    }

    section.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop - 200
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(link =>{
                link.classList.remove('active')
                document.querySelector('.header .navbar a[href*='+id+']').classList.add('active')
            })
        }
    })
}


let swiper1 = new Swiper(".products-slider",{
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false
    },
    grabCursor: true,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        }
    }
})
