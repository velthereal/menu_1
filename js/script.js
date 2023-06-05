let menuItem = document.querySelectorAll('.menu>li');
let innerMenu = document.querySelectorAll('.inner-menu');
let innerMenuItem = document.querySelectorAll('.inner-menu li');

let languageMW = document.querySelector('#language-mw');
let notificationMW = document.querySelector('#notification-mw');
let privacyMW = document.querySelector('#privacy-mw');

// проблеми зі стрілочкою коли наводжу у відкритому стані!!!
let arrow = document.querySelectorAll('.arrow');
for (let j = 0; j < arrow.length; j++) {
	arrow[j].addEventListener('mouseenter', () => {
		arrow[j].classList.add('hover-arrow');
	})
	arrow[j].addEventListener('mouseleave', () => {
		arrow[j].classList.remove('hover-arrow');
	})
}

innerMenuItem[5].addEventListener('click', () => {
	languageMW.classList.add('div-mw');
})
languageMW.addEventListener('click', () => {
	languageMW.classList.remove('div-mw');
})

innerMenuItem[6].addEventListener('click', () => {
	notificationMW.classList.add('div-mw');
})
notificationMW.addEventListener('click', () => {
	notificationMW.classList.remove('div-mw');
})

innerMenuItem[7].addEventListener('click', () => {
	privacyMW.classList.add('div-mw');
})
privacyMW.addEventListener('click', () => {
	privacyMW.classList.remove('div-mw');
})

console.log(innerMenuItem)


// click for main menu items
for (let i = 0; i < menuItem.length; i++) {
	menuItem[i].addEventListener('click', () => {
		innerMenu[i].classList.toggle('inner-menu-click');
		arrow[i].classList.toggle('hover-arrow');
	})
}
// hover for menu items
for (let i = 0; i < innerMenuItem.length; i++) {
	innerMenuItem[i].addEventListener('mouseenter', () => {
		innerMenuItem[i].classList.add('inner-menu-li-hover')
	});
	innerMenuItem[i].addEventListener('mouseleave', () => {
		innerMenuItem[i].classList.remove('inner-menu-li-hover')
	});
}