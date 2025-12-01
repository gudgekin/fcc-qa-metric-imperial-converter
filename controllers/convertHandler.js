function ConvertHandler() {

this.getNum = function(input) {
  // Find the index where letters start (unit)
  const result = input.match(/^[\d.\/]+/); // matches numbers, dots, and slash
  if (!result) return 1; // default

  let numStr = result[0];

  // Check for double fraction (e.g., 3/2/3)
  if ((numStr.match(/\//g) || []).length > 1) return 'invalid number';

  // Evaluate fraction if present
  if (numStr.includes('/')) {
    const [numerator, denominator] = numStr.split('/');
    return parseFloat(numerator) / parseFloat(denominator);
  }

  return parseFloat(numStr);
};


this.getUnit = function(input) {
  // Match the letters at the end of the input
  const result = input.match(/[a-zA-Z]+$/);
  if (!result) return 'invalid unit';

  let unit = result[0].toLowerCase();

  // Special case for liter
  if (unit === 'l') unit = 'L';

  // Valid units
  const validUnits = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];

  if (!validUnits.includes(unit)) return 'invalid unit';

  return unit;
};


  // Get the corresponding unit to convert to
  this.getReturnUnit = function(initUnit) {
    const unitMap = {
      gal: 'L',
      L: 'gal',
      lbs: 'kg',
      kg: 'lbs',
      mi: 'km',
      km: 'mi'
    };
    return unitMap[initUnit];
  };

this.spellOutUnit = function(unit) {
  const fullNames = {
    gal: 'gallons',
    L: 'liters',
    lbs: 'pounds',
    kg: 'kilograms',
    mi: 'miles',
    km: 'kilometers'
  };
  return fullNames[unit];
};


this.convert = function(initNum, initUnit) {
  const galToL = 3.78541;
  const lbsToKg = 0.453592;
  const miToKm = 1.60934;

  let result;

  switch (initUnit) {
    case 'gal':
      result = initNum * galToL;
      break;
    case 'L':
      result = initNum / galToL;
      break;
    case 'lbs':
      result = initNum * lbsToKg;
      break;
    case 'kg':
      result = initNum / lbsToKg;
      break;
    case 'mi':
      result = initNum * miToKm;
      break;
    case 'km':
      result = initNum / miToKm;
      break;
    default:
      return null;
  }

  return parseFloat(result.toFixed(5));
};

}

module.exports = ConvertHandler;
