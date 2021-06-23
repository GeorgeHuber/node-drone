import {main} from "./drone"
import {land} from "./land"
const pdrone = require('pdrone');

const drone = pdrone({id: 'dronename', debug: true});

drone.on("connected", async function(){
    main(drone);
})

process.on("SIGINT",function(){
    land()
  })
