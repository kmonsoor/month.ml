// Call this from the developer console and you can control both instances
var calendars = {};

$(document).ready( function() {
/*    console.info(
        'Welcome to the CLNDR demo. Click around on the calendars and' +
        'the console will log different events that fire.');*/

    // Assuming you've got the appropriate language files,
    // clndr will respect whatever moment's language is set to.
    // moment.locale('ru');

    // Here's some magic to make sure the dates are happening this month.
    var thisMonth = moment().format('YYYY-MM');
    // Events to load into calendar
/*     var eventArray = [
        {
            title: 'Multi-Day Event',
            endDate: thisMonth + '-14',
            startDate: thisMonth + '-10'
        }, {
            endDate: thisMonth + '-23',
            startDate: thisMonth + '-21',
            title: 'Another Multi-Day Event'
        }, {
            date: thisMonth + '-27',
            title: 'Single Day Event'
        }
    ]; */
	
    var eventArray = [];
    
    $('#full-clndr').clndr({
        template: $('#full-clndr-template').html(),
        events: eventArray,
        clickEvents: {
          click: function(target) {
            if(target.events.length) {
              var daysContainer = $('#full-clndr').find('.days-container');
              daysContainer.toggleClass('show-events', true);
              $('#full-clndr').find('.x-button').click( function() {
                daysContainer.toggleClass('show-events', false);
              });
            }
          }
        },
        adjacentDaysChangeMonth: true,
        forceSixRows: false
      });

          // Calendar 3 renders two months at a time, paging 1 month
/*    $('#clndr-4').clndr({
        lengthOfTime: {
            months: 2,
            interval: 1
        },
        events: eventArray
        
        // template: $('#template-calendar-months').html()
    });*/

    // The order of the click handlers is predictable. Direct click action
    // callbacks come first: click, nextMonth, previousMonth, nextYear,
    // previousYear, nextInterval, previousInterval, or today. Then
    // onMonthChange (if the month changed), inIntervalChange if the interval
    // has changed, and finally onYearChange (if the year changed).
/*     calendars.clndr1 = $('.cal1').clndr({
        events: eventArray,
        clickEvents: {
            click: function (target) {
                console.log('Cal-1 clicked: ', target);
            },
            today: function () {
                console.log('Cal-1 today');
            },
            nextMonth: function () {
                console.log('Cal-1 next month');
            },
            previousMonth: function () {
                console.log('Cal-1 previous month');
            },
            onMonthChange: function () {
                console.log('Cal-1 month changed');
            },
            nextYear: function () {
                console.log('Cal-1 next year');
            },
            previousYear: function () {
                console.log('Cal-1 previous year');
            },
            onYearChange: function () {
                console.log('Cal-1 year changed');
            },
            nextInterval: function () {
                console.log('Cal-1 next interval');
            },
            previousInterval: function () {
                console.log('Cal-1 previous interval');
            },
            onIntervalChange: function () {
                console.log('Cal-1 interval changed');
            }
        },
        multiDayEvents: {
            singleDay: 'date',
            endDate: 'endDate',
            startDate: 'startDate'
        },
        showAdjacentMonths: false,
        adjacentDaysChangeMonth: true,
        daysOfTheWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        targets: {
            todayButton: 'clndr-today-button'
        }
    });
 */
//     // Calendar 2 uses a custom length of time: 2 weeks paging 7 days
//     calendars.clndr2 = $('.cal2').clndr({
//         lengthOfTime: {
//             days: 14,
//             interval: 7
//         },
//         events: eventArray,
//         multiDayEvents: {
//             singleDay: 'date',
//             endDate: 'endDate',
//             startDate: 'startDate'
//         },
//         template: $('#template-calendar').html(),
//         clickEvents: {
//             click: function (target) {
//                 console.log('Cal-2 clicked: ', target);
//             },
//             nextInterval: function () {
//                 console.log('Cal-2 next interval');
//             },
//             previousInterval: function () {
//                 console.log('Cal-2 previous interval');
//             },
//             onIntervalChange: function () {
//                 console.log('Cal-2 interval changed');
//             }
//         }
//     });



    // Bind all clndrs to the left and right arrow keys
    $(document).keydown( function(e) {
        // Left arrow
        if (e.keyCode == 37) {
            calendars.clndr1.back();
//             calendars.clndr2.back();
            calendars.clndr3.back();
        }

        // Right arrow
        if (e.keyCode == 39) {
            calendars.clndr1.forward();
//             calendars.clndr2.forward();
            calendars.clndr3.forward();
        }
        
        // Home key
        if (e.keyCode == 36){
            calendars.clndr1.today();
            calendars.clndr3.today();
        }
    });
});
