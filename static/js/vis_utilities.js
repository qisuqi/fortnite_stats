const globalDataPromise = fetch('/.netlify/functions/death-data').then(response => response.json());

function renderSpec(specName, elementId, height, width) {
    const specPromise = fetch(`/data/${specName}`)
        .then(response => response.json());
    Promise.all([specPromise, globalDataPromise])
        .then(([spec, globalData]) => {
            spec.data = { values: globalData };
            vegaEmbed(`#${elementId}`, spec, {
                'height': height,
                'width': width
            }).catch(console.error);
        });
}