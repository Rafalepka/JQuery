$(function() {
    
 $('p').hide(3000).show(3000); //ukrycie

//    
//    function alarm(){
//        alert('Koniec');
//    }
   $('h1').fadeIn(3000).fadeOut(3000).fadeToggle(250); //schowanie i pojawienie
    
    $('h3').animate({'font-size': "3em", 'margin-left': '10px', 'padding': '20px'},  2000, animacja);
    
    function animacja() {
        $('h3').animate({'font-size': "1em", 'margin-left': '0px', "padding": '0px'},  2000);
    }
    
});