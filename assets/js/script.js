let menuBtn = document.getElementById("menu-btn")
	header = document.getElementById("header")
	img = document.getElementById("img")
	gridCont = document.getElementsByClassName("main__grid-container")
	cruiseImg = document.getElementsByClassName("cruise__img")
	popupImg = document.getElementsByClassName("popup-img")
	popup = document.getElementById("popup")
	ppWind = document.getElementById("popup-window")
	closeBtn = document.getElementById("popup-close")
	nextBtn = document.getElementById("popup-next");

// scroll to catalog-----------------------------------------------------------
document.getElementById("scroll-btn").onclick = function() {
	handleButtonClick()
};

function handleButtonClick() {
	let scrollTo = document.querySelector(".main__catalog-title")
	scrollTo.scrollIntoView({
		block: "start",
		behavior: "smooth"
	});
}


// drop-menu-------------------------------------------------------------------
menuBtn.onclick = function () {
	let menu = document.getElementById("menu-list");

	img.classList.toggle("rotate");
	menu.classList.toggle("menu-tog");

};

// Activasion of img's---------------------------------------------------------
for (var i = 0; i < cruiseImg.length; i++) {
	cruiseImg[i].onclick = function () {

		popup.style.display = "block";
		ppWind.style.width = gridCont[0].clientWidth + "px";
	}
}

// Simlpe slider in popup-window-----------------------------------------------------
var currentSlide = 0
nextBtn.onclick = function () {
	let showing = document.getElementsByClassName("showing");

	currentSlide = (currentSlide+1)%popupImg.length;

	showing[0].classList.remove("showing");
	popupImg[currentSlide].classList.add("showing");
};

closeBtn.onclick = function () {
	popup.style.display = "none";
};
