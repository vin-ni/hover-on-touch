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
// [ ] don't jump to link if scrolling fast and clicking shortly
// [x] reset classes when coming back (not necessary anymore)
// [ ] restart gifs / videos
// [ ] remove all classes on document ready
// [ ] text popup on links?
// [ ] add css via javascript

// window.onunload = function(){
//     var all_objects = document.getElementsByClassName('hoverontouch');
//         for (var i = 0; i < all_objects.length; i++) {
//         all_objects[i].classList.remove("hoverAndTouch");

//     }

// };

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
    for (var i = 0; i < this.all_objects.length; i++) {
        var object = this.all_objects[i];

        object.addEventListener('mouseenter', function(event) { 
            this.className += " hoverontouch--aktiv";
            console.log("mouseEnter");
        });

        //  object.addEventListener('mouseover', function(event) { 
        //     this.className += " hoverontouch--aktiv";
        //     console.log("mouseOver:");
        //     console.log(event);
        // });

        object.addEventListener('mouseout', function(event) { 
            this.classList.remove("hoverontouch--aktiv");
            console.log("mouseOut:");
            console.log(event);
        });
        
        object.addEventListener('touchstart', function(event) { 
            console.log("touchstart");
            this.className += " hoverontouch--aktiv";
            self.pressTimer = window.setTimeout(function() { 
                console.log("timer end, longpress detected");
                self.longpress = true;             
            },250);
        });

        object.addEventListener('touchend', function(event) {
            console.log("touchend");
            this.classList.remove("hoverontouch--aktiv");
            clearTimeout(self.pressTimer);

            if (!self.longpress) {
                //this is a click, so go to the data-ling, but only if data link exists
                if (this.getAttribute('data-link')) {
                    console.log(this.getAttribute('data-link'));
                    var location = this.getAttribute('data-link');
                    window.location.href=location;
                    console.log("run redirect"); 
                };
            } else {
               console.log("this was longpress");
               self.longpress = false;
            };
            event.preventDefault();
        });

        object.addEventListener('touchmove', function(event) { 
            console.log("moving");
        });
    }
};

// ================= NEW HELPER =================

//find first parent with tagName [tagname] from: https://stackoverflow.com/a/12552017
function findParent(tagname,el){
  if ((el.nodeName || el.tagName).toLowerCase()===tagname.toLowerCase()){
    return el;
  }
  while (el = el.parentNode){
    if ((el.nodeName || el.tagName).toLowerCase()===tagname.toLowerCase()){
      return el;
    }
  }
  return null;
}

function callback(e) {
    var e = window.e || e;

    if (e.target.tagName !== 'A')
        return;

    console.log(e);
}

if (document.addEventListener)
    document.addEventListener('touchstart', callback, false);
else
    document.attachEvent('touchstart', callback);


































HoverOnTouch.prototype.removeIphoneDT = function () {

    // remove Iphone Double Tap Effect -- only runs on mobile
    // by rcmachado - https://gist.github.com/rcmachado/7303143
    // var touch = 'ontouchstart' in document.documentElement
    //     || (navigator.MaxTouchPoints > 0)
    //     || (navigator.msMaxTouchPoints > 0);

    // if (touch) { // remove all :hover stylesheets
    // try { // prevent exception on browsers not supporting DOM styleSheets     properly
    //     for (var si in document.styleSheets) {
    //         var styleSheet = document.styleSheets[si];
    //         if (!styleSheet.rules) continue;

    //         for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
    //             if (!styleSheet.rules[ri].selectorText) continue;

    //             if (styleSheet.rules[ri].selectorText.match(':hover')) {
    //                 styleSheet.deleteRule(ri);
    //             }
    //         }
    //     }
    // } catch (ex) {}
    // } 


    // !!!!!!! maybe because of -webkit-tap-highlight-color: rgba(0,0,0,0);
    // document.addEventListener("touchstart", function(){}, true);
};

                                        // ===== Device Stuff ==== //

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
var getClosest = function (elem, selector) {

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


// Old functions not used anymore
function hasClass( elem, klass ) {
     return (" " + elem.className + " " ).indexOf( " "+klass+" " ) > -1;
}

function unhideAll () {
    for (var i = 0; i < all_objects.length; ++i) {
    var item = all_objects[i]; 

        for (var j = 0; j < item.childNodes.length; j++) {
        if (hasClass(item.childNodes[j], "cover") === true) {
            // alert(item.childNodes[j].className);
          item.childNodes[j].style.visibility = 'visible';
            }        
        }
    }
}


function findElementByClass (parent, klassName) {
    for (var i = 0; i < parent.childNodes.length; i++) {
        if (hasClass(parent.childNodes[i], klassName) === true) {
            alert(parent.childNodes[i].className);
          // parent.childNodes[i].style.visibility = 'visible';
          break;
            }        
        }
}







//  jshint ignore: end