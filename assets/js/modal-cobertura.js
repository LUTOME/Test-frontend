const d = document;

const modalCobertura = d.querySelector('#modal-cobertura-on-off');

d.querySelector('#cerrar-modal-cobertura').addEventListener('click', (e) => {
    e.preventDefault;
        modalCobertura.setAttribute('class', 'd-none');    
    });

d.querySelector('#logo-pin').addEventListener('click', (e) => {
    e.preventDefault;
        modalCobertura.setAttribute('class', 'd-block');
    });