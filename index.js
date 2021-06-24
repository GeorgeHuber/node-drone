import { main } from "./drone.js"
import { land } from "./land.js"
import { sleep } from "./droneWrapper.js"
import pdrone from "pdrone"
import readline from "readline"

const drone = pdrone({ id: 'mambo', debug: true });

drone.on("connected", async function () {
    //Sigint workaround for windows
    if (process.platform === "win32") {
        console.log("Windows device detected using rl")
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.on("SIGINT", async function () {
            //lands drone
            await land(drone)
            console.log("Drone powered off");
            process.exit(0)

        });

    }
    //runs main code file then ends execution
    await main(drone).then(() =>
        process.exit(0));
})


process.on("exit", code => {
    console.log(`Stopped running!`);
});

