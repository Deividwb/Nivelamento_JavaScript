import * as nb from './numbers.js'
import {sum, round , exp} from './numbers.js'
import Product from './product.js';

const x = nb.sum(3,4);

console.log(x)

console.log(nb.exp(3,4))
console.log(exp(3,4)) //outra maneira de importar


console.log(nb.round(3.565656,3))

const obj = new Product ("Computador", 800.0, 10)
console.log(obj)