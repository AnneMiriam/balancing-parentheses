function balancingParentheses(str) {
  // type your code here
    let openCount = 0; // Counter for open parentheses
    let additionalNeeded = 0; // Counter for additional parentheses needed

    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            openCount++; // Increment openCount for '('
        } else if (str[i] === ')') {
            // If there are no open parentheses to match with, increase additionalNeeded
            if (openCount === 0) {
                additionalNeeded++;
            } else {
                openCount--; // Match found, decrement openCount
            }
        }
      }
    // Additional parentheses needed will be the sum of openCount (unclosed '(') and additionalNeeded (unmatched ')')
    return openCount + additionalNeeded;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(balancingParentheses('(()()()()((()))'));

  console.log("");

  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
