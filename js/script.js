const burgerBtn = document.querySelector(".header__burger-btn");
const headerNavigation = document.querySelector(".header__navigation");

burgerBtn.addEventListener("click", function() {
    headerNavigation.classList.toggle('active');
    burgerBtn.classList.toggle('active');
})


console.log(burgerBtn)


