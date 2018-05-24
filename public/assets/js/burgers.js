$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");
        var eatenState = {
            eaten: newEat
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEat
        }).then(
            function(){
                console.log("Eaten burger id: ",newEat);
                location.reload();
            }
        )
    });
});