const pdrone = require('pdrone');
const drone = pdrone({id: 'dronename', debug: true});

import {sleep} from "./droneWrapper"

export const land = async () =>{
    drone.on('connected', function() {
        drone.land();
        await sleep(5000);
        drone.emergency();
        console.log("landing...")
    })
}
