function checkcreds()
{
    /*variables for the login page*/ 
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("firstname").value;
    var fullname = firstname + " " + lastname;
    var zipcode = document.getElementById("zip").value;
    var passW = document.getElementById("pw").value;

    /* the if/else if statements to complete the login process*/

    if (fullname.length <=1)
    {
        document.getElementById("loginStatus").innerHTML = "names must have values";
    } 
    if ((zipcode <10000) || (zipcode >99999))
    {
        document.getElementById("loginStatus").innerHTML = "invalid zip code";
    }
    else if (passW  !="UATrocks")
    {
        document.getElementById("loginStatus").innerHTML = "invalid password";
    }
    else
    {
        /*when credentials are met access to website is granted*/
       document.getElementById("loginStatus").innerHTML = "Accepted";
       alert("Success");
       location.replace ("file:///C:/Users/leee6/Downloads/csc102%20webpage/index.HTML");
    }

}