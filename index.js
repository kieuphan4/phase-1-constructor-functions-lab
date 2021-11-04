function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
const envy = new Scooter("2015", "gray", "prodigy pro");
console.log(envy);


function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}
const lee = new Driver("Lee", "25", "expert");
console.log(lee);

function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
}
const lane = new PickUpLocation("47 Seesaw Lane", "Sandwich City");
console.log(lane);