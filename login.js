"use strict"
function checkuser(){

    let account=JSON.parse(window.localStorage.getItem(username.value));
    if(account ==null){
        alert('the username not exist');
        return;
    }
    if(account.pass!=password.value){
        alert('the password not match');
        return;
    }
    login(account);
    window.localStorage.setItem(account.user,JSON.stringify(account));
    form.action="Tweet.html";            
}

