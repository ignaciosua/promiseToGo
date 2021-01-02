const promiseToGo = async function(promise) {
    try {
      let data = await promise
      return {data: data, error: null}
    } catch (error) {
      return {data: null, error: error}
    }
}

module.exports = promiseToGo