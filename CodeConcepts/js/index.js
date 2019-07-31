$(document).ready(function () {


// Main menu as an accordian style
    // each menu button has class .accordian
    // every time a button is seleted the following function is activated
        // whichever button is clicked on, a function is applied
            // the selected button will toggleClass the class to active
            // the sibling to the button (main tag with the class .panel in the html) display as none if the current display is set to block, if the current display is none, then the display will then change to block.


    $(".accordion").each(function() {

        $(this).click(function () {

            $(this).toggleClass("active");

            var panel = this.nextElementSibling;

            if ($(panel).css("display") === "block") {
                $(panel).css("display", "none")
            } else {
                $(panel).css("display", "block")
            }
        })
    });



// As soon as scrolling occurs the function of StickyHeader will be enabled
    // The entire header sticks to the top of the screen
        // When you scroll more than the size of the header, css classes are added to header elements.
            // Resulting in the sticky header with the following attributes: smaller header area; smaller h1; no h2; bottom-border shadow; Back to Top button is opaque.  

    window.onscroll = function () { 
        stickyHeader() 
    }

    let header = $('header');
    let sticky = header.offset().top;

    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            $('header').addClass('sticky');
            $('h2').css('display', 'none');
            $('header').css({ 'height': '10vh', 'box-shadow': '0 4px 8px 0 rgba(0,0,0,0.2)' });
            $('h1').css('font-size', '4vh');
            $('#backtop').css('opacity', '1');
        } else {
            $('header').removeClass('sticky');
            $('h2').css('display', 'block');
            $('header').css({ 'height': '20vh', 'box-shadow': 'none' });
            $('h1').css('font-size', '7vh');
            $('#backtop').css('opacity', '.2');
        }
    }

    // Back to Top button scrolls the html body content back to the top of the page when selected

    $('#backtop').click(function () {
        $('html, body').animate({ scrollTop: 0 });
    });




    // CONDITIONAL TAB   
    // When the yes button is selected:
        // No button disappears 
        // Instructional text disappears
        // feedback appears
        // Conditionalimage2 appears
    // When the no button is selected:
        // Yes button disappears 
        // Instructional text disappears
        // feedback appears
        // Text appears
    // Reset button resets all Conditional section elements back to their original positions

    $('#mangoButtonYes').click(function () {
        $('#conditionalImage2').css('display', 'block');
        $('#mangoButtonNo').css('display', 'none');
        $('#feedbackconditional').css('display', 'flex');
        $('#conditionalyesno').css('visibility', 'hidden');
    });

    $('#mangoButtonNo').click(function () {
        $('#conditionalImage2').css('display', 'none');
        $('#mangoButtonYes').css('display', 'none');
        $('#answerno').css('display', 'block');
        $('#feedbackconditional').css('display', 'flex');
        $('#conditionalyesno').css('visibility', 'hidden');
    });

    $('#resetconditional').click(function () {
        $('#mangoButtonYes').css('display', 'block', 'background-color', 'midnightblue');
        $('#mangoButtonNo').css('display', 'block', 'background-color', 'midnightblue');
        $('#conditionalImage2').css('display', 'none');
        $('#answerno').css('display', 'none');
        $('#feedbackconditional').css('display', 'none');
        $('#conditionalyesno').css('visibility', 'visible');
    });





    // FUNCTION TAB
    // When the image is selected: 
        // #function2-4 appear in 1s delays
        // Instructional text disappears
        // feedback text appears
    // Reset button resets all Conditional section elements back to their original positions

    $('#function1').click(function () {
        $('#function2').css({ 'visibility': 'visible', 'transition-delay': '1s' });
        $('#function3').css({ 'visibility': 'visible', 'transition-delay': '2s' });
        $('#function4').css({ 'visibility': 'visible', 'transition-delay': '3s' });
        $('#feedbackfunction').css('display', 'flex');
        $('#duckfunction').css('visibility', 'hidden');
    });


    $('#feedbackfunction').click(function () {
        $('#function2').css({ 'visibility': 'hidden', 'transition-delay': '0s' });
        $('#function3').css({ 'visibility': 'hidden', 'transition-delay': '0s' });
        $('#function4').css({ 'visibility': 'hidden', 'transition-delay': '0s' });
        $('#feedbackfunction').css({ 'display': 'none', 'transition-delay': '0s' });
        $('#duckfunction').css('visibility', 'visible');
    });



    // DATA TAB
    // When the assign language button is selected:
        // The assign language button disappears
        // Instructional text disappears
        // image changes to duckMenu2
        // feedback text appears
    // Reset button resets all Conditional section elements back to their original positions 


    $('#assignlanguage').click(function () {
        $('#duckMenu1').css('display', 'none');
        $('#duckMenu2').css('display', 'flex', 'flex-direction', 'column', 'justify-content', 'center');
        $('#assignlanguage').css('opacity', '0');
        $('#feedbackdata').css('display', 'flex');
        $('#selectdata').css('display', 'none');
    });

    $('#feedbackdata').click(function () {
        $('#duckMenu1').css('display', 'flex');
        $('#duckMenu2').css('display', 'none');
        $('#assignlanguage').css('opacity', '1');
        $('#feedbackdata').css('display', 'none');
        $('#selectdata').css('display', 'flex');
    });



    // VARIABLE TAB
    // The semi-opque ingredients can be selected in any order
    // When the ingredients are selected they have the class opacity1 added where the opacity is 100%
    // Once all of the ingredients are selected:
        // the instructional text disappears
        // Make a Quich button apears
    // When the Make a Quiche button is selected:
        // the ingredients disappear
        // the button Make a Quich a disappears
        // The quiche image appears
        // feedback text appears
    // Reset button resets all Conditional section elements back to their original positions

    $('#ingredientscomp img').click(function () {
        $(this).addClass('opacity1');

        let img1 = $('#variableImage1').hasClass('opacity1');
        let img2 = $('#variableImage2').hasClass('opacity1');
        let img3 = $('#variableImage3').hasClass('opacity1');
        let img4 = $('#variableImage4').hasClass('opacity1');

        console.log(img1 && img2 && img3 && img4)

        if (img1 && img2 && img3 && img4) {
            $('#section1Button').css('display', 'flex');
            $('#ingredientsselect').css('visibility', 'hidden');
        } else {
            $('#section1Button').css('display', 'none');
            $('#ingredientsselect').css('visibility', 'visible');
        }

    });


    $('#section1Button').click(function () {
        $('#quicheVariable').css('display', 'flex');
        $('#variableImage1').css('display', 'none');
        $('#variableImage2').css('display', 'none');
        $('#variableImage3').css('display', 'none');
        $('#variableImage4').css('display', 'none');
        $('#section1Button').css('display', 'none');
        $('#feedbackvariable').css('display', 'flex');
    });

    $('#feedbackvariable').click(function () {
        $('#section1Button').css('display', 'none');
        $('#feedbackvariable').css('display', 'none');
        $('#quicheVariable').css('display', 'none');
        $('#variableImage1').removeClass('opacity1');
        $('#variableImage2').removeClass('opacity1');
        $('#variableImage3').removeClass('opacity1');
        $('#variableImage4').removeClass('opacity1');
        $('#variableImage1').css('display', 'flex');
        $('#variableImage2').css('display', 'flex');
        $('#variableImage3').css('display', 'flex');
        $('#variableImage4').css('display', 'flex');
        $('#ingredientsselect').css('visibility', 'visible');
    });






    // LOOP TAB
    // When the oven is selected:
        //  The image changes to loopImage2
        // The counter is activated to count up to 375 and then stop
            // The counter is a math function which animated over a 3s period where it counts round numbers from the inital 0 in the HTML to the definied 375 in the counter function.
        // When the counter reaches 375:
            // The background of the timer changes to yellow
            // The moving stroke background around the timer stops
            // The feedback appears
    // Reset button resets all Conditional section elements back to their original positions

    $('#loopImage1').click(function () {
        $('#loopImage1').css('display', 'none');
        $('#loopImage2').css('display', 'block');
        $('#selectloop').css('display', 'none');
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate(
                {
                    Counter: 375
                },
                {
                    duration: 3000,
                    easing: 'swing',
                    step: function (temperature) {
                        $(this).text(Math.ceil(temperature));
                    },
                    complete: function () {
                        $('#feedbackloop').css('display', 'flex');
                        $('.timer').css('background-color', '#ffee9a');
                        $('.animateStroke').css('animation', 'none');
                    }
                });
        });
    });


    $('#feedbackloop').click(function () {
        $('.timer').css('background-color','lightgrey');
        $('.count').text('0');
        $('#feedbackloop').css('display', 'none');
        $('#loopImage1').css('display', 'block');
        $('#loopImage2').css('display', 'none');
        $('#selectloop').css('display', 'flex');
        $('.animateStroke').css('animation', 'animate 4s linear infinite');
    });


});