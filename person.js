//Write a “person” class to hold all the details
class person {
    constructor (name,age,city,gender){
        this.name = name;
        this.age = age;
        this.city = city;
        this.gender = gender;
    }

get PersonDetails(){
    return this.person;
 }
set PersonDetails(a){
    return this.person = a;
 }
}

let Person = new person("smith",30,"newyork","male")
console.log(Person);
/*output:

person {name: 'smith', age: 30, city: 'newyork', gender: 'male'}
[[Prototype]]:Object

*/

//write a class to calculate the uber price
class UberPriceCalculator {
    constructor(from, to) {
      this.from = from;
      this.to = to;
      this.distances = [{
        from: "Tnagar", to: "anna nagar", distance: 15.
      }];
      this._1kmPrice = 15;
    }
    
    calculatePrice() {
      const {distance} = this.distances.find((route) => {
        return route.from == this.from && route.to == this.to;
      });
      return this._1kmPrice * distance;
    }
  }
  
  const route = new UberPriceCalculator("Tnagar", "anna nagar");
  console.log(route.calculatePrice())
/*
output:225
*/  