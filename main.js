var mymap = L.map('mapid').setView([50.446376, 30.538273], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWx2eiIsImEiOiJja3p4MGc2encwNDI1MnBzNHJjN2IwdmxoIn0.ZVBu7pJpzH7wKaj7qdobig', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);


var hub24 = L.marker([50.513142, 30.494154]).bindPopup("<b>HUB24</b><br>Независимо от того, ищете ли вы рабочее место на полный рабочий день или просто проездом в Киеве, у нас есть предложение для всех<br><a href=" + "https://hub24.com.ua" + ">HUB24</a>");

var blockChain = L.marker([50.463758, 30.509359]).bindPopup("<b>Blockchain Hub Kyiv</b><br>BlockchainHub.one - первый и единственный специализированый Хаб в Украине, который призван сыграть ключевую роль в создании инновационных проектов и идей, основанных на технологии Blockchain и эко-системе криптовалют.<br><a href=" + "https://blockchainhub.one/" + ">Blockchain Hub Kyiv</a>");

var platform = L.marker([50.445600, 30.512755]).bindPopup("<b>Coworking Platforma Leonardo</b><br>Создаем условия для того, чтобы вы ценили свою жизнь: работая, отдыхая, общаясь. В режиме 24/7. Иногда и выходим за пределы графика.<br><a href=" + "http://www.coworkingplatforma.com/leonardo/" + ">Coworking Platforma Leonardo</a>");

var tceh = L.marker([50.459183, 30.489615]).bindPopup("<b>ЦЕХ</b><br>Это развивающаяся международная сеть рабочих пространств с высоким уровнем сервиса и комфорта, которая представлена в городах Украины и Великобритании<br><a href=" + "http://tceh.com.ua/" + ">ЦЕХ</a>");

var skyhub119 = L.marker([50.407568, 30.514255]).bindPopup("<b>SKY HUB 119</b><br>SKYHUB 119 - это пространство для быстрого и комфортного развития вашего бизнеса, которое находится в непосредственной близости от станции метро Демеевская, центрального автовокзала и других остановок общественного транспорта.<br><a href=" + "https://skyhub.com.ua" + ">SKY HUB 119</a>");

var allCowork = L.layerGroup([hub24, blockChain, platform, tceh, skyhub119]);

function hub241() {
    
    var Check = document.getElementById("hub24");
    
    if (Check.checked == true){
       hub24.addTo(mymap);
    }
    else {
       hub24.remove();
    }
}

function block() {
    
    var Check = document.getElementById("block");
    
    if (Check.checked == true){
       blockChain.addTo(mymap);
    }
    else {
        blockChain.remove();
    }
}

function plat() {
    
    var Check = document.getElementById("platform");
    
    if (Check.checked == true){
       platform.addTo(mymap);
    }
    else {
        platform.remove();
    }
}

function tceh1() {
    
    var Check = document.getElementById("tceh");
    
    if (Check.checked == true){
       tceh.addTo(mymap);
    }
    else {
        tceh.remove();
    }
}

function skyhub1191() {
    
    var Check = document.getElementById("skyhub");
    
    if (Check.checked == true){
       skyhub119.addTo(mymap);
    }
    else {
        skyhub119.remove();
    }
}

function showAll() {
    
    var Check = document.getElementById("all");
    
    if (Check.checked == true){
       allCowork.addTo(mymap);
    }
    else {
        allCowork.remove();
    }
}








