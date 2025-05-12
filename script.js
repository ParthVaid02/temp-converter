const form = document.querySelector('form');
const result = document.querySelector('#result')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const temp = parseFloat(document.querySelector('#temp').value);
    if(document.querySelector('#toFahrenhiet').checked){
        const convertedTemp = ((temp*(9/5)) + 32).toFixed(2);
        result.innerHTML = `Your result is ${convertedTemp} °F`;
    }
    else{
        const convertedTemp = ((5/9)*(temp - 32)).toFixed(2);
        result.innerHTML = `Your result is ${convertedTemp} °C`;
    }
})