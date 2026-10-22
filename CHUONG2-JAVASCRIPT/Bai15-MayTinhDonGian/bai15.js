let currentExpression = "";
const expression = document.getElementById("expression");
const result = document.getElementById("result");

function appendCharacter(char){
    //cong chuoi ki tu de tinh toan
    currentExpression += char;
    expression.textContent = currentExpression;
}

function clearScreen(){
    //tra ve rong
    currentExpression = "";
    expression.textContent = "";
    result.textContent = "0";
}

function calculateResult(){
    //kiem tra du lieu co duoc nhap vao hay ko
    if(!currentExpression){
        return;
    }
    try{
        //thay the
        let evalString = currentExpression
            .replace(/x/g, '*')
            .replace(/÷/g, '/');
        //ham cho san o trong js
        let evaluated = eval(evalString);
        result.textContent = evaluated;
    } 
    catch(error){
        result.textContent = "Lỗi";
    }
}