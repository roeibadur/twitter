"use strict"
    let status=document.getElementById('log');
    let account;
    for (let i = 0; i<localStorage.length; i++) 
    {
        account  = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
        if(account.status=="true")
            break;                   
    }
    if(account.status=="true")
    {
        let elem=document.createElement('button');    
        elem.innerHTML="Logout";
        status.append(elem);
        elem.addEventListener ("click", function() {
            logout(this);
          });      

    }
    else
    {
        let elem=document.createElement('button');
        elem.innerHTML="Login";
        status.append(elem);
        elem.addEventListener ("click", function() {
            window.location.href='Login.html';            
          });       

    }
     
function logout(elem)
{
    for (let i = 0; i<localStorage.length; i++) 
    {
        let account  = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
        account.status= "false";
        window.localStorage.setItem(account.user,JSON.stringify(account));                  
    }
    window.location.href='Tweet.html';
}
 
