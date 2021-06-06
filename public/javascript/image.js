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
