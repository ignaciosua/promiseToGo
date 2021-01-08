const promisetogo = require('./index');

let simplePromiseSuccess = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('success');
  }, 250);
});

let simplePromiseReject = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject('error');
  }, 250);
});

// @ponicode
describe('Test Promise to go!', () => {
  test('promise to go success', async () => {
    await expect(promisetogo(simplePromiseSuccess)).resolves.toStrictEqual({
      data: 'success',
      error: null,
    });
  });
  test('promise to go error', async () => {
    await expect(promisetogo(simplePromiseReject)).resolves.toStrictEqual({
      data: null,
      error: 'error',
    });
  });
  test('promise to go array return success', async () => {
    await expect(promisetogo(simplePromiseSuccess, true)).resolves.toStrictEqual(['success', null]);
 
  });
  test('promise to go array return error', async () => {
    await expect(promisetogo(simplePromiseReject, true)).resolves.toStrictEqual([null, "error"]);
  });
});
