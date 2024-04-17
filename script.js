let discontinued = false;
let productYear = 0;

async function fetchDataPickup() {
    const url = 'https://car-data.p.rapidapi.com/cars?limit=5&page=0&make=Ford&type=pickup';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '877fba9406mshd0e093eced512b6p1f24a2jsne252ec914d89',
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const products = await response.json();
        console.log(products);

        for (let i = 0; i < 5; i++) {
            const vehicleInformation = document.getElementById(`desc${i + 1}`);
            const productYear = parseInt(products[i].year);
            let discontinued = false;
            vehicleInformation.textContent = `${products[i].year} ${products[i].make} ${products[i].model}`;

            if (productYear < 1999) {
                discontinued = true;
            }

            if (discontinued) {
                vehicleInformation.innerHTML += "<br><strong><u>Discontinued</u></strong>";
            }
        }
    } catch (error) {
        console.error(error);
    }
}

async function fetchDataSedan() {
    const url = 'https://car-data.p.rapidapi.com/cars?limit=5&page=0&make=honda&type=sedan';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '877fba9406mshd0e093eced512b6p1f24a2jsne252ec914d89',
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const products = await response.json();
        console.log(products);

        for (let i = 0; i < 5; i++) {
            const vehicleInformation = document.getElementById(`desc${i + 1}`);
            const productYear = parseInt(products[i].year);
            let discontinued = false;
            vehicleInformation.textContent = `${products[i].year} ${products[i].make} ${products[i].model}`;

            if (productYear < 1999) {
                discontinued = true;
            }

            if (discontinued) {
                vehicleInformation.innerHTML += "<br><strong><u>Discontinued</u></strong>";
            }
        }
    } catch (error) {
        console.error(error);
    }
}

async function fetchDataSUV() {
    const url = 'https://car-data.p.rapidapi.com/cars?limit=5&page=0&make=Honda&type=SUV';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '877fba9406mshd0e093eced512b6p1f24a2jsne252ec914d89',
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const products = await response.json();
        console.log(products);

        for (let i = 0; i < 5; i++) {
            const vehicleInformation = document.getElementById(`desc${i + 1}`);
            const productYear = parseInt(products[i].year);
            let discontinued = false;
            vehicleInformation.textContent = `${products[i].year} ${products[i].make} ${products[i].model}`;

            if (productYear < 1999) {
                discontinued = true;
            }

            if (discontinued) {
                vehicleInformation.innerHTML += "<br><strong><u>Discontinued</u></strong>";
            }
        }
    } catch (error) {
        console.error(error);
    }
}

async function fetchDataVan() {
    const url = 'https://car-data.p.rapidapi.com/cars?limit=5&page=0&make=ford&type=van';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '877fba9406mshd0e093eced512b6p1f24a2jsne252ec914d89',
            'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const products = await response.json();
        console.log(products);

        for (let i = 0; i < 5; i++) {
            const vehicleInformation = document.getElementById(`desc${i + 1}`);
            const productYear = parseInt(products[i].year);
            let discontinued = false;
            vehicleInformation.textContent = `${products[i].year} ${products[i].make} ${products[i].model}`;

            if (productYear < 1999) {
                discontinued = true;
            }

            if (discontinued) {
                vehicleInformation.innerHTML += "<br><strong><u>Discontinued</u></strong>";
            }
        }
    } catch (error) {
        console.error(error);
    }
}

const form = document.getElementById('contact-form');
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('add')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        const formData = {
            firstName: fnameInput.value.trim(),
            lastName: lnameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            message: messageInput.value.trim()
        };
        saveFormData(formData);
        console.log(formData);
        form.reset();
    }
});


function validateForm() {
    let isValid = true;

    clearErrorMessages();

    if (!fnameInput.value.trim()) {
        isValid = false;
        showError(fnameInput, 'Please enter your first name.');
    }

    if (!lnameInput.value.trim()) {
        isValid = false;
        showError(lnameInput, 'Please enter your last name.');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        isValid = false;
        showError(emailInput, 'Please enter a valid email address.');
    }

    const phonePattern = /^\+?(?:1-)?(\d{3})[- .]?(\d{3})[- .]?(\d{4})$/;
    if (!phonePattern.test(phoneInput.value)) {
        isValid = false;
        showError(phoneInput, 'Please enter a valid phone number.');
    }

    return isValid;
}

function showError(input, message) {
    const errorMessage = document.getElementById(input.id + '-span');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
}

function clearErrorMessages() {
    const errorTexts = form.querySelectorAll('p.error-text');
    errorTexts.forEach(errorText => {
        errorText.textContent = '';
    });
}

function saveFormData(formData) {
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
}