# Hover on Touch 3.0

This is a pure Javascript Plugin for an alternative hover function that works on mobile and desktop devices. It triggers a hover css class on »**Taphold**« and goes to a possible link on »**Tap**«. It works with all html elements.

Here's a demo for [touch devices](http://vinzenzaubry.com/demos/hoverontouch/) a [shop demo](http://vinzenzaubry.com/demos/hoverontouch/) and here's a demo video for [desktops](http://vinzenzaubry.com/demos/hoverontouch/desktop).

![Preview of the Plugin on a Portfolio](/media/readme.gif?raw=true "Preview")
![Preview with nice colors and animation](/media/fun.gif?raw=true "Preview")
![Preview of the Plugin for a shop](/media/shop.gif?raw=true "Preview")
![Preview of the Plugin for a text with an ad behind](/media/text.gif?raw=true "Preview")

## Installing
```javascript
<script src="your/path/hoverontouch.js"></script>
```
and add the following to your html:
```javascript
<script type="text/javascript">
    var HoverOnTouch = new HoverOnTouch();
</script>
```

## Description
When you touch an element, the »**hoverontouch--active**« class is applied and triggers the effect defined in your css. For example it can hide an element and show some secondary information, initiate a link hover or just trigger any kind of css animation. If you release under 250ms, the touch event is interpreted as a click and a redirection to the given link is triggered (if there is one provided). Otherwise, if you hold longer, the event is interpreted as a »Taphold« and the old status is shown again on release. 

This brings additional possibilities for the user to interact with the content of a website. For example, the user can read secondary information while scrolling a page. It further makes it feel more "alive" and "applike". 

Some thoughts on what the plugin can be used for can be found on my [blog](https://vinzenzaubry.com/journal/?p=37) entry. 

## HTML Structure

Each wrapper of your element you want to use it on, needs the class »**.hoverontouch**« Add as many objects as you like.
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

In the CSS you need to rename your hover functions this way:

```css
.cover:hover
```

to

```css
.hoverontouch--aktiv .cover
```

»**Example:**«

```css

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
On Tap Hold and Hover, the .cover div gets an opacity 0. On click or tap, the link is triggered. 


## UX
These are some points I think are necessary to make this approach work ux wise:

- all clickable elements should have a second layer or an animation (to be consistent)
- the elements should take reasonable space on the screen, so the user touches them automatically while scrolling (Otherwise this feature would need to be explained)
- if there is relevant secondary information, it should leave space for the thumb

[Link](https://vinzenzaubry.com/journal/?p=37) to my blogpost with additional thoughts.

## Features & Functions

```javascript
// Destroy the plugin and remove all event listeners:
hoverontouch.destroy();

// ReInit the plugin to parse new Links if they are added dynamically or new content is pushed to the page (for example pagination)
hoverontouch.reInitHoverOnTouch();
```

- Put any html elements together
- Works while scrolling, so users can see details while scrolling through the page
- Gifs restart on display
- For looping animations save the gifs as »looping«, for normal animations save them as »playing once«
- The script works on mobile, on desktop and devices that support mouse and touch events.


### Contribution
If anyone wants to contribute, just fork the project or write me at vinzenz@sansho.studio :)

Created by Vinzenz Aubry & Emmanuel Durgoni
