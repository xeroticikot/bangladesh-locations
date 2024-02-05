const fs = require('fs');

// Read the JSON file
const jsonString = fs.readFileSync('./bd-thanas.json', 'utf-8');
const thanasList = JSON.parse(jsonString).thanas;

// Check for duplicate IDs
const uniqueIds = new Set();
let isDuplicate = false;

thanasList.forEach(thana => {
    if (uniqueIds.has(thana.id)) {
        isDuplicate = true;
        console.log(`Duplicate ID found: ${thana.id}`);
    } else {
        uniqueIds.add(thana.id);
    }
});

// Check for missing IDs
const missingIds = [];
for (let i = 1; i <= 537; i++) {
    if (!uniqueIds.has(i)) {
        missingIds.push(i);
    }
}

// Output the results
if (!isDuplicate) {
    console.log('No duplicate IDs found.');
}

if (missingIds.length === 0) {
    console.log('No missing IDs found.');
} else {
    console.log(`Missing IDs: ${missingIds.join(', ')}`);
}
