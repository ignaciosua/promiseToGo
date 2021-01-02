### Promise to GO

A library to transform Promises like golang 

### Repository

[Promise to go repository](https://github.com/ignaciosua/promiseToGo)


####Inline code

`$ npm install promisetogo`


####Javascript　

```javascript
import promiseToGo from 'promiseToGo'

async function () {
	let {data, error}	= await promiseToGo(aPromiseToExecute )
	if(error) return console.log(error);
	console.log(data);
}

```