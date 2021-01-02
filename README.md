### Promise to GO

A helper library to transform javascript promises like you will handle variable values in golang 

### Repository

[Promise to go repository](https://github.com/ignaciosua/promiseToGo)


####Inline code

`$ npm install promisetogo`


####Javascript　

```javascript
import promiseToGo from 'promiseToGo'

  async function MyCustomFunction() {
    //Pass the promise you want and receive an object with next values {data, error}
    let { data, error } = await promiseToGo(aPromiseToExecute);
    //if error break the flow!
    if (error) return console.log(error);
    //otherwise continue executing the program.
    console.log(data);
  }

```