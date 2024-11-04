let li = document.querySelectorAll("div nav ul li")
// console.log(li)


for(let listItem of li)
{
    listItem.addEventListener('click', function()
    {
        console.info("hi")
    })
}

// for(let i = 1; i < li.length; i++)
// {
//     li[i].style.backgroundColor = "green";
// }