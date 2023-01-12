//Business Logic






//UI Logic
function handleTriangle(event) {
  event.preventDefault();
  const sideA = document.querySelector("input#sideA").value;
  const sideB = document.querySelector("input#sideB").value;
  const sideC = document.querySelector("input#sideC").value;

  let equal = document.getElementById("equilateral");
  let error = document.getElementById("error");
  if (sideA === sideB && sideA === sideC) {
    equal.removeAttribute("class");
  }
  else {
    error.removeAttribute("class");

  }
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleTriangle);
});
