var map = L.map('map').setView([46.560167, 6.554194], 13);

var courgette = L.icon({
    iconUrl: '/images/courgette1.svg',

    iconSize:     [38, 95], // size of the icon
   
   
});


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([46.560167, 6.554194], {icon: courgette}).addTo(map);


