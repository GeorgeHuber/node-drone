const pdrone = require('pdrone');
const drone = pdrone({id: 'dronename', debug: true});

const {DroneWrapper} = require("./droneWrapper.js")

function sleep(ms){
  var date = new Date().getTime()+ms
  while (new Date().getTime()<date){
    let i = 0;
  }
}

console.log(drone)
drone.on('connected', function() {
  drone.flatTrim(); // use flatTrim() everytime you want the drone to calm down
  drone.takeOff();
  setTimeout(()=>{
    drone.land(); 
  },5000)
   
  
  // events
  drone.on('connected', function() {});
  // flight status, accessories, ... you'll have to dig that
  drone.on('sensor', function(event) {
    // event.name =>
    //   flatTrimDone, status, alert, claw, gun, position, speed, altitude, quaternion
    // event.value
  });
});