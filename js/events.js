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
    if(key.which == 71) {
      alert('s was pressed');
    }
  });
  
}



//define functions here

$(document).ready(function(){

// call functions here

});
