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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9203289479116";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_16_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDgxLFxuICAgICAgICA0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgNyxcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NixcbiAgICAgICAgOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc4LFxuICAgICAgICA2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxODYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICA3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQzLFxuICAgICAgICA0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg1LFxuICAgICAgICA3NixcbiAgICAgICAgODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTk4LFxuICAgICAgICA5NixcbiAgICAgICAgODUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY2LFxuICAgICAgICA5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDUxLFxuICAgICAgICA0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInJ4aVpzQzExRlRVUURWaVJFT01LMEh4Qlh6d0VYdnk4OGw0a2hOY1JhRzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjg5NDc5MTE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RTM1NkM3NkY5NkMyNTJEOEEwOTdDRDc2RkU4RURGRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk2OTIxNTBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODk0NzkxMTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMxQzkyODI2NTIxRTQyMEQ4MUZFRjA5QzE0QTJBODNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTY5MjE1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyNk5yZDQ1QVNnbTJFeEtpZWVVM2tBXCIsXG4gIFwicGhvbmVJZFwiOiBcImEzNTA5YzQ1LWYwMzAtNDdjZS1hNjE3LTIwZDNkMzFiYjEyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICAyMjQsXG4gICAgICA1MixcbiAgICAgIDIyOCxcbiAgICAgIDE2NyxcbiAgICAgIDE2OSxcbiAgICAgIDkxLFxuICAgICAgMjQ4LFxuICAgICAgMTQzLFxuICAgICAgMjI5LFxuICAgICAgNDcsXG4gICAgICAxNjEsXG4gICAgICAyNDQsXG4gICAgICAxODUsXG4gICAgICA1NixcbiAgICAgIDIxMixcbiAgICAgIDE0NCxcbiAgICAgIDEyNixcbiAgICAgIDIxOCxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICAxNTksXG4gICAgICAxODEsXG4gICAgICAxNTAsXG4gICAgICAxMjgsXG4gICAgICAyNTIsXG4gICAgICAyMzksXG4gICAgICAyNDAsXG4gICAgICAxNyxcbiAgICAgIDIwOCxcbiAgICAgIDEzNSxcbiAgICAgIDg0LFxuICAgICAgNjAsXG4gICAgICA1MixcbiAgICAgIDE5MSxcbiAgICAgIDcxLFxuICAgICAgMTg1LFxuICAgICAgNDIsXG4gICAgICAyMjYsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjNNTFY2QzFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI4OTQ3OTExNjoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9sbWF4XCIsXG4gICAgXCJsaWRcIjogXCI0NDU5MDcxOTYyMzM5OToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQeUxzN0FGRU92V2diUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIklNTXpOZTY0b1FNQnpWWmxucUZMcmgraDlpekhxUDZWN3ZmT2I5VGNtME09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQW1FSXNzYzNJanZFT0FTUnMwYXFaWnQzdUFyQ2Z5cjg3azc0dEh4V3RKaDd0dk9kR21yb2xJRDhHRTI0SGs2c2lsSTFWQjRETjZpbDYzb3IwbFptREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTmJPbzNGVys4TnA1NXI1K2s4UmZkeGROMDhsUVFXeWkzOXR5ZVgwSDJpTnMxOTZlbGRKV25UQ2dTdDI1VjdjM1RpWnBaTVRRWGptYm9rMjhjLzlQanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjg5NDc5MTE2OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjkyMTQ1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFpMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMWkwuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
