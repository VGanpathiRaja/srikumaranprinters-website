const scriptURL = 'https://script.google.com/macros/s/AKfycbxH8TUz3yMEGhtp4-TpR5w9BfHNn09XPwDnfSvfk5ErHyVUqem-guxUt-ZhdJPbmi6P5Q/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData (form)})
.then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})