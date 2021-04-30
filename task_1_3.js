//Task 1

var arrayPeople = ["John","Robert","Jimmy","Bonzo"];
var arrayInstruments = ["bass","vocals","guitar","drums"];
var stringMessage = "";
for (var i=0; i<arrayPeople.length; i++)
{
    stringMessage = stringMessage + arrayPeople[i] + " plays " + arrayInstruments[i] + "\n";
}
alert(stringMessage);

//Task 2
var stringTimesTable = "";

for (var x=1; x<= 12; x++)
{
    for (var y=1; y<= 12; y++)
    {
        stringTimesTable = stringTimesTable + " " + x*y + " ";
    }
    stringTimesTable += "\n";
}
alert(stringTimesTable);

//Task 3
var arrayTimesTable = [];

for (var x=1; x<=12; x++)
{
    arrayTimesTable[x] = [];
    for (var y=1; y<=12; y++)
    {
        arrayTimesTable[x][y] = x*y;
    }
}

var stringEvenTimes = "";
for (var a=2; a<=12; a=a+2)
{
    for (var b=1; b<=12; b++)
    {
        stringEvenTimes = stringEvenTimes + " " + arrayTimesTable[a][b] + " ";
    }
    stringEvenTimes += "\n";
}
alert(stringEvenTimes);
