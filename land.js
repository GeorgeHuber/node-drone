import pdrone from "pdrone"
const drone = pdrone({id: 'dronename', debug: true});

import {sleep} from "./droneWrapper.js"

export const land = async () =>{
    drone.on('connected', async function() {
        drone.land();
        await sleep(5000)
        drone.emergency();
        console.log("landing...")
    })
}
