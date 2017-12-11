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
    var characterList = JSON.parse(jsonString);
    console.log(characterList);
    populateList(characterList);
}

var populateList = function(characters){
    var mainSection = document.getElementById('main-section');
    characters.forEach(function(character){
        var section = document.createElement('section');
        var header = document.createElement('h1');
        var fact1 = document.createElement('h2');
        var fact2 = document.createElement('h2');
        var fact3 = document.createElement('h2');
        var fact4 = document.createElement('h2');
        var image = document.createElement('img');

        header.innerText = character.name;
        fact1.innerText = "School House: " + character.house;
        fact2.innerText = "Gender: " + character.gender;
        fact3.innerText = "Blood-Line: " + character.ancestry;
        fact4.innerText = "Known Patroneous: " + character.patronus;
        image.src = character.image;
        image.className = "thumbnail";
        image.alt = character.name;

        section.appendChild(header);
        section.appendChild(fact1);
        section.appendChild(fact2);
        section.appendChild(fact3);
        section.appendChild(fact4);
        section.appendChild(image);
        mainSection.appendChild(section);
    });
};

window.addEventListener('load', app);
