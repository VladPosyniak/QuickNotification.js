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
        $('#quick-notification-'+id).fadeOut('slow');

    }


    $('.close-'+QuickNotificationNumber).click(function(){
        var id = this.rel;
        $('#quick-notification-'+id).fadeOut('slow');
        return false;
    });



    setTimeout(NotificationClose, time);



}

QuickNotification('error', 'something wrong', 2000);
QuickNotification('error', 'something wrong', 3000);
QuickNotification('error', 'something wrong', 4000);

