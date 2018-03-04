/* driver function
  @parameter expression string
*/
function main(expression) {
  // initalize two arrays that will serve as our stacks
  let opStack = [];
  let numStack = [];

  // fill stacks
  opOrNum(expression, opStack, numStack);

  // evaluate the expression
  const ans = evaluate(opStack, numStack);

  // return answer
  return ans;
}

// determines which stack to push to
function opOrNum(expression, opStack, numStack) {
  [...expression].map(ele => {
    if (isValidOp(ele)) {
      opStack.unshift(ele);
    } else if (isValidNum(ele)) {
      numStack.unshift(Number(ele));
    }
  });
}

//  validates the Op. parameters
function isValidOp(ele) {
  const operands = '+-';
  const valid = operands.includes(ele) ? true : false;
  return valid;
}

//  validates the numerical parameters
function isValidNum(ele) {
  const valid = Number(ele) ? true : false;
  return valid;
}

function evaluate(opStack, numStack) {
  const operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y
  };

  while (opStack.length > 0) {
    // pop from 'top' of stack or beginning of array
    operator = opStack.shift();
    first = numStack.shift();
    second = numStack.shift();

    // push evlatuated num back onto the top of the stack
    numStack.unshift(operations[operator](first, second));
  }

  // return the answer or undefined
  if (numStack.length === 1) return numStack.pop();
  else return undefined;
}

module.exports = {
  main
};
