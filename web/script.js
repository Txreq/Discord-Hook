function openTab(evt, tab){
    var i, content, button;
    content = document.getElementsByClassName("content");
    button = document.getElementsByClassName("tabBtn");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
}


function saveFunction(){
  username = document.getElementById("username");
  avatarURL = document.getElementById("avatar");
  hookLink = document.getElementById("link");

  eel.saveSettings(username.value, avatarURL.value, hookLink.value)
  button = document.getElementById("saveBtn")
  button.style.backgroundColor = "#43b581"
  setTimeout(function(){
    button.style.backgroundColor = "#7289DA"
  }, 3000)
}

function sendMessage(){
  mesagesLog = document.getElementById("txtArea")
  messageContent = document.getElementById("msgInput")
  eel.sendMessage(messageContent.value)
  mesagesLog.value = `${mesagesLog.value}\n[HOOK] ${messageContent.value}`
  messageContent.value = ""
  button = document.getElementById("sendBtn")
  button.style.backgroundColor = "#43b581"
  setTimeout(function(){
    button.style.backgroundColor = "#7289DA"
  }, 500)
  console.log("test");
}


function sendEmbed(){
  title = document.getElementById("title").value
  description = document.getElementById("description").value
  author = document.getElementById("author").value
  authorPic = document.getElementById("authorPic").value
  footer = document.getElementById("footer").value
  footerPic = document.getElementById("footerPic").value
  thumbnail = document.getElementById("thumbnail").value
  image = document.getElementById("image").value
  color = document.getElementById("color").value
  var colorNumber = parseInt(color, 16)
  console.log(colorNumber);

  eel.sendEmbed(description=`${description}`, title=`${title}`, author=`${author}`, 
  authorPic=`${authorPic}`, 
  footer=`${footer}`, footerPic=`${footerPic}`, 
  image=`${image}`, thumbnail=`${thumbnail}`, color=colorNumber) 
  button = document.getElementById("sendBtn")
  button.style.backgroundColor = "#43b581"
  setTimeout(function(){
    button.style.backgroundColor = "#7289DA"
  }, 3000)
}


function clearInputs(){
  title = document.getElementById("title")
  description = document.getElementById("description")
  author = document.getElementById("author")
  authorPic = document.getElementById("authorPic")
  footer = document.getElementById("footer")
  footerPic = document.getElementById("footerPic")
  thumbnail = document.getElementById("thumbnail")
  image = document.getElementById("image")
  color = document.getElementById("color")
  embedElementsArray = [title, description, author, authorPic, footer, footerPic, thumbnail, image, color]

  for(let x=0; x < embedElementsArray.length; x++){
    embedElementsArray[x].value = "";
  }
}