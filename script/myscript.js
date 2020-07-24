var bootstarplink;
var link;
    function loadsheet(){
        bootstarplink = document.createElement("link");
        bootstarplink.setAttribute("rel","stylesheet");
        bootstarplink.setAttribute("href","https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
        bootstarplink.setAttribute("intergrity","sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk");
        bootstarplink.setAttribute("crossorigin", "anonymous");

        link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        
        link.setAttribute("type", "text/css");
        link.setAttribute("href", "../css/lackpage.css");
        var header = document.getElementsByTagName("head")[0];
        
        header.appendChild(bootstarplink);
        header.appendChild(link);
    }
    function deletesheets(){
        var header = document.getElementsByTagName("head")[0];
        header.removeChild(link)
        header.removeChild(bootstarplink)

    }




function sum(){
    var s = document.getElementById("sums").value;
    var array =[];
    array = s.split(' ');
    var res =0;
    for (var i =0; i < array.length; i++){
        res = res + parseInt(array[i]);
    }
    document.getElementById("boxout").innerHTML= res;
}
function bday(){
    var message = document.createElement('h3');
    var div = document.getElementById('s.message');

    var str  = window.location.search;

    const urlParams = new URLSearchParams(str);
    const name = urlParams.get('name');
    const age = urlParams.get('age');
    console.log("name = "+name)
    
    
    var messageage='';

    if(name === null || age === null || name =="" ||age==""){
        var txt = document.createTextNode("Missing input go back and enter missing input");
        message.appendChild(txt);
        div.appendChild(message);
        return;
    }
    var tempnum = age.length-1;
    var subleter= age.charAt(tempnum);
    switch(subleter){
        case '0':
            messageage= age + "th";
            break;
        case '1':
            messageage=age + "st";
            break;
        case '2':
            messageage=age + "nd";
            break;
        case '3':
            messageage= age + "rd";
            break
        case '4':
            messageage=age + "th";
            break
        case '5':
            messageage=age + "th";
            break
                       
        case '6':
            messageage=age + "th";
            break
        case '7':
            messageage=age + "th";
        case '8':
            messageage=age + "th";
            break
        case '9':
            messageage=age + "th";
            break

        
    }
    
    var txt = document.createTextNode("Happy "+ messageage +" Birth Day " + name);
    

    message.appendChild(txt);
    div.appendChild(message);
}
    
function isapalnoschars(){
    var div = document.getElementById("functionbody");
    var format = /[ `!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~]/;
    var hasNumber = /\d/;
    var str  = window.location.search;
    const urlParams = new URLSearchParams(str);
    const word = urlParams.get("name");
    var message = document.createElement('h3');
    
    if(word === null || word ==''){
        var txt = document.createTextNode("No input detected, enter a word");
        message.appendChild(txt);
        div.appendChild(message);
        return;
    }
    if(format.test(word)|| hasNumber.test(word)){
        
        var txt = document.createTextNode("The word: " + word + "is invalid, it contains speical charcters or numbers");
        message.appendChild(txt);
        div.appendChild(message);
    
        return;
    }else{
   
       
        var str = word.toLowerCase().replace(/[^a-z]+/g,"");
        if(str === str.split("").reverse().join("")){
            var txt = document.createTextNode("The word: " + word + " is valid and is a Palindrone");
        }
        else{
            var txt = document.createTextNode("The word: " + word + " is valid, but it is not a paolindrone");
        }
        message.appendChild(txt);
        div.appendChild(message);
        
        return;
    }

    
}