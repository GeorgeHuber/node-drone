import {sleep} from "./droneWrapper.js"



export async function main( drone ){
    /*
        YOUR CODE GOES HERE 
        | | | | | | | | | |
        V V V V V V V V V V
    */ 
   drone.takeOff();
    await sleep(5000);

    
    drone.flip({direction:"right"})
await sleep(5000);

   drone.land();
    await sleep(6000)
}



