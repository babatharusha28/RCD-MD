//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUVicmliYStXYWxyWTcyYzhVWkptd2dBaGZ6SWtGeXdHdTBTdTRzRjYwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTlkSHFRUWNESEdxSTFmaG1BTFZXaTFaa2NDRGxENTZtQWdVd1pCWE1SYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSGFDVkk5TzVoNml2Tmw3VFJnUTNpNUV0WHoxTkMzRkRwQm8rRk1Kdkd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyYkJiSmo5SVZSQkc5L0E3Nnc5QkUzaFFjSlplMVIvYXJnSTkxT3BvR2djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJJelVCUzBUMlpRTzNpLzFkZ3BGSnN2eFhrTnQ4ZXN6VVVYRzdXMVF6WHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA0UVk3bThrTVR2amY0dE1TcHJoRFBhdTJQUVNxeklCS0VFR0NKRzlJeDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0JvanlVRmphWFo0anhsTTJzbHVOdHhpazFKc3dyRnFHTUVMaXE5bEJuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianNvdzdXQVVxOC83RzU4K1lHWDFrZms4UERrNkY1eVRkZlBTcGhMVkhIdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InViTXBocEJCMzB4eFE1bzErK3FOOTErTTBuYmJISXFoQlJ2TkdTUGhyVDJheDJrenR1MS94d0t0ajdQV1c4K3FvQ3VLdDBWRGplNzZzWFZ1SnRHOEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6IlcrcU02RGROSXZNSXp4L0J5M29KQk1Uc0VYUlNBbVFMbmRHZkMrSGlYbmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTY4NDY2MTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjg5RjJDNjYxQUI0MEU1NzI0MUQzQjlGNzZEN0ExRUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzYwMzYxNH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MTY4NDY2MTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjI4N0EwNzQ5NDk3MTA4Mjk3QzJGNDU0NUEwNDY2QUQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzYwMzYxNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiY0VmVnEtN0NUZFdsLWxsVVhzZHRxdyIsInBob25lSWQiOiJjZGUzYmZmMy01N2E2LTRjNzgtOGE2Yy1mNDE4ZDllYzE1ZjQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFhodk9SbUxjRUMzTUZNQUdVT3RUa0EwSUxjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFDWjc2K1Y4MzZhdThac3JLSzZOajdKaHhDZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3OEoyVlQxMSIsIm1lIjp7ImlkIjoiOTQ3MTY4NDY2MTY6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDzLRZzLRCzLRFzLRSzLQgeMy0IFTMtEjMtEHMtFLMtFXMtFfMtEHMtCBYzLREzLQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05YMTZZUUJFSS9pMHJvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Inh5Qi9XbU1Xd2UyY2l3cUlxOERWbytKLzNnTjZEbDcrdW9oUVFFWWVDMFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii9PVWZCaGxEOTh5UHJQYTl0YlBramZLMUhLYkp3Zkt0VUVLdFBVMmh5Ym1jSXdyb2lCcmJoUnVQMEQyZ2U3SnF3cW9QSThOSll5UXpyRVlsNEpqVEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ4cHZ2V2pWSTZ3UC9vK3JFNzlqVitqaEM2Wlk5RktNTWZWRzRVTUFmcGFRRFlFYUE2QUd4VUt2aS96ekpINWlHN1N0c093cTRhUk00OFNNN0d5UERDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzE2ODQ2NjE2OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2NnZjFwakZzSHRuSXNLaUt2QTFhUGlmOTREZWc1ZS9ycUlVRUJHSGd0RiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzYwMzYxMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJNUEifQ==";
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
