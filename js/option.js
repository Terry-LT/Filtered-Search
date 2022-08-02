let blockListTextArea = document.getElementById('blockListTextArea');

chrome.storage.local.get(['block_list'], function(result) {
    result.block_list.forEach(element => {
        blockListTextArea.innerHTML += element  + '\r\n';
    });
    //console.log('Value currently is ' + result.block_list);
});


function saveData(){
    let list = document.getElementById('blockListTextArea').value;
    arrayOfLines = list.match(/[^\r\n]+/g);
 
    chrome.storage.local.set({'block_list': arrayOfLines}, function() {
        //console.log('Value is set to ' + arrayOfLines);
    });
}

document.getElementById('saveData').addEventListener('click',
saveData);