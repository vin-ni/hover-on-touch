# Hover on Touch 3.0

This is a pure Javascript Plugin for an alternative hover function on mobile devices. It triggers a hover on  »**Taphold**«  goes to a possible link on »**Tap**«. It works with all html elements.

Here's a demo for [touch devices](http://vinzenzaubry.com/demos/hoverontouch/) a [shop demo](http://vinzenzaubry.com/demos/hoverontouch/) and here's a demo video for [desktops](http://vinzenzaubry.com/demos/hoverontouch/desktop).

Some thoughts on what the plugin can be used for can be found on my [blog](http://vinzenzaubry.com/journal/hover-on-touch/) entry. 

## Installing
```javascript
<script src="your/path/hoverontouch.js"></script>
```

When you touch an element, the cover is hidden and the secondary information is shown. If you release under 250ms the touch event is interpreted as a click and a redirection to the given link is triggered. Otherwise, if you hold longer, the event is interpreted as a »Taphold« and the cover is shown again on release. The user can read the secondary information while scrolling the page for example.

![Preview of the Plugin on a Portfolio](/media/readme.gif?raw=true "Preview")
![Preview with nice colors and animation](/media/fun.gif?raw=true "Preview")
![Preview of the Plugin for a shop](/media/shop.gif?raw=true "Preview")
![Preview of the Plugin for a text with an ad behind](/media/text.gif?raw=true "Preview")

## HTML Structure

Each wrapper of your element, you want to use it on, needs the class hoverontouch element has an object wrapper with an info and a cover div. Add as many objects as you want.
```html
<a href="www.example.com" class="hoverontouch">
    <div class="cover"><img src="img/path"></div>
</a>

//or

<a href="www.example.com" class="hoverontouch">
    <div class="testObject">
        <div class="info"><img src="img/path"></div>
        <div class="cover"><img src="img/pth2"></div>
    </div>
</a>


```
### Css
```css
/*Example*/
.object {
    width: 100vw;
    height: 250px;
    margin-bottom: 25px;
    display: block;
}

.cover {
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: blue;
}

.hoverontouch--aktiv .cover {
    opacity: 0;
}

.info {
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: green;
}

```
## Result
On Tap Hold and Hover, the .cover div gets an opacity 0. On click or tap, the link is activated. 

## UX
These are some points I think are necessary to make this approach work ux wise:

- all clickable elements should have a second layer or an animation (to be consistent)
- the elements should take reasonable space on the screen, so the user touches them automatically while scrolling (Otherwise this feature would need to be explained)
- if there is relevant secondary information, it should leave space for the thumb

[Link] (http://vinzenzaubry.com/journal/hover-on-touch/) to my blogpost with additional thoughts.

## Features

- Put any html elements together
- Works while scrolling, so users can see details while scrolling through the page
- Gifs restart on display
- For looping animations save the gifs as »looping«, for normal animations save them as »playing once«
- The script works on mobile, on desktop and devices that support mouse and touch events.


If anyone wants to contribute, just fork the project or write me at hi@vinzenzaubry.com :)

Created by Vinzenz Aubry
