
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
