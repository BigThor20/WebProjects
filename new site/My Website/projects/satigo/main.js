var sliderImage = document.querySelector('.cover img');
var sliderH1 = document.querySelector('.cover-info h1');
var sliderH2 = document.querySelector('.cover-info h2');
var sliderP = document.querySelector('.cover-info p');
var button1 = document.querySelector('.button-group button.first');
var button2 = document.querySelector('.button-group button.second');
var arrowRight = document.querySelector('.arrow-right .fa-arrow-right');
var arrowLeft = document.querySelector('.arrow-left .fa-arrow-left');

var initialIndex=0;

var setSliderData = function(initialIndex){
	sliderImage.src=sliders.mainSlider[initialIndex].imageUrl;
	sliderH1.innerHTML=sliders.mainSlider[initialIndex].texts.heading;
	sliderH2.innerHTML=sliders.mainSlider[initialIndex].texts.statement;
	sliderP.innerHTML=sliders.mainSlider[initialIndex].texts.finalStatement;
	button1.innerHTML=sliders.mainSlider[initialIndex].texts.button1.text;
	button2.innerHTML=sliders.mainSlider[initialIndex].texts.button2.text;

}
setSliderData(initialIndex);
arrowRight.addEventListener('click', function(){
	initialIndex++;
	if(initialIndex === sliders.mainSlider.length){
		initialIndex = 0;
	}
	setSliderData(initialIndex);
});

arrowLeft.addEventListener('click', function(){
	initialIndex--;
	if (initialIndex < 0) {
		initialIndex = sliders.mainSlider.length - 1;
	}
    setSliderData(initialIndex) 
});

var coverContainer = document.querySelector('.cover');

var timer= setInterval(mytimer, 1000);

coverContainer.addEventListener('mouseover', function(){
	clearInterval(timer);
});
coverContainer.addEventListener('mouseout', function(){
	timer = setInterval(mytimer,1000);
});

function mytimer(){
	initialIndex++;
	if(initialIndex === sliders.mainSlider.length){
		initialIndex = 0;
	}
	if (initialIndex < 0) {
		initialIndex = sliders.mainSlider.length - 1;
	}
	setSliderData(initialIndex);
    }

var rightButtonAssignments = document.querySelector(".assignments .direction-right");
var leftButtonAssignments = document.querySelector(".assignments .direction-left");
var assignmentsGroupCol1 = document.querySelector(".elements-group  .col1");
var assignmentsGroupCol2 = document.querySelector(".elements-group  .col2");
var assignmentsContainer = document.querySelector(".assignments");

var index=0;

var setContent = function(content, appendTo){
	for(var i in content){
        if( i !== "sliderBackground" ){
        	var elementDiv = document.createElement('div');
        	var elementPart1 = document.createElement('div');
        	var elementPart2 = document.createElement('div');
        	var firstP = document.createElement('p');
        	var secondP = document.createElement('p');
        	elementDiv.className = 'element';
        	elementPart1.className = 'part1';
        	elementPart2.className = 'part2';
        	firstP.appendChild(document.createTextNode(i));
        	secondP.appendChild(document.createTextNode(content[i]));
        	elementPart1.appendChild(firstP);
        	elementPart2.appendChild(secondP);
        	elementDiv.appendChild(elementPart1);
        	elementDiv.appendChild(elementPart2);
        	appendTo.appendChild(elementDiv);
   } 
   else
   	assignmentsContainer.style.backgroundColor = content[i];
   	}
}


rightButtonAssignments.addEventListener('click', function(){
	event.preventDefault();
   assignmentsGroupCol1.innerHTML='';
   assignmentsGroupCol2.innerHTML='';
   index++;
   	if(index === sliders.secondSlider.length){
		index = 0;
	}
	if (index < 0) {
		index = sliders.secondSlider.length - 1;
	} 
   setContent(sliders.secondSlider[index].leftPart, assignmentsGroupCol1);
   setContent(sliders.secondSlider[index].rightPart, assignmentsGroupCol2); 	  	
});

leftButtonAssignments.addEventListener('click', function(){
	event.preventDefault();
	assignmentsGroupCol1.innerHTML='';
    assignmentsGroupCol2.innerHTML='';
    index--;
   	if(index === sliders.secondSlider.length){
		index = 0;
	}
	if (index < 0) {
		index = sliders.secondSlider.length - 1;
	}
   setContent(sliders.secondSlider[index].leftPart, assignmentsGroupCol1);
   setContent(sliders.secondSlider[index].rightPart, assignmentsGroupCol2);
});




var setThirdSlider = function(i, selectorId){
	var paragrafThirdSlider = document.querySelector('#'+ selectorId +' .part2 .text p');
    var headerThirdSlider = document.querySelector('#'+ selectorId +' .part2 .text h3');
	headerThirdSlider.innerHTML = sliders.thirdSlider[i].subtitle;
	paragrafThirdSlider.innerHTML = sliders.thirdSlider[i].text;
}

var ar_slider = document.getElementsByClassName('slider-first');
var ar_slider1 = document.getElementsByClassName('slider-second')

function addEventListenerList(list, classParam, selectorId){
	for(var i=0, len = list.length; i < len ; i++)
		list[i].addEventListener('click', function(){
			for( var j in list){
				list[j].className = 'slider ' + classParam;
			}
			this.className +=' slider-active';
			var index=0;
			for(var j = 0, len = list.length; j < len; j++){
				if(list[j].className.indexOf('slider-active') !== -1){
					index = j;
				}
			}
			setThirdSlider(index, selectorId);
		});
}

addEventListenerList(ar_slider, 'slider-first', 'clients');
addEventListenerList(ar_slider1, 'slider-second', 'candidates'); 

var modal = document.getElementById('myModal');
var modalContainer= document.querySelector('.modal-container');
var img = document.querySelectorAll('.my-img');
var modalImg = document.querySelector("#img01");

for(var i = 0 ;i < img.length; i++){
	img[i].addEventListener('click', function(){
	modal.style.display = "block";
    modalImg.src = this.src;
});
}

modal.addEventListener('click', function(){
	this.style.display = "none";
});
modalContainer.addEventListener('click', function(e){
	e.stopPropagation();
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}