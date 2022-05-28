class Person {
  constructor(name, age, gender, phone, place, dob) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.place = place;
    this.dob = dob;
  }
  //getters and setters for name property
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
  //getters and setters for age property
  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }
  //getters and setters for name property
  getGender() {
    return this.gender;
  }
  setGender(gender) {
    this.gender = gender;
  }
  //getters and setters for name property
  getPhone() {
    return this.phone;
  }
  setPhone(phone) {
    this.phone = phone;
  }
  //getters and setters for name property
  getPlace() {
    return this.place;
  }
  setPlace(place) {
    this.place = place;
  }
  //getters and setters for name property
  getDob() {
    return this.dob;
  }
  setDob(dob) {
    this.dob = dob;
  }

  getPersonDetails() {
    return `Name :${this.name}\nAge:${this.age}\nGender:${this.gender}\nPhone:${this.phone}\nPlace:${this.place}\nDate of Birth:${this.dob}`;
  }
}

let a = new Person("Ram", 23, "Male", 7708959642, "Trichy", "20-10-1986");
let b = new Person("Janaki", 23, "Male", 9940812556, "Chennai", "05-08-1986");

console.log(a.getPersonDetails());
console.log();
console.log(b.getPersonDetails());
