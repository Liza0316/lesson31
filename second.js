class Vehicle {
    constructor() {}
    start(){
        console.log("started");
    }
    stop(){
        console.log("stopped");
    }
}

class Car extends Vehicle{
    constructor(brand, year, drive){
        super();
        this.brand = brand;
        this.year = year;
        this.drive = drive;
    }
}
const volvo = new Car("VOLVO", 2022, "driving");
const mazda = new Car("Mazda", 2020, "undriving");

class Bike extends Vehicle{
    constructor(status, racing, year){
        super();
        this.status = status;
        this.racing = racing;
        this.year = year;
    }
}

const merida = new Bike("new", "been on racing", 2010);
const giant = new Bike("second hand", "didnt racing", 2009);

class Sedan extends Car{
    constructor(brand, year, clean, brake){
        super(brand, year);
        this.clean = clean;
        this.brake = brake;
    }
    start() {
        console.log("Sedan started");
        this.status = "normal started";
    }

    stop() {
        console.log("Sedan stopped");
        this.status = "normal stopped";
    }
}

const lada = new Sedan("Lada", 2018, "dirty", "braking");
const megane = new Sedan("Megane", 2020, "clean", "not braking");

class Truck extends Car{
    constructor(brand, year, opened, color){
        super(brand, year);
        this.opened = opened;
        this.color = color;
    }

    start() {
        console.log("Truck started");
        this.status = "fast started";
    }

    stop() {
        console.log("Truck stopped");
        this.status = "slowly started";
    }
}

const mercedes = new Truck("Mercedes", 2015, "closed", "black");
const audi = new Truck("Audi", 2018, "opened", "red");

class SportBike extends Bike{
    constructor( racing, dollar){
        super();
        this.racing = racing;
        this.dollar = dollar;
    }
    start() {
        console.log("SportBike started");
        this.status = "fast started";
    }

    stop() {
        console.log("SportBike stopped");
        this.status = "normal stopped";
    }
}
const bmw = new SportBike("racing", 1200);
const yamaha = new SportBike ("no racing", 20000);

class Scooter extends Bike {
    constructor(old, km){
        super();
        this.old = old;
        this.km = km;
    }
    start() {
        console.log("Scooter started");
        this.status = "slowly started";
    }

    stop() {
        console.log("Scooter stopped");
        this.status = "normal stopped";
    }
}
const adli = new Scooter ("old", 10000)
const aeon = new Scooter ("new", 500)