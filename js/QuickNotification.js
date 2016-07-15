var QuickNotificationArea = $('#quick-notification');
var QuickNotificationNumber = 0;
function QuickNotification(header, message, time, buttons) {
    var id = QuickNotificationNumber++;
    id = id+1;
    QuickNotificationArea.append('<div class="notification" id="quick-notification-' + QuickNotificationNumber + '">' +
        '<div class="header">' +
        '<a class="close close-'+QuickNotificationNumber+'" rel="'+QuickNotificationNumber+'" >+</a><h4>' + header + '</h4>' +
        '</div>' +
        '<div class="body">' +
        message +
        '</div>' +
        '</div>');

    function NotificationClose() {
        $('#quick-notification-'+id).fadeOut('slow', function(){
            $('#quick-notification-'+id).remove();
        });

    }


    $('.close-'+QuickNotificationNumber).click(function(){
        var id = this.rel;
        $('#quick-notification-'+id).fadeOut('slow', function(){
            $('#quick-notification-'+id).remove();
        });
        return false;
    });




        if(time !== 'never'){
            setTimeout(NotificationClose, time);
        }

}




QuickNotification('Hello!', 'Thank you for using QuickNotification.js!=)', 5000);