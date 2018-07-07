const botName = "작명부탁";
let helloList = [];
let noticeList = [];
let warSupportList = [];
let eventList = [];

function response(room, msg, sender, isGroupChat, replier, imageDB) {
  msg = msg.trim();
  switch (room) {
    case "TeamGY (세븐나이츠)":
      botInMainRoom(room, msg, sender, isGroupChat, replier, imageDB);
      break;
    case "유지훈,이한솔,대랄기원,재희,박준영":
    case "유지훈,이한솔,박준영,고준영,이태경":
      botInCoreManagerRoom(room, msg, sender, isGroupChat, replier, imageDB);
      break;
    case "길던하GY":
      botInDuneonsRoom(room, msg, sender, isGroupChat, replier, imageDB);
      break;
    default:
      replier.reply(room);
      break;
  }
}

function botInMainRoom(room, msg, sender, isGroupChat, replier, imageDB) {
  if ((msg.indexOf('안녕') != -1 ||
      msg.indexOf('ㅎㅇ') != -1) &&
    helloList.indexOf(sender) == -1) {
    sendHello(sender, replier);
    helloList.push(sender);
  } else if (msg == "@봇설명") {
    sendBotInfo(replier)
  } else if (msg == "@공지사항") {
    sendNotice(replier)
  } else if (msg == "@길전참고") {
    sendWarSupport(replier);
  } else if (msg == "@이벤트") {
    sendEventInfo(replier);
  }
}

function botInDuneonsRoom(room, msg, sender, isGroupChat, replier, imageDB) {
  if (msg.indexOf('마무리') != -1) {
    sendDeugeonTip(msg, replier);
  }
}

function botInCoreManagerRoom(room, msg, sender, isGroupChat, replier, imageDB) {

}

function sendHello(sender, replier) {
  replier.reply("안녕하세요\n" +
    sender + "님\n" +
    "TeamGY길드 톡방에 오신것을 환영합니다\n" +
    "\n" +
    "\n" +
    "안녕하세요 저는 TeamGY의 봇입니다.\n" +
    "앞으로 같이 즐거운 게임해요\n" +
    "제가 궁금하면 @봇설명");
}

function sendBotInfo(replier) {
  replier.reply("안녕하세요\n" +
    "저는 TeamGY의 봇 " + botName + "입니다.\n" +
    "저는 이 방에서 공지사항등 각종 정보를 알려주는 봇 입니다.\n" +
    "제가 아는 선에서 정보를 드릴게요\n" +
    "저를 사용 하는 명령어 들이에요\n" +
    "@공지사항\n" +
    "@길전참고\n" +
    "@이벤트\n" +
    "\n" +
    "저를 만들고 있는 사람은 길마이고\n" +
    "저가 있게 도와준 사람은 크앙박GY와 태연GY입니다."
  );
}

function sendNotice(replier) {
  let sendMessage = "";
  if (noticeList.length > 0) {
    sendMessage = "공지사항\n\n";
    for (let i = 0; i < noticeList.length; i++) {
      sendMessage = sendMessage + ((i + 1) + ". " + noticeList[i] + "\n");
    }
  } else {
    sendMessage = "현재 등록된 공지사항이 없습니다.";
  }
  replier.reply(sendMessage);
}

function sendBabo(sender, replier) {
  replier.reply(sender + "바보");
}

function sendWarSupport(replier) {
  let sendMessage = "";
  if (warSupportList.length > 0) {
    sendMessage = "길드전 정보\n\n";
    for (let i = 0; i < warSupportList.length; i++) {
      sendMessage = sendMessage + ((i + 1) + ". " + warSupportList[i] + "\n");
    }
  } else {
    sendMessage = "등록된 길드전 정보가 없습니다.";
  }
  replier.reply(sendMessage);
}

function sendEventInfo(replier) {
  let sendMessage = "";
  if (eventList.length > 0) {
    sendMessage = "이벤트 정보\n\n";
    for (let i = 0; i < eventList.length; i++) {
      sendMessage = sendMessage + ((i + 1) + ". " + eventList[i] + "\n");
    }
  } else {
    sendMessage = "등록된 이벤트 정보가 없습니다.";
  }
  replier.reply(sendMessage);
}

function sendDeugeonTip(msg, replier) {
  stage = msg.replace(/\d{1,2}.\s*((\d{1,2})-(\d{1,2}))\s*마무리/, "$1 마무리");
  replier.reply(stage);
}