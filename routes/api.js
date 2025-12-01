'use strict';

const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  app.get('/api/convert', (req, res) => {
    const input = req.query.input || '1gal';
    const convertHandler = new ConvertHandler(); // just declare it once here

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);

    // Handle invalid inputs
    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      return res.send('invalid number and unit');
    } else if (initNum === 'invalid number') {
      return res.send('invalid number');
    } else if (initUnit === 'invalid unit') {
      return res.send('invalid unit');
    }

    // If valid, do the conversion
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const spelledOut = convertHandler.spellOutUnit(initUnit);
    const converted = convertHandler.convert(initNum, initUnit);

    // Send JSON response
    res.json({
      initNum,
      initUnit,
      returnNum: converted,
      returnUnit,
      string: `${initNum} ${spelledOut} converts to ${converted} ${convertHandler.spellOutUnit(returnUnit)}`
    });
  });

};
