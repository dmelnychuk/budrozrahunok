console.log('Builder works!');

function showFields(foundationType) {
    var foundationFields = document.getElementById('foundationFields');
    foundationFields.innerHTML = '';

    if (foundationType === 'piles') {
        foundationFields.innerHTML += `
            <p>Pile Diameter: <input type="text" name="pileDiameter"></p>
            <p>Pile Length: <input type="text" name="pileLength"></p>
            <p>Pile Spacing: <input type="text" name="pileSpacing"></p>
            <p>Pile Cap Thickness: <input type="text" name="pileCapThickness"></p>
            <p>Pile Cap Length: <input type="text" name="pileCapLength"></p>
            <p>Pile Cap Width: <input type="text" name="pileCapWidth"></p>
        `;
    } else if (foundationType === 'strip') {
        foundationFields.innerHTML += `
            <p>Strip Width: <input type="text" name="stripWidth"></p>
            <p>Strip Length: <input type="text" name="stripLength"></p>
            <p>Strip Thickness: <input type="text" name="stripThickness"></p> 
            <p>Strip Depth: <input type="text" name="stripDepth"></p>
        `;
    } else if (foundationType === 'raft') {
        foundationFields.innerHTML += `
            <p>Raft Width: <input type="text" name="raftWidth"></p>
            <p>Raft Length: <input type="text" name="raftLength"></p>
            <p>Raft Thickness: <input type="text" name="raftThickness"></p>
        `;
    }
}

// export { showFields };
