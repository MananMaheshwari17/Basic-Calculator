const display=document.querySelector('.display');
const buttons=document.querySelectorAll('.buttons button');
const togglebtn=document.getElementById('toggle1');

let currentInput=' ';

togglebtn.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    
    if(document.body.classList.contains('light')){
        togglebtn.textContent='🌜'
    }
    else{
        togglebtn.textContent='🌞'
    }
})

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const value = button.innerText;

        if(value==='AC'){
            currentInput=' ';
            display.value='';
        }
        else if(value==='BS'){
            currentInput = currentInput.slice(0,-1);
            display.value = currentInput;
        }
        else if(value==='='){
            try{
                currentInput= eval(currentInput).toString();
                display.value = currentInput;
            }
            catch{
                display.value = 'Error';
                currentInput=' ';
            }
            
        }
        else{
            currentInput+=value;
            display.value=currentInput;
        }
    });
});