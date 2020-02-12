
let firebaseConfig = {
    apiKey: "AIzaSyDkMAzEkVh9zW2ldb3GDh83qqmqSiIL4nI",
    authDomain: "tomotomo-5810e.firebaseapp.com",
    projectId: "tomotomo-5810e",
};
  
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);


  let db = firebase.firestore();



  $('#save').click(()=> {
   let firstname=   document.myForm.fname.value;
   let lastname = document.myForm.lname.value;
   let emails = document.myForm.email.value;
   let phonenum = document.myForm.pnum.value;
   let msg = document.myForm.msg.value;

   
   if (firstname == "")                                  
    { 
        alert("Please enter your Firstname."); 
        document.getElementById("fname").focus(); 
        return false;
    } 
    
    if (lastname == "")                                  
    { 
        alert("Please enter your Lastname."); 
        document.getElementById("lname").focus(); 
        return false;
    } 
   if(emails =="" )
   {
       alert("Please enter your Lastname.");
       document.getElementById("email").focus();
       return false;
   }
  
//    if(validateEmail(email) == false )
//    {
//        alert("Invalid email");
//        document.getElementById("email").focus();
//        return false;
//    }

   if(phonenum  =="")
   {
       alert("Please enter your Phone Number");
       document.getElementById("numphone").focus();
       return false;
    }
    validateForm();
        
    
    
    
    
    db.collection("users").add({
           Firstname:$('#fname').val(),
           Lastname : $('#lname').val(),
           Email: $('#email').val(),
           Phonenumber:$('#numphone').val(),
           GenderOption:$('input[name=gen]:checked', '#contact').val(),
           MSG : $('#msg').val(),
       
        
           
            
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            $('#fname').val('')
            $('#lname').val('')
            $('#email').val('')
            $('#numphone').val('')
            $('input[name="gen"]').prop('checked', true);
            $('#msg').val('')
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
 

 return true;
}

)
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateForm() {
    var radios = document.getElementsByName("gen");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
        alert("Please choose your gender");
    return formValid;
    }
    
}




