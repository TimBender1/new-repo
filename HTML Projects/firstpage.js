/*
// Helper so alert() displays inside the Preview tab without stealing keyboard focus:
window.alert = function (message) {
    const box = document.createElement("dialog");
    box.setAttribute("open", "");
    box.style.cssText = "position: fixed; top: 20px; z-index: 9999; box-shadow: 0 4px 12px rgba(0,0,0,0.3);";
    box.innerHTML = `<p>${message}</p><button onclick="this.parentElement.close()">OK</button>`;
    document.body.appendChild(box);
};


var weather = "How is the weather?";
var coffee = "I need coffe."
alert(coffee);
*/

var string1 = "Baskin";
var string2 = " Robbins";

alert(string1 + string2);


document.body.style.backgroundColor = "lightgrey";



