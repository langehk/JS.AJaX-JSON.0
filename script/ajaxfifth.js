"use strict";
import {$} from "../modules/nQuery.js";
import {Ajax} from "../modules/ajax.js";


let txtHandler = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it

    let table = document.createElement("table"); 

    for (let i = 0; i < obj.length; i++) {
    
        let row = document.createElement("tr");
        let td = document.createElement("td");
        let txt = document.createTextNode(`${obj[i].name} - ${obj[i].population}`);
        
        td.appendChild(txt); 
        td.style.border = "1px solid black";
        row.appendChild(td);
        table.appendChild(row);
        
        
    }
    
    table.style.border = "1px solid black";
    
    $("new").appendChild(table);


}

getNewContent("../data/examplejson2g.json", txtHandler); //hent JSON fil

/*
 *  Listen to the button
 */
let showStarter = function () {
    $("fortune").addEventListener("click", getNewContent);
}

window.addEventListener("load", showStarter);                   // kick off JS
