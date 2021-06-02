"use strict";

window.addEventListener(
  "load",
  function () {
    let heightObj = document.getElementById("height");
    let weightObj = document.getElementById("weight");
    let name = document.getElementById("name");

    let calculateBmi = function () {
      let height = heightObj.value.replace(",", ".");
      let bmi = weightObj.value / (height * height);
      document.getElementById("weight-normal").style.display = "none";
      document.getElementById("weight-below").style.display = "none";
      document.getElementById("weight-above").style.display = "none";

      if (bmi < 18.5) {
        document.getElementById("weight-below").style.display = "block";
      } else if (bmi > 18.5 && bmi < 25) {
        document.getElementById("weight-normal").style.display = "block";
        const smile = document.getElementById("smile");
        const image = document.createElement("img");
        image.setAttribute("src", "./img/smile.png");
        image.style.width = "50px";
        image.style.height = "50px";
        smile.appendChild(image);
      } else if (!isNaN(bmi)) {
        document.getElementById("weight-above").style.display = "block";
      }
      let etName = name.value;
      console.log(bmi);
      let resultObj = document.getElementById("result");
      resultObj.style.fontSize = "25px";
      resultObj.style.color = "blue";
      resultObj.innerHTML = `Hello ${etName} Your BMI is : ${
        Math.round(bmi * 10) / 10
      }`;
    };
    const logo = document.getElementById("logo");
    if(calculateBmi){
      logo.addEventListener("click", () => {
        heightObj.innerHTML = calculateBmi();
        weightObj.innerHTML = calculateBmi(); 
      });
    }
   
    
    // heightObj.addEventListener("change", calculateBmi);
    // weightObj.addEventListener("change", calculateBmi);
    
    // function getResult() {
    //   heightObj.addEventListener("keyup", calculateBmi);
    //   weightObj.addEventListener("keyup", calculateBmi);
    //   // heightObj.addEventListener("change", calculateBmi);
    //   // weightObj.addEventListener("change", calculateBmi);
    // }
  },
  false
);

