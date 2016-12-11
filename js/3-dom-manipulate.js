$(function () {

    var tekstParaPierw = $('#paragraf').text();
    console.log(tekstParaPierw)

    $('.paragraf').text("Wrzuc tu co chcesz");


    $('.paragrafnext').html("Wrzuc tu co chcesz bo <strong>to jest dodatek do paragrafu</strong> z <br> odstępem");


    $('.paragrafnext').append(' <strong>Treść na końcu selektora</strong>');


    $('.paragrafnext').prepend('<strong>"Treść na początku selektora" </strong>');


    $('.paragrafnext').after('Treść poza selektorem ');
    
    $('strong').remove();
    
    $('.paragraf').empty();
    
    $('.paragrafnext').css({'font-size': '3em', 'color': 'red'});
    
    $('h1').addClass('blue');
});