// Skrike the ToDo list on CLick
$("ul").on("click", ".checkboxSpan", function () {
    $(this).parent().toggleClass("strike");
});
// On click of trash icon, delete clicked ToDo list
$("ul").on("click", ".iconSpan", function (e) {
    $(this).parent().fadeOut(400, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

//  Adding list from input
$("#addNewList").on("keypress", function (e) {
    // On pressing Enter
    if (e.which === 13) {
        // retrive the input value
        var newToDo = $(this).val();
        $(this).val("");
        // Add a new list and add to ul
        $("ul").append("<li class='lists'><span class='iconSpan'><i class='far fa-trash-alt fa-xs listDelete' aria-hidden='true'></i></span><span class='checkboxSpan'><input type='checkbox' name='checkboxDone' class='doneCheck'></span>"+" "+newToDo+"</li>");
    }
});

// On click of Plus, toggle input box

$("h4").on("click", ".fa-plus", function () {
    $("#addNewList").fadeToggle();
});