let user = {
    username: 'USERNAME',
    email: 'EMAIL ADRESS',
    firstName: 'FIRST NAME',
    lastName: 'LAST NAME',
    nickName: 'NICKNAME',
    phone: 'PHONE'
}

let body = document.querySelector('body');
let title = document.createElement('h1');
title.textContent = 'Get your own site';
body.appendChild(title);

let form = document.createElement('form');
body.appendChild(form);
const createInput = () => {
    let phrases = ['(Must be at least 4 characters, letters and numbers only)',
        'We send your registration email to this adress. (Double-check your email adress before continuing!)',
        '(Must be input)', '(Must be input)', '', '(Must be at least 10 characters, numbers only.)']
    let i = 0;
    for (key in user) {
        let label = document.createElement('label');
        label.id = key.toUpperCase();
        label.htmlFor = key;
        label.textContent = user[key];
        form.appendChild(label);

        let input = document.createElement('input');
        input.type = 'text';
        input.id = key;
        if (phrases[i] !== '') {
            input.required = true;
        }
        form.appendChild(input);

        let paragraph = document.createElement('p');
        paragraph.textContent = phrases[i];
        form.appendChild(paragraph);
        i++;
    }

}
createInput();

let div = document.createElement('div');
form.appendChild(div);

let radioInputSite = document.createElement('input');
radioInputSite.type = 'radio';
radioInputSite.id = 'site';
radioInputSite.name = 'choice';
radioInputSite.value = 'site';
div.appendChild(radioInputSite);

let radioLabelSite = document.createElement('label');
radioLabelSite.htmlFor = 'site';
radioLabelSite.textContent = 'GIMME A SITE!';
div.appendChild(radioLabelSite);

let radioInputUser = document.createElement('input');
radioInputUser.type = 'radio';
radioInputUser.id = 'user';
radioInputUser.name = 'choice';
radioInputUser.value = 'user';
div.appendChild(radioInputUser);
let radioLabelUser = document.createElement('label');
radioLabelUser.htmlFor = 'user';
radioLabelUser.textContent = 'JUST A USERNAME, PLEASE';
div.appendChild(radioLabelUser);

let submit = document.createElement('button');
submit.type = 'submit';
submit.textContent = 'NEXT';
form.appendChild(submit);

let usernameWarning = document.createElement('div');
usernameWarning.className = 'warning';
usernameWarning.textContent = 'Please enter a username';
document.querySelector('#USERNAME').appendChild(usernameWarning);
const validateUsername = () => {
    let username = document.querySelector('#username').value;
    if (!(/^[a-z0-9]+$/i.test(username)) || username.length < 4) {
        usernameWarning.style.display = 'block';
    } else {
        usernameWarning.style.display = 'none';

    }
};

let emailWarning = document.createElement('div');
emailWarning.className = 'warning';
emailWarning.textContent = 'Please enter a valid adress';
document.querySelector('#EMAIL').appendChild(emailWarning);
const validateEmail = () => {
    let email = document.querySelector('#email').value;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        emailWarning.style.display = 'block';
    } else {
        emailWarning.style.display = 'none';

    }
}

let firstNameWarning = document.createElement('div');
firstNameWarning.className = 'warning';
firstNameWarning.textContent = 'Please enter a First Name';
document.querySelector('#FIRSTNAME').appendChild(firstNameWarning);
const validatefirstName = () => {
    let firstname = document.querySelector('#firstName').value;
    if (!(/^[a-z]+$/i.test(firstname))) {
        firstNameWarning.style.display = 'block';
    } else {
        firstNameWarning.style.display = 'none';
    }
};

let lastNameWarning = document.createElement('div');
lastNameWarning.className = 'warning';
lastNameWarning.textContent = 'Please enter a Last Name';
document.querySelector('#LASTNAME').appendChild(lastNameWarning);
const validatelastName = () => {
    let lastname = document.querySelector('#lastName').value;
    if (!(/^[a-z]+$/i.test(lastname))) {
        lastNameWarning.style.display = 'block';
    } else {
        lastNameWarning.style.display = 'none';
    }
};

let phoneWarning = document.createElement('div');
phoneWarning.className = 'warning';
phoneWarning.textContent = 'Please enter a Phone!';
document.querySelector('#PHONE').appendChild(phoneWarning);
const validatePhone = () => {
    let phoneNr = document.querySelector('#phone').value;
    if (isNaN(phoneNr) || phoneNr.length < 10) {
        phoneWarning.style.display = 'block';
    } else {
        phoneWarning.style.display = 'none';
    }
}


function validateForm() {
    validatePhone();
    validatelastName();
    validatefirstName();
    validateEmail();
    validateUsername();
}
submit.addEventListener('click', validateForm);