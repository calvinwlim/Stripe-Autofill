var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "";

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
            icon_url:''
        }
      }
      
      var params = {
        embeds: [ myEmbed ]
      }
      
      request.send(JSON.stringify(params));
    }
sendMessage()
