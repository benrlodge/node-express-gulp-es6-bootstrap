class Person {
  constructor(name, logo){
    this.name = name;
    this.logo = logo;
  }
  name(){
    return this.name;
  }
  logo(){
    return this.logo;
  }

}

module.exports = Person;