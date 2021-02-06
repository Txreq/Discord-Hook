const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const ini = require('ini')
const { info } = require('console')

const config = ini.parse(fs.readFileSync('config.ini', 'utf-8'))
const hookClient = new Discord.WebhookClient(config.id, config.token) 

function catchError(errMessage){
    var err = document.getElementById("error")
    err.style.visibility = 'visible'
    err.innerHTML = `<p>${errMessage}</p>`
    setTimeout(function(){
        err.style.visibility = 'hidden'
        err.innerHTML = `<p></p>`
    }, 3000)   
}

function sendMessage(){
    var messageValue = document.getElementById('msgInput')
    var textArea = document.getElementById('txtArea')
    hookClient.send(messageValue.value, {
        username: "" + config.username + "",
        avatarURL: "" + config.avatarUrl + ""
    }).catch(err => {
        if(err == null) return;
        console.log(err);
        catchError(`Discord API Error: Invalid avatar url, username or webhook url`)
    });

    textArea.value = `${textArea.value} \n[${config.username}] ${messageValue.value}`
    messageValue.value = "";
}


function sendEmbed(){
    var title = document.getElementById("title")
    var description = document.getElementById("description")
    var author = document.getElementById("author")
    var authorPic = document.getElementById("authorPic")
    var footer = document.getElementById("footer")
    var footerPic = document.getElementById("footerPic")
    var thumbnail = document.getElementById("thumbnail")
    var image = document.getElementById("image")
    var color = document.getElementById("color")

    var embed = new Discord.MessageEmbed()
        .setColor(color.value)
        .setTitle(title.value)
        .setAuthor(author.value, authorPic.value)
        .setDescription(description.value)
        .setThumbnail(thumbnail.value)
        .setImage(image.value)
        .setTimestamp()
        .setFooter(footer.value, footerPic.value);
    hookClient.send("", {
        username: config.username,
        avatarURL: config.avatarUrl,
        embeds: [embed]
    }).catch(err => {
        console.log(err);
        catchError(`Discord API Error: Invalid avatar url, username or webhook url`)
    });
}

function saveSettings(){
    var username = document.getElementById('username')
    var avatar = document.getElementById('avatar')
    var link = document.getElementById('link')
    let infos = link.value.split('/')
    console.log(`[WEBHOOK URL]\n${infos}\n\n[ID]\n${infos[5]}\n\n[TOKEN]\n${infos[6]}`);
    config.username = "" + username.value + ""
    config.avatarUrl = "" + avatar.value + ""
    config.id = "" + infos[5] + ""
    config.token = "" + infos[6] + ""
    console.log();
    fs.writeFileSync('config.ini', ini.stringify(config))
}