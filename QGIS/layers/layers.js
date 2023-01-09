var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0 = new ol.format.GeoJSON();
var features_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0 = format_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0.readFeatures(json_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0.addFeatures(features_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0);var lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0, 
                style: style_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0,
    title: 'BATAS KABUPATEN KOTA DESEMBER 2019 DUKCAPIL<br />\
    <img src="styles/legend/BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0_0.png" /> ASMAT<br />\
    <img src="styles/legend/BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0_1.png" /> BOVEN DIGOEL<br />\
    <img src="styles/legend/BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0_2.png" /> MAPPI<br />\
    <img src="styles/legend/BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0_3.png" /> MERAUKE<br />'
        });

lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0.setVisible(true);
var layersList = [baseLayer,lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0];
lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', 'positif': 'positif', 'dirawat': 'dirawat', 'sembuh': 'sembuh', 'meninggal': 'meninggal', });
lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0.set('fieldImages', {'KAB_KOTA': 'TextEdit', 'positif': 'TextEdit', 'dirawat': 'TextEdit', 'sembuh': 'TextEdit', 'meninggal': 'TextEdit', });
lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0.set('fieldLabels', {'KAB_KOTA': 'inline label', 'positif': 'inline label', 'dirawat': 'inline label', 'sembuh': 'inline label', 'meninggal': 'inline label', });
lyr_BATASKABUPATENKOTADESEMBER2019DUKCAPIL_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});