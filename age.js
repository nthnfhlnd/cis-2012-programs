var floatAge, floatDays, intWeeks, floatMonths, intFortnights;

  floatAge = parseFloat(prompt("Enter your age"));
 
  floatDays = parseFloat(floatAge*365.25).toFixed(2); //calculates days by multiplying Age by 365.25
  intWeeks = parseInt(floatDays/7); //calculates weeks by dividing days by 7
  floatMonths = parseFloat(floatAge*12).toFixed(2); //calculates months by multiplying Age by 12
  intFortnights = parseInt(floatDays/14); //calculates fortnights by dividing days by 14
  
  alert("You are currently " + floatAge + " years old."  +"\n"+ 
        "You are currently " + floatDays + " days old."  +"\n"+
        "You are currently " + intWeeks + " weeks old." +"\n"+
        "You are currently " + floatMonths + " months old." +"\n"+
        "You are currently " + intFortnights + " fortnights old." );