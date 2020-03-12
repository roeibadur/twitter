"use strict"
function writeTweet()
{

    let box=document.getElementById('chat');
    let tweet=document.getElementById('text');
    box.hidden=false;
    let update=whoConnected();
    if(update==null){
        let massege=document.getElementById('text');        
        box.innerHTML+="<pre><img src='assets/user.png' width='20px' height='20px'> " + "<b style='vertical-align: super;'> Anonymous</b></pre>" + massege.value+"<br>";
        let tweet=document.getElementById('text');
        tweet.value="";
    }
    else{
        let massege=document.getElementById('text');        
        box.innerHTML+="<pre><img src='assets/user.png' width='20px' height='20px'> " + "<b style='vertical-align: super;'>"+ update.display +"</b></pre>" + massege.value +"<br>";
        tweet.value="";
    }

}
