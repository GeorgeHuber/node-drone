import { land } from "./land.js"
import { sleep } from "./droneWrapper.js"
import pdrone from "pdrone"


const drone = pdrone({ id: 'mambo', debug: true });

drone.on("connected", async function(){
    land( drone );
});
