

function formValidation() {
  console.log('hai')

    let temp = 9; 
    //name js
    let Name = document.getElementById('name').value ;

    if((Name === '') || (Name === null)){
        document.getElementById('demo').innerHTML = 'Name block should not be empty or null';
        
    }
    else if(Name.charAt(0) !== Name.charAt(0).toUpperCase() ){
        document.getElementById('demo').innerHTML = 'First letter of name must be capital';
        
    }
    else if(!(/^[A-Z a-z]+$/.test(Name))){
        document.getElementById('demo').innerHTML =  'Must Contain only letters '
    }
     else if(Name.length < 3){
     document.getElementById('demo').innerHTML =  "Name should contain atleast 3 characters" ;

    }
    else{
        document.getElementById('demo').innerHTML = '';
        temp--;
    }

   //email js
    let Email = document.getElementById('email').value ;

    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

    if(!emailregex.test(Email)){
        document.getElementById('demo1').innerHTML = 'Email should contain Aa1_.+-%@example.com ';
         
    }
    else{
        document.getElementById('demo1').innerHTML = ' '; 
        temp--;
    }
   //dob js
  const birthDate1 = document.getElementById('date').value    
  const birthDate = new Date(birthDate1);
  const today = new Date();
  const minAge = 18
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if((birthDate1 === '')||(birthDate1 === null)){
       document.getElementById('demo2').innerHTML = 'Please enter Your dob';
      
  }
 else if (age < minAge || monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
       document.getElementById('demo2').innerHTML = 'Age Must greater than or equal to 18years';
       
  }
  else {
      document.getElementById('demo2').innerHTML = ' ';
      temp--;
  }

    // mobile number js  
    let Number =  document.getElementById('number').value ;
     if(!((Number.charAt(0) == '+') && (Number.charAt(1) == 9) && (Number.charAt(2) == 1))){
         document.getElementById('demo4').innerHTML = 'country code should contain +91';

    }
    
   else if((Number.length === 3) || (Number === null) ||  (Number === '') ){
        document.getElementById('demo4').innerHTML = 'Number block should not be empty ';
        
    }
    else if(Number.charAt(3) == 0){
         document.getElementById('demo4').innerHTML = 'starting number should not contain 0 ';

    }
      

   else if(isNaN(Number)){
         document.getElementById('demo4').innerHTML =  'Must enter  numbers only';
       
    }
  
    else if((Number.length < 13) || (Number.length > 13) ){
          document.getElementById('demo4').innerHTML =  'Must contain country code +91 and 10 digits' ;
        
    }
    
    
    else{
         document.getElementById('demo4').innerHTML = ' ';
         temp--;
    }
    // gender js
    let Radio1 = document.getElementById("radio1").checked;
    let Radio2 = document.getElementById('radio2').checked;

    if(!(Radio1==true || Radio2==true)){
     document.getElementById('demo5').innerHTML = 'Please select Gender';
      
    }
    else{
       document.getElementById('demo5').innerHTML = ' ';
        temp--;
    }

    // address js
    let Address = document.getElementById('address').value ;

    if((Address === '')||(Address === null)){
     document.getElementById('demo3').innerHTML = 'Please enter your address' ;
         
    }
    else{
      document.getElementById('demo3').innerHTML = '';
         temp--;
    }
    
     // city js
    let City = document.getElementById('city').value

    if(City == false){
     document.getElementById('demo6').innerHTML =  "Please select your City" ;
       
    }
   
    else{
     document.getElementById('demo6').innerHTML =  '';
       temp--;
    }

    // country js
    let Country = document.getElementById('country').value;

    if((Country === null)||(Country === '')){
     document.getElementById('demo7').innerHTML = 'Please enter your country';
        
    }
     else if(!(/^[A-Za-z]+$/.test(Country))){
        document.getElementById('demo7').innerHTML =  'Must Contain only letters '
    }
     else if(Country.length < 3){
     document.getElementById('demo7').innerHTML =  "Country name should contain atleast 3 characters" ;

    }
    else{
     document.getElementById('demo7').innerHTML = '' ;
       temp--;
    }
    
    // expertise js
    let Expertise = document.querySelectorAll('input[name="check"]');
    let isChecked = false;
    for(let i=0;i< Expertise.length;i++){
       if(Expertise[i].checked){
        isChecked = true;
        break;
       } 
      }

    if(isChecked){
     document.getElementById('demo8').innerHTML = '' ;
     temp--;
    }
    else{
     document.getElementById('demo8').innerHTML = 'Please select your skill' ;
        
     }
  
     // modal show js
    if (temp === 0) {
       console.log('Form is valid. Showing modal.');
       
       
       const myModal = new bootstrap.Modal(document.getElementById('Modal'));
       myModal.show();                           
       
       
       document.getElementById('myForm').reset() ;
    } 
}

     //submit reset prevent js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();  
        formValidation();    
          });
});



 