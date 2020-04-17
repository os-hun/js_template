$(function () {
    $(".ceo_card").on('click', function () {
        $(".ceo_card").addClass("show");
        $(".black").css("display", "block");
        $(".ceo_detail").css({
            "transition": "all. 1s ease-in-out",
            "display": "block",
        });
    });
    $(".black").on('click', function () {
        $(".ceo_card.show").removeClass("show");
        $(".black").css("display", "none");
        $(".ceo_detail").css({
            "transition": "all .1s ease-in-out",
            "display": "none",
        });
    });
});
