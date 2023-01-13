import ErrorRepository from '../mapClass.js';

test('Should add 2 errors', () => {
  const errorCase = new ErrorRepository();
  errorCase.add(404, 'be be be');
  errorCase.add(202, 'bebebe');
  const expct = errorCase.errors.size;
  expect(expct).toEqual(2);
});

test('Should throw error', () => {
  const errorCase = new ErrorRepository();
  errorCase.add(404, 'be be be');
  errorCase.add(202, 'bebebe');
  errorCase.add(202, 'veveve');
  const expct = 200;
  expect(expct).toEqual(Error);
});

test('Should translate error', () => {
  const errorCase = new ErrorRepository();
  errorCase.add(404, 'be be be');
  errorCase.add(202, 'bebebe');
  const expct = errorCase.translate(202);
  expect(expct).toEqual('bebebe');
});

test('Should throw error', () => {
  const errorCase = new ErrorRepository();
  errorCase.add(404, 'be be be');
  errorCase.add(202, 'bebebe');
  const expct = errorCase.translate(402);
  expect(expct).toEqual('bebebe');
});
