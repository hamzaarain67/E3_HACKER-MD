const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUwzb3ovd3hMVCsvQzlQeEpCQ2plR3FZNzNHRWR3Z1pIeTNSUXFlTGxHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEdPZFVtQkpvb2dFdFBzQ01xald3SUpDeUxoM1I5YXI2L21jYm1yZ1dtND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQldWZ2pMbitwdXczdVhwV2JaVVlES1A3Zm9nVTlRS2N6azR6eTNqZzFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvWXRuNjhna1lzc2JuSUxFbnh0NFJKZ0plYVcySjZkbTNFOG9IQWErSnhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDaS9kSzFIaFRuZmV0Q0xsMWtKQXhCLzZMZjVQRXQ0SnpNenVId0xnbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNwcVgxSXFJTmpFNW10Q0pCVHZyUDNlUzFxdnF4SWc1TjVvTS9nVzh3REk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVuVEtCS0VBc3poZFhoZElVK3VQekE5blhRRW1XZEZCVEc3TXM0QTNFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWpiM0xQZFpPczF0L1VFOFByMURDbWxERDMyZFJhcTZ6WXByVS9HREZCbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc2bG8wL2Nya0pTbWR6a2lya2JvSkVOOEl0MzVoZWVYdmNSN091TWlQV3Y4cndHdWxzbk1kWEJ0QTV2R0wzWDBGS0xXa3JzK29XU1lBellpUThyTWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiJMeHUycWZCWC9PSDNQQyt4ZnNoRHcrakdpeVgvaGFxdENzbkxGSmhlT2ZnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJMS0xEVlE0QyIsIm1lIjp7ImlkIjoiOTIzMjY2Mzg4MzA0OjQ5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqnwnZmD8J2ZlvCdmaLwnZmv8J2ZluGqs8qs8JOGqlxu8JOGqc2b8JOGqfCTgo3wk4aq8JOGqs2bXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxXG7wkoCxIiwibGlkIjoiMjAwMTIwMjA5NTMwOTk4OjQ5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFNTZ1lzREVQTHI0c1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYmdMbjFWOGZDYm9LRk9iTCtBeVdyaGlWWmxIR1VuOEZtU1IvbUhzRzhVMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidmhvdmM5S1pUQmk3M3YwR0s0WTJHVkQ1WmlFdXVDMHZFdWV3NHpuK2JnR2dYcW1FbFVwMjBGOG55eEpIbDZ3WDRLNFAxcHIva1F0SUU2QTR2UlpsQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjJaQjk1ejZ5dlUyL1llejB3T1RIbFBXUXVmOE5ER2lOeHpweENIT3g4Nks4YzAzWkRPOUFuSkNIdjYrTUlSekFqT2x4ZzhKem9EMEt6VWFHM0dlYmlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjY2Mzg4MzA0OjQ5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlc0QzU5VmZId202Q2hUbXkvZ01scTRZbFdaUnhsSi9CWmtrZjVoN0J2Rk4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVVFBeEFBIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NDgzODUxNywibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPeVMifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY E3_HACKER-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E3_HACKER-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER-MD*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER-MD ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923495178663",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
