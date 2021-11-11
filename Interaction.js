window.onload = function(){
    document.querySelector("#Calculate").addEventListener("click", DoMath);
  }
  
  function DoMath()
  {
    var answer;
    var equation = document.querySelector("#EquationToCalculate").value;
    if(equation.includes("+"))
    {
      var seperatedEquation = equation.split("+");
      answer = (parseFloat (seperatedEquation[0]) + parseFloat (seperatedEquation[1]));
    }
    else if(equation.includes("-"))
    {
      var seperatedEquation = equation.split("-");
      answer = (parseFloat (seperatedEquation[0]) - parseFloat (seperatedEquation[1]));
    }
    else if(equation.includes("*"))
    {
      var seperatedEquation = equation.split("*");
      answer = (parseFloat (seperatedEquation[0]) * parseFloat (seperatedEquation[1]));
    }
    else if(equation.includes("/"))
    {
      var seperatedEquation = equation.split("/");
      answer = (parseFloat (seperatedEquation[0]) / parseFloat (seperatedEquation[1]));
    }
    if(answer !== "undefined") document.querySelector("#Answer").value = answer;
    else
      document.querySelector("#Answer").value = "Something Went Wrong"
  }
  