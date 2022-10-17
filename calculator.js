class calculator {
    constructor(previousOperandTextElement, currentOperandtextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandtextElement = currentOperandtextElement
}
clear() {
    this.currentOperand = '' 
    this.previousOperand = ''
    this.operation = undefined
}

delete() {
    this.currentOperand = this.currentOpperand.toString().slice(0, -1)
}

appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() = number.toString()

}   
chooseOperation(operation){
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = '' 
 
}
compute() {
    let computation 
    const prev = parseFloat(this.previousOperand) /*convt string to number */
    const current = parseFloat(this.currentOperand)
    if(isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
        case '+':
            computation = prev + current 
            break
        case '-':
            computation = prev - current 
            break  
        case '*':
            computation = prev * current 
            break  
        case '&divide': 
            computation = prev / current 
            break  
        default: 
            return
       
    } 
    this.chooseOperand = computation
    this.operation = undefined
    this.previousOperand = ''
}

updateDisplay() {
    this.currentOperandtextElement.innerText = 
    this.getDisplayNumber(this.currentOperand)
// if (this.operation != null) 
//     this.previousOperandTextElement.innerText = 
//    ${this.getDisplayNumber(this.previousOperand)}  
    
}
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton  = document.querySelector('[data-equals]')
const AllclearButton = document.querySelector('[data-all-clear]')
const currentOperandtextElement = document.querySelector('[data-current-operand]')
const previousOperandTextElement = document.querySelector('[data-previous-opperand]')


const calculator = new calculator(previousOperandTextElement, currentOperandtextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})