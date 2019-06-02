class Person {
    constructor(name) {
      this.name = name;
    }
  
    setSurname(surname) {
      this.surname = surname;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    save() {
      console.log(this.name, this.surname, this.age);
    }
  }
  
  const person = new Person("John");
  person.setSurname("Doe");
  person.setAge(29);
  person.save();