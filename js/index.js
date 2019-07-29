$(document).ready(function () {

    $('#header').load('menu.html');
    $('#footer').load('footer.html'); 

    // $.ajax({
    //     url: "menu.html",
    //     dataType: "html",
    //     success: function(html) {
    //        $("#header").html(html);
    //     }
    //  });

    $(window).on('load', function() {
        $("#container1").twentytwenty();
    });

});

