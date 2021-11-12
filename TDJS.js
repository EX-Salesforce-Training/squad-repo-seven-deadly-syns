window.onload = function()
{
    document.querySelector("#calculate").addEventListener("click", calc);
}

function calc()
{
    var firstNum = document.querySelector("#firstNumber").value;
    var secondNum = document.querySelector("#secondNumber").value;
    var operation = document.querySelector("input[name=operation]:checked").value;
    var result;

    switch (operation) 
    {
        case "Multiplication":
            result = firstNum * secondNum;
            document.querySelector("#result").innerHTML = result;
            break;

        case "Addition":
            result = firstNum + secondNum;
            document.querySelector("#result").innerHTML = result;
            break;
        
        case "Subtraction":
            result = firstNum - secondNum;
            document.querySelector("#result").innerHTML = result;
            break;

        case "Division":
            if(secondNum == 0)
            {
                document.querySelector("#result").innerHTML = "Nice try.";
                break;
            }
            result = firstNum % secondNum;
            document.querySelector("#result").innerHTML = result;
            break;
    }
}