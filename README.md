### Promise to GO

A helper library to transform javascript promises like golang.

### Repository

[Promise to go repository](https://github.com/ignaciosua/promiseToGo)

### How to Install

`$ npm install promisetogo`

### How to Use

promisetogo can receive two parameters:

promisetogo(yourPromise, toObjectStyle)

toObjectStyle by default is false

Take a look below for example usage:

```javascript
import promisetogo from 'promisetogo';

//Array Style
async function MyCustomFunction() {
  //Pass the promise you want and receive an object with next values {data, error}
  let [data, error] = await promisetogo(aPromiseToExecuteOne);
  //if error break the flow!
  if (error) return console.error(error);
  let [data, error] = await promisetogo(aPromiseToExecuteTwo);
  //if error break the flow!
  if (error) return console.error(error);
  //otherwise continue executing the program.
  console.log(data);
}

//Object style
async function MyCustomFunction() {
  //Pass the promise you want and receive an object with next values {data, error}
  let { data, error } = await promisetogo(aPromiseToExecuteOne, true);
  //if error break the flow!
  if (error) return console.error(error);
  let { data, error } = await promisetogo(aPromiseToExecuteTwo, true);
  //if error break the flow!
  if (error) return console.error(error);
  //otherwise continue executing the program.
  console.log(data);
}
```
