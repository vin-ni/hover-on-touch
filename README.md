# Hoveronscroll 1.0

This is a pure Javascript Plugin for an alternative hover function on mobile devices. It shows secondary information on Taphold &amp; goes to a link on Tap.

It requires Hammer.js as a dependency. Add it before the plugin:

```js
<script src="http://hammerjs.github.io/dist/hammer.min.js"></script>
```
This is the general HTML structure. There's an object wrapper with an info and a cover div. You can add as many objects as you want

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

Here's a demo for [touch devices](http://vinzenzaubry.com/demos/hoveronscroll/). And here's a demo video for [desktops](http://vinzenzaubry.com/demos/hoveronscroll/desktop). 

The script will not interfere with any hover animations on non touch devices / desktop browser.
