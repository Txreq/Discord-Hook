import eel
from dhooks import Webhook, Embed
import json
from time import sleep

cfgFile = open("config.json", "r")
loadJSON = json.loads(cfgFile.read()) 
url = loadJSON["link"]
avatar_url = loadJSON["avatar_url"]
username = loadJSON["username"]

@eel.expose
def saveSettings(username, avatar_url, link):
    try:
        cfgFile = open('config.json', 'w')
        jsonForm = f"""{str("{")}
    "username": "{username}",
    "avatar_url": "{avatar_url}",
    "link": "{link}"
{str("}")}"""
        cfgFile.write(jsonForm)
    except Exception as err:
        print(err)

@eel.expose
def sendMessage(messageContent):
    try:
        hook = Webhook(url=url, username=username, avatar_url=avatar_url)
        hook.send(messageContent)
    except Exception as err:
        print(err)


@eel.expose
def sendEmbed(description=None, title=None, author=None, 
            authorPic=None, footer=None, footerPic=None, 
            image=None, thumbnail=None, color=None):
    try:
        hook = Webhook(url=url, username=username, avatar_url=avatar_url)
        embedHook = Embed(
            title=title,
            description=description,
            color=color,
            image_url=image,
            thumbnail_url=thumbnail)
        embedHook.set_author(author, icon_url=authorPic)
        embedHook.set_footer(footer, icon_url=footerPic)
        hook.send(embed=embedHook)
    except Exception as err:
        print(err)

eel.init('web')
def my_other_thread():
    while True:
        eel.sleep(1.0)

eel.spawn(my_other_thread)
eel.start('index.html', size=(600, 600))
while True:
    eel.sleep(1.0)     