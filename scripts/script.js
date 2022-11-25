/*
  Student Name: Alvin Tyson
	File Name: script.js
	Current Date: 11/22/2022
*/

// Function to display content
// This handler will be executed only once when the cursor
// moves over the section element
const artTxt = document.getElementById("aboutText");

  // This handler will be executed every time the cursor
  // is moved over an article element
  artTxt.addEventListener("mouseover", (event) => {
    // highlight the mouseover target
    event.target.style.color = "red";
    event.target.style.fontweight = "bolder";
  
    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
      event.target.style.fontweight = "";
    }, 1500);
  }, false);
