

function compute()
{   p = document.getElementById("principal").value;
r = document.getElementById("rate").value;
y = document.getElementById("years").value;
    
if ((parseInt(p) === 0) || (parseInt(p) < 0) || (p === "")) {
    alert("Please enter a positive number")
    document.getElementById("principal").focus()
}
else {
    result  = document.getElementById("result").innerHTML = parseInt(  p*y*(r/100))
    result1  = document.getElementById("result1").innerHTML =  parseFloat(r) +"%"
    principalvalue = document.getElementById("principalvalue").innerHTML =  "If you deposit " + p +","
    ratevalue = document.getElementById("ratevalue").innerHTML =  "at an interest rate of  " +  r + "%."
    text = document.getElementById("text").innerHTML =  "You will receive an amount of " +  result +','
    text2 = document.getElementById("text2").innerHTML =  "in the year " +  (2020 + parseInt(y))
}

}
        