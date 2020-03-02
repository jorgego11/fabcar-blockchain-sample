'use strict';

let network = require('./src/fabric/network.js');

const key = process.argv[2];
const newOwner = process.argv[3];

network.changeCarOwner(key, newOwner)
        .then((response) => {
            console.log(response);
        });

