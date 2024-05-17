function calculateBMI() {
    var weight = document.getElementById("Weight").value;
    var height = document.getElementById("height").value;
  
    if (weight === "" || height === "") {
      document.getElementById("result").innerHTML = "";
      return;
    }
  
    var bmi = weight / (height * height);
    var result = document.getElementById("result");
    result.innerHTML = "Your BMI is: " + bmi.toFixed(2);
  
    var interpretation = getInterpretation(bmi);
    result.innerHTML += "<br>" + interpretation;
  }
  
  function getInterpretation(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }