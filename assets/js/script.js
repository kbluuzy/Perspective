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
function upload() {
    const fileUploadInput = document.querySelector('.file-uploader');
  
    // Check if a file was selected
    if (!fileUploadInput.files.length) {
      return alert('Please select an image to upload');
    }
  
    const image = fileUploadInput.files[0];
  
    // Check if the file is an image
    if (!image.type.includes('image')) {
      return alert('Only images are allowed!');
    }
  
    // Check if file size exceeds 10 MB
    if (image.size > 10_000_000) {
      return alert('Maximum upload size is 10MB!');
    }
  
    const fileReader = new FileReader();
  
    fileReader.onload = (fileReaderEvent) => {
      const profilePicture = document.querySelector('.profile-picture');
      profilePicture.style.backgroundImage = `url(${fileReaderEvent.target.result})`; // Template literal for cleaner string construction
    };
  
    fileReader.readAsDataURL(image);
  }