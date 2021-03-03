function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var yearDropdown = document.querySelector(".click-year");
var yearContent = document.querySelector(".year-content")
var rightYearArrow = document.querySelector(".year-arrow-right");
var downYearArrow = document.querySelector(".year-arrow-down");
var monthDropdown = document.querySelector(".click-month");
var monthContent = document.querySelector(".month-content")
var rightMonthArrow = document.querySelector(".month-arrow-right");
var downMonthArrow = document.querySelector(".month-arrow-down");

var dropdown = function(body, content, rightArrow, downArrow , count){
	body.addEventListener('click', function(){
	if (count % 2 ==0) {
		content.style.display = "block";
		rightArrow.style.display = "none";
		downArrow.style.display = "block";
		downArrow.style.marginLeft = "-2px";
	}
	else{
		content.style.display = "none";
		rightArrow.style.display = "block";
		downArrow.style.display = "none";
	}
	count++;
});
};
dropdown(yearDropdown, yearContent, rightYearArrow, downYearArrow, 1);
dropdown(monthDropdown, monthContent, rightMonthArrow, downMonthArrow, 0);
