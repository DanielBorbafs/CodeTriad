// função para selecionar e trocar a borda dos items dos serviços
// Pegando os elementos:

const imgSistemas = document.querySelector('.img-sistemas')
const imgUi = document.querySelector('.img-ui')
const imgTrafego = document.querySelector('.img-trafego')
const imgEcommerce = document.querySelector('.img-ecommerce')

imgSistemas.addEventListener('click', () => {
    removeBorda();
    imgSistemas.classList.add('border-color')
})

imgUi.addEventListener('click', () => {
    removeBorda();
    imgUi.classList.add('border-color')
})

imgTrafego.addEventListener('click', () => {
    removeBorda();
    imgTrafego.classList.add('border-color')
})

imgEcommerce.addEventListener('click', () => {
    removeBorda();
    imgEcommerce.classList.add('border-color')
})



function removeBorda() {
    imgSistemas.classList.remove('border-color')
    imgUi.classList.remove('border-color')
    imgTrafego.classList.remove('border-color')
    imgEcommerce.classList.remove('border-color')
}
//border-color