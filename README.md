# QuickNotification.js

![](https://pp.vk.me/c627231/v627231735/3ed3f/MS2mI6Dk1iQ.jpg)

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
* time = `number`or `'never'`
* theme = `'info'`, `'danger'`, `'success'` or `'standard'`(default)

Settings
--------

You can customize your notification:

```js
QuickNotificationSetting.FadeOutSpeed = 'fast';
QuickNotificationSetting.Side = 'right';
```

All settings:

* `QuickNotificationSetting.FadeOutSpeed` = `'fast'` or `'slow'`(default) - The rate of disappearance of the notification.
* `QuickNotificationSetting.Side` = `'right'` or `'left'`(default) - Part of the screen which will display a notification.
* Coming soon:)

Also, you can open the `QuickNotification.css` and fully configure notifications for themselves.

Contacts
--------

If you have questions or ideas, you can write to [me](https://new.vk.com/bitfox4d).
