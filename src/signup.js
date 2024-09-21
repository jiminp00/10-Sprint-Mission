const emailInput = document.querySelector('#email')
const emailMsg = document.querySelector('#email-msg')
const nameInput = document.querySelector('#name')
const nameMsg = document.querySelector('#name-msg')
const passwordInput = document.querySelector('#password')
const passwordMsg = document.querySelector('#password-msg')
const passwordCheckInput = document.querySelector('#password-check')
const passwordCheckMsg = document.querySelector('#password-check-msg')
const button = document.querySelector('#signup-button')

const passwordVisibility = document.querySelector('.visibility-icon.password')
const passwordCheckVisibility = document.querySelector('.visibility-icon.password-check')

emailInput.addEventListener('focusout', emailValidCheck);
nameInput.addEventListener('focusout', nameValidCheck);
passwordInput.addEventListener('focusout', passwordValidCheck);
passwordCheckInput.addEventListener('focusout', passwordCheckValidCheck);

emailInput.addEventListener('focusout', buttonActivate);
nameInput.addEventListener('focusout', buttonActivate);
passwordInput.addEventListener('focusout', buttonActivate);
passwordCheckInput.addEventListener('focusout', buttonActivate);

passwordVisibility.addEventListener('click', visibilityToggle);
passwordCheckVisibility.addEventListener('click', visibilityToggle);

let emailValid=false;
let nameValid=false;
let passwordValid=false;
let passwordCheckValid=false;

function buttonActivate() {

    if(emailValid&&nameValid&&passwordValid&&passwordCheckValid) { 
      button.disabled = false;
    } 
    else { 
      button.disabled = true; 
    }
}

function emailValidCheck() {
    let email=emailInput.value;
    
    if(email === ""){ 
        emailValid=false;
        emailInput.classList.add('warning');
        emailMsg.classList.add('warning');
        emailMsg.textContent="이메일을 입력해주세요"
    }else if(!emailRegTest(email)) {
        emailValid=false;
        emailInput.classList.add('warning');
        emailMsg.classList.add('warning');
        emailMsg.textContent="잘못된 이메일 형식입니다"
    }else{
        emailValid=true;
        emailInput.classList.remove('warning');
        emailMsg.classList.remove('warning');
    }
}

function emailRegTest(email){     
    //이메일 형식 검사(regular expression test)
	regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!regex.test(email)){ 
		return false; 
	}else{
		return true;
	}
}

function nameValidCheck() {
    let name=nameInput.value;
    
    if(name === ""){ 
        nameValid=false;
        nameInput.classList.add('warning');
        nameMsg.classList.add('warning');
        nameMsg.textContent="닉네임을 입력해주세요"
    }else{
        nameValid=true;
        nameInput.classList.remove('warning');
        nameMsg.classList.remove('warning');
    }
}

function passwordValidCheck() {
    let password=passwordInput.value;

    if(password === ""){ 
        passwordValid=false;
        passwordInput.classList.add('warning');
        passwordMsg.classList.add('warning');
        passwordMsg.textContent="비밀번호를 입력해주세요"
    }else if(password.length < 8) {
        passwordValid=false;
        passwordInput.classList.add('warning');
        passwordMsg.classList.add('warning');
        passwordMsg.textContent="비밀번호를 8자 이상 입력해주세요"
    }else{
        passwordValid=true;
        passwordInput.classList.remove('warning');
        passwordMsg.classList.remove('warning');
    }
}

function passwordCheckValidCheck() {
    let passwordCheck=passwordCheckInput.value;
    let password=passwordInput.value;

    if(passwordCheck === password){ 
        passwordCheckValid=true;
        passwordCheckInput.classList.remove('warning');
        passwordCheckMsg.classList.remove('warning');
    }else{
        passwordCheckValid=false;
        passwordCheckInput.classList.add('warning');
        passwordCheckMsg.classList.add('warning');
        passwordCheckMsg.textContent="비밀번호가 일치하지 않습니다"
    }
}

function visibilityToggle(event) {
    let input;
    let visibility;
    
    if(event.target.classList.contains('password')){
        // password 에서 이벤트 발생
        input=passwordInput;
        visibility=passwordVisibility;
    } else {
        // password-check 에서 이벤트 발생
        input=passwordCheckInput;
        visibility=passwordCheckVisibility;
    }

    if(input.type === "password"){
        input.type = "text"
        visibility.classList.add('visible');
    } else {
        input.type = "password"
        visibility.classList.remove('visible');
    }
}