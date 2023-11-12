document.getElementsByTagName("li"); // HTMLCollection(3) [li, li, li]

document.getElementsByTagName("li")[1].style.color = "green"; // green

document.querySelectorAll("ul .item"); // NodeList(3) [li.item, li.item, li.item]

document.querySelectorAll("ul .item")[0].style.color = "red"; // red

document.querySelectorAll("ul .item")[2].style.color = "blue"; // blue
