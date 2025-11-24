let cont = document.querySelector(".container");
let btn = cont.querySelector("button");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  alert("Button Clicked!");
  if (btn.classList.contains("active")) {
    cont.setAttribute("style", "background-color: green;");
    return;
  }
  cont.setAttribute("style", "background-color: red;");
});
