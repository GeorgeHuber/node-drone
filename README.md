# node_drone

forked from [pdrone](https://github.com/algolia/pdrone)

# prerequisites

[zadig](https://zadig.akeo.ie/) 
[node js](https://nodejs.org/en/)

# installation 

1. open zadig locate bluetooth driver and overwrite it with WinUSB
2. record usb id of bluetooth usb
3. run npm i in target directory
4. open node_modules/bluetooth-hci-socket/lib/usb.js in an editor
5. add `|| usb.findByIds(a, b);` to line 66 replacing a and b with the usb id from part 2

all good to go :)

# use

place code to move the drone in drone.js file

# starter code
`
  drone.flatTrim(); // use flatTrim() everytime you want the drone to calm down
  drone.takeOff();
  drone.land();  
  drone.flatTrim();
  drone.emergency(); // immediately stops the drone, that's what is inside stop.js
  drone.fly({
    roll: 0, // -100/100
    pitch: 0, // -100/100
    yaw: 0, // -100/100
    gaz: 0, // -100/100, = throttle
  });
  drone.autoTakeOff(); // will start propellers in low mode and wait for you to throw it in the air (gently)
  drone.flip({direction: 'right'}); // front/back/right/left
  drone.cap({offset: 0}); // -180/180, I have no idea what this does
  drone.openClaw();
  drone.closeClaw();
  drone.fire();

  `
