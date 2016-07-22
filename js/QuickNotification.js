var QuickNotificationArea = $('#quick-notification');
var QuickNotificationNumber = 0;
var QuickNotificationSetting = {'Side': 'right', 'FadeOutSpeed': 'slow'};
function QuickNotification(header, message, time, theme) {
    var id = QuickNotificationNumber++;
    id = id + 1;

    if (QuickNotificationSetting.Side == 'left') {
        QuickNotificationArea.css({'left': -1, 'right': 1})
    }
    if(theme == undefined){
        theme = 'standard'
    }

    QuickNotificationArea.append('<div class="quick-notification '+theme+'" id="quick-notification-' + QuickNotificationNumber + '">' +
        '<div class="quick-notification-header">' +
        '<a class="quick-notification-close quick-notification-close-' + QuickNotificationNumber + '" rel="' + QuickNotificationNumber + '" >+</a><h4>' + header + '</h4>' +
        '</div>' +
        '<div class="quick-notification-body">' +
        message +
        '</div>' +
        '</div>');

    function NotificationClose() {
        $('#quick-notification-' + id).fadeOut(QuickNotificationSetting.FadeOutSpeed, function () {
            $('#quick-notification-' + id).remove();
        });

    }

    $('.quick-notification-close-' + QuickNotificationNumber).click(function () {
        var id = this.rel;
        $('#quick-notification-' + id).fadeOut(QuickNotificationSetting.FadeOutSpeed, function () {
            $('#quick-notification-' + id).remove();
        });
        return false;
    });


    if (time !== 'never') {
        setTimeout(NotificationClose, time);
    }

}

QuickNotificationSetting.FadeOutSpeed = 'fast';
QuickNotificationSetting.Side = 'right';

