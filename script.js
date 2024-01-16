// Legg til et tomt array for å lagre layers
let layers = [];

function addLayer() {
    // Opprett en unik ID for hver layer (for eksempel basert på nåværende tidspunkt)
    const layerId = new Date().getTime().toString();

    // Opprett en ny layer-objekt
    const newLayer = {
        id: layerId,
        name: `Layer ${layers.length + 1}`, // Gi laget et standardnavn
    };

    // Legg til layer-objektet i layers-arrayet
    layers.push(newLayer);

    // Oppdater grensesnittet med de nye layers
    updateLayersUI();
}

function updateLayersUI() {
    const layersContainer = document.getElementById('layers');

    // Fjern eksisterende layers fra grensesnittet
    while (layersContainer.firstChild) {
        layersContainer.removeChild(layersContainer.firstChild);
    }

    // Legg til layers i grensesnittet
    layers.forEach(layer => {
        const layerButton = document.createElement('button');
        layerButton.textContent = layer.name;
        layerButton.addEventListener('click', () => showLayerInfo(layer.id));
        layersContainer.appendChild(layerButton);
    });
}

function showLayerInfo(layerId) {
    // Legg til logikk for å vise informasjon for den valgte layer
    console.log(`Show info for Layer with ID: ${layerId}`);
}

// Andre eksisterende funksjoner nedenfor...
