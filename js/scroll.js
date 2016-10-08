var width;
var height;
$(document).ready(function(){
  $("#bg").css("transform","translate3d(0px, 0px, 0px)");
  width = $(window).width();
  height = $(window).height();
})

$(document).scroll(function(e){
  h = $(document).scrollTop();
  // console.log(h)
  if(h < height){
      section1(h);
  }else{
    header();
  }
})

function section1(h){
  $("#bg").css("transform","translate3d(0px, "+h/3 +"px, 0px)");
}

function header(){
  
}
