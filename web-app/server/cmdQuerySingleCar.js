'use strict';

let network = require('./src/fabric/network.js');

const key = process.argv[2];

network.querySingleCar(key)
        .then((response) => {
            let carsRecord = JSON.parse(response);
            console.log(carsRecord);
        });
        

