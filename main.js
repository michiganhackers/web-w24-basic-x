let mutable = 2;
mutable = 4;

const str = 'hello world';
console.log(str);

const bool = true;
const notBool = !bool;

const myVar = undefined;
const nothing = null;

const sahil = {
  age: 19,
  color: 'brown',
  gains: 0,
  money: -6969,
  bitches: null,
  virgin: true,
};

console.log(sahil.age);
sahil.age = 20;
console.log(sahil);

// primitives are not objects and equality is determined by value
console.log(20 == 20);
const num = 1;
// num = 2; // error

// so how does reassigning Sahil's age work?
// objects use *referential* equality, they are passed and interpretted by their reference in memory, not their evaluated values
console.log({ value: 1 } == { value: 1 });
