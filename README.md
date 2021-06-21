# node_drone

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
