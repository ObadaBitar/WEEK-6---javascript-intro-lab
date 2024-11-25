(()=> {
    
    const slider = document.querySelector('.slider');
    const dotNav = document.querySelector('.dotNav')
    const slides = document.querySelector('.slides');
    let range = slides.children.length;
    let currentIndex = 0;
    
    for(let i = 0; i < range; i++){
        const dot = document.createElement('span')
        dot.classList.add('dot');

        dot.addEventListener('click', () => {
            showSlide(i)
        })
        
        dotNav.appendChild(dot);
    }
    
    const showSlide = (index) => {
        const dots = document.querySelectorAll('.dotNav span')
        slides.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(dot => dot.classList.remove('active'))
        dots[index].classList.add('active');
    }

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % range;
        showSlide(currentIndex);
    }

    const autoSlide = () => nextSlide();
    let intrevalId;

    function callSlider(){ intrevalId = setInterval(autoSlide,1000)}
    callSlider()
    
    slides.addEventListener('mouseover', () => {
        clearInterval(intrevalId)
    });
    
    dotNav.addEventListener('mouseover', () => {
        clearInterval(intrevalId)
    });
    
    const handleMouseOut = () => {
        if (!slider.matches(':hover') && !dotNav.matches(':hover')) {
            callSlider()
        }
    };
    
    slider.addEventListener('mouseout', handleMouseOut);
    dotNav.addEventListener('mouseout', handleMouseOut);
})()