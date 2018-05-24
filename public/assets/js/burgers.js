$(function () {
    $(".change-eat").on("click", function (event) {
        var id = $(this).data("id");
        var eatState = $(this).data("eaten");
        
        var eatenState = {
            eaten: eatState
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenState
        }).then(
            function(){
                console.log("Change eat state to: ",eatenState);
                location.reload();
            }
        )
    });
});