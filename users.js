"use strict"
function showusers(){

    let position=document.getElementById('users');

    for(let i=0;i<localStorage.length;i++){

        let account  = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
        let user=document.createElement('div');
        user.className="container-user";
        user.id=account.display;
        user.innerHTML="<img src='assets/user.png'' height='50px' width='50px'>"+
        "<p>"+account.display+"</p>" + "<button class='follow'>Follow</button>";
        position.append(user);
    }
}
function search(){

    let value=document.getElementById('search');

    for(let i=0;i<localStorage.length;i++){

        let account  = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
        if(account.display.search(new RegExp(value.value,"i"))<0){
            let elem=document.getElementById(account.display);
            elem.style.display="none";
        }
        else{
            let elem=document.getElementById(account.display);
            elem.style.display="inline";            
        }
    }
}
