// === Main Navigation ===
const mainNav = document.querySelector(".main-nav");
const mainNavLists = document.querySelectorAll(".nav-left .nav-menu > li > a");
const subMenus = document.querySelectorAll(".sub-menu");
const subMenuBG = document.querySelector(".sub-menu-bg");
let listIndex = 0;

mainNavLists.forEach(list => {
  list.addEventListener("mouseover", (e) => {
    const lists = [...e.target.parentElement.parentElement.children];
    listIndex = lists.indexOf(e.target.parentElement);
    
    lists.forEach(li => {
      li.classList.remove("active");
    });
    subMenus.forEach(subMenu => {
      subMenu.classList.remove("active");
    });

    list.parentElement.classList.add("active");
      subMenus[listIndex].classList.add("active");
      subMenuBG.classList.add("active");
  });
});
mainNav.addEventListener("mouseleave", () => {
  const mainNavLi = document.querySelectorAll(".nav-left .nav-menu > li");
  mainNavLi.forEach(li => {
    li.classList.remove("active");
  });
  subMenus.forEach(subMenu => {
    subMenu.classList.remove("active");
  });
  subMenuBG.classList.remove("active");
});

// langMenu
const langMenu = document.querySelector(".lang-menu");
const langMenuList = document.querySelector(".lang-menu-list");
langMenu.addEventListener("click", function() {
  langMenuList.classList.toggle("active");
});


// ** SLIDE **
// === Main Slide ===
const mainSlideItems = document.querySelectorAll(".main-slide img");
let mainSlideIndex = 0;

function mainSlide() {
  mainSlideItems.forEach(items => {
    items.classList.remove("show");
  });
  mainSlideItems[mainSlideIndex].classList.add("show");
  mainSlideIndex = (mainSlideIndex + 1) % mainSlideItems.length;
}
setInterval(mainSlide, 5000);