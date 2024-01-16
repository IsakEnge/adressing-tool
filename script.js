function addLayer() {
    // Legg til logikk for å legge til layers
}

function showLightInfo(address, channel) {
    // Viser lysinformasjon og fyller inn feltene
    document.getElementById('address').value = address;
    document.getElementById('channel').value = channel;
    document.getElementById('lightInfo').classList.remove('hidden');
}

function saveChanges() {
    // Lagre endringer logikk
    // Du kan hente verdier fra input-feltene ved å bruke document.getElementById('address').value, etc.
}
