// jshint ignore: start

//  hoverontouch.js
//  An alternative hover function on mobile devices.
//  Version 2.1XX/11/16
//
//  Created by Vinzenz Aubry on 19/04/16. 
//  Copyright 2016 Vinzenz Aubry. All rights reserved.
//  MIT Licensed
//


//#To Do
// [x] Only run on Mobile
// [x] Add Loop
// [x] block native  behaviour ios
// [ ] block native  behaviour android
// [x] add hover on touch
// [x] prohibit link if not moving after x seconds
// [x] don't jump to link if scrolling fast and clicking shortly
// [x] reset classes when coming back (not necessary anymore)
// [ ] restart gifs / videos
// [ ] add css via javascript
// [x] destroyer function
// [ ] reparse links function
// [ ] 2 fingers preview not blocking

function HoverOnTouch() {
    this.init();
    this.rewriteLinks();
    this.touchEvents();
}

HoverOnTouch.prototype.init = function () {
    //gather all elements
    this.all_objects = document.getElementsByClassName('hoverontouch');

    //set variables
    this.pressTimer;
    this.longpress = false;
    this.scrollStartX = 0;
    this.scrollStartY = 0;
};

HoverOnTouch.prototype.rewriteLinks = function () {
    //rewrite links to data-attributes
    console.log("rewriteLinks");
    for (var i = 0; i < this.all_objects.length; i++) {
        object = this.all_objects[i];
        if(object.tagName === 'A') {
                //only rewrite if link
            var link = object.getAttribute("href");
            if (link) {
                //only rewrite if not already done
                object.setAttribute('data-link', link);
                object.removeAttribute("href");

            };
        }   
    }
};

HoverOnTouch.prototype.touchEvents = function () {
    var self = this;
    this.handlerMouseenterHoverontouch = this.mouseenterHoverontouch.bind(this);

    this.handlerMouseeoutHoverontouch = this.mouseeoutHoverontouch.bind(this);

    this.handlerTouchstartHoverontouch = this.touchstartHoverontouch.bind(this);

    this.handlerTouchendHoverontouch = this.touchendHoverontouch.bind(this);


    for (var i = 0; i < this.all_objects.length; i++) {
        var object = this.all_objects[i];
        object.img = "toto";
        object.addEventListener('mouseenter', this.handlerMouseenterHoverontouch);

        object.addEventListener('mouseout', this.handlerMouseeoutHoverontouch);
        
        object.addEventListener('touchstart', this.handlerTouchstartHoverontouch);

        object.addEventListener('touchend', this.handlerTouchendHoverontouch);

        // object.addEventListener('touchmove', function(event) { 
        //     console.log(event.layerY);
        //     console.log(event.pageY);
        // });
    }
};

HoverOnTouch.prototype.mouseenterHoverontouch = function (e) {
    //go up dom and add class
    var object = this.getClosest(e.target, '.hoverontouch');
    object.className += " hoverontouch--aktiv";
    // console.log(e);
    // console.log(this);
    // console.log("mouseEnter");
};

HoverOnTouch.prototype.mouseeoutHoverontouch = function (e) {
    //go up dom and remove class
    var object = this.getClosest(e.target, '.hoverontouch');
    object.classList.remove("hoverontouch--aktiv");
    // console.log("mouseOut:");
    // console.log(event);
};

HoverOnTouch.prototype.touchstartHoverontouch = function (e) {
    console.log("touchstart");
    //go up dom and add class
    var object = this.getClosest(e.target, '.hoverontouch');
    object.className += " hoverontouch--aktiv";

    //get entry coordinates
    this.scrollStartX = event.pageX;
    this.scrollStartY = event.pageY;

    //go down dom and restart all gifs
    // var images = e.target.getElementsByTagName('img');
    // console.log(e.target.img);
    // console.log(e);
    // continue after

    var self = this;
    this.pressTimer = window.setTimeout(function() { 
        console.log("timer end, longpress detected");
        self.longpress = true;             
    },250);
};

HoverOnTouch.prototype.touchendHoverontouch = function (e) {
    console.log("touchend");
    var object = this.getClosest(e.target, '.hoverontouch');
    object.classList.remove("hoverontouch--aktiv");
    clearTimeout(this.pressTimer);

    if (!this.longpress) {
        //this is a click, so go to the data-link, but only if data link exists and not more scrolling as 10px
        // calculate Distance
        var XOriginal = this.scrollStartX;
        var XEnd = event.pageX;
        var distanceX = Math.abs(XOriginal - XEnd);

        var YEnd = event.pageY;
        var YOriginal = this.scrollStartY;
        var distanceY = Math.abs(YOriginal - YEnd);

        // console.log(distanceY, distanceX);

        if (this.getAttribute('data-link') && distanceY <= 5 && distanceX <= 5) {
            var location = this.getAttribute('data-link');
            window.location.href=location;
            console.log("run redirect"); 
        };
    } else {
        console.log("this was longpress");
        this.longpress = false;
    };
    event.preventDefault();
};

HoverOnTouch.prototype.destroy = function () {
    //event listeners in functions umschreiben 
    for (var i = 0; i < this.all_objects.length; i++) {
        var object = this.all_objects[i];
        object.removeEventListener('mouseenter', this.handlerMouseenterHoverontouch);
        object.removeEventListener('mouseout', this.handlerMouseeoutHoverontouch);
        object.removeEventListener('touchstart', this.handlerTouchstartHoverontouch);
        object.removeEventListener('touchend', this.handlerTouchendHoverontouch);
    }
    console.log("removed all listeners");
    console.log(this);
    //how to delete the whole variable to destroy?
    // delete window.HoverOnTouchvariable;
};

HoverOnTouch.prototype.reparseLinks = function () {

};

HoverOnTouch.prototype.reparseGifs = function () {

};

// ================= NEW HELPER =================






























                                        // ===== Device Stuff ==== //

//REWRITE THIS TO ONLY BE ON those elements
//Block the "Tapohold" Context Menu on Android
window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};


                                        // ===== Helper Functions ===== //
function resetGif(obj) {
    var img = obj;
    var imageUrl = img.src;
    img.src = "#";
    img.src = imageUrl;
}

// Loop Through Array of Images
function restartImagesIfGif (imageArray) {
    for (var i = imageArray.length - 1; i >= 0; i--) {
        var fileExtension = imageArray[i].src.split('.').pop();
        if (fileExtension === "gif") {
           resetGif(imageArray[i]);
        }
    }
}



/**
 * Get closest DOM element up the tree that contains a class, ID, or data attribute
 * @param  {Node} elem The base element
 * @param  {String} selector The class, id, data attribute, or tag to look for
 * @return {Node} Null if no match
 */
HoverOnTouch.prototype.getClosest = function (elem, selector) {
    var firstChar = selector.charAt(0);

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {

        // If selector is a class
        if ( firstChar === '.' ) {
            if ( elem.classList.contains( selector.substr(1) ) ) {
                return elem;
            }
        }

        // If selector is an ID
        if ( firstChar === '#' ) {
            if ( elem.id === selector.substr(1) ) {
                return elem;
            }
        } 

        // If selector is a data attribute
        if ( firstChar === '[' ) {
            if ( elem.hasAttribute( selector.substr(1, selector.length - 2) ) ) {
                return elem;
            }
        }

        // If selector is a tag
        if ( elem.tagName.toLowerCase() === selector ) {
            return elem;
        }

    }

    return false;
};







//  jshint ignore: end