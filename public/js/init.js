(function ($) {
    $(function () {

        $('.sidenav').sidenav();

        $('.slider').slider({
            fullWidth: true,
            indicators: false,
            height: 500
        });

        $('.scrollspy').scrollSpy({
        });

    });
})(jQuery); // end of jQuery name space
