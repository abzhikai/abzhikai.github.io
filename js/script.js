/* Open the drawer when the menu icon is clicked. */
var menu = document.querySelector('.menu');
var main = document.querySelector('.main');
var drawer = document.querySelector('.drawer');

// menu.addEventListener('click', function(e)
// {
//     for(let i = 0; i < drawer.length;i++)
//     {
//         drawer.classList.toggle('open');
//         e.stopPropagation();
//     }
// });
// main.addEventListener('click', function()
// {
//     drawer.classList.remove('open');
// });

var navbutton = document.querySelector('.nav-button-container');
var showsubtopics = document.querySelector('.subtopics');

navbutton.addEventListener('click', function(e)
{
    if(showsubtopics.style.display == "none") 
    {
        showsubtopics.style.display = "flex";
    }
    else 
    {
        showsubtopics.style.display = "none";
    }
});

// var opm = document.querySelector('')

// menu.addEventListener('click', function(e)
// {
//     for(let i = 0; i < drawer.length;i++)
//     {
//         drawer.classList.toggle('open');
//         e.stopPropagation();
//     }
// });