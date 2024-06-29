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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923278533179";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_09_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMTQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxLFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1NixcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTkxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1LFxuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNCxcbiAgICAgICAgODUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBaEc1Ry9keWgvK0RIaXB5NTRTYWxkSDVEbjE1NU9qM0R6VVJPakM3bUEwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI3ODUzMzE3OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDI5OTM0ODZBNkM0REMxNTJFNTY0OEVEODcyRDQzODBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5Njg4MTU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRDVG40OUthUWhpOFp5c3dCLWN4UFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjk5MmJhOGItNGM1MC00NzdhLWI1Y2UtODlhYThjOWQ1M2ZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDIwNyxcbiAgICAgIDEwMyxcbiAgICAgIDE5OSxcbiAgICAgIDE1LFxuICAgICAgMTI1LFxuICAgICAgMjMsXG4gICAgICAyMCxcbiAgICAgIDE3NixcbiAgICAgIDE3NSxcbiAgICAgIDIyLFxuICAgICAgMTI1LFxuICAgICAgNTAsXG4gICAgICAxNzAsXG4gICAgICAxMDEsXG4gICAgICAzLFxuICAgICAgNDAsXG4gICAgICAxMjcsXG4gICAgICAyNDcsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICA3NixcbiAgICAgIDk2LFxuICAgICAgMjQsXG4gICAgICAxNjQsXG4gICAgICAxNDIsXG4gICAgICAyMTcsXG4gICAgICAxMzksXG4gICAgICA3NixcbiAgICAgIDIyOSxcbiAgICAgIDE4NyxcbiAgICAgIDE3NSxcbiAgICAgIDM1LFxuICAgICAgMzcsXG4gICAgICA4NyxcbiAgICAgIDE3MyxcbiAgICAgIDEwOSxcbiAgICAgIDIxNSxcbiAgICAgIDE4NCxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3R0RLUzgyUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjc4NTMzMTc5OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTg5NDk0NTQ4MDcyNTU6MjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSXRzIFNoZWlraFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09iTjdZUUJFTm0zZ2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSlA3blZuZ3pkNFpuQnJTeVo2TzNtNTRvTjExZ0t0NTJ0M1NucFZmdDRWbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxWkQ4TFZPaURMRHB1eCtGRnp4b0RmeXc2RHdmeUcxTXZ5d2x2SmorWEdTSWIyVVlsWWZTaVYrd0lmQ2JoRzZGRGxCRmN5NUhSMEE3cmhvOXdHV2pBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvQUNGRWI4b0Uxa2t0SHB6MzB1Q0ZWREpXZWxaOVBXOGlTSnNaSmpTNUQxQWZlcE8xMlY3aEh0eGpjTE1ob2FWWjVxVzZYTlFxbUNRcXQyQzBkVW9qQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzg1MzMxNzk6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk2ODgxNTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOV0FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5XQS5qc29uIjogIntcImtleURhdGFcIjpcIjRzSkt5Zk5tZ2s0NmtEVWhjR3NoaCtaVnhET1hiZnRFWnFaUm81WnRxZW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjc4NjE5ODc4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2ODgxNTc5MzVcIn0iCn0="  // PUT your SESSION_ID 


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
