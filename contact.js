let firstname;
let lastname;
let emails;
let numphone

firstname=document.getElementById("fname").value;
lastname=document.getElementById("lname").value;
emails=document.getElementById("email").value;
numphone=document.getElementById("numphone").value;

function myFunction() {
   
    if (firstname == "")                                  
    { 
        window.alert("Please enter your Firstname."); 
        document.getElementById("l  name").focus(); 
     
    } 
   
    if (lastname == "")                               
    { 
        window.alert("Please enter your Lastname."); 
        address.focus(); 
        return false; 
    } 
       
    if (emails == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (numphone == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
   
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
   
  
   



}

