function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var titleSlider = document.querySelector('.cover-info h2');
var contentSlider = document.querySelector('.cover-info p');

var initialIndex=0;

var setSliderData = function(initialIndex){
	titleSlider.innerHTML=sliders.mainSlider[initialIndex].texts.heading;
	contentSlider.innerHTML=sliders.mainSlider[initialIndex].texts.statement;
}
setSliderData(initialIndex);

var timer= setInterval(mytimer, 5000);

function mytimer(){
	initialIndex++;
	if(initialIndex === sliders.mainSlider.length){
		initialIndex = 0;
	}
	if (initialIndex < 0) {
		initialIndex = sliders.mainSlider.length - 1;
	}
	setSliderData(initialIndex);
};

var firstCircle = document.querySelector('.first-circle');
firstCircle.addEventListener('click', function(){
	initialIndex=0;
	setSliderData(initialIndex);
});
var secondCircle = document.querySelector('.second-circle');
secondCircle.addEventListener('click', function(){
	initialIndex=1;
	setSliderData(initialIndex);
});
var thirdCircle = document.querySelector('.third-circle');
thirdCircle.addEventListener('click', function(){
	initialIndex=2;
	setSliderData(initialIndex);
});