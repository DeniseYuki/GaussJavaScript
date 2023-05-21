
const form = document.getElementById(" Contato");

form.addEventListener('submit',function(event)
{
    event.preventDefault();

const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const msg = document.getElementById('mensagem').value;

console.log(`Nome: ${nome}`);
console.log(`E-mail: ${email}`);
console.log(`Mensagem: ${msg}`);

form.reset();



});