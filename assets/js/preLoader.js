$(window).on("load", () => {
    $("#udDots")
        .fadeOut(300, () => {
            $("#udBgLeft").animate({left: "-50%"}, 300);
            $("#udBgRight").animate({right: "-50%"}, 300, () => {
                $("#udPreLoader").fadeOut(10);
            });
        });
});
