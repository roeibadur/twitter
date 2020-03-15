"use strict"
$(document).ready(function(){

        for(let i = 0; i < localStorage.length; i++){
            let account  = JSON.parse(window.localStorage.getItem(localStorage.key(i)));
            $("#users").append($("<div></div>").addClass("container-user").attr('id', account.display).html("<img src='assets/user.png'' height='50px' width='50px'>"+
            "<p>"+account.display+"</p>" + "<button class='follow'>Follow</button>"));
            
    }
});

$(document).ready(function(){
    $("#search").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        $(".container-user").filter(function(){
            $(this).toggle($(this).attr("id").toLowerCase().indexOf(value) > -1);
        }); 
});
});

