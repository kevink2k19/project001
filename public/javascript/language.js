  $('.languageChoose').on("change",function(){
    let lan = this.value;
    switch (lan){
      case "mm":
      window.location.href = '/language=mm';
      break;
      case "en":
      window.location.href = '/';
      break;
      default:
      alert("language is coming soom")
      break;
    }
      // if(this.value === "mm"){
      //   window.location.href = '/language=mm';
      //   $(this).find("mm").remove();
      // }
  })
