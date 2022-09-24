const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const clipboardEl = document.getElementById('clipboard')
const generateEl = document.getElementById('generate')



const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    
})

generateEl.addEventListener('click', (e) => {
    e.preventDefault();

    let lower = lowercaseEl.checked;
    let upper = uppercaseEl.checked;
    let number = numbersEl.checked;
    let symbol = symbolsEl.checked;
    let length = lengthEl.value;
    generatePassword(lower,upper,number,symbol,length);

})

function generatePassword(lower, upper, number, symbol, length) {
    

    let noOfTicks = Number(lower) + Number(upper) + Number(number) + Number(symbol);
    // console.log(noOfTicks);

    let particular = Math.floor(length / noOfTicks);
    let extra = length % noOfTicks;
    let result = "";

    if(extra){
        result = result + getRandomSymbol(extra);
    }

    if(lower){
        result = result + getRandomLower(particular);
    }

    if(upper){
        result = result + getRandomUpper(particular);
    }

    if(number){
        result = result + getRandomNumber(particular);
    }
    
    if(symbol){
        result = result + getRandomSymbol(particular);
    }

    console.log(result);

    let finalresult = "";
    for(let i = 0;i < result.length;i++){
        finalresult = finalresult + result[Math.floor(Math.random() * result.length)];
    }
    // console.log(finalresult);
    document.querySelector("#result").textContent = finalresult;
}

function getRandomLower(len) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for(let i=0;i<len;i++){
        result = result + lower[Math.floor(Math.random() * lower.length)];
    }
    return result;
}

function getRandomUpper(len) {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for(let i=0;i<len;i++){
        result = result + upper[Math.floor(Math.random() * upper.length)];
    }
    return result;
}

function getRandomNumber(len) {
    let number = "0123456789";
    let result = "";
    for(let i=0;i<len;i++){
        result = result + number[Math.floor(Math.random() * number.length)];
    }
    return result;
}

function getRandomSymbol(len) {
    let symbol = "@#$&*_-";
    let result = "";
    for(let i=0;i<len;i++){
        result = result + symbol[Math.floor(Math.random() * symbol.length)];
    }
    return result;
}