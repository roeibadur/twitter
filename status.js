"use strict"
    let account;
    for (let i = 0; i<localStorage.length; i++){
            account  = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
            if(account.status=="true")
                break;                   
    }
    if(account.status=="true"){

        let elem=$("<button></button>").html("Logout").click(function(){
            logout(this)
        });
        $("#log").append(elem); 

    }
    else{

        let elem=$("<button></button>").html("Login").click(function(){window.location.href='Login.html';});
        $("#log").append(elem);  
    }
     
function logout(elem){
    for (let i = 0; i<localStorage.length; i++) 
    {
        let account  = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
        account.status= "false";
        window.localStorage.setItem(account.user,JSON.stringify(account));                  
    }
    window.location.href='Tweet.html';
}
 
