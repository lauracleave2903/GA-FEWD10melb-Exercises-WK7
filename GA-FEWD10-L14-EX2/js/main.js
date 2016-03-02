//DELAYING THE CODE FROM EXECUTING UNTIL ALL DOM ASSETS HAVE BEEN LOADED
$(document).ready(function () {

    //PREVENTING THE submit BUTTON FROM REFRESHING THE PAGE
    $('input[type="submit"]').click(function (event) {
        event.preventDefault();

        //SETTING A VARIABLE TO GET THE VALUE OF THE #addItem INPUT
        var newItem = $('#addItem').val();
        //HOWEVER, IF newItem DOES NOT EQUAL 'BLANK' OR 'NOTHING', THEN ADD THE NEW li ITEM AT TOP OF THE LIST
        if (newItem != '') {
            $('ul').prepend('<li>' + newItem + '</li>');
        }

        //RESETTING THE INPUT FIELD AFTER CLICKING SUBMIT
        $('#addItem').val("");
        $('#addItem').attr("placeholder", "Add an item...");

    });

    //TOGGLING THE CLASS complete IF THE USER CLICKS li
    $('ul').on("click", "li", function () {
        $(this).toggleClass('complete');
    });

});
