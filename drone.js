import { sleep } from "./droneWrapper.js"



export async function main(drone) {
  /*
      for help check the README

      YOUR CODE GOES HERE 
      | | | | | | | | | |
      V V V V V V V V V V
  */

  drone.takeOff(); //examples
  await sleep(5000);


  drone.flip({ direction: "right" })
  await sleep(5000);

  drone.land();
  await sleep(6000)

}



