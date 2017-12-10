var app = function(){
    var url = "http://hp-api.herokuapp.com/api/characters";
    makeRequest(url, requestComplete);
};

var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', callback);
    request.send();
}

var requestComplete = function(){
    if(this.status != 200) return;
    var jsonString = this.responseText;
    var studentList = JSON.parse(jsonString);
    console.log(studentList);
    populateHeader(studentList);
    populateList(studentList.results);
}

window.addEventListener('load', app);
