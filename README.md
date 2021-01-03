### Promise to GO

A helper library to transform javascript promises like golang.

### Repository

[Promise to go repository](https://github.com/ignaciosua/promiseToGo)

### How to Install

`$ npm install promisetogo`

### How to Use

```javascript
import promisetogo from 'promisetogo'

 Serial Calls
  async function MyCustomFunction() {
    //Pass the promise you want and receive an object with next values {data, error}
    let { data, error } = await promisetogo(aPromiseToExecuteOne);
    //if error break the flow!
    if (error) return console.error(error);
    let { data, error } = await promisetogo(aPromiseToExecuteTwo);
    //if error break the flow!
    if (error) return console.error(error);
    //otherwise continue executing the program.
    console.log(data);
  }
  
  Parallel calls
  
   async function MyCustomFunction() {
    //Pass the promise you want and receive an object with next values {data, error}
    let { data, error } = promisetogo(aPromiseToExecuteOne);
    //if error break the flow!
    if (error) return console.error(error);
    //Pass the promise you want and receive an object with next values {data, error}
    let { data, error } = promisetogo(aPromiseToExecuteTwo);
    //if error break the flow!
    if (error) return console.error(error);
    //otherwise continue executing the program.
    console.log(data);
  }

```
