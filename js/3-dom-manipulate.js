$(function () {

    var tekstParaPierw = $('#paragraf').text();
    console.log(tekstParaPierw)

    $('.paragraf').text("Wrzuc tu co chcesz");


    $('.paragrafnext').html("Wrzuc tu co chcesz bo <strong>to jest dodatek do paragrafu</strong> z <br> odstępem");


    $('.paragrafnext').append(' <strong>Treść na końcu selektora</strong>');


    $('.paragrafnext').prepend('<strong>"Treść na początku selektora" </strong>');


    $('.paragrafnext').after('Treść poza selektorem ');


});