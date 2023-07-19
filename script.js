
function hide(){
    /*
    document.getElementById("popup-menu").classList.add("hide");
    document.getElementById("hideBtn").classList.remove("hide");
    */
    document.getElementById("hideBtn").classList.add("hide");
    document.getElementById("showBtn").classList.remove("hide");

    $(".popdetails").css('grid-template-columns','50px 1fr');
    $(".sidebar").hide();
    $("#popup-menu").slideLeft(500);
    
}

function show(){
    document.getElementById("hideBtn").classList.remove("hide");
    document.getElementById("showBtn").classList.add("hide");

    $(".popdetails").css('grid-template-columns','250px 1fr');
    $(".sidebar").show(500);
    $("#popup-menu").slideLeft(2000);
}

function menu(){
    document.getElementById("user-menu").classList.remove("hidden");
    document.getElementById("user2").classList.remove("hidden");
    document.getElementById("user").classList.add("hidden");
}

function menu2(){
    document.getElementById("user-menu").classList.add("hidden");
    document.getElementById("user2").classList.add("hidden");
    document.getElementById("user").classList.remove("hidden");
}

