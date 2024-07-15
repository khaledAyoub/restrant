var gear = document.getElementById("gearIcon");

window.addEventListener("scroll", () => {
  var gear = document.getElementById("gearIcon");
  var rotation = window.scrollY; // or any function of scrollY
  gear.style.transform = `rotate(${rotation / 9}deg)`;
});
