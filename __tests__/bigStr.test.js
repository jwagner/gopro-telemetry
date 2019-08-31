const bigStr = require('../code/bigStr');

test(`bigStr should modify very large numbers to normal strings`, () => {
  expect(bigStr(8.98846567431158e307)).toBe(
    '89884656743115780000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
  );
});

test(`bigStr should modify very small numbers to normal strings`, () => {
  expect(bigStr(-4.819839730205768e-181)).toBe(
    '-0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000048198397302057683'
  );
});

test(`bigStr should keep small numbers alone`, () => {
  expect(bigStr(-5353.345345)).toBe('-5353.345345');
});
