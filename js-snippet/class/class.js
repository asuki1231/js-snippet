//Bad

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

//Good
//メソッドチェーンを使用する

class Person {
  constructor(name) {
    this.name = name;
  }

  setSurname(surname) {
    this.surname = surname;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  save() {
    console.log(this.name, this.surname, this.age);
    return this;
  }
}

const person = new Person("John")
  .setSurname("Doe")
  .setAge(29)
  .save();
