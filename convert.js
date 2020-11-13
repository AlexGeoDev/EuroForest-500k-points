const csv = require('csvtojson');
const fs = require('fs');

const file = "./euforestspecies.csv";

async function init(){
    let rows = await csv().fromFile(file);
    console.log(rows);
}

init();