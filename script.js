const display = document.getElementById("display")

function adicionarNoDisplay(input){
    display.value += input
}

function limpar(){
    display.value = ''
}

function calcular(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'Error'
    }
}