class Weather {
        constructor(){
        this.days={
            Monday: 10,
            Tuesday: 18,
            Wednesday: 24,
            Thursday: 20,
            Friday: 25,
            Saturday: 17,
            Sunday: 19
        }
    }
    GetMiddleTemperature(){
        const temperatures = Object.values(this.days);
        return temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
    }
    GetMaxTemperature(){
        return Math.max(...Object.values(this.days));
    }
    getMinTemperature() {
        return Math.min(...Object.values(this.days));
    }
}

const weather = new Weather();
console.log("Average Temperature:", weather.GetMiddleTemperature());
console.log("Max Temperature:", weather.GetMaxTemperature());
console.log("Min Temperature:", weather.getMinTemperature());


