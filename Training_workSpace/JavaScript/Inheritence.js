class Car
{
    startEngine(){
        console.log("--- Start Engine ---");
    }
    stopEngine(){
        console.log("--- Stop Engine ---");
    }

}

class Tyota extends Car {
    carModel() {
        console.log("Tyota Innova");
    }
}

class Innova extends Tyota
{
    startEngine()
    {
        console.log("Innova Starting time is less and Engine sound is too good");
    }
    yearOfManufacturer()
    {
        console.log("New Crysta - 2021");
    }
}

let innovaCar = new Innova();
innovaCar.startEngine();
innovaCar.stopEngine();
innovaCar.carModel();
innovaCar.yearOfManufacturer();