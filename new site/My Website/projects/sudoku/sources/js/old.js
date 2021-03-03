/**
 * Created by sutad on 07/10/2017.
 */
console.log('sudoku game javasctipt main file');

var tableData = [{ 
  1 :[5, 2, 1, 6, 8, 9, 4, 7, 3], 
  2 :[6, 8, 4, 7, 1, 3, 2, 9, 5], 
  3 :[7, 3, 9, 4, 5, 2, 8, 1, 6], 
  4 :[8, 7, 3, 1, 2, 5, 9, 6, 4], 
  5 :[1, 5, 2, 9, 6, 4, 3, 8, 7], 
  6 :[9, 4, 6, 3, 7, 8, 1, 5, 2], 
  7 :[3, 6, 5, 2, 9, 1, 7, 4, 8], 
  8 :[4, 9, 7, 8, 3, 6, 5, 2, 1], 
  9 :[2, 1, 8, 5, 4, 7, 6, 3, 9] }, 
{ 
  1 :[8, 9, 5, 1, 4, 3, 6, 7, 2],
  2 :[7, 1, 2, 8, 6, 9, 5, 3, 4], 
  3 :[4, 3, 6, 5, 7, 2, 9, 1, 8], 
  4 :[6, 4, 3, 9, 8, 5, 7, 2, 1], 
  5 :[5, 7, 1, 3, 2, 4, 8, 6, 9], 
  6 :[2, 8, 9, 6, 1, 7, 4, 5, 3], 
  7 :[1, 2, 7, 4, 5, 8, 3, 9, 6], 
  8 :[9, 6, 8, 7, 3, 1, 2, 4, 5], 
  9 :[3, 5, 4, 2, 9, 6, 1, 8, 7] },
{ 1 :[2, 3, 8, 9, 1, 5, 4, 6, 7], 
  2 :[9, 1, 6, 7, 2, 4, 8, 3, 5], 
  3 :[7, 4, 5, 6, 3, 8, 1, 9, 2], 
  4 :[1, 6, 2, 4, 8, 7, 9, 5, 3], 
  5 :[3, 7, 9, 2, 5, 1, 6, 8, 4], 
  6 :[8, 5, 4, 3, 9, 6, 7, 2, 1], 
  7 :[5, 9, 7, 1, 6, 2, 3, 4, 8], 
  8 :[6, 8, 1, 5, 4, 3, 2, 7, 9], 
  9 :[4, 2, 3, 8, 7, 9, 5, 1, 6] },
{ 
  1 :[8, 6, 3, 9, 1, 7, 4, 2, 5], 
  2 :[1, 4, 9, 5, 2, 3, 6, 7, 8], 
  3 :[2, 5, 7, 8, 6, 4, 1, 9, 3], 
  4 :[9, 3, 8, 2, 4, 1, 7, 5, 6], 
  5 :[4, 7, 1, 6, 3, 5, 2, 8, 9], 
  6 : [5, 2, 6, 7, 8, 9, 3, 1, 4], 
  7 :[3, 9, 4, 1, 7, 8, 5, 6, 2], 
  8 :[7, 8, 2, 4, 5, 6, 9, 3, 1], 
  9 :[6, 1, 5, 3, 9, 2, 8, 4, 7] } 
];
//validari

var setValidation=function(){
 var inputs = document.getElementsByTagName('input');
  for(var i = 0; i < inputs.length; i++) {
   inputs[i].addEventListener('keyup', function(e){
    if(isNaN(e.key) || parseInt(this.value) > 9 || parseInt(this.value) < 1){
     this.value = '';
     if(this.value === ''){
       validateLine(this);
       validateColumn(this);
       validateSquare(this);
     }
      return false; 
   }
    validateLine(this);
    validateColumn(this);
    validateSquare(this);
   });
 }
};

//afisare tabel

sudokuContainer = document.querySelector('#sudoku-container');

var easyValue = 65;
var mediumValue = 70;
var hardValue = 75;
var difficultyValue = mediumValue;

