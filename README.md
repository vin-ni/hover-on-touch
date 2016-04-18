Hover on Touch 1.0
============

This is a pure Javascript Plugin for an alternative hover function on mobile devices. It shows secondary information on »Taphold« and goes to a link on »Tap«.

Here's a demo for [touch devices](http://vinzenzaubry.com/demos/hoverontouch/). And here's a demo video for [desktops](http://vinzenzaubry.com/demos/hoverontouch/desktop).

When you touch an element, the cover is hidden and the secondary information is shown. If you release under 250ms the touch event is interpreted as a click and a redirection to the given link is triggered. Otherwise, if you hold longer, the event is interpreted as a »Taphold« and the cover is shown again on release. The user can read the secondary information while scrolling the page for example.
<div style="text-align:center"><img src ="/media/readme.gif?raw=true" /></div>
![Preview of the Plugin on a Portfolio](/media/readme.gif?raw=true "Preview")

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
        // Put the Cover Informaton here
    </div>
</div>

});
```
Dependencies
------------
This Plugin requires Hammer.js. Add it before the plugin in your html:

```js
<script src="http://hammerjs.github.io/dist/hammer.min.js"></script>
```
Features
------------
- Put anything inside the info div
- gifs restart on display
- The script will not interfere with any hover animations on desktop browsers (non touch devices) .

If anyone wants to contribute, just fork the project or write me at hi@vinzenzaubry.com :)
Created by Vinzenz Aubry.
