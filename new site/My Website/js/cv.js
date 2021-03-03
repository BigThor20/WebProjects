function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//functie pentru animatii 
var procent100 = document.querySelector(".pro100");
var procent10 = document.querySelector(".pro10");
var procent97 = document.querySelector(".pro97");
var procent95 = document.querySelector(".pro95");
var procent90 = document.querySelector(".pro90");
var procent86 = document.querySelector(".pro86");
var procent80 = document.querySelector(".pro80");
var procent60 = document.querySelector(".pro60");
var procent40 = document.querySelector(".pro40");
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#first-start');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          if($( procent100 ).hasClass( "pro-100" ) !== true)
            procent100.className += " pro-100";
          if($( procent10 ).hasClass( "pro-100" ) !== true)
            procent10.className += " pro-100";
          if($( procent97 ).hasClass( "pro-97" ) !== true)
            procent97.className += " pro-97";
          if($( procent95 ).hasClass( "pro-95" ) !== true)
            procent95.className += " pro-95";
          if($( procent90 ).hasClass( "pro-90" ) !== true)
            procent90.className += " pro-90";
          if($( procent86 ).hasClass( "pro-86" ) !== true)
            procent86.className += " pro-86";
          if($( procent80 ).hasClass( "pro-80" ) !== true)
            procent80.className += " pro-80";
          if($( procent60 ).hasClass( "pro-60" ) !== true)
            procent60.className += " pro-60";
          if($( procent40 ).hasClass( "pro-40" ) !== true)
            procent40.className += " pro-40";
       }
   });
    }
});

