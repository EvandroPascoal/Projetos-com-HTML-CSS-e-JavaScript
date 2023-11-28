const valor = document.getElementById('valor');
const botaoMais = document.getElementById('mais');
const botaoMenos = document.getElementById('menos');
const botaoResetar = document.getElementById('resetar');


const updateValue = () => {
     valor.innerHTML = count;
};

let count = 0;
let intervaloId = 0;

botaoMais.addEventListener('mousedown', () => {
         intervaloId = setInterval (() => {
            count += 1;
            updateValue();
         }, 100);

});


botaoMenos.addEventListener('mousedown', () => {
    intervaloId = setInterval (() => {
       count -= 1;
       updateValue();
    }, 100);

});

botaoResetar.addEventListener('click', () => {
       count = 0;
       updateValue();

});

document.addEventListener('mouseup', () => clearInterval(intervaloId));