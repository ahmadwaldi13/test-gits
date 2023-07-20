const isBalancedBracket = (input) => {
    const stack = []
    const openingBrackets = ['(', '{', '[']
    const closingBrackets = [')', '}', ']']
    
    for (let i = 0; i < input.length; i++) {
      const currentChar = input[i]
      
      if (openingBrackets.includes(currentChar)) {
        stack.push(currentChar);
      } else if (closingBrackets.includes(currentChar)) {
        const lastOpeningBracket = stack.pop()
        const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(currentChar)]
        
        if (lastOpeningBracket !== correspondingOpeningBracket) {
          return 'NO'
        }
      }
    }
  
    return stack.length === 0 ? 'YES' : 'NO'
  }

  console.log(isBalancedBracket("{[()]}"))
  console.log(isBalancedBracket("{[(])}"))
  console.log(isBalancedBracket("{(([])[])[]}"))
  