function openTab(evt, tab){
    var i, content, button;
    content = document.getElementsByClassName("content");
    button = document.getElementsByClassName("tabBtn");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    document.getElementById(tab).style.display = "block";
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