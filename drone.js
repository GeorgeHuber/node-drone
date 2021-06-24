import { sleep } from "./droneWrapper.js"

/*
COMMANDS:

Setup:
cd Desktop/node-drone-main

To Run use this:
npm start

Kill Switch:
ctrl + c

Stop script:
npm stop

*/

export async function main(drone) {
  //launches drone
  drone.takeOff();
  await sleep(5000);
   /*
      YOUR CODE GOES HERE 
      | | | | | | | | | |
      V V V V V V V V V V

  */
  



  
  //lands the drone DO NOT DELETE
  drone.land();
  await sleep(6000)
}



