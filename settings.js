//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: peteroghenekobiruo" //ur yt chanel name
global.socialm = "GitHub: kobistech ology" //ur github or insta name
global.location = "Africa, lagos, Nigeria" //ur location

//new
global.botname = 'johnmark V2' //ur bot name
global.ownernumber = '2349026678751' //ur owner number
global.ownername = 'johnmark' //ur owner name
global.websitex = "https://youtube.com/peteroghenekobiruo"
global.wagc = "https://whatsapp.com/channel/0029Vabb7YwFSAt31QUidn1k"
global.themeemoji = ''
global.wm = "HANS_TECH."
global.botscript = 'https://github.com/Kobistechnology/Hans-V2' //script link
global.packname = "Sticker By"
global.author = "KOBIS_TECH"
global.creator = "2349026678751"
global.xprefix = '.'
global.premium = ["2349026678751"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
