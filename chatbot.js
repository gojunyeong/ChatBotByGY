function response(room, msg, sender, isGroupChat, replier, imageDB) {
  switch (room) {
    case "TeamGY (세븐나이츠)":
      botInMainRoom(room, msg, sender, isGroupChat, replier, imageDB)
      break;
    case "유지훈,이한솔,대랄기원,재희,박준영":
      botInCoreManagerRoom(room, msg, sender, isGroupChat, replier, imageDB)
      break;
    case "길던하GY":
      botInDuneonsRoom(room, msg, sender, isGroupChat, replier, imageDB)
      break;
    default:
      break;
  }
}

function botInMainRoom(room, msg, sender, isGroupChat, replier, imageDB) {
  if (msg.indexOf('안녕') != -1 ||
    msg.indexOf('ㅎㅇ') != -1) {
    replier.reply("안녕하세요 TeamGY길드 톡방에 오신것을 환영합니다")
  }
  replier.reply("현재 채팅방의 명칭은 GY메인톡방입니다.");
}

function botInDuneonsRoom(room, msg, sender, isGroupChat, replier, imageDB) {
  replier.reply("현재 채팅방의 명칭은 GY길던톡방입니다.");
}

function botInCoreManagerRoom(room, msg, sender, isGroupChat, replier, imageDB) {
  replier.reply("현재 채팅방의 명칭은 GY운영진톡방입니다.");
}