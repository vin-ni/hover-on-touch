# Hover on Touch 1.0

This is a pure Javascript Plugin for an alternative hover function on mobile devices. It shows secondary information on »Taphold« and goes to a link on »Tap«.

Here's a demo for [touch devices](http://vinzenzaubry.com/demos/hoverontouch/). And here's a demo video for [desktops](http://vinzenzaubry.com/demos/hoverontouch/desktop).

## Installing
This Plugin requires Hammer.js. Add it before the plugin in your html:

```javascript
<script src="http://hammerjs.github.io/dist/hammer.min.js"></script>
<script src="your/path/hoverontouch.js"></script>
```

When you touch an element, the cover is hidden and the secondary information is shown. If you release under 250ms the touch event is interpreted as a click and a redirection to the given link is triggered. Otherwise, if you hold longer, the event is interpreted as a »Taphold« and the cover is shown again on release. The user can read the secondary information while scrolling the page for example.

![Preview of the Plugin on a Portfolio](/media/readme.gif?raw=true "Preview")

## HTML Structure

Each element has an object wrapper with an info and a cover div. Add as many objects as you want.
```html
<div class="object" data-triggerlink="https://www.example.com">
        <div class="info">
            //Put the secondary Information here
        </div>
        <div class="cover">
            // Put the cover Informaton here
        </div>
</div>
```
### Css
```css
/*Fallback for touch devices with hover input eg. Samsung Galaxy Note*/
@media only screen and (max-width : 768px) {
    .cover:hover {
        opacity: 0;
    }
}
```
## Features

- Put anything inside the info div
- gifs restart on display
- The script will not interfere with any hover animations on desktop browsers (non touch devices) .


If anyone wants to contribute, just fork the project or write me at hi@vinzenzaubry.com :)

Created by Vinzenz Aubry.
