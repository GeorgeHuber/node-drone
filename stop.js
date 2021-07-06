import { land } from "./land.js"
import { sleep } from "./droneWrapper.js"
import pdrone from "pdrone"
import {id} from "./drone"

const drone = pdrone({ id:id, debug: true });

drone.on("connected", async function(){
    land( drone );
});
