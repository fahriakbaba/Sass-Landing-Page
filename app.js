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