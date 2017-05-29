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
// [ ] block native  behaviour
// [x] add hover on touch
// [ ] prohibit link if not moving after x seconds
// [ ] restart gifs / videos
// [ ] remove all classes on document ready
// [ ] text popup
// [ ] 

// window.onunload = function(){
//     var all_objects = document.getElementsByClassName('hoverontouch');
//         for (var i = 0; i < all_objects.length; i++) {
//         all_objects[i].classList.remove("hoverAndTouch");

//     }

// };

function HoverOnTouch() {
    this.init();
    this.removeIphoneDT();
}

HoverOnTouch.prototype.init = function () {


    var all_objects = document.getElementsByClassName('hoverontouch');

    //remove hover states
    for (var i = 0; i < all_objects.length; i++) {
        all_objects[i].classList.remove("hoverAndTouch");

    }

    for (var i = 0; i < all_objects.length; i++) {
    var object = all_objects[i];
    
    object.addEventListener('touchstart', function(event) { 
        this.className += " hoverAndTouch";
    });
    object.addEventListener('touchend', function(event) { 
        this.classList.remove("hoverAndTouch");
    });

    object.addEventListener('mouseover', function(event) { 
        this.className += " hoverAndTouch";
    });
    object.addEventListener('mouseout', function(event) { 
        this.classList.remove("hoverAndTouch");
    });
}


    



    
    //touchstart
    //touchend
    //mouseover
    //mouseup


    //Add Hammer Listener to every object
    // for (var i = 0; i < all_objects.length; ++i) {
    //     var item = all_objects[i];

    //     var mc = new Hammer.Manager(item);
    //     mc.add( new Hammer.Tap({
    //         time: 250,
    //     }));

    //     mc.add(new Hammer.Press({
    //         event: 'press',
    //         pointer: 1,
    //         threshold: 1000,
    //         time: 1,
    //     }));


    //     //Function triggered on tap and press
    //     mc.on('press tap', function(event) {
    //         event.preventDefault();

    //         // console.log(this);
    //         // console.log(event);

    //         var elem = event.target;
    //         elem.classList.add("hoverOnTouch");

    //         // var elem = getClosest(event.target, ".object");
    //         // var elemInfo = elem.querySelector('.info');
    //         // var elemCover = elem.querySelector('.cover');

    //         // elemCover.style.opacity = '0';

    //         // Checking if Image is a Gif. If "Yes" restart the Gif from the beginning
    //         // var images = elemInfo.querySelectorAll('img');
    //         // restartImagesIfGif (images);

    //         if (event.type === "tap") {
    //             // elemCover.style.opacity = '1';
    //             // var link = event.target.closest('a');
    //             // Get the link when tapped
    //             var link = event.target.closest('a').getAttribute("href");
    //             window.location.href = link;
    //         }         
    //     });

    //     mc.on('pressup', function(event) {
    //         event.preventDefault();
    //         // var elem = getClosest(event.target, ".object");
    //         // var elemCover = elem.querySelector('.cover');
    //         console.log("alert");

    //         var elem = event.target;
    //         elem.classList.remove("hoverOnTouch");

    //         // elemCover.style.opacity = '1';

    //         // unhideAll might be unnecesary on deploy
    //         // unhideAll ();
    //         // event.preventDefault();
    //     });
    // }
};

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