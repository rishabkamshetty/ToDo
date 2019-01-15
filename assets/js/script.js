// Skrike the ToDo list on CLick
$("ul").on("click", ".doneCheck", function () {
    $(this).siblings().find("label").toggleClass("strike");
});
// On click of trash icon, delete clicked ToDo list
$("ul").on("click", ".iconSpan", function (e) {
    $(this).parent().fadeOut(400, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

/* //  Adding list from input
$("#addNewList").on("keypress", function (e) {
    // On pressing Enter
    if (e.which === 13) {
        // retrive the input value
        var newToDo = $(this).val();
        $(this).val("");
        // Add a new list and add to ul
        $("ul").append("<li class='lists'><span class='iconSpan'><i class='far fa-trash-alt fa-xs listDelete' aria-hidden='true'></i></span>   <span class='pretty p-icon p-curve p-pulse'>  <input type='checkbox' class='doneCheck'>  <span class='state p-success'><i class='icon mdi mdi-check'></i><label>" + " " + newToDo + "</label></span></span></li>");
    }
});
 */

//  Adding list from input with wrap
$("#addNewList").on("keypress", function (e) {
    // chech the input length
    if ($(this).val().length < 26) {
        // On pressing Enter
        if (e.which === 13) {
            // retrive the input value
            var newToDo = $(this).val();
            $(this).val("");
            // Add a new list and add to ul
            $("ul").append("<li class='lists'><span class='iconSpan'><i class='far fa-trash-alt fa-xs listDelete' aria-hidden='true'></i></span>   <span class='pretty p-icon p-curve p-pulse'>  <input type='checkbox' class='doneCheck'>  <span class='state p-success'><i class='icon mdi mdi-check'></i><label>" + " " + newToDo + "</label></span></span></li>");
        }
    } else {
        alert(" Numbers of charaters are limited 25");
    }

});



// On click of Plus, toggle input box

$("h4").on("click", ".fa-plus", function () {
    $("#addNewList").fadeToggle();
});