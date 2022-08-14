var navbutton = document.querySelector('.nav-button-container');
var showsubtopics = document.querySelector('.subtopics');

const checkWindowSize = '(min-width: 1080px)'; //Set specific size we want to check
const currWindowSize = window.matchMedia(checkWindowSize); //Compare current window size with the check

currWindowSize.addEventListener('change', event => { //Check when screen size changes
    if(event.matches) //if they match
        showsubtopics.style.display = "flex";
    else //if they do not match
        showsubtopics.style.display = "none";
})
navbutton.addEventListener('click', function()
{
    if(showsubtopics.style.display != "flex") 
    {
        showsubtopics.style.display = "flex";
    }
    else 
    {
        showsubtopics.style.display = "none";
    }
});

var opmmangabutton = document.querySelector('#opm');
var kbmangabutton = document.querySelector('#kb');
var sdmangabutton = document.querySelector('#sd');

var showpanels1 = document.querySelector('.opm-items')
var showpanels2 = document.querySelector('.kb-items')
var showpanels3 = document.querySelector('.sd-items')

var opmopened = false;
var kbopened = false;
var sdopened = false;

opmmangabutton.addEventListener('click', function()
{
    showpanels1.classList.toggle('manga-list-item-1');
    if (opmopened == false)
    {
        opmopened = true;
    }
    else
    {
        opmopened = false;
    }

    if(kbopened == true)
    {
        showpanels2.classList.toggle('manga-list-item-2');
        kbopened = false;
    }
    else if (sdopened == true)
    {
        showpanels3.classList.toggle('manga-list-item-3');
        sdopened = false;
    }
});

kbmangabutton.addEventListener('click', function()
{
    showpanels2.classList.toggle('manga-list-item-2');
    if (kbopened == false)
    {
        kbopened = true;
    }
    else
    {
        kbopened = false;
    }
    
    if(opmopened == true)
    {
        showpanels1.classList.toggle('manga-list-item-1');
        opmopened = false;
    }
    else if (sdopened == true)
    {
        showpanels3.classList.toggle('manga-list-item-3');
        sdopened = false;
    }
});

sdmangabutton.addEventListener('click', function()
{
    showpanels3.classList.toggle('manga-list-item-3');
    if (sdopened == false)
    {
        sdopened = true;
    }
    else
    {
        sdopened = false;
    }
    
    if(kbopened == true)
    {
        showpanels2.classList.toggle('manga-list-item-2');
        kbopened = false;
    }
    else if (opmopened == true)
    {
        showpanels1.classList.toggle('manga-list-item-1');
        opmopened = false;
    }
});