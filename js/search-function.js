var filterizd = $('.imageGallery').filterizr({

    //Default options
    options = {
       animationDuration: 0.5,
       callbacks: {
          onFilteringStart: function() { },
          onFilteringEnd: function() { },
          onShufflingStart: function() { },
          onShufflingEnd: function() { },
          onSortingStart: function() { },
          onSortingEnd: function() { }
       },
       delay: 0,
       delayMode: 'progressive',
       easing: 'ease-out',
       filter: 'all',
       filterOutCss: {
          opacity: 0,
          transform: 'scale(0.5)'
       },
       filterInCss: {
          opacity: 0,
          transform: 'scale(1)'
       },
       layout: 'sameSize',
       selector: '.filtr-container',
       setupControls: true
    }

});