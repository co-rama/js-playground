const name = "Corama";

const printName = () => {
  console.log(name);
};

const unknown = {
  name: "Corama",
  age: (age = 22) => {
    return age;
  },
  abilities: "Programmer",
};
// printName();
// console.log(unknown.age(45));
// console.log(this.abilities)

const Person = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
};
Person.prototype.checkTheJob = function () {
  console.log(this.job);
};

const person = new Person("Corama", 22, "Programmer");
const person1 = new Person("james", 34, "Teacher");
person.checkTheJob();
person1.checkTheJob();
const body = document.body;
// body.style.background = 'green';
body.innerHTML = `
    <div>
        <header>
            <h3>Js Playground</h3>
        </header>
    </div>

    `;
