function resize()
    {
        var heights = window.innerHeight;
        document.getElementById("home").style.height = heights + "px";
    }
    resize();

window.onresize = function() {
    resize();
};

// Burger Menu 
var burgerMenu = function () {
    $('.nav-toggle').on('click', function (event) {
        event.preventDefault();
        var $this = $(this);
        if ($('body').hasClass('off_canvas')) {
            $this.removeClass('active');
            $('body').removeClass('off_canvas');
        }
        else {
            $this.addClass('active');
            $('body').addClass('off_canvas');
        }
    });
};

burgerMenu();

// Click outside of offcanvass
var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
        var container = $("#side-menu, .nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('off_canvas')) {
                $('body').removeClass('off_canvas');
                $('.nav-toggle').removeClass('active');
            }
        }
    });
    $(window).scroll(function () {
        if ($('body').hasClass('off_canvas')) {
            $('body').removeClass('off_canvas');
            $('.nav-toggle').removeClass('active');
        }
    });
};

mobileMenuOutsideClick();