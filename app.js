const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
var lanGuage = "";


app.get("/",function(req,res){
  let resgisteration = "Register",logIn = "logIn",csno = "Casino",sccer = "Soccer",sport = "E-Sport",slt = "Slot",t2d3d = "2D 3D";
  let currentLan = "Eng",secLan = "မြန်မာစာ" ,thirdLan = "ไทย",fouthLan="中国人";
  let currentVal = "en",secVal="mm",thirdVal = "th",fouthVal="ch";
  let resTt="Account Registeration" ,username = "username",agentCode="Agent Code",phoneNoInput = "Phone No", pssInput = "Password",pssRe ="Retype Password",remBer="Remember Me",cancel="Cancel";

  res.render("home",{
    Register:resgisteration,login:logIn,casino:csno,soccer:sccer,
    eSport:sport,slot:slt,t2D3D:t2d3d,currentLan:currentLan,secLan:secLan,
    thirdLan:thirdLan, fouthLan:fouthLan,currentVal:currentVal,secVal:secVal,thirdVal:thirdVal,fouthVal:fouthVal,
    phoneNo:phoneNoInput,pass:pssInput,repass:pssRe,remember:remBer,cancel:cancel,registerTitle:resTt,username:username,agentCode:agentCode,
  })
})

app.get("/language=mm",function(req,res){
  let resgisteration = "အကောင့်ဖွင့်ရန်",logIn = "အကောင့်ဝင်ရန်",csno = "ကာစီနို",sccer = "ဘောလုံး",sport = "အွန်လိုင်းအားကစား",
  slt = "စလော့",t2d3d = "၂လုံး ၃လုံး";
  let currentLan = "မြန်မာစာ",secLan = "Eng" ,thirdLan = "ไทย",fouthLan="中国人";
  let currentVal = "mm",secVal="en",thirdVal = "th",fouthVal="ch";
  let resTt="အကောင့်ဖွင့်ခြင်း" ,username="အသုံးပြုသူအမည်",agentCode="အေးဂျင့်ကုဒ်",phoneNoInput = "ဖုန်းနံပါတ်", pssInput = "စကားဝှက်",pssRe ="စကားဝှက်ကိုထက်ရိုက်ပါ",remBer="မှတ်ထားပေးပါ",cancel="ပယ်ဖျက်ပါ";
  res.render("m_home",{
    Register:resgisteration,login:logIn,casino:csno,soccer:sccer,
    eSport:sport,slot:slt,t2D3D:t2d3d,currentLan:currentLan,secLan:secLan,
    thirdLan:thirdLan, fouthLan:fouthLan,currentVal:currentVal,secVal:secVal,thirdVal:thirdVal,fouthVal:fouthVal,
    phoneNo:phoneNoInput,pass:pssInput,repass:pssRe,remember:remBer,cancel:cancel,registerTitle:resTt,username:username,agentCode:agentCode,
  })
})
app.listen(process.env.PORT || 80,function(){
  console.log("Sever Started at Port 3000")
})
