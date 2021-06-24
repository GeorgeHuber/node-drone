
import { sleep } from "./droneWrapper.js"

export const land = (drone) => {
    return new Promise(async (res, rej) => {
        drone.land();
        await sleep(5000)
        drone.emergency();
        console.log("Landing...")
        await sleep(2000)
        res("success")
    }
    )

}
