
let hostname = window.location.hostname;


function checkForWords(search_result){
    if (search_result != null){
        console.log(1);
        let redirect = false;
        //remove space between words
        search_result = search_result.replace(/ +/g, "");
        
        chrome.storage.local.get(['block_list'], function(result) {
            result.block_list.forEach(element => {
            if (search_result.toLowerCase().includes(element.toLowerCase()) && !redirect){
                redirect = true;
                //redirect back/previous page
                history.go(-1);
            }
        });
        
    });
    }

}

if (hostname == 'www.google.com'){
    let search_result = document.getElementsByClassName('gLFyf gsfi')[1].value;
    checkForWords(search_result);
    
}
//ytd-searchbox
if (hostname == 'www.youtube.com'){
    setInterval(
        function(){ 
            let url_string = window.location.href;
            let url = new URL(url_string);
            let search_result = url.searchParams.get("search_query");
            console.log(search_result);
            checkForWords(search_result);
        }, 
        3000
    );
   

}

