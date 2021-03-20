$('body').ready(function() {
    $('body').contextmenu(function (e){
        var textValue = $(e.srcElement).text();
        //console.log(textValue);
        chrome.runtime.sendMessage({text:textValue});
    });
});