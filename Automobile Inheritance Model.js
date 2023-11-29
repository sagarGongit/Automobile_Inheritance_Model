function Vehical(model,color,noOfwheels,typeOffuel,speed,fuel) {
    this.model = model;
    this.color =color;
    this.noOfwheels = noOfwheels ;
    this.typeOffuel = typeOffuel ;
    this.speed = speed ;
    this.fuel = fuel;
    
 Vehical.prototype.start = function() {
          console.log("your vehicle is ready to start !")
    }
 Vehical.prototype.brake = function() {
          this.speed = 0 ;
          console.log(this.speed);
 }
 Vehical.prototype.accelerate = function() {
          this.speed += 10;
          console.log("speed : "+this.speed);
 }
 Vehical.prototype.fuelCapacity = function(capacity){
           this.capacity = 100;
          
 }
Vehical.prototype.fuelFilled =function(fuel) {
            if(fuel < 100){
                 this.fuel += 20; 
                  console.log("fuel : "+this.fuel+" "+"litr");
            }
            else if (fuel >0 && fuel<=5){
                     console.log("your fuel level is low....");
            }
            else {
                console.log("your tank is full :)");
            }
     }
Vehical.prototype.topSpeed=function() {
      if(speed >100) {
 console.log("your car is in top speed please be safe ");
      }
 }
 Vehical.prototype.emerDrainlik = function(fuel){
                this.fuel -= 20;
                console.log("fuel :"+this.fuel);
 }
      

}

let audi = new Vehical("SUV23","Black",4,"diesel",0,0);

     audi.start();
     audi.accelerate();
     audi.fuelFilled(30);
     audi.emerDrainlik(20);