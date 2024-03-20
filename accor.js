const date = new Date();
const readable_date = date.toDateString();
console.log(readable_date);

$("#time p").text(readable_date);
$(document).ready(function () {
  $(".sign-in").click(function () {
    $(".section").css("opacity",0.9);
    $("#container").css({
      "z-index": 2,
      "display": "flex",
      "animation-name": "movedown",
      "animation-duration": "0.3s",
      "animation-fill-mode": "forward",
      "animation-timing-function": "ease-out",
      "background-color":"white"

    });

  })
  $(".input").click(function () {
    $(this).toggleClass("box-border");
  })
  $(".icon").click(function () {
    $("#container").fadeOut(150);
    $(".section").css("opacity",2);
    $(".input").val("");
    $(".input").removeClass("box-border");

  })
  $(".check").click(function(){
    if ($('.check').is(":checked")){
      $('.input:nth-child(2)').attr('type', 'text');
    }
    else{
      $('.input:nth-child(2)').attr('type', 'password');
    }

  })
  $("#button").click(function () { 
    var Username = $(".input:first").val()
    var pass = $(".input:nth-child(2)").val()
    $(".input").removeClass("box-border");
    
    if (Username == "" || pass == ""){
      alert("All fields are necessary.")
    }
    else{
      console.log("Userame=", Username)
      console.log("Password=", pass)
      window.open('file:///C:/web%20development/HotelMangement/welcomePage.html', '_parent')
    }
  })

});
