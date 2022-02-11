document.getElementById('loginBtn').addEventListener('click',()=>{
    let inputValue=document.getElementById('email');

    let password=document.getElementById('password');
    console.log(inputValue.value,password.value); 
    if (inputValue.value=="sabbir@bank.com"&& password.value==1234) {
      window.location.href='../home.html';
    } 
    else {
        alert("Please Enter Valid Email and Password")
    }
    inputValue.value='';
    password.value='';
})