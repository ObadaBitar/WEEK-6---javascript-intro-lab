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

// for(let i = 1; i < li.length; i++)
// {
//     li[i].style.backgroundColor = "green";
// }
