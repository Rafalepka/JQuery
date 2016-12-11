$(function () {

    $('body').find('p').css("color", "blue"); // jeden sposob na odwolanie sie i dodanie reguly css
    $('body').find('p').css({'color': 'red'}); // drugi sposob na odwolanie i dodanie reguly
    $('body').find('p').eq(2).css('color', "aqua"); // nadanie koloru 2 elementowi

    $('p').each(function () { // wyswietla elementy
        console.log(this);
    });
    
    $('p').each(function (index) { //zlicza ile razy wykona sie petla
        console.log(index);
    });
    
    $('p').each(function(index){
        $(this).addClass('pararaf-' + index);
        
    });
    


});