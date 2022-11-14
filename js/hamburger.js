const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const blur= document.querySelector(".blur");
blur.style.display = "none";
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    // menu.style.visibility = "hidden";
    menu.classList.remove("showMenu");
    blur.style.display = "none";
  } else {
    
    // menu.style.visibility = "visible";
    menu.classList.add("showMenu");    
    blur.style.display = "inline";
  }
}

blur.addEventListener("click", toggleMenu);
hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )