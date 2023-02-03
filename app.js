// select .icon element
const icon = document.querySelector(".icon");
const navList = document.querySelector(".nav-list");

icon.addEventListener("click", toggleClickBar);


// toggle function
function toggleClickBar() {
    if (navList.style.display === "block") {
        navList.style.display = "none";
    } else {
        navList.style.display = "block";
    }
}


window.addEventListener("resize", updateSize);

function updateSize() {
if(window.innerWidth >= 768) {
    navList.style.display= "block";
} else if ( window.innerWidth < 768) {
    navList.style.display = "none";
}
}