var setTableData = function (appendto, array, conditieRandom){
  var table = document.createElement('table');
  var clone = JSON.parse(JSON.stringify(array));
  appendto.innerHTML = "";
  //afisare elemente random
 if(conditieRandom!=0)
 {
  clone = clone[Math.floor(Math.random() * clone.length)];
  //clona pentru hint
  window.cloneForHint = JSON.parse(JSON.stringify(clone));
  //
  var count;
  var k;
  var l;
  for(count = 0; count < difficultyValue ; count++){
       l = Math.floor(Math.random() * 9);
       k = Math.floor((Math.random() * 9)+1);
       if (clone[k][l] != '')
        clone[k][l] = '';
       else
        count--;
     }
 }
  //
  for(var i in clone){   
    var row = document.createElement('tr');
    for(var j in clone[i]){
      var column = document.createElement('td');
      var input = document.createElement('input');
      var p = document.createElement('p'); 
      p.appendChild(document.createTextNode(clone[i][j]));
      if (clone[i][j] != '')
         column.appendChild(p);
      else
        column.appendChild(input);
      row.appendChild(column);
      table.appendChild(row);
      appendto.appendChild(table);
    }
  }
  window.cloneForClear = JSON.parse(JSON.stringify(clone));
  setValidation();
  //adaugare clase patrat
 var tds=document.getElementsByTagName('td');
  for(var i=0;i<tds.length;i++){
    if(i==0 || i==1 || i==2 || i==9 || i==10  || i==11 || i==18 || i==19 || i==20){
      tds[i].className = 'first-square';
    }
    
  }
}
setTableData(sudokuContainer, tableData, 1);

//incercare clear data

sudokuOptions = document.querySelector('.options-container');

//setarea dificultatii 
var setGameData = function(){
  var container = document.createElement('div');
  var level = document.createElement('select');
  var option = document.createElement('option');
  var option1 = document.createElement('option');
  var option2 = document.createElement('option');
  container.className = 'level-container';
  level.className = 'select';
  sudokuOptions.appendChild(container);
  var p = document.createElement('p');
  container.appendChild(p);
  container.appendChild(level);
  p.innerText = 'Select level: ';
    option.innerText = 'Easy';
    option.value = easyValue;
    level.appendChild(option);
    option1.innerText = 'Medium';
    option1.value = mediumValue;
    level.appendChild(option1);
    option2.innerText = 'Hard';
    option2.value = hardValue;
    level.appendChild(option2);

   level.addEventListener('change',function(){
    difficultyValue = this.value;
   	setTableData(sudokuContainer, tableData, 1);
    setTimerData();
   });
};

//functia new game
var setResetData = function(){
  var reset = document.createElement('div');
  reset.className = 'reset-container';
  var button = document.createElement('button');
  button.innerText = 'New Game';
  reset.appendChild(button);
  sudokuOptions.appendChild(reset);
  reset.addEventListener('click', function(){
    setTableData(sudokuContainer,tableData, 1);
    setTimerData();
  });
};


//setarea ceasului
var setTimerData = function(){
  var timer = document.createElement('div');
  if(!!document.querySelector('.timer-container'))
  {
    timer = document.querySelector('.timer-container');
    timer.innerHTML="";
  }
  else
    sudokuOptions.appendChild(timer);
  timer.className = 'timer-container';
  let timerTime = 0;
  var minutes = document.createElement('p');
  var seconds = document.createElement('p');
  var hours   = document.createElement('p');
  minutes.className = 'minutes';
  seconds.className = 'seconds';
  hours.className   = 'hours';
  timer.appendChild(hours);
  timer.appendChild(minutes);
  timer.appendChild(seconds);
 
  setInterval(function(){
     timerTime++;
     numberOfHours   = Math.floor(timerTime / 3600);
     numberOfMinutes = Math.floor(timerTime / 60) % 60;
     numberOfSeconds = timerTime % 60;

     if (numberOfSeconds < 10)
      seconds.innerText = ':' + '0' + numberOfSeconds;
     else
      seconds.innerText = ':' + numberOfSeconds;

     if (numberOfMinutes < 10)
       minutes.innerText = ':' + '0' + numberOfMinutes;
     else
       minutes.innerText = ':' + numberOfMinutes; 

     if (numberOfHours<10)
      hours.innerText = '0' + numberOfHours;
     else
      hours.innerText = numberOfHours;
  },1000);
};

