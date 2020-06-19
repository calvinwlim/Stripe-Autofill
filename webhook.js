var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/723377304855642122/_8nywNO8eb6pvLZOoplDH-TL50HyKIR_2N863IITobAuRsbA0xVQu9DwWG2o7MxtHbbs");

    request.setRequestHeader('Content-type', 'application/json');

    var myEmbed = {
        author: {
          name: "CalvinFill"
        },
        title: "hello",
        description: "hey there",
        color: ("#62F1FF"),
        footer: {
            text: 'Pengoof#3333',
            icon_url:'https://media.discordapp.net/attachments/705489083341733938/723402044135833661/image0.png?width=568&height=515'
        }
      }
      
      var params = {
        embeds: [ myEmbed ]
      }
      
      request.send(JSON.stringify(params));
    }
sendMessage()