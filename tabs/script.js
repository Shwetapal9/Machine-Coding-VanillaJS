var tabButtons = document.querySelectorAll("button");
var tabContent = document.querySelectorAll(".tab-content");
console.log(tabButtons, tabContent);

function showPanel(index, colorcode) {
  tabButtons.forEach((tab) => {
    tab.style.backgroundColor = "";
    tab.style.color = "";
  });

  tabButtons[index].style.backgroundColor = colorcode;
  tabButtons[index].style.color = "white";

  tabContent.forEach((content) => {
    content.style.display = "none";
  });

  tabContent[index].style.display = "block";
  tabContent[index].style.backgroundColor = colorcode;
}

showPanel(0, "#f44336");
