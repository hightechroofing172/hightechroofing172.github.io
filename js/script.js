(function ($) {

  "use strict";


  $(document).ready(function () {



    (function ($) {

      "use strict";
    
    
      $(document).ready(function () {
    
    
    
      
    
        window.addEventListener("load", (event) => {
          //isotope
          $('.isotope-container').isotope({
            // options
            itemSelector: '.item',
            layoutMode: 'masonry',
          });
    
    
    
          // Initialize Isotope
          var $container = $('.isotope-container').isotope({
            // options
            itemSelector: '.item',
            layoutMode: 'masonry',
          });
    
          $(document).ready(function () {
            //active button
            $('.filter-button').click(function () {
              $('.filter-button').removeClass('active');
              $(this).addClass('active');
            });
          });
    
          // Filter items on button click
          $('.filter-button').click(function () {
            var filterValue = $(this).attr('data-filter');
            if (filterValue === '*') {
              // Show all items
              $container.isotope({ filter: '*' });
            } else {
              // Show filtered items
              $container.isotope({ filter: filterValue });
            }
          });
    
        });
    
    
    
      });
    
    
    })
    
    

    window.addEventListener("load", (event) => {
      //isotope
      $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry',
      });



      // Initialize Isotope
      var $container = $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry',
      });

      $(document).ready(function () {
        //active button
        $('.filter-button').click(function () {
          $('.filter-button').removeClass('active');
          $(this).addClass('active');
        });
      });

      // Filter items on button click
      $('.filter-button').click(function () {
        var filterValue = $(this).attr('data-filter');
        if (filterValue === '*') {
          // Show all items
          $container.isotope({ filter: '*' });
        } else {
          // Show filtered items
          $container.isotope({ filter: filterValue });
        }
      });

    });



  });


})