//functia clear
var setClearData = function(){
  var clear = document.createElement('div');
  var p = document.createElement('p');
  clear.className = 'clear-container';
  sudokuOptions.appendChild(clear);
  clear.appendChild(p);
  p.innerHTML = "Clear";
  clear.addEventListener('click', function(){
    setTableData(sudokuContainer, cloneForClear, 0);
  });
}
 
//functia hint
var setHint = function(){
  var hint = document.createElement('div');
  var p = document.createElement('p');
  hint.className = 'hint-container';
  sudokuOptions.appendChild(hint);
  hint.appendChild(p);
  p.innerHTML = "Hint";
  hint.addEventListener('click', function(){
    var adevar=1;
    while(adevar==1)
    {
      var initialIndex = Math.floor(Math.random() * 81);
      if(document.getElementsByTagName('td')[initialIndex].querySelector('input') && !document.getElementsByTagName('td')[initialIndex].childNodes[0].value){
        document.getElementsByTagName('td')[initialIndex].childNodes[0].value = window.cloneForHint[Math.floor(initialIndex/9) + 1 ][initialIndex%9]
        adevar=0;
      }
    }
  });
} 
console.log(cloneForHint);

//validari:



//validari patrat
var validateSquare = function(element){
  var tds = document.querySelectorAll('.first-square');
  var validationArr = [];
  for(var i = 0; i < tds.length ; i++){
     if(tds[i].childNodes[0].value){
   validationArr.push(tds[i].childNodes[0].value);
  }else if(tds[i].childNodes[0].innerText){
   validationArr.push(tds[i].childNodes[0].innerText); 
 }
   if(hasDuplicates(validationArr)){ 
    tds[i].className += ' red-border'; 
   }
   else {
    $(tds[i]).removeClass('red-border');
   }
 }
};


//validari pe linie
var validateLine = function(element){
 var tr = element.parentElement.parentElement;
 var allTds = tr.childNodes;
 var validationArr = []; 
 for(var i= 0; i<allTds.length; i++){
  if(allTds[i].childNodes[0].value){
   validationArr.push(allTds[i].childNodes[0].value);
  }else if(allTds[i].childNodes[0].innerText){
   validationArr.push(allTds[i].childNodes[0].innerText); 
 } 
 } 
 if(hasDuplicates(validationArr)){ 
  tr.className += ' red-border'; 
 }
 else {
  $(tr).removeClass('red-border');
 } 
};

//validari pe coloana
var validateColumn = function(element){
  var td = element.parentElement;
  var table = element.parentElement.parentElement.parentElement;
  var allTrs = table.childNodes;
  var tr = element.parentElement.parentElement;
  var allTds = tr.childNodes;
  var validationArr = []; 
  var index =0 ;
  //acest for afla index-ul(pozitia) td-ului in care introduc valoare
  while((td = td.previousSibling) != null)
    index++;
  

  for(var j=0; j< allTrs.length; j++){
    if(allTrs[j].children[index].childNodes[0].value){
      validationArr.push(allTrs[j].children[index].childNodes[0].value);
    }else if(allTrs[j].children[index].childNodes[0].innerText){
      validationArr.push(allTrs[j].children[index].childNodes[0].innerText);
    }
  }

  if(hasDuplicates(validationArr)){
   for(var j=0; j< allTrs.length; j++)
    allTrs[j].children[index].className += ' red-border';
  }
  else {
   for(var j=0; j< allTrs.length; j++)
    $(allTrs[j].children[index]).removeClass('red-border'); 
  }



}


 function hasDuplicates(array) {
  var valuesSoFar = Object.create(null);
   for (var i = 0; i < array.length; ++i) {
    var value = array[i];
     if (value in valuesSoFar) {
      return true;
   } 
   valuesSoFar[value] = true; 
 } 
 return false;
}

 

//afisarea meniului de optiuni
var setOptionsData = function(){
  setTimerData();
  setGameData();
  setClearData();
  setHint();
  setResetData();
};

setOptionsData();

