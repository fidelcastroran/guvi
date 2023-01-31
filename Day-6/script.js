 
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
  
  /************************************
   * Second method to create a class *
   * **********************************/
  
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

//   ES6

  class tom {
    constructor() {
      this.age = 43;
      
    }
  }
  
  class man extends tom {
    constructor(name,lastName) {
      super();
      this.name = name;
      this.lastName = lastName;
    }
    greet = () => {
      return ` Hi ! I'm,  ${name} ${lastName} and I' m ${age}`
      
    };
  }
  
  var French = new man("MAnik", "Toman", 25);
  console.log(French);
