const amount = 100;
const monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];
const tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];

function conversionHours(currentDay) {
    return currentDay.map(function(indexArray) {
        indexArray[1] = indexArray[1] / 60;
        return indexArray
    });
    
}

function filterByHours(currentDay) {
    return currentDay.filter(function(indexArray) {
        return indexArray[1] > 2;
    });
    
}

function calculateAmount(currentDay) {
    return currentDay.map(function(indexArray) {
        indexArray.push(indexArray[1] * amount);
        return indexArray;
    });
    
}

function tableOutput(currentDay) {
    return currentDay.map(function(indexArray) {
    return `
        <tr>
            <td>${indexArray[0]}</td>
            <td>${indexArray[1]} hours</td>
            <td>$${indexArray[2]}</td>
        </tr>`; 
    }).join('');
}

function processingArray(currentDay) {
    const convertedHours = conversionHours(currentDay);
    const filteredHours = filterByHours(convertedHours);
    const calculatedAmount = calculateAmount(filteredHours);
    const resultOutput = tableOutput(calculatedAmount);
    
    return resultOutput;
}

document.write(`
<h2>Monday</h2>
<table>
<tr>
    <th>Task name</th>
    <th>Task duration</th>
    <th>Task amount</th>
</tr>
${processingArray(monday)}</table>
<h2>Tuesday</h2>
<table>
<tr>
    <th>Task name</th>
    <th>Task duration</th>
    <th>Task amount</th>
</tr>
${processingArray(tuesday)}</table>
`);