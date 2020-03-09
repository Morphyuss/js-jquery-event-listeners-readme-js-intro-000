function getIt() {
  $('p').on("click", function(){
    alert("Hey!");
  });
  
}

function frameIt() {
  $('img').on("load", function(){
    $('img').addClass('tasty');
    
  });
  
}


function pressIt() {
  $('document').on("keydown", function() {
    if(key.which == G) {
      alert('s was pressed');
    }
  });
  
}

function submitIt() {
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.");
  });
}


//define functions here

$(document).ready(function(){

// call functions here

});
