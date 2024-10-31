
function numberClick(caracter) {
  const display = document.querySelector('.display').value
  document.querySelector('.display').value = display + caracter

}

function resetDisplay() {
  document.querySelector('.display').value = ''
} 

function inverterSinal() {
  const display = document.querySelector('.display').value

  document.querySelector('.display').value = display * -1
}

function calculate() {
  const display = document.querySelector('.display').value
  document.querySelector('.display').value = eval(display)
}

document.addEventListener('keydown', function (event) {
  console.log(event.key)
  if(event.key === 'Enter'){
    calculate()
  } 
})