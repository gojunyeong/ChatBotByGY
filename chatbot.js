const botName = "작명부탁";
let helloList = [];
let noticeList = [];
let warSupportList = [];
let eventList = [];
let dungeonTipList = [];
let voteList = {};

////////////////////// Call Responce Function Start //////////////////////

function response(room, msg, sender, isGroupChat, replier, imageDB) {
  msg = msg.trim();
  switch (room) {
    case "TeamGY (세븐나이츠)":
      botInMainRoom(room, msg, sender, isGroupChat, replier, imageDB);
      break;
    case "유지훈,이한솔,대랄기원,재희,박준영":
    case "유지훈,이한솔,박준영,고준영,이태경":
      botInOperatorRoom(room, msg, sender, isGroupChat, replier, imageDB);
      break;
    case "길던하GY":
      botInDungeonsRoom(room, msg, sender, isGroupChat, replier, imageDB);
      break;
    default:
      replier.reply(room);
      break;
  }
}


////////////////////// Main Room Bot Function Start //////////////////////

function botInMainRoom(room, msg, sender, isGroupChat, replier, imageDB) {
  if ((msg.indexOf('안녕') != -1 ||
      msg.indexOf('ㅎㅇ') != -1) &&
    helloList.indexOf(sender) == -1) {
    sendHello(sender, replier);
    helloList.push(sender);
  } else if (msg.indexOf('@') == 0) {
    sendMainRoomShowFunctionBranch(msg, sender, replier);
  } else if (msg.indexOf('!') == 0) {
    saveMainRoomServiceFunctionBranch(msg, sender, replier);
  }
}

function sendMainRoomShowFunctionBranch(msg, sender, replier) {
  switch (msg) {
    case "@봇설명":
      sendBotInfo(replier)
      break;
    case "@공지사항":
      sendNotice(replier)
      break;
    case "@길전참고":
      sendWarSupport(replier);
      break;
    case "@이벤트":
      sendEventInfo(replier);
      break;
    case "@투표":
      sendVoteInfo(replier);
    default:
      sendBabo(sender, replier);
      break;
  }
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
  replier.reply(sender + " 바보\n" +
    "사용법 좀 읽어요!!! @봇설명");
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

function voteMainRoomDetail(msg, sender, replier) {

}

////////////////////// Dungeons Room Bot Function Start //////////////////////

function botInDungeonsRoom(room, msg, sender, isGroupChat, replier, imageDB) {
  if (msg.indexOf('마무리') != -1) {
    sendDungeonTip(msg, replier);
  }
}

function sendDungeonTip(msg, replier) {
  stage = msg.replace(/\d{1,2}.\s*((\d{1,2})-(\d{1,2}))\s*마무리.*/, "$1 마무리");
  replier.reply(stage);
}

////////////////////// Operator Room Bot Function Start //////////////////////

function botInOperatorRoom(room, msg, sender, isGroupChat, replier, imageDB) {
  if (msg.indexOf('?') == 0) {

  } else if (msg.indexOf('@') == 0) {

  } else if (msg.indexOf('!') == 0) {

  } else if (msg.indexOf('+') == 0) {
    addFunctionBranch(sender, msg, replier);
  } else if (msg.indexOf('-') == 0) {
    deleteFunctionBranch(sender, msg, replier);
  } else if (msg.indexOf('^') == 0) {
    dropFunctionBranch(sender, msg, replier);
  }
}

function addFunctionBranch(sender, msg, replier) {
  let arg = msg.split(' ');
  switch (arg[0]) {
    case '+공지':
      addNoticeFunction(msg, replier);
      break;
    default:
      sendBabo(sender, replier);
  }
}

function addNoticeFunction(msg) {
  let arg = msg.replace('+공지', '').trim().split('/');
  let notice = {
    "title": arg[0],
    "description": arg[1],
    "more_info": arg[2]
  }
  noticeList.push(notice);
  replier.reply(notice.title + "를 공지사항에 등록 하였습니다.");
}

function deleteFunctionBranch(sender, msg, replier) {

}

function deleteNoticeFunction(msg, replier) {

}

function dropFunctionBranch(sender, msg, replier) {
  switch (msg) {
    case '^공지':
      dropNoticeFunction(replier);
      break;
    default:
      sendBabo(sendBabo, replier);
      break;
  }
}

function dropNoticeFunction(replier) {
  noticeList = [];
  replier.reply("모든 공지사항이 삭제되었습니다");
}