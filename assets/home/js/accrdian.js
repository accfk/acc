function accordian() {
    $(".card").on("show.bs.collapse hide.bs.collapse", function (e) {
        if (e.type == 'show') {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
    $('.accordion .card-header a').prepend('<span></span>');
}

$(function () {
    accordian()
});