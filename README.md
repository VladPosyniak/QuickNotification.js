# QuickNotification.js

![](https://4.downloader.disk.yandex.ua/preview/d6bc5b6b11b4d2b9a70ed00a72b55aa05f3ac82425315b0cd4eb9071421320ab/inf/0S7VfByo7GUS3gXenS0UfeHvuzt1ppxoc607J0Y74EQeWkBkkDaMROeI-VE1Lhto0_a0vIKrH-sO7bPCJ9FHYw%3D%3D?uid=214491805&filename=QuickNotification.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&tknv=v2&size=1280x827)

Quickstart
--------

First, you have to connect the `Jquery`, and the script itself:

```html
<script src="js/jquery-3.0.0.min.js"></script>
<script src="js/QuickNotification.js"></script>
```

After, you need to connect the CSS style:

```html
<link rel="stylesheet" href="css/QuickNotification.css">
```

Finally, you have to insert this markup anywhere in your page:

```html
<div id="quick-notification">
</div>
```

How to use
--------

QuickNotification.js have only one function - `QuickNotification(header, message, time, theme(optional))`.

For example you can:

```js
QuickNotification('Hello!', 'My name is Vlad!:)', 5000, 'success');
```

Arguments values
--------

* header = `string`
* message = `string`
* time = `number`or` 'never'`
* theme = 'info', 'danger', 'success' or 'standard'(default)

Settings
--------

You can customize your notification:

```js
QuickNotificationSetting.FadeOutSpeed = 'fast';
QuickNotificationSetting.Side = 'right';
```

All settings:

* QuickNotificationSetting.FadeOutSpeed = 'fast' or 'slow'(default) - The rate of disappearance of the notification.
* QuickNotificationSetting.Side = 'right' or 'left'(default) - Part of the screen which will display a notification.
* Coming soon:)

Also, you can open the `QuickNotification.css` and fully configure notifications for themselves.

Contacts
--------

If you have questions or ideas, you can write to [me](https://new.vk.com/bitfox4d).