$(window).on("load", () => {
    $("#udDots")
        .fadeOut(300, () => {
            $(".typewriter h1").fadeIn();
            $("#udBgLeft").animate({left: "-50%"}, 300);
            $("#udBgRight").animate({right: "-50%"}, 300, () => {
                $("#udPreLoader").fadeOut(10);
            });
        });
});
