function strings()
{  
    //string1 and string2 value
    var string1 = document.getElementById("firststring").value;
    var string2 = document.getElementById("secondstring").value;
    //str3 comes from adding string1 and string2
    var str3 = string1 + string2;
    //variable for str3 length
    var len = str3.length;
    //updates innerHTML of string1 and string2 for str3 length
    var substring = str3.substring(1,3);
    document.getElementById("updates").innerHTML = "substring of str3 (1,3)  = " + substring;
    //changes upper case to lower case 
    var lowerC = str3.toLowerCase();
   //to split, reverse and rejoin to check for palindrome
    var splitStr = string1.split("");

    var reverseStr = splitStr.reverse();
    
    var joinStr = reverseStr.join("");
    // if and else statement to complete palindromeck with yes or no answer
    if (string1 == joinStr)
    {
        document.getElementById("updates").innerHTML = " yep - its a palindrome";
    }
    else 
    {
        document.getElementById("updates").innerHTML = "nope - not a palindrome";
    }
    //buton for return to home page
}
function goHome()
{
    window.location.href = "index.HTML";
}