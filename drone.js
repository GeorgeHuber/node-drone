import {sleep} from "./droneWrapper"



async function main( drone ){
    /*
        YOUR CODE GOES HERE 
        | | | | | | | | | |
        V V V V V V V V V V
    */ 
   drone.takeOff();

   await sleep(5000);

   drone.land();
}



