jQuery(document).ready(function ($) {
    $("#prepend-form").on('submit', function (event){
    event.preventDefault();
    if ($("#sometext").val() != ""){
        $("#tasks").prepend("<p>" + $("#sometext").val() + "</div>");
    }
    else{
        alert("Text can not be empty");
    }
    });
});
