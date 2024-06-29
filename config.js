const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9203098287254";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_40_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgMjExLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI5LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0LFxuICAgICAgICAzNyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAzOCxcbiAgICAgICAgODksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNixcbiAgICAgICAgNzksXG4gICAgICAgIDM0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDYyLFxuICAgICAgICA3NixcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR3loOE8zNis5c2RTcDlKMjk4K3ViUHFjZEhlRkRTUjA2YWtsbW5STkVBWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwOTgyODcyNTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE1RUQwNzRGRjM3NEQ5N0VBNDNERUNEMzZFM0ZCNTBDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTY5MDA0MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA5ODI4NzI1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTAxNjIzM0Q3NzA1RDg0QUM1NDAwMTdBQzcxNDNFNzlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NjkwMDQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDk4Mjg3MjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MTg5OTA5ODZFNkIxNkFDNkEzMjk1RDU4OEE0MzU3Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk2OTAwNDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicU5XNzVab1NUZWlLUThmRkdmNUd4Z1wiLFxuICBcInBob25lSWRcIjogXCI3ZjNkZDcwYi0xYWIzLTRlMzgtYjA1NC0xMmU3NmQxZGI1OThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAyMDAsXG4gICAgICAyMjgsXG4gICAgICAxNTYsXG4gICAgICAzOSxcbiAgICAgIDExOSxcbiAgICAgIDE1MSxcbiAgICAgIDMzLFxuICAgICAgMTAsXG4gICAgICAxOTIsXG4gICAgICA5NixcbiAgICAgIDE4NCxcbiAgICAgIDEzMyxcbiAgICAgIDEzMSxcbiAgICAgIDIxOSxcbiAgICAgIDcyLFxuICAgICAgMTc0LFxuICAgICAgMTQ0LFxuICAgICAgNjgsXG4gICAgICAyMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMjUzLFxuICAgICAgOTQsXG4gICAgICAyMjIsXG4gICAgICAxMjYsXG4gICAgICAxNjEsXG4gICAgICA1OSxcbiAgICAgIDE2NCxcbiAgICAgIDgzLFxuICAgICAgMTU1LFxuICAgICAgNDUsXG4gICAgICA0NCxcbiAgICAgIDIxMSxcbiAgICAgIDE1NyxcbiAgICAgIDk0LFxuICAgICAgODgsXG4gICAgICAyNDMsXG4gICAgICAxNDksXG4gICAgICAyNDUsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVNZVDVZWENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5ODI4NzI1NDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIwNzc5NjgxNTA3MjY6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiVDZ0eSBIYSBoYSBoYSBoYSBoYS5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMekduNjBERUxYR2diUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInV6aGpHdThZTG44RnlTRzJMcnl6K0RuSnRWUER0MWJONC9kclFraWluSFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSVRhTWs5L3BDUGNaZ3FiMXJ6Rkd1SDB6UWl1Uy9DT0hRTWpLQlNTbEhiS0pFQ1BaZEZnMWk4QVFyQUJ3MUwrNUc4NFJLYzVJSEJTVS9jMERVeTFCQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidHFFS2NTVlByc2NGay9WNm5qdS9lYkg0b2M4YktZemdqMVg5Y3A4M3U4V3VDMFo3UUFuMERhTEx6RnZyRnV0amk4NnZucUkxbjZxYjZ5aVFXN3p4QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDk4Mjg3MjU0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTY5MDA0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZPRlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRk9GLmpzb24iOiAie1wia2V5RGF0YVwiOlwiK2RZam5GSFA2dmVpVVhrZysyZy8wdXUyUDF4RmVKMkdOSDZuTnRBRGJuZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MDAxOTUxMzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTY5MDA0MDk3NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Sheikh",
  ownername:process.env.OWNER_NAME|| "MUQSIY",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
