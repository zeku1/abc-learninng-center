const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAcc");

document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
    e.preventDefault();
    document.getElementById('login').classList.add("hide");
    document.getElementById('createAcc').classList.remove("hide");
});

document.querySelector("#linkLoginAccount").addEventListener("click", e =>{
    e.preventDefault();
    document.getElementById('login').classList.remove("hide");
    document.getElementById('createAcc').classList.add("hide");
});


document.querySelector("#CreateUser").addEventListener("click", function(e){
    e.preventDefault();

    const Username = document.getElementById("name").value;
    const Useremail = document.getElementById("email").value;
    const Userpassword = document.getElementById("password").value;


    let users;
    const savedUsers = JSON.parse(localStorage.getItem('users'));

    if(Array.isArray(savedUsers)){
        users = savedUsers;
    }else{
        users=[{
            name: 'admin',
            email: 'admin@gmail.com',
            password: 'admin123'
            
        }];
    }

    


    var bName = false;
    var bEmail = false;
    var bPass = false;

    if(document.getElementById('name').value === '' || document.getElementById('name').value === null ){
        
        $("#div-Uname").css('border','solid 1px #cc3333');
        $("#name").attr('placeholder','input name');
        $("#name").focus(function(){
            $("#div-Uname").css('border','none');
            $("#name").attr('placeholder','name');
        });
    }else{
        bName = true;
    }

    if(Useremail.includes("@")&& Useremail.includes(".")){
        bEmail = true;
    }else{
        $("#div-email").css('border','solid 1px #cc3333');
        document.getElementById("email").value = '';
        $("#email").attr('placeholder','invalid email');
        
        $("#email").focus(function(){
            $("#div-email").css('border','none');
            $("#email").attr('placeholder','email');
        });
    }

    if(Useremail.includes("@")&& Useremail.includes(".")){
        bEmail = true;
    }else{
        $("#div-email").css('border','solid 1px #cc3333');
        document.getElementById("email").value = '';
        $("#email").attr('placeholder','invalid email');
        
        $("#email").focus(function(){
            $("#div-email").css('border','none');
            $("#email").attr('placeholder','email');
        });
    }

    if(Userpassword.length <= 5){
        $("#div-password").css('border','solid 1px #cc3333');
        document.getElementById("password").value = '';
        $("#password").attr('placeholder','must be more than 4 characters');

       
        $("#password").focus("focus", e =>{
            e.preventDefault();

            $("#div-password").css('border','none');
            $("#password").attr('placeholder','password');
        });
    }else if(Userpassword.length >= 21){
        $("#div-password").css('border','solid 1px #cc3333');
        document.getElementById("password").value = '';
        $("#password").attr('placeholder','must be less than 21 characters');

        
        $("#password").focus("focus", e =>{
            e.preventDefault();

            $("#div-password").css('border','none');
            $("#password").attr('placeholder','password');
        });
    }else{
        bPass = true;
    }


    if(bName&&bEmail&&bPass){
        users.push({
            name: Username,
            email: Useremail,
            password: Userpassword
        })

        window.location.href = "thankYouPage.html";
    }

    localStorage.setItem('users',JSON.stringify(users));


});







