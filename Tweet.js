"use strict"
function writeTweet(){
    
    $("#chat").show();
    let update=whoConnected();
    if(update==null){ 

        $("#chat").html($("#chat").html()+"<pre><img src='assets/user.png' width='20px' height='20px'> " + 
        "<b style='vertical-align: super;'> Anonymous</b></pre>" + $("#text").val()+"<br>");
        $("#text").val("");
    }
    else{    

        $("#chat").html($("#chat").html()+"<pre><img src='assets/user.png' width='20px' height='20px'> " + 
        "<b style='vertical-align: super;'>"+ update.display +"</b></pre>" + $("#text").val() +"<br>");
        $("#text").val("");
    }
}
