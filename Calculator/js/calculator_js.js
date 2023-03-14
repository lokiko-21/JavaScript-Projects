//OBJECT TO KEEP TRACK OF VALUES
const Calculator = {
    //DISPLAY 0 ON SCREEN
    Display_Value: '0',
    //WILL HOLD FIRST OPERAND FOR ANY EXPRESSIONS
    First_Operand: null,
    //CHECKS WEHTHER OR NOT SECOND OPERAND HAS BEEN ENTERED
    Wait_Second_Operand: false,
    //WILL HOLD THE OPERATOR
    operator: null,
};

//MODIFIES VALUES EACH TIME BUTTON IS CLICKED ON
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //CHECKS IF Wait_Second_Operand IS TRUE AND SETS Display_Value
    //TO THE KEY THAT WAS CLICKED ON
    if(Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //THIS OVERWRITES Display_Value IF CURRENT VALUE IS 0
        //OTHERWISE IT ADDS ONTO IT
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//THIS SECTION HANDLES DECIMAL POINTS
function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)) {
        //SAYING IF Display_Value DOESN'T CONTAIN DECIMAL WE WANT
        //TO ADD A DECIMAL POINT
        Calculator.Display_Value += dot;
    }
}

//THIS SECTION HANDLES OPERATORS
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //WHEN OPERATOR KEY IS PRESSED WE CONVERT IT TO A NUMBER AND STORE
    //RESULT IN Calculator_First_operator IF IT DOESN'T EXIST
    const Value_of_Input = parseFloat(Display_Value);
    //CHECKS IF OPERATOR ALREADY EXISTS AND IF Wait_Second_Operand IS
    //TRUE, THEN UPDATES OPERATOR & EXITS FROM THE FUNCTION
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //CHECKS IF OPERATOR EXISTS
        const Value_Now = First_Operand || 0;
        //IF OPERATOR EXISTS, PROPERTY LOOKUP IS PERFORMED FOR THE OPERATOR
        //IN Perform_Calculation OBJECT AND THE FUNCTION MATCHES THE OPERATOR
        //IS EXECUTED
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //HERE WE ADD FIXED AMOUNT OF NUMBERS AFTER THE DECIMAL
        result = Number(result).toFixed (9);
        //THIS WILL REMOVE ANY TRAILING 0'S
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//THIS FUNCTION UPDATES CALCULATOR SCREEN WITH CONTENTS OF Display_Value
function Update_Display() {
    //MAKES USE OF calculatorScreen CLASS TO TARGET INPUT TAG
    const display = document.querySelector('.calculatorScreen');
    display.value = Calculator.Display_Value;
}

Update_Display()

//THIS SECTION MONITORS BUTTON CLICKS
const keys = document.querySelector('.calculatorKeys');
keys.addEventListener('click', (event) => {
    //TARGET VARIABLE REPRESENTS VARIABLE THAT WAS CLICKED
    const { target } = event;
    //IF ELEMENT CLICKED ISN'T A BUTTON, EXIT THE FUNCTION
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
    }
    //ENSURES THAT AC CLEARS ALL INPUTS FROM SCREEN
    if (target.classList.contains('allClear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})