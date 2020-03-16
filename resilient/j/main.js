 if ($.fn.imagesLoaded) {
        $('.uza-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.uza-portfolio').isotope({
                itemSelector: '.single-portfolio-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single-portfolio-item'
                }
            });
        });
    }