$(document).ready(function(){
    var EnrollShow = true; 
      $('#hide').click(function(){
      if(EnrollShow){
          $("#show").show(800);
          EnrollShow = false;
          $(".Enrollment").css("height","1350px");
          }
        
  
  
      });
     $("#EnrollmentRead").click(function(){
         $("#show").css("display","none");
        EnrollShow = true;
        $(".Enrollment").css("height","980px");
     })
  
  
    
  })