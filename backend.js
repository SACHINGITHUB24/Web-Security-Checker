


document.getElementById('checkweb').addEventListener('click',function(){
   var url = document.getElementById('urlid').value;

   

    if(url.startsWith("https://")){
        alert("Website is secure");

    }
    else{
        alert("Website is not secure");
    }
})




// document.getElementById('checkcurrent').addEventListener('click', function() {

//     chrome.tabs.query({active: true, currentWindow: true} , function(tabs){
//         var activetabs = tabs[0];
//         var url = activetabs.url;


//         if(url.startsWith("https://")){
//             alert("Website is secure");

            
//         }
//         else{
//             alert("Website is not secure");
//         }
//     })
// })
