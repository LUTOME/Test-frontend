const d = document;

const modalInigualable = d.querySelector('#modal-inigualable-on-off');

d.querySelector('#cerrar-modal-inigualable').addEventListener('click', (e) => {
    e.preventDefault;
        modalInigualable.setAttribute('class', 'd-none');    
    });

d.querySelector('#logo-tel').addEventListener('click', (e) => {
    e.preventDefault;
        modalInigualable.setAttribute('class', 'd-block');
    });