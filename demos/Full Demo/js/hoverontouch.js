//
//  hoverontouch.js
//  An alternative hover function on mobile devices.
//  Version 2.0 18/09/16
//
//  Created by Vinzenz Aubry on 19/04/16. 
//  Copyright 2016 Vinzenz Aubry. All rights reserved.
//  MIT Licensed
//


// ================Hammer JS Tap Longpress================
var all_objects = document.getElementsByClassName('object');

//Add Hammer Listener to every object
for (var i = 0; i < all_objects.length; ++i) {
    var item = all_objects[i];

    var mc = new Hammer.Manager(item);
    mc.add( new Hammer.Tap({
        time: 250,
    }) );
    mc.add(new Hammer.Press({
        event: 'press',
        pointer: 1,
        threshold: 1000,
        time: 1,
    }));


    //Function triggered on tap and press
    mc.on('press tap', function(event) {
            event.preventDefault();

            var elem = getClosest(event.target, ".object");
            var elemInfo = elem.querySelector('.info');
            var elemCover = elem.querySelector('.cover');

            elemCover.style.opacity = '0';

            // Checking if Image is a Gif. If "Yes" restart the Gif from the beginning
            var images = elemInfo.querySelectorAll('img');
            restartImagesIfGif (images);

            if (event.type == "tap") {
                elemCover.style.opacity = '1';
                
                // Get the link when tapped
                var link = elem.dataset.triggerlink;
                window.location.href = link;
                
                }   
            
        });

    mc.on('pressup', function(event) {
        // event.preventDefault();
        var elem = getClosest(event.target, ".object");
        var elemCover = elem.querySelector('.cover');

        elemCover.style.opacity = '1';

        // unhideAll might be unnecesary on deploy
        // unhideAll ();
        // event.preventDefault();
    });
}


                                        // ===== Devics Stuff ==== //

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
};

// Loop Through Array of Images
function restartImagesIfGif (imageArray) {
    for (var i = imageArray.length - 1; i >= 0; i--) {
        var fileExtension = imageArray[i].src.split('.').pop();
        if (fileExtension === "gif") {
           resetGif(imageArray[i]);
        };
    };
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

function unhideAll () {
    for (var i = 0; i < all_objects.length; ++i) {
    var item = all_objects[i]; 

        for (var j = 0; j < item.childNodes.length; j++) {
        if (hasClass(item.childNodes[j], "cover") === true) {
            // alert(item.childNodes[j].className);
          item.childNodes[j].style.visibility = 'visible';
            }        
        }
    };
};

function hasClass( elem, klass ) {
     return (" " + elem.className + " " ).indexOf( " "+klass+" " ) > -1;
}