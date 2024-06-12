$(document).ready(function() {
    // Initialize Isotope
    var $grid = $('.portfolio-box').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        percentPosition: true,
        masonry: {
            columnWidth: '.portfolio-sizer',
            gutter: '.gutter-sizer'
        }
    });

    // Filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        // Update active class
        $('.filter-button-group button').removeClass('active');
        $(this).addClass('active');
    });

    // Filter animation
    function filter_animation() {
        var active_bg = $(".portfolio-filter .button-group .active-bg");
        var element = $(".portfolio-filter .button-group .active");
        $(".portfolio-filter .button-group button").on("click", function () {
            var e = $(this);
            activeFilterBtn(active_bg, e);
        });
        activeFilterBtn(active_bg, element);
    }

    function activeFilterBtn(active_bg, e) {
        if (!e.length) {
            return false;
        }
        var leftOff = e.offset().left;
        var width = e.outerWidth();
        var menuLeft = $(".portfolio-filter .button-group").offset().left;
        e.siblings().removeClass("active");
        e.closest("button")
            .siblings()
            .addClass(".portfolio-filter .button-group");
        active_bg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
    }

    filter_animation();
});
