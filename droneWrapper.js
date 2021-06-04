/*
A wrapper class for pdrone to allow stepped or conditional commands without complicated timer events.
*/ 

//helper command class
class Command{
    constructor(func, key){
        this.func = func;
        this.key = key;
    }
    run(){
        if (this.key()){
            this.func()
            return false;
        } 
        return true
    }
}

class DroneWrapper{
    constructor(drone){
        this.drone = drone;
        this.commands = [];
        this.time = new Date().getTime();
        this.finished = true;
    }
    start(){
        if (this.commands.length === 0 ){
            console.log("no commands given")
            return
        }
        this.finished = false
    }
    step(){
        if(this.commands.length === 0){
            this.finished = true;
        } else {
            let command = this.commands[0]
            //if command has finished execution
            if(command.run()){
                this.commands.shift()
            }
        }

    }
    enqueue(command){
        this.commands.push(command)
    }
}