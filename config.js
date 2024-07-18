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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_24_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxMixcbiAgICAgICAgOTEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1LFxuICAgICAgICA4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU2LFxuICAgICAgICAzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE2LFxuICAgICAgICA3MixcbiAgICAgICAgMjM4LFxuICAgICAgICA3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1LFxuICAgICAgICA1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICA0LFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMixcbiAgICAgICAgNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNyxcbiAgICAgICAgMixcbiAgICAgICAgODUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvTm9PZmNFVnNDYkFhS2RjN09EUnZ1TEpkdlZQdUVOVHdra1pqeUcybkc0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyOTQwNjk3MTMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFRjZDQjM3RTgxRDVBNzY0RjVCNDdFRTVGMzc5NjNDMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNDE0NjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjk0MDY5NzEzM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTI1MjVGMzY3MzU5RDI5MUY0NURBQUU5M0ZBMDkwQTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzQxNDYwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhXMndIblZfUzdtTUdVem1qUWZHOUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTc0ZDc2ZTAtNDI0Yy00Zjg4LTk0ZWUtNjVkMDJmYzU4Yzk3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ2LFxuICAgICAgMTcwLFxuICAgICAgNzYsXG4gICAgICAyMTAsXG4gICAgICAyOCxcbiAgICAgIDMzLFxuICAgICAgMTUzLFxuICAgICAgMjE1LFxuICAgICAgMTg1LFxuICAgICAgMTAyLFxuICAgICAgMjIyLFxuICAgICAgMjMyLFxuICAgICAgMzksXG4gICAgICAxNjAsXG4gICAgICAyMzUsXG4gICAgICAxNjgsXG4gICAgICAxNTUsXG4gICAgICAyNDIsXG4gICAgICAxMjgsXG4gICAgICAxMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgNzMsXG4gICAgICAxOTYsXG4gICAgICAxMjEsXG4gICAgICAyMjQsXG4gICAgICAxMzksXG4gICAgICAyMDMsXG4gICAgICA2OSxcbiAgICAgIDk1LFxuICAgICAgNSxcbiAgICAgIDM1LFxuICAgICAgMjIzLFxuICAgICAgNzcsXG4gICAgICA5OSxcbiAgICAgIDI1LFxuICAgICAgMjI4LFxuICAgICAgMTIzLFxuICAgICAgMzAsXG4gICAgICA3LFxuICAgICAgMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUw1RU5WOEFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyOTQwNjk3MTMzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMjIwNTI3NDkzOTQ5NToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xUc3JzZ0RFSTZzNXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM09NTmoxVXdBZVpsSlA2NFBaZlhVWXdjRmhBUWRpcTI3WU5ocVgxcnJYTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1NCtCazY2Y3FueW9PRzV1bkNjczI0NzhSSFhpc1VFMnBWTlJFV1JaREtlMVdXR01sbzlHL1EveUJVTzIrNXVOMGl1QXkrQjVLOVhwelcycmpXUUZBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqaWtzRWsyaW1uaDdaZ2lSdHFwZzBFczhmM3EyTEtYdUFCcnpjZ1JDMWgvdmNsbXpJYWZIcDN0ZkxMTGJKZVZLalh6c0M0S2w4NERQczJXWVhIemhpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjk0MDY5NzEzMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM0MTQ1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlYNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVg0Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
