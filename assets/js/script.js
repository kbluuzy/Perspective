console.log("hello world!")
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


let mobileMenuOpen = false;

$("#mobile-menu-button").click(function(){
    
    if(mobileMenuOpen == false) {
        $("#main-menu").removeClass("mobile-display-none");
        $("#mobile-menu-text").text("Close");
        let close = $("#mobile-menu-icon").attr("src").replace("hamburger", "close");
        console.log(close);
        $("#mobile-menu-icon").attr("src", close);

        mobileMenuOpen = true;
    }

    else {
        $("#main-menu").addClass("mobile-display-none");
        $("#mobile-menu-text").text("Menu");
        let open = $("#mobile-menu-icon").attr("src").replace("close", "hamburger");

        $("#mobile-menu-icon").attr("src", open);

        mobileMenuOpen = false; 
    }
});