$(function () {
    $(".change-eat").on("click", function (event) {
        var id = $(this).data("id");
        var eatState = $(this).data("eaten");

        var eatenState = {
            devoured: eatState
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenState
        }).then(
            function () {
                console.log("Change eat state to: ", eatenState);
                location.reload();
            }
        )
    });

    $("create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New burger added");
                location.reload();
            }
        )

    })
});