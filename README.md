# Get Native Function
Get native function from path in JavaScript

# Usage

```js
// Get native function
let native = get_native('Function.prototype.toString');

// Get local function
let local = Function.prototype.toString;

// Determine if the functions are the same
console.assert(native.call(local) === local.call(local));
```
