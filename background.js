var lastValue = "";
chrome.contextMenus.create({
    title: "copy to clippored", 
    contexts:["page"], 
    onclick:function(a){
        //console.log(a);
        text = lastValue;
        var input = document.createElement('textarea');
        document.body.appendChild(input);
        input.value = text;
        input.focus();
        input.select();
        document.execCommand('Copy');
        input.remove();
    }
  });

/*var sendMsgToTab=function(tab,msg) {
    chrome.tabs.sendMessage(tab.id, msg, function(response){});
}*/

chrome.runtime.onMessage.addListener(
        function(msg, sender, sendResponse) {
            console.log(msg.text);
            lastValue = msg.text;
});
