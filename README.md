# node_drone

forked from [pdrone](https://github.com/algolia/pdrone)

--- 

# prerequisites

[zadig](https://zadig.akeo.ie/) 
[node js](https://nodejs.org/en/)

---

# installation 

1. open zadig locate bluetooth driver and overwrite it with WinUSB
2. record usb id of bluetooth usb
3. DO NOT run npm i in target directory. some 
4. open node_modules/bluetooth-hci-socket/lib/usb.js in an editor
5. add `|| usb.findByIds(a, b);` to line 66 replacing a and b with the usb id from part 2

all good to go :)

---

# USAGE:

1. open windows command prompt (may be in windows system apps folder)
2. move into the folder by running cd Desktop/node-drone-main and hit enter

---

# COMMANDS:

*note* these should all be typed into the terminal followed by enter after following usage steps

npm start : runs your code
ctrl + c  : stops the code mid execution and lands the drone. may have to be pressed twice. will only work on windows computers
npm stop  :  lands and stops the drone in an emergency after being disconnected or program failure


---


*note* if npm start fails to connect to the drone any combination of these could work: 

Stop the program. 
Turn the drone on and off. 
Perform drumming ritual to computer gods. 
Close and reopen terminal. 
Reinstall WinUSB drivers. 
Reclone github repository

---

# starter code
```drone.flatTrim(); // use flatTrim() everytime you want the drone to calm down  
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
  drone.flip({direction: 'right'}); // front/back/right/left  Really Cool 10/10 recommend
  drone.cap({offset: 0}); // -180/180, Sorry I have no idea what this does   
  ```
  