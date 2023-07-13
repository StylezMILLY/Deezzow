
var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            // entry.target.classList.remove('show');
        }
    });
});


var hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        }else {
            // entry.target.classList.remove('show1');
        }
    });
});


var hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));



var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        }else {
            // entry.target.classList.remove('show1');
        }
    });
});


var hiddenElements = document.querySelectorAll('.hid');
hiddenElements.forEach((el) => observer.observe(el));

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navlinks = document.querySelectorAll('.nav-link li');

   burger.addEventListener('click', () => {
          nav.classList.toggle('nav-active');
          navlinks.forEach((Links, index)=>{
            if(Links.computedStyleMap.animation){
              Links.computedStyleMap.animation = ''
            }else{
              Links.style.animation = `navlinkfade 0.5s ease forwards ${index /7 + 1}s`;
            }
              
          
             })

            //  burger animation
            burger.classList.toggle('toggle');
   });


}

navSlide();