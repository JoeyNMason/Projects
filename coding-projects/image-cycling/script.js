let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Move to the next slide
    slideIndex++;
    
    // Loop back to the first slide if at the end
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }  
    
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";  
    
    // Change slide every 3 seconds (3000 ms)
    setTimeout(showSlides, 100);
}