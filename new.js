const $ = document
const toggleBtn = $.querySelector('#toggle-btn')
const menuItems = $.querySelectorAll('.menu a')
let isMenuActive = false

console.log(menuItems);

toggleBtn.addEventListener('click', () => {
    if (!isMenuActive) {
        console.log("منو باز شد");

        menuItems[0].style.transform = 'translate(150px, 0)'
        menuItems[1].style.transform = 'translate(150px, 90px)'
        menuItems[2].style.transform = 'translate(90px, 150px)'
        menuItems[3].style.transform = 'translate(0, 150px)'

        toggleBtn.classList.add('active')
        isMenuActive = true
    } else {
        console.log("منو بسته شد");

        menuItems.forEach(menuItem => menuItem.style.transform = 'translate(0, 0)')
        
        toggleBtn.classList.remove('active')
        isMenuActive = false
    }
})