function addLayer() {
    console.log('addLayer function called');
    // Legg til logikk for å legge til layers
}

function showLightInfo(address, channel) {
    console.log('showLightInfo function called');
    // Viser lysinformasjon og fyller inn feltene
    document.getElementById('address').value = address;
    document.getElementById('channel').value = channel;
    document.getElementById('lightInfo').classList.remove('hidden');
}

function saveChanges() {
    console.log('saveChanges function called');
    // Lagre endringer logikk
    // Du kan hente verdier fra input-feltene ved å bruke document.getElementById('address').value, etc.
}
