// Get all <li> elements in the document and store them in an HTMLCollection
const listItems = document.getElementsByTagName("li"); // HTMLCollection(3) [li, li, li]

// Change the text color of the second <li> element to green
listItems[1].style.color = "green"; // Result: text color changed to green

// Select all elements with the class "item" within <ul> elements and store them in a NodeList
const itemList = document.querySelectorAll("ul .item"); // NodeList(3) [li.item, li.item, li.item]

// Change the text color of the first <li> element with the class "item" to red
itemList[0].style.color = "red"; // Result: text color changed to red

// Change the text color of the third <li> element with the class "item" to blue
itemList[2].style.color = "blue"; // Result: text color changed to blue

// Change the background color of the first <button> element to yellow
document.querySelector("button").style.backgroundColor = "yellow"; // Result: background color changed to yellow

// Change the text color of the first <button> element to black
document.querySelector("button").style.color = "black"; // Result: text color changed to black

// Change the font weight of the first <button> element to bold
document.querySelector("button").style.fontWeight = "bold"; // Result: font weight changed to bold

// Add a click event listener to the first <button> element to toggle the "huge" class on the <h1> element
document.querySelector("button").addEventListener("click", function () {
  document.querySelector("h1").classList.toggle("huge");
  // Result: When clicked, toggles the "huge" class on the <h1> element, changing its font size to 48px
});
