var clndr = {};

$(function () {
    var currentMonth = moment().format('YYYY-MM');
    var nextMonth = moment().add('month', 1).format('YYYY-MM');

    var events = [
        /*    { date: currentMonth + '-' + '10', title: 'Persian Kitten Auction', location: 'Center for Beautiful Cats' },
            { date: currentMonth + '-' + '19', title: 'Cat Frisbee', location: 'Jefferson Park' },
            { date: currentMonth + '-' + '23', title: 'Kitten Demonstration', location: 'Center for Beautiful Cats' },
            { date: nextMonth + '-' + '07',    title: 'Small Cat Photo Session', location: 'Center for Cat Photography' }*/
    ];

    window.full_clndr = $('#full-clndr').clndr({
        template: $('#full-clndr-template').html(),
        daysOfTheWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        numberOfRows: 5,
        targets: {
            today: 'today-button'
        }
        // events: events,
    });

    window.mini_clndr = $('#mini-clndr').clndr({
        template: $('#mini-clndr-template').html(),
        adjacentDaysChangeMonth: true,
        numberOfRows: 5
        // lengthOfTime: {months: 2, interval:1}
        // events: events,
        /*    clickEvents: {
              click: function(target) {
                if(target.events.length) {
                  var daysContainer = $('#mini-clndr').find('.days-container');
                  daysContainer.toggleClass('show-events', true);
                  $('#mini-clndr').find('.x-button').click( function() {
                    daysContainer.toggleClass('show-events', false);
                  });
                }
              }
            },*/
    });

    $('#today-button').click(function () {
        window.full_clndr.today();
        window.mini_clndr.today();
    });

    $(document).keydown(function (e) {
        // Left arrow
        if (e.keyCode === 37) {
            window.full_clndr.back();
            window.mini_clndr.back();
        }

        // Right arrow
        if (e.keyCode === 39) {
            window.full_clndr.forward();
            window.mini_clndr.forward();
        }

        // Home key
        if (e.keyCode === 36) {
            window.full_clndr.today();
            window.mini_clndr.today();
        }
    });

});