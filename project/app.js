let textarea = document.querySelector('div.container textarea')
let counter = document.querySelector('div.counter div p')
let resetButton = document.querySelector('div.counter div i')
textarea.addEventListener('input', () =>
{
    if(textarea.value.split(' ') == '') {counter.textContent = 'Quantity: 0'}
    else {counter.textContent = 'Quantity: ' + textarea.value.split(' ').length}
})
document.addEventListener('click', (e) =>
{
    if(((e.target == resetButton)||(e.target == resetButton.parentElement))&&(textarea.value.split(' ').length >= 1))
    {
        textarea.value = ''
        counter.textContent = 'Quantity: 0'
    }
})