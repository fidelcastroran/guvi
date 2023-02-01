//  person class to hold all the details 

var Person = function (firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    
    this.setAge = function (age) {
      this.age = age;
    };
    
    this.toString = function () {
      return ["Hi ! I'm ", this.firstName, " ", this.lastName, " and I'm ", this.age, " year old."].join("");
    };
  };
  
  var helo= new Person("Manik", "P.A", 20);
  console.log(helo.toString());
  
//  second method for PERSOn class USing prototype 
  
  var Person = function (firstname, lastname, age) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
  };
  
//   Prototypes are better for performances if you have many call of this method
  Person.prototype.setAge = function (age) {
    this.age = age;
  };
  
  Person.prototype.toString = function () {
    return ["Hi ! I'm ", this.firstName, " ", this.lastName, " and I'm ", this.age, " year old."].join("");
  };
  
  var hel = new Person("MAnik", "Toman", 25);
  console.log(hel.toString());





// UBER pRice calculation
class pric{
    constructor(d,p){
        this.d = d // instance of this object
        this.p = p
    }

    something(t) {
        console.log(this.d+this.p+t);
        // console.log(d+p);
        // console.log(this.d);
    }
}

var pri = new pric(10,20)
pri.something(4)
