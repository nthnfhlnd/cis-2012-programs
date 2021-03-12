var $ = function (id) 
{
    return document.getElementById(id);
}
var floatAnnualTax, intFinalIncome;
var calculateIncome = function () 
{
    var intAnnualIncome = parseInt($("annualIncome").value);
    var intUserAge = parseInt($("age").value);
    var floatTaxRate, floatAnnualTax, intFinalIncome;
    if (intUserAge >= 65)
    {
    	if (intAnnualIncome < 30000)
    	{
    		floatTaxRate = 0.025;
    	}
    	else
    	{
    		if(intAnnualIncome >= 30000 && intAnnualIncome <= 75000)
    		{
    			floatTaxRate = 0.05;
    		}
    		else
    		
    			floatTaxRate = 0.20;
    	}
    } 
    else
    {
    	
    	if (intAnnualIncome < 30000)
    	{
    		floatTaxRate = 0.05;
    	}
   		else
        {
            if (intAnnualIncome >= 30000 && intAnnualIncome <= 75000)
            {
            	floatTaxRate = 0.10;
            }
            else
            {
   			floatTaxRate = 0.20;
            }
        }
	}
    floatAnnualTax = intAnnualIncome * (floatTaxRate);
    
    $("annualTax").value = floatAnnualTax;
    
    intFinalIncome = intAnnualIncome - floatAnnualTax;
    $("finalIncome").value = intFinalIncome;

	alert ("Your annual income tax this year is $" + floatAnnualTax  +"\nBased upon an annual income of $"+ intAnnualIncome+
	"\nAnd a tax rate of " +floatTaxRate*100+ "% \nAfter taxes, your final income is "+ intFinalIncome+ "\nNote: Tax rate is based upon your age");
};	


window.onload = function () 
{
    $("annualIncome").value = "";
    $("age").value = "";
    $("annualTax").value = "";
    $("calculate").onclick = calculateIncome;
    $("annualIncome").focus();
    $("finalIncome").value = "";
}