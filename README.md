### Promise to GO

A helper library to transform javascript promises like golang.

### Repository

[Promise to go repository](https://github.com/ignaciosua/promiseToGo)

### How to Install

`$ npm install promisetogo`

### How to Use

```javascript
import promisetogo from 'promisetogo'

  async function MyCustomFunction() {
    //Pass the promise you want and receive an object with next values {data, error}
    let { data, error } = await promisetogo(aPromiseToExecute);
    //if error break the flow!
    if (error) return console.error(error);
    //otherwise continue executing the program.
    console.log(data);
  }

```
