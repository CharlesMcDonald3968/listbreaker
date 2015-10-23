(function ($) {
    'use strict';
    $.fn.listbreaker = function (options) {

        var settings = $.extend({
                // These are the defaults.
                breakSets: 4,
                selector: 'li',
                wrapType: '<section>',
                wrapClass: "wrapper",
                elemClass: "element"
            }, options),
            $set = $(settings.selector).not(this),
            newSet = [],
            currentWrapper,
            $that = this;

        if ($set.length > 4) {

            $.each($set, function (index, value) {
                var ind = index + 1;
                if (index % settings.breakSets === 0 || index === 0) {
                    currentWrapper = $(settings.wrapType).addClass(settings.wrapClass).appendTo($that);
                    $(value).addClass(settings.elemClass).appendTo(currentWrapper).get(Math.floor(index / settings.breakSets));

                } else {
                    $(value).addClass(settings.elemClass).appendTo(currentWrapper).get(Math.floor(index / settings.breakSets));
                }
            });

        }
    };

}(jQuery));