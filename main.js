var mymap = L.map('mapid').setView([50.446376, 30.538273], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

L.marker([50.463758, 30.509359]).addTo(mymap).bindPopup("<b>Blockchain Hub Kyiv</b><br>BlockchainHub.one - первый и единственный специализированый Хаб в Украине, который призван сыграть ключевую роль в создании инновационных проектов и идей, основанных на технологии Blockchain и эко-системе криптовалют.<br><a href=" + "https://blockchainhub.one/" + ">Blockchain Hub Kyiv</a>");

L.marker([50.513142, 30.494154]).addTo(mymap).bindPopup("<b>HUB24</b><br>Независимо от того, ищете ли вы рабочее место на полный рабочий день или просто проездом в Киеве, у нас есть предложение для всех<br><a href=" + "https://hub24.com.ua" + ">HUB24</a>");

L.marker([50.445600, 30.512755]).addTo(mymap).bindPopup("<b>Coworking Platforma Leonardo</b><br>Создаем условия для того, чтобы вы ценили свою жизнь: работая, отдыхая, общаясь. В режиме 24/7. Иногда и выходим за пределы графика.<br><a href=" + "http://www.coworkingplatforma.com/leonardo/" + ">Coworking Platforma Leonardo</a>");