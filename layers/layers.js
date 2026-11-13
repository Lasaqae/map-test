var wms_layers = [];


        var lyr_GoogleSateliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satelite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MSelenHoniaramselen_honiara_1 = new ol.format.GeoJSON();
var features_MSelenHoniaramselen_honiara_1 = format_MSelenHoniaramselen_honiara_1.readFeatures(json_MSelenHoniaramselen_honiara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenHoniaramselen_honiara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenHoniaramselen_honiara_1.addFeatures(features_MSelenHoniaramselen_honiara_1);
var lyr_MSelenHoniaramselen_honiara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenHoniaramselen_honiara_1, 
                style: style_MSelenHoniaramselen_honiara_1,
                popuplayertitle: 'M-Selen Honiara — mselen_honiara',
                interactive: true,
                title: '<img src="styles/legend/MSelenHoniaramselen_honiara_1.png" /> M-Selen Honiara — mselen_honiara'
            });
var format_BredBankHoniarabredbank_honiara_2 = new ol.format.GeoJSON();
var features_BredBankHoniarabredbank_honiara_2 = format_BredBankHoniarabredbank_honiara_2.readFeatures(json_BredBankHoniarabredbank_honiara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BredBankHoniarabredbank_honiara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BredBankHoniarabredbank_honiara_2.addFeatures(features_BredBankHoniarabredbank_honiara_2);
var lyr_BredBankHoniarabredbank_honiara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BredBankHoniarabredbank_honiara_2, 
                style: style_BredBankHoniarabredbank_honiara_2,
                popuplayertitle: 'BredBank Honiara — bredbank_honiara',
                interactive: true,
                title: '<img src="styles/legend/BredBankHoniarabredbank_honiara_2.png" /> BredBank Honiara — bredbank_honiara'
            });
var format_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3 = new ol.format.GeoJSON();
var features_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3 = format_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3.readFeatures(json_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3.addFeatures(features_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3);
var lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3, 
                style: style_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3,
                popuplayertitle: 'Bank of South Pacific Honiara — bank_of_south_pacific_honiara',
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificHoniarabank_of_south_pacific_honiara_3.png" /> Bank of South Pacific Honiara — bank_of_south_pacific_honiara'
            });

lyr_GoogleSateliteHybrid_0.setVisible(true);lyr_MSelenHoniaramselen_honiara_1.setVisible(true);lyr_BredBankHoniarabredbank_honiara_2.setVisible(true);lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3.setVisible(true);
var layersList = [lyr_GoogleSateliteHybrid_0,lyr_MSelenHoniaramselen_honiara_1,lyr_BredBankHoniarabredbank_honiara_2,lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3];
lyr_MSelenHoniaramselen_honiara_1.set('fieldAliases', {'fid': 'fid', 'Agent Type': 'Agent Type', 'Agent Busi': 'Agent Busi', 'Physical A': 'Physical A', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BredBankHoniarabredbank_honiara_2.set('fieldAliases', {'fid': 'fid', 'PROVINCES': 'PROVINCES', 'Bred    BRANCHES': 'Bred    BRANCHES', 'Type of Branche': 'Type of Branche', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3.set('fieldAliases', {'fid': 'fid', 'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_MSelenHoniaramselen_honiara_1.set('fieldImages', {'fid': '', 'Agent Type': '', 'Agent Busi': '', 'Physical A': '', 'Latitude': '', 'Longitude': '', });
lyr_BredBankHoniarabredbank_honiara_2.set('fieldImages', {'fid': '', 'PROVINCES': '', 'Bred    BRANCHES': '', 'Type of Branche': '', 'STREET ADDRESS & CITY': '', 'LATITUDE': '', 'LONGITUDE': '', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3.set('fieldImages', {'fid': '', 'BSP BRANCHES': '', 'STREET ADDRESS & CITY': '', 'TYPE OF BRANCHE': '', 'LATITUDE': '', 'LONGITUDE': '', });
lyr_MSelenHoniaramselen_honiara_1.set('fieldLabels', {'fid': 'inline label - always visible', 'Agent Type': 'inline label - always visible', 'Agent Busi': 'inline label - always visible', 'Physical A': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BredBankHoniarabredbank_honiara_2.set('fieldLabels', {'fid': 'inline label - always visible', 'PROVINCES': 'inline label - always visible', 'Bred    BRANCHES': 'inline label - always visible', 'Type of Branche': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3.set('fieldLabels', {'fid': 'inline label - always visible', 'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_BankofSouthPacificHoniarabank_of_south_pacific_honiara_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});