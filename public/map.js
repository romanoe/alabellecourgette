var map = L.map('map').setView([46.540000, 6.593337], 12);

var pelle = L.icon({
    iconUrl: '/images/pelle_cut.png',

    iconSize:     [52, 40], // size of the icon


});

var courgette = L.icon({
    iconUrl: '/images/courgette_logo2.png',

    iconSize:     [52, 40], // size of the icon


});

var courgette_NB = L.icon({
    iconUrl: '/images/courgette_logo2_NB.png',

    iconSize:     [52, 40], // size of the icon


});

// var courgette = L.icon({
//     iconUrl: '/images/logo_map.png',
//
//     iconSize:     [52, 40], // size of the icon
//
//
// });
// https://tile.openstreetmap.org/${z}/${x}/${y}.png
// https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([46.560167, 6.554194], {icon: pelle}).addTo(map);
L.marker([46.560167, 6.554194], {icon: courgette}).addTo(map);
L.marker([46.525716, 6.638512], {icon: courgette}).addTo(map);
L.marker([46.542107, 6.609282], {icon: courgette_NB}).addTo(map);
L.marker([46.528371, 6.614181], {icon: courgette_NB}).addTo(map);
L.marker([46.540737, 6.589845], {icon: courgette_NB}).addTo(map);
L.marker([46.527659, 6.624560], {icon: courgette_NB}).addTo(map);
L.marker([46.51733160036773, 6.624798026675972], {icon: courgette_NB}).addTo(map);
