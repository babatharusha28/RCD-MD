//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VnOTB3Wi9ydmlaSGNKZVF6cjJSYldPM2RrdkFJMGRVQ3RjNzRZMGwwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGVhbDYyMlF1Y3UvRkw0VUlXUzdJaVRXSjVjYlc0cGJBTk9hZnc3WktBdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHUFd1a0cyQy9MRkd0ZDEyLy9iSHc1UkJMSGl2eUQzbUgra2VWeWVlRDFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzbUcxaTdmVWw2ZFFlTlBTNmYrNmVkSFBhRDJWN0RpS3RaRTVzSkY1QUM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitMRjJmWCs1NUJSK2g1UHJTN0JRL25sdHp0dzNhaGhHYk4zbWhFVzBBMWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDUlAyTXM1Rmd3RzQ4eUQvRXh2Z0l3ODh4bmdLM0hJMlQ1Z1d1S2RDR0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVVS1ZjTFVQU3dRdWIyL2ZzZGlPK1NGdkxzSUlMN3RPV1pWZEx6QXMyYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUVZaERFZHp4Ym1DWmdPY2l3bHM0UTlkaUhFUUkyamxKU2xGV0Q0MGxSZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY5dzBSTStmQ1RwOEFnN2Z2S3pQOCtHWnZNbXFIYlgxRjNXTGJKcEgzdUpwb1d6UDJIU3Y2YkZ1YWJDb1B1M0RXQnpBaE9JS3VXOTM0eG1Kd2U1OURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJmYzdsaDA1aVZraEJleDVabTA5MGZUTThxNlBEM2ExM2VuTXlTRTJLZjNjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE2ODQ2NjE2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMxRDY5Q0ZGNDlGRThEODM5RTBCOTYwRkJGMkIzODhCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2MTMwOTV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE2ODQ2NjE2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE2NTJCNUYzNTU0MjBCOTNFRjBBRjBEQkMzMUM1NDBFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2MTMwOTV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE2ODQ2NjE2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRCMDJERDlGQ0VBMTE1QzFFREQzM0NGODczQ0QyQjdFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2MTMwOTh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE2ODQ2NjE2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkwQTcxQUU2MzhDOTExMjEwQjJDMzE5REU2RTI4OUIwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2MTMwOTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Indib2tfTW9UVHJhN0xYYlJqZzdWckEiLCJwaG9uZUlkIjoiYjAzMTczOGUtNjU0Ny00NDNlLTg0ZTItNGI5ZmY3ZTYxYmQ0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFZQVEvS0crcU9tem1oTmJPQjNtTVhYbzJ2VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBaUk0Ym9YWFVobitEcjIyZmxPL3lLd0hjV3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNTFSNzU3RTQiLCJtZSI6eyJpZCI6Ijk0NzE2ODQ2NjE2OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QgvCdkJjwnZCB8J2QhPCdkJEg8J2QsSDwnZCT8J2Qh/CdkIDwnZCR8J2QlPCdkJbwnZCAIPCdkIjwnZCDIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKdUk3c2NFRUppczA3b0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ2MDVFaVl1QTNOQUJNN2V5b3UyUkVUdTNMZXJvV2xJdkpuQXZIMWlyT253PSIsImFjY291bnRTaWduYXR1cmUiOiJkaC96eHJIWlNUV2tGN2RETzhCUUJ5QzJYZ21tZTZ4bSszVFZwbmE0aVdtN1RuQU1BK0xxVjZGOXRYK0ZlclhMdEIrblM4cGRzMWRkK0VEaHkyTWpCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR2NyZDVKUGR3c25tdXE0eTVzdEVSSGlsVW5qOGNJb2gzZU9HVXlhZ1JZc0xqeTJuRXhsUzZwMmFpZzRTNVNERGFaL3huL1A0RDNjQVNQdXB4elYwQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNjg0NjYxNjo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI5T1JJbUxnTnpRQVRPM3NxTHRrUkU3dHkzcTZGcFNMeVp3THg5WXF6cDgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM2MTMwOTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWdmIn0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94716846616";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || ".",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "𝐂𝐘𝐁𝐄𝐑 𝐱 𝐓𝐇𝐀𝐑𝐔𝐖𝐀 𝐈𝐃",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
