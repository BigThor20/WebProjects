var firstHour = document.querySelector('.hour1'),
 firstMinute = document.querySelector('.minute1'),
 firstSecond = document.querySelector('.second1'),
 secondHour = document.querySelector('.hour2'),
 secondMinute = document.querySelector('.minute2'),
 secondSecond = document.querySelector('.second2'),
 finalHour = document.querySelector('.hour3'),
 finalMinute = document.querySelector('.minute3'),
 finalSecond = document.querySelector('.second3'),
 button = document.querySelector('.button'); 

var total;
button.addEventListener('click', function(e){ 
  e.preventDefault();
  var totalHour, totalMinute, totalSecond, total;
  totalHour = parseInt(secondHour.value) - parseInt(firstHour.value);
  totalMinute = parseInt(secondMinute.value) - parseInt(firstMinute.value);
  totalSecond = parseInt(secondSecond.value) - parseInt(firstSecond.value);
  total = totalHour*3600 + totalMinute*60 + totalSecond;
  finalHour.value = parseInt(Math.floor(total / 3600));
  finalMinute.value = parseInt(Math.floor((total / 60) % 60));
  finalSecond.value = parseInt(total % 60);
});
