Hover on Touch 1.0
============

This is a pure Javascript Plugin for an alternative hover function on mobile devices. It shows secondary information on Taphold &amp; goes to a link on Tap.

Here's a demo for [touch devices](http://vinzenzaubry.com/demos/hoveronscroll/). And here's a demo video for [desktops](http://vinzenzaubry.com/demos/hoveronscroll/desktop). 

When you touch the element, the cover is hidden and the secondary element is shown. If you release under 250ms the touch event is interpreted as a click and a redirection to a, possible sub page / project page is triggered. Otherwise, if you hold longer, the event is interpreted as a "Taphold" and on release only the cover is shown again. This way the user can read the secondary information while scrolling the page for example.

HTML Structure
------------
There's an object wrapper with an info and a cover div. You can add as many objects as you want.
```html
// get a reference to an element
<div class="object">
    <div class="info">
        //Put the secondary Information here
    </div>
    <div class="cover">
        // Put the Cover Infermaton here
    </div>
</div>

});
```
Dependencies
------------
It requires Hammer.js. Add it before the plugin:

```js
<script src="http://hammerjs.github.io/dist/hammer.min.js"></script>
```

The script will not interfere with any hover animations on desktop browsers (non touch devices) .
