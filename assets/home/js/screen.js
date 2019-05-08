function fullScreen() {
    if ($fullScreen.exists()) {
        $fullScreen.each(function () {
            var $elem = $(this),
                elemHeight = $window.height();
            if ($window.width() < 768) $elem.css('height', elemHeight / 1);
            else $elem.css('height', elemHeight);
        });
    }
    if ($halfScreen.exists()) {
        $halfScreen.each(function () {
            var $elem = $(this),
                elemHeight = $window.height();
            $elem.css('height', elemHeight / 2);
        });
    }
}

$(function () {
    fullScreen();
});