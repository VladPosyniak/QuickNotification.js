# QuickNotification.js

![](https://2.downloader.disk.yandex.ua/disk/55ec668eb0998f09d2c0a3afb771f8a123a0ffed05ba384328aa11db7e663867/57893b10/0S7VfByo7GUS3gXenS0UfZC1qcgbgH2echhVvfnoITWl0kH6dbuuIuDlJ7_OXYavCAdV8_8OYSpcjUaJSEJV0A%3D%3D?uid=0&filename=QuickNotificationExample.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&fsize=65874&hid=f785c20d3ce617447ca429796d776894&media_type=image&tknv=v2&etag=912e7c731302c2994712acf171517aad)

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

QuickNotification.js have only one function - `QuickNotification(header, message, time)`.

For example you can:

```js
QuickNotification('Hello!', 'My name is Vlad!:)', 5000);
```

Arguments values
--------

* header = `string`
* message = `string`
* time = `number`or` 'never'`

Contacts
--------

If you have questions or ideas, you can write to [me](https://new.vk.com/bitfox4d).