import { add,validatePhoneNumber } from '../src';

test('validate uz phone number', () => {
  const result = validatePhoneNumber('+9989999992299');
  expect(result).toBe(false);
});