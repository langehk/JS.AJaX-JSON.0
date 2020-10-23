"use strict";
import {$} from "./modules/nQuery.js";
import {Ajax} from "./modules/Ajax.js";

/*
 * Event handler for fortune button - tests responseText
 */
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("examplejson2g.json", txtHandler);
}

/*
 * readystatechange/load event handler 
 * aka callback function
 * for the above AJaX
 */
let txtHandler = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it
    let txt = document.createTextNode(`Byen ${obj[1].name} har ${obj[1].population} indbyggere`);
    let p = document.createElement("p");
    p.appendChild(txt);
    $("new").appendChild(p);
}

/*
 *  Listen to the button
 */
let showStarter = function () {
    $("fortune").addEventListener("click", getNewContent);
}

window.addEventListener("load", showStarter);                   // kick off JS
