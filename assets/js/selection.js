
const iconServices = document.querySelectorAll('.icon-service');

function removeBorda() {
    iconServices.forEach(service => {
        service.querySelector('img').classList.remove('border-color');
    });
}

iconServices.forEach(service => {
    service.addEventListener('click', (event) => {
        removeBorda();
        service.querySelector('img').classList.add('border-color');
    });

    service.querySelectorAll('*').forEach(child => {
        child.addEventListener('click', (event) => {
            removeBorda();
            service.querySelector('img').classList.add('border-color');
        
        });
    });
});
