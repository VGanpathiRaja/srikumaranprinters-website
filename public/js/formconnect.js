const scriptURL = 'https://script.google.com/macros/s/AKfycbxH8TUz3yMEGhtp4-TpR5w9BfHNn09XPwDnfSvfk5ErHyVUqem-guxUt-ZhdJPbmi6P5Q/exec';
const form = document.forms['contact-form'];
const email = document.getElementById("email");
const phone = document.getElementById("mnumber");

// Helper function for email validation
function isValidEmail(emailValue) {
    const emailRegex = /^[a-z\d.-]+@[a-z\d-]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i;
    return emailRegex.test(emailValue);
}

// Helper function for phone validation
function isValidPhone(phoneValue) {
    const phoneRegex = /^[0-9]{10}$/; // Checks for exactly 10 digits
    return phoneRegex.test(phoneValue);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate phone
    if (!isValidPhone(phone.value)) {
        Swal.fire({
            title: "Invalid Input",
            text: "Please enter a valid 10-digit mobile number.",
            icon: "warning",
        });
        return; // Stop form submission if invalid
    }

    // Validate email
    if (!isValidEmail(email.value)) {
        Swal.fire({
            title: "Invalid Input",
            text: "Please enter a valid email address.",
            icon: "warning",
        });
        return; // Stop form submission if invalid
    }

    // If both validations pass, proceed with the form submission
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
            if (response.ok) {
                Swal.fire({
                    title: "Success!",
                    text: "Thank you! Your form has been submitted successfully. We will get back to you soon.",
                    icon: "success",
                });
                form.reset(); // Reset the form after successful submission
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Failed to submit the form. Please try again.",
                    icon: "error",
                });
            }
        })
        .catch((error) => {
            console.error('Error!', error.message);
            Swal.fire({
                title: "Error",
                text: "An unexpected error occurred. Please try again later.",
                icon: "error",
            });
        });
});

// const form =document.querySelector("form")
// function sendEmail(){
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "vganapathiraja96@gmail.com",
//         Password : "A1120994653BDCBA48989E275827A9BCA286",
//         To : 'vganapathiraja96@gmail.com',
//         From : "vganapathiraja96@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
// form.addEventListener('submit', e => {
//     e.preventDefault()
//     Email.send();
// })


// const form = document.querySelector("form");
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const subject = document.getElementById("subject");

// function sendEmail() {
//     const bodyMessage = `
//         Full Name: ${fullName.value}<br> 
//         Email: ${email.value}<br> 
//         Phone Number: ${phone.value}<br> 
//         Subject: ${subject.value}
//     `;
    
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username : "vganapathiraja96@gmail.com",
//         Password : "A1120994653BDCBA48989E275827A9BCA286",
//         To : 'vganapathiraja96@gmail.com',
//         From : "vganapathiraja96@gmail.com",
//         Subject: subject.value,
//         Body: bodyMessage,
//     }).then((message) => {
//         if (message === "OK") {
//             Swal.fire({
//                 title: "Success!",
//                 text: "Message sent successfully!",
//                 icon: "success",
//             });
//         } else {
//             Swal.fire({
//                 title: "Error",
//                 text: "Failed to send the message. Try again later.",
//                 icon: "error",
//             });
//         }
//     });
// }

// function checkInputs() {
//     const items = document.querySelectorAll(".item");

//     for (const item of items) {
//         if (item.value === "") {
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         } else {
//             item.classList.remove("error");
//             item.parentElement.classList.remove("error");
//         }
//     }

//     // Specific email validation
//     checkEmail();

//     email.addEventListener("keyup", checkEmail);
//     for (const item of items) {
//         item.addEventListener("keyup", () => {
//             if (item.value !== "") {
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             } else {
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         });
//     }
// }

// function checkEmail() {
//     const emailRegex = /^[a-z\d.-]+@[a-z\d-]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/i;
//     const errorTxtEmail = document.querySelector(".error-txt.email");

//     if (!email.value.match(emailRegex)) {
//         email.classList.add("error");
//         email.parentElement.classList.add("error");

//         if (email.value !== "") {
//             errorTxtEmail.innerText = "Enter a valid email address";
//         } else {
//             errorTxtEmail.innerText = "Email Address can't be blank";
//         }
//     } else {
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//         errorTxtEmail.innerText = ""; // Clear error message
//     }
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkInputs();

//     if (
//         !fullName.classList.contains("error") &&
//         !email.classList.contains("error") &&
//         !phone.classList.contains("error") &&
//         !subject.classList.contains("error") &&
//         !mess.classList.contains("error")
//     ) {
//         sendEmail();
//         form.reset();
//     }
// });
