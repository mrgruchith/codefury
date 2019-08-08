var aText = new Array("CODEFURY");
var iSpeed = 500;
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iScrollAt = 20; 
 
var iTextPos = 0; 
var sContents = ''; 
var iRow;
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 2000);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
