"use strict";
import {$} from "../modules/nQuery.js";
import {Ajax, getNewContent} from "../modules/ajax.js";


let txtHandler = function(e) {

    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it

    let table = document.createElement("table");
    let row = document.createElement("tr");

    let nameHeader = document.createElement("th"); 
    let nameHeaderTxt = document.createTextNode("Navn"); 
    nameHeader.appendChild(nameHeaderTxt);

    let emailHeader = document.createElement("th"); 
    let emailHeaderTxt = document.createTextNode("Email-adresse"); 
    emailHeader.appendChild(emailHeaderTxt);

    let birthHeader = document.createElement("th"); 
    let birthHeaderTxt = document.createTextNode("Fødselsdag"); 
    birthHeader.appendChild(birthHeaderTxt);

    row.appendChild(nameHeader);
    row.appendChild(emailHeader);
    row.appendChild(birthHeader);
    table.appendChild(row);

    for (let i = 0; i < obj.length; i++) {
    
        let row = document.createElement("tr");
        let td = document.createElement("td");
        let name = document.createTextNode(`${obj[i].firstname} ${obj[i].lastname}`);
        let td2 = document.createElement("td");
        let birth = document.createTextNode(`${obj[i].birthdate}`);
        let td3 = document.createElement("td");
        let email = document.createTextNode(`${obj[i].emailaddress}`);
        td.appendChild(name); 
        td2.appendChild(birth); 
        td3.appendChild(email); 
        td.style.border = "1px solid black";
        td2.style.border = "1px solid black";
        td3.style.border = "1px solid black";
        row.appendChild(td);
        row.appendChild(td2);
        row.appendChild(td3);
        table.appendChild(row);
    }
    
    table.style.border = "1px solid black";
    
    $("new").appendChild(table);


}


/*
 *  Listen to the button
 */
let showStarter = function () {
    $("fortune").addEventListener("click", function() {
        getNewContent("../data/students.json", txtHandler);
    });
}

window.addEventListener("load", showStarter);                   // kick off JS
