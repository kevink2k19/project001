// Image
function imgColor(){
  $(this).removeClass("imgGrayScale");
}

function imgBW(){
  $(this).addClass("imgGrayScale");
}

function iconColor(){
  $(this).find("img").removeClass("imgGrayScale");
  $(this).find("img").addClass("zomeOut-2");
}

function iconBW(){
  $(this).find("img").addClass("imgGrayScale");
  $(this).find("img").removeClass("zomeOut-2");
}

function registerOn(){
  $('.regForm').removeClass('no-display');
  $('.form-area').slideDown('slow');
  setTimeout(function(){
    $('.btn-cancel').css('opacity','1.0');
  },1000);
}
function registerOff(){
  $('.regForm').addClass('no-display');
  $('.form-area').slideUp('slow');
  $('.btn-cancel').css('opacity','0.0');
}
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("ကျေးဇူးပြု၍အချက် ဒီအချက်အလက်ကိုဖြည့်ပါ");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})
// button
