/*Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.
*/
function last() {
    const args = Array.from(arguments);
    if (Array.isArray(args[args.length - 1])) {
      return args[args.length - 1][args[args.length - 1].length - 1];
    } else if (typeof args[args.length - 1] === 'string') {
      return args[args.length - 1][args[args.length - 1].length - 1];
    } else {
      return args[args.length - 1];
    }
  }
  
  console.log(last([1, 2, 3, 4])); // Output: 4
  console.log(last("xyz")); // Output: "z"
  console.log(last(1, 2, 3, 4)); // Output: 4
  