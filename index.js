import {main} from "./drone.js"
import {land} from "./land.js"

const pdrone = require('pdrone');

const drone = pdrone({id: 'dronename', debug: true});

drone.on("connected", async function(){
    main(drone);
})

process.on("SIGINT",function(){
    land()
  })
