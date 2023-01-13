//Business Logic
function notAtriangle (sideA, sideB, sideC) {
  let notAtriangle = document.getElementById("notriangle");
  let sumAB = sideA + sideB;
  if (sumAB <= sideC) {
    notAtriangle.removeAttribute("class");
  }

}

function isoAtriangle(sideA, sideB, sideC) {
  let iso = document.getElementById("isosceles");
  let sumAB = sideA + sideB;
  let sumBC = sideC + sideB;
  let sumAC = sideC + sideA;
  
  if (sideA === sideB && sideC != sideA && sumAB != sideC)
  {
    iso.removeAttribute("class");
  }
  else if (sideB === sideC && sideA != sideB && sumBC != sideA ){
    iso.removeAttribute("class");
  }
  else if (sideA === sideC && sideA != sideB){
    iso.removeAttribute("class");
  }
}
//UI Logic
function handleTriangle(event) {
  event.preventDefault();
  const sideA = parseInt(document.querySelector("input#sideA").value);
  const sideB = parseInt(document.querySelector("input#sideB").value);
  const sideC = parseInt(document.querySelector("input#sideC").value);

  let equal = document.getElementById("equilateral");
  
  let scale = document.getElementById("scalene");
  let error = document.getElementById("error");
  
  isoAtriangle(sideA, sideB, sideC);
  notAtriangle(sideA,sideB,sideC);

  if (sideA === sideB && sideA === sideC) {
    equal.removeAttribute("class");
  }

  else if (sideA != sideB && sideA != sideC && sideB != sideC){
    scale.removeAttribute("class");
  }
  
  else {
    error.removeAttribute("class");

  }
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleTriangle);
});
