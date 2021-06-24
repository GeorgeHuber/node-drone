import {main} from "./drone.js"
import {land} from "./land.js"
import {sleep} from "./droneWrapper.js"
import pdrone from "pdrone"
import readline from "readline"

const drone = pdrone({id: 'dronename', debug: true});

drone.on("connected", async function (){
    
    
    
    if (process.platform === "win32") {
    console.log("Windows device detected using rl")
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("SIGINT", async function () {
    //process.emit("SIGINT");
      await land(drone)
      console.log("Drone powered off");
      process.exit(0)
    
  });

}

    await main(drone).then(()=>
  process.exit(0)  );
})


process.on("exit", code => {
    console.log(`Stopped running!`);
});

