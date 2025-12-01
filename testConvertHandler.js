const ConvertHandler = require('./controllers/convertHandler');
const ch = new ConvertHandler();

console.log(ch.getNum('10L'));       // 10
console.log(ch.getNum('3.5mi'));     // 3.5
console.log(ch.getNum('1/2kg'));     // 0.5
console.log(ch.getNum('2.5/5gal'));  // 0.5
console.log(ch.getNum('kg'));        // 1
console.log(ch.getNum('3/2/3L'));    // 'invalid number'

console.log(ch.getUnit('10gal'));   // gal
console.log(ch.getUnit('32L'));     // L
console.log(ch.getUnit('3.5mi'));  // mi
console.log(ch.getUnit('2.5/5kg'));// kg
console.log(ch.getUnit('5g'));     // 'invalid unit'
console.log(ch.getUnit('123'));    // 'invalid unit'

console.log(ch.convert(1, 'gal'));  // should be 3.78541
console.log(ch.convert(1, 'L'));    // should be 0.26417
console.log(ch.convert(2.5, 'mi')); // should be 4.02335
console.log(ch.convert(5, 'kg'));   // should be 11.02312

console.log(ch.spellOutUnit('gal')); // gallons
console.log(ch.spellOutUnit('L'));   // liters
console.log(ch.spellOutUnit('lbs')); // pounds
console.log(ch.spellOutUnit('kg'));  // kilograms
console.log(ch.spellOutUnit('mi'));  // miles
console.log(ch.spellOutUnit('km'));  // kilometers
