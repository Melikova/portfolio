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
        if ($('body').hasClass('offcanvas')) {
            $this.removeClass('active');
            $('body').removeClass('offcanvas');
        }
        else {
            $this.addClass('active');
            $('body').addClass('offcanvas');
        }
    });
};

burgerMenu();
