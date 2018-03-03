function main(expression) {
  let opStack = [];
  let numStack = [];

  opOrNum(expression, opStack, numStack);
  const ans = evaluate(opStack, numStack);

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
    operator = opStack.pop();
    first = numStack.pop();
    second = numStack.pop();

    numStack.unshift(operations[operator](first, second));
  }

  if (numStack.length === 1) return numStack.pop();
  else return undefined;
}

module.exports = {
  main
};
