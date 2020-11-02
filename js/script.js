    
/* Funtion created to change the class when button is clicked
Hbutton is highlighted button and is then refered in the style.css file
the 3 buttons have their own function
*/

function selectButton1() {
    var el = document.getElementById("button1");
    el.classList.toggle("hbutton");
}

function selectButton2() {
    var el = document.getElementById("button2");
    el.classList.toggle("hbutton");
}

function selectButton3() {  
    var el = document.getElementById("button3");
    el.classList.toggle("hbutton");
}


/*the following is creating an array to store the the price per session for the meditation coaching approach
this goes from the most expensive 12€ to the cheapest 7€
*/
var pricemeditation = [
  "12",
  "10",
  "7"
];

/*this is the same approach for the number of sessions.*/
var sessionmeditation = [
  "5",
  "8",
  "15"
];

/* This function has the goal to provide the coaching approach package, based on what has been selected
this is one is for "Meditation*/
function addText1() {

/* defining if the button has been selected with the class name 
the first function selectButton1 is toggling the class to hbutton if the button is selected*/
    var x = document.getElementsByTagName("BUTTON")[0];

/* defining the element where the text containing the coaching approach package */  
    var el = document.getElementById("text1");

 /* defining the intensity of the program from the label selected (Light, Medium, High) */     
    var y = document.getElementById("mySelect");
    var selectedlabel = y.options[mySelect.selectedIndex].innerHTML;

 /* the following is IF AND ELSE concept
 If the class name of the button is hbutton and according the intensity of the program, a customized result will be generated in the paragraph ID text1
 */ 
  if (x.className === "hbutton" && selectedlabel === "Light") {
    el.innerHTML = "Meditation : "+pricemeditation[0]+"&euro; (per session) / "+sessionmeditation[0]+" sessions";
    } else if (x.className === "hbutton" && selectedlabel === "Medium") {
    el.innerHTML = "Meditation : "+pricemeditation[1]+"&euro; (per session) / "+sessionmeditation[1]+" sessions";
    } else if (x.className === "hbutton" && selectedlabel === "High") {
    el.innerHTML = "Meditation : "+pricemeditation[2]+"&euro; (per session) / "+sessionmeditation[2]+" sessions";
    } else {
    el.innerHTML = "";
  }
}

/* array to store the data (price & number of session) for psychology program */
var pricepsychology = [
  "60",
  "55",
  "45"
];

var sessionpsychology = [
  "3",
  "6",
  "9"
];


/* This function has the goal to provide the coaching approach package, based on what has been selected
this is one is for "Meditation*/
function addText2() {

/* defining if the button has been selected with the class name */
    var x = document.getElementsByTagName("BUTTON")[1];

 /*element where text to be added*/   
    var el = document.getElementById("text2");

 /* Intensity selected*/   
    var y = document.getElementById("mySelect");
    var selectedlabel = y.options[mySelect.selectedIndex].innerHTML; 

 /* IF AND ELSE concept */
  if (x.className === "hbutton" && selectedlabel === "Light") {
    el.innerHTML = "Psychology : "+pricepsychology[0]+"&euro; (per session) / "+sessionpsychology[0]+" sessions";
    } else if (x.className === "hbutton" && selectedlabel === "Medium") {
    el.innerHTML = "Psychology : "+pricepsychology[1]+"&euro; (per session) / "+sessionpsychology[1]+" sessions";
    } else if (x.className === "hbutton" && selectedlabel === "High") {
    el.innerHTML = "Psychology : "+pricepsychology[2]+"&euro; (per session) / "+sessionpsychology[2]+" sessions";
    } else {
    el.innerHTML = "";
  }
}

/* array to store the data (price & number of session) for mentoring program */
var pricementoring = [
  "30",
  "25",
  "20"
];

var sessionmentoring = [
  "2",
  "4",
  "6"
];

/* This function has the goal to provide the coaching approach package, based on what has been selected
this is one is for "Meditation*/
function addText3() {

 /* defining if the button has been selected with the class name */   
    var x = document.getElementsByTagName("BUTTON")[2];
 
 /*element where text to be added*/  
    var el = document.getElementById("text3");

/* Intensity selected*/ 
    var y = document.getElementById("mySelect");
    var selectedlabel = y.options[mySelect.selectedIndex].innerHTML;

 /* IF AND ELSE concept */
  if (x.className === "hbutton" && selectedlabel === "Light") {
    el.innerHTML = "Mentoring : "+pricementoring[0]+"&euro; (per session) / "+sessionmentoring[0]+" sessions";
    } else if (x.className === "hbutton" && selectedlabel === "Medium") {
    el.innerHTML = "Mentoring : "+pricementoring[1]+"&euro; (per session) / "+sessionmentoring[1]+" sessions";
    } else if (x.className === "hbutton" && selectedlabel === "High") {
    el.innerHTML = "Mentoring : "+pricementoring[2]+"&euro; (per session) / "+sessionmentoring[2]+" sessions";
    } else {
    el.innerHTML = "";
  }
}

/* in the index.html file, some addevent listener scripts have been added 
The reason is to trigger multiple functions and objects when we click on the buttons and when a label is selected 
So the functions will always recalculate your program whateven change to try, either you click or unclick a program or if you change the intensity of your coaching approach.
*/


/*

function myTest() {
    var el = document.getElementById("mySelect");   
    var selectedlabel = el.options[mySelect.selectedIndex].innerHTML;
    document.getElementById("test").innerHTML = selectedlabel;

}
*/
