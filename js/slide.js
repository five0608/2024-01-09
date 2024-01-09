$(function(){
    var UpDownSilde=0;
    var slidePosition;
    setInterval(function(){
        if(UpDownSilde<2){
            UpDownSilde++;
        }else{
            UpDownSilde=0;
        }slidePosition=UpDownSilde*(-300)+"px";
        $(".sliders").animate({top:slidePosition},400);
    },3000);
})