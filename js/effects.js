$(document).ready(function(){
   click_events();
});

function click_events(){
    $("#menu ul li a").click(function(){
    $(this).parent().parent().parent().animate({"margin-left":"-100%"});
    $("#btn-menu").prop("checked", false);
    $("label").click(function(){
        if($("#btn-menu").prop("checked", true)){
          $("#menu").animate({"margin-left":"0"});
        }
    })
  });
}

