class Person {
  // constructor(){}
  constructor(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
  }
  calculateAge() {
    const age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
  static helloFriend() {
    console.log("Hello To You");
  }
}

const person = new Person("Corama", "Progammer", 1998);
person.calculateAge();
Person.helloFriend();
