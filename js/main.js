//TASK 8 
let list = document.querySelectorAll('p .colPicker');

list.forEach(li => {
    li.addEventListener('click', ev => {
        let colClass = li.classList[0]
        if(colClass == "reset"){
            console.debug("reset")
            document.body.classList.remove(...document.body.classList);
        }
        else{
            console.debug("add col")
            document.body.className = ''; // Clear existing background class (optional)
            document.body.classList.add(colClass);
        }
    })
})


//TASK 9

imgSrc = document.querySelector("#myImages")

let imgArrSrc =
[
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
]


let i = 0;
let intrevalId;

function autoImageRotator(){
    intrevalId = setInterval(() => {
        if (i + 1 < imgArrSrc.length) {
            i += 1; 
        } else {
            i = 0;
            console.info("Resetting image source index");
        }
        imgSrc.setAttribute('src', imgArrSrc[i]);
        console.info(i);
    }, 1000); 
}

//TASK 11 - MXIING AUTO AND MANUAL IMAGE ROTATOR

let imgItem = document.querySelector("#myImages");

// autoImageRotator()

let mouseOut = false

imgItem.addEventListener('mouseover',() =>{
    clearInterval(intrevalId);
    mouseOut = true;
    imgItem.addEventListener('click', () => {
        console.info("clicked")
        if (i + 1 < imgArrSrc.length) {
            i+=1;
        }
        else{
            i = 0; 
        };
        imgSrc.setAttribute('src', imgArrSrc[i])
    })
} )
    
imgItem.addEventListener('mouseout', () => {
    if (i + 1 < imgArrSrc.length) {
        i += 1; 
    } else {
        i = 0;
        console.info("Resetting image source index");
    }
    imgSrc.setAttribute('src', imgArrSrc[i])
    autoImageRotator(); console.info("mouse leave")
} );



//TASK 12

console.dir(window.location)
