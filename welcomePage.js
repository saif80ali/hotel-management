var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n==2){$('#caption').text("The most memorable time starts here");}
  else if (n==3 || n==-1) {
    $('#caption').text("The best place to be");
  } else {
    $('#caption').text("Book a room for your vacations");
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
$("#comment-button").click(function () { 
  var comment = $("textarea").val()
  
  if (comment == "" ){
    alert("Please write something.")
  }
  else{
    $("textarea").val("Thank You for your response...")
    
  }
})
$(".button").click(function(){
  window.open('payment.html', '_parent')
})

