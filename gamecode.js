function changeimage1()
{
  // choose heads or tails         
var img =document.getElementById("choose");
//I had to get help for this code. I learned this for clicking a photo to swap to another photo.
/*the img.src = img.src code in the next line works by taking the two photos that are linked to it 
and making them switch between the two when the picture is clicked instead of having a button for
this function*/ 
img.src = img.src.includes("penny_heads.png")?"penny_tails.png" : "penny_heads.png" ;
           
var img =document.getElementById("choose");   
}


function flip()
{

 var finalresult = Math.ceil(Math.random() *2);
//generates random number between 1 and 2.

var headimage = "penny_heads.png";
var tailimage = "penny_tails.png";
// click flip to see if you win or lose.
if (finalresult == 1)
    {
        document.getElementById("finalresult").src = headimage;
    }
else if (finalresult == 2)
    {
        document.getElementById("finalresult").src = tailimage;
    }
    
}
function goHome()
{
    window.location.href = "index.HTML";
}