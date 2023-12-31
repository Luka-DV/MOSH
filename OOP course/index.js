
//object literal notation:

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function() {
        console.log("draw")
    }
};

circle.draw();

//factory functions:

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("draw with factory function")
        }
    }
}

const circleWithFactory = createCircle(2);
circleWithFactory.draw();


//constructor function:

function CircleConstructor(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw with Constructor")
    }
}

const circleWithConstrucor = {};

console.log(circleWithConstrucor, "before call")

CircleConstructor.call( circleWithConstrucor, 3);

console.log(circleWithConstrucor, "after call");
circleWithConstrucor.draw();

const secondCircleWithConstructor = new CircleConstructor(5);

console.log(secondCircleWithConstructor, "window");

CircleConstructor.prototype.jump = function() {
    console.log("I jump");
}

console.log(circleWithConstrucor, "with jump func");

console.log(secondCircleWithConstructor, "with jump func");




//mosh:

/* function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

//Circle.call({}, 1)


const another = {};
Circle.call(another, 1)

console.log("MOSH", another); */


//stored by valu and passed by refrence:

let number = 10;

function increase(number) {
    number++;
}


increase(number);
console.log(number);

let numObj = {value: 10}

function increaseNum(numObj) {
    numObj.value++;
}

increaseNum(numObj);
console.log(numObj);


//ABSTRACTION:

function Square(a) {
    this.side = a;

    const deafaultLocation = {x: 1, y: 1};

    const computeOptimumLocation = function(factor) {
        console.log("The factor is " + factor);
    }

    this.draw = function(num) {
 
        computeOptimumLocation(num);   //using closure!
        console.log(deafaultLocation); //closure!
        //defaultLocation
        console.log(this.side);
        console.log("square drawing");
    }

}

const square = new Square(5);
console.log(square);
square.draw(10);


//GETTER and SETTERS:

function Square22(a) {
    this.side = a;

    let defaultLocation = {x: 1, y: 1};

    this.draw = function(num) {

        console.log("square drawing 2");
    };

    Object.defineProperty(this, "defaultLocation", {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y) {
                throw new Error("Invalid location.")
            };
            defaultLocation = value;
        }
    })
}

const newSquare22 = new Square22(3);
console.log(newSquare22);
console.log(newSquare22.defaultLocation);
newSquare22.defaultLocation;
console.log(newSquare22.defaultLocation);



//exercise:

//Create a stopwatch with start, stop and reset functions

function Stopwatch() {

    let duration = 0;
    let running = false;
    let swStart, swStop;


    this.start = function() {
        if(running) {   //thows an error if allready running
            throw new Error("Stopwatch has allready started.")
        };
        swStart = new Date(); //creates a new Date object with the current time
        running = true;
    }

    this.stop = function() {
        if(!running) {
            throw new Error("Stopwatch is not started.")
        };
        swStop = new Date();
        duration += swStop.getTime() - swStart.getTime(); //subtracting one Date object from antoher returns time in ms or using the getTime() method to return the number of ms 
        running = false;
    }

    this.reset = function() {
        duration = 0;
        swStart = null; //needed, resets the start time (ie. if start> reset> stop)
        swStop = null;
        running = false;
    }

    Object.defineProperty(this, "duration", {
        get: function() {
            return duration/1000;  //ms divided to return seconds
        }}
    ) 
}

const sw = new Stopwatch();




//new Stopwatch exercise


function Stopwatch3() {

    let duration = 0;
    let running = false;
    let startTime, stopTime;

    this.start = function() {
        if(running) {
            throw new Error("Stopwatch has already started!");
        }
        startTime= new Date();
        running = true;
    };

    this.stop = function() {
        if(!running) {
            throw new Error("Stopwatch has already been stoped!");
        }
        stopTime = new Date();
        duration += (stopTime.getTime() - startTime.getTime()) / 1000;
        running = false;
    }

    this.reset = function() {
        duration = 0;
        running = false;
        startTime = 0;
        stopTime = 0;
    }

    Object.defineProperty(this, "duration", {
        get: function() {
            return duration;
        }
    })
}

const sw3 = new Stopwatch3();



//+++++++++++from start 31.08.2023

const circle3 = {};

circle3.radius = 1;
circle3.location = {
    x: 1,
    y: 1,
};

circle3.draw = function() {
    console.log("draw")
}


//Factory function:

const crateCircle = (radious, x, y) => {
    return {
        radious,
        location: {
            x,
            y
        },
        draw() {
            console.log("draw me")
        }
    }
}

const bigCircle = crateCircle(99, 7, 8);

//Constructor function:

function Circle3(radious, x, y) {
    this.radious = radious;
    this.location = {x: x, y: y};
    this.draw = function() {
        console.log("small circle")
    };
}

const smallCircle3 = new Circle3(2, 6, 7)

Circle3.prototype.reshape = function() {
    console.log("I am now a rectangle")
}


function Circle6(radious) {
    this.name = "bob";
    this.radious = radious;
    this.draw = function(word) {
        console.log(word)
    }
}

 function Circle7(rad) {
    this.rad = rad;
 }

 const circle1 = new Circle6(4);

 function draw(greet) {
    return this.name + " " + greet
 }

 console.log(draw.call(circle1, "hello"))

 const num = 10;

 function increaseNUM(num) {
    return ++num;
 }

 console.log(increaseNUM(num))

 console.log(num)




 //Exercise:



function Stopwatch2() {
    let duration = 0;
    let isRunning = false;
    let startCounting
   

    function getTimeInSec() {
        return new Date().getTime()/1000
    }

    this.reset = function() {
        duration = 0;
        isRunning = false;
        startCounting = null;
    }

    this.start = function() {
        if(isRunning) {
            throw new Error("SW has already started.")
        };
        isRunning = true;
        startCounting = getTimeInSec()
    }

    this.stop = function() {
        if(!isRunning) {
            throw new Error("SW is not started.")
        };
        isRunning = false;
        duration += getTimeInSec() - startCounting
    }

    Object.defineProperty(this, "duration", {
        get: function() {
            if(isRunning) {
                return duration + (getTimeInSec() - startCounting )
            }
            return duration 
        }
    })
}

 const swa = new Stopwatch2()

