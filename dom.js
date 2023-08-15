    

// login button 
document.getElementById('login-btn').addEventListener('click', function(){
   
    // email
    const email = document.getElementById('user-email').value;
    // console.log(email);

    // password
    const password = document.getElementById('user-password').value;
    // console.log(password);

    if(email == "admin@gmail.com" && password == "admin@gmail.com"){
        window.location.href ="bank.html";  
    }
    else{
       alert('Ohhh No!!!! Invaild Email & Password. Tui ki asolei tor baper chele!!!')
    }

})