var map = L.map('map').setView([46.538518, 6.593337], 12);

var pelle = L.icon({
    iconUrl: '/images/pelle_cut.png',

    iconSize:     [52, 40], // size of the icon


});

var courgette = L.icon({
    iconUrl: '/images/courgette_logo2.png',

    iconSize:     [52, 40], // size of the icon


});

// var courgette = L.icon({
//     iconUrl: '/images/logo_map.png',
//
//     iconSize:     [52, 40], // size of the icon
//
//
// });


L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([46.560167, 6.554194], {icon: pelle}).addTo(map);
L.marker([46.521749, 6.632884], {icon: courgette}).addTo(map);
