const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// const radio = document.getElementById('radio');

form.addEventListener('submit',e =>{
    e.preventDefault()
    checkInputs()
}); 

function checkInputs(){
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordValue2 = password2.value.trim();
    // const radioValue = radio.value;

    if(userNameValue === ''){
        setErrorFor(username,"username cannot be blank");
    }else{
        setSuccessFor(username)
    }
    if(emailValue === ''){
        setErrorFor(email,"email cannot be blank");
    }else{
        setSuccessFor(email)
    }
    if(passwordValue === ''){
        setErrorFor(password,"password cannot be blank");
    }else{
        setSuccessFor(password)
    }
    if(passwordValue2 === ''){
        setErrorFor(password2,"password cannot be blank");
    }else if(passwordValue !== passwordValue2){
        setErrorFor(password2,"password does'nt match");
    }else{
        setSuccessFor(password2)
    }
    // if(radioValue === 'heloo'){
    //     setErrorForRadio();
    // }else{
    //     setSuccessForRadio();
    // }
}

function setErrorFor(input,message){
    let formControl = input.parentElement;
    formControl.className = 'form-control error';
    formControl.querySelector('small').innerText = message;
}

function setSuccessFor(input){
    let formControl = input.parentElement;
    formControl.className = 'form-control success';
} 

// function setErrorForRadio(){
//     const fromControl = radio.parentElement;
//     fromControl.className = 'option radio-error'
// }
// function setErrorForRadio(){
//     const fromControl = radio.parentElement;
//     fromControl.className = 'option radio-success'
// }

