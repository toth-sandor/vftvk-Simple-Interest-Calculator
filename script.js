// #########################
// # computation of interest
// #########################
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // validation before computation (to overcome default empty value issue)
    if (!checkIfPrincipalPositive()) 
    {
        return false;
    }

    document.getElementById("result").innerHTML="If you deposit \<span class=\"resultnum\"\>"+principal+"\</span\>" +
        ",\<br\> at an interest rate of \<span class=\"resultnum\"\>"+rate+"%\</span\>." + 
        "\<br\>You will receive an amount of \<span class=\"resultnum\"\>" + interest+"\</span\>," + 
        "\<br\>in the year \<span class=\"resultnum\"\>"+year+"\</span\>\<br\>"
}
        
// ########################
// # update rate text
// ########################
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// ########################################
// # validation of principal being positive
// ########################################

function checkIfPrincipalPositive() 
{
    var principalElement = document.getElementById("principal");
    var principal = principalElement.value
    if (principal <= 0) {
        alert("Enter a positive number");
        principalElement.focus();
        return false;        
    }
    return true;
}