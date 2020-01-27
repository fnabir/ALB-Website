(function() {

    var slidersContainer = document.querySelector('.sliders-container');

    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--numbers',
        range: [1, 9],
        rangeContent: function (i) {
            return '0' + i;
        },
        style: {
            transform: [{scale: [0.4, 1]}],
            opacity: [0, 1]
        },
        interactive: false
    });

    var titles = ['Passenger Lift','Hospital Lift','Cargo Lift','Escalator','Car Lift','Capsule Lift','Dumbwaiter','Generator','Lift Accessories' ];
    var msTitles = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--titles',
        range: [0, 8],
        rangeContent: function (i) {
            return '<h3>'+ titles[i] +'</h3>';
        },
        vertical: true,
        reverse: true,
        style: {
            opacity: [0, 1]
        },
        interactive: false
    });

	var links = ['passenger-lift','hospital-lift','cargo-lift','escalator','car-lift','capsule-lift','dumbwaiter','generator','cabin-parts' ];
    var msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--links',
        range: [0, 8],
        rangeContent: function (i) {
            return '<a class="ms-slide__link" href="products/'+links[i]+'.html">View More</a>';
        },
        vertical: true,
        interactive: false
    });

    // Get pagination items
    var pagination = document.querySelector('.pagination');
    var paginationItems = [].slice.call(pagination.children);

    // Initializing the images slider
    var msImages = new MomentumSlider({
        // Element to append the slider
        el: slidersContainer,
        // CSS class to reference the slider
        cssClass: 'ms--images',
        // Generate the 4 slides required
        range: [0, 8],
        rangeContent: function () {
            return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
        },
        // Syncronize the other sliders
        sync: [msNumbers, msTitles, msLinks],
        // Styles to interpolate as we move the slider
        style: {
            '.ms-slide__image': {
                transform: [{scale: [1.5, 1]}]
            }
        },
        // Update pagination if slider change
        change: function(newIndex, oldIndex) {
            if (typeof oldIndex !== 'undefined') {
                paginationItems[oldIndex].classList.remove('pagination__item--active');
            }
            paginationItems[newIndex].classList.add('pagination__item--active');
        }
    });
    pagination.addEventListener('click', function(e) {
        if (e.target.matches('.pagination__button')) {
            var index = paginationItems.indexOf(e.target.parentNode);
            msImages.select(index);
        }
    });
})();