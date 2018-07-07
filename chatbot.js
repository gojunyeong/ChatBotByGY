const botName = "작명부탁";
let HelloList = [];

function response(room, msg, sender, isGroupChat, replier, imageDB) {
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
    HelloList.indexOf(sender) == -1) {
    sendHello(sender, replier);
    HelloList.push(sender);
  }

}

function botInDuneonsRoom(room, msg, sender, isGroupChat, replier, imageDB) {

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