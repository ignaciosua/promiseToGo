const promisetogo = async function (promise, toObject) {
  if (toObject) {
    try {
      let data = await promise;
      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  } else {
    try {
      let data = await promise;
      return [data, null];
    } catch (error) {
      return [null, error];
    }
  }
};

module.exports = promisetogo;
