const emailInput = document.querySelector('#email')
const emailMsg = document.querySelector('#email-msg')
const passwordInput = document.querySelector('#password')
const passwordMsg = document.querySelector('#password-msg')
const button = document.querySelector('#login-button')

const passwordVisibility =document.querySelector('.visibility-icon.password')

emailInput.addEventListener('focusout', emailValidCheck);
passwordInput.addEventListener('focusout', passwordValidCheck);

emailInput.addEventListener('focusout', buttonActivate);
passwordInput.addEventListener('focusout', buttonActivate);

passwordVisibility.addEventListener('click', visibilityToggle);

let emailValid=false;
let passwordValid=false;

function buttonActivate() {
    // 제출 버튼 활성화/비활성화
    if(emailValid&&passwordValid) { 
      button.disabled = false;
    } 
    else { 
      button.disabled = true; 
    }
}

function emailValidCheck() {
    let email=emailInput.value;
    
    // 1. warning 클래스를 추가/삭제 하여 붉은테두리와 메세지 노출여부 변경(>CSS)
    // 2. 케이스에 따라 메세지 멘트 변경
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

function visibilityToggle(event) {

    if(passwordInput.type === "password"){
        // invisible > visible
        passwordInput.type = "text"
        passwordVisibility.classList.add('visible');
    } else {
        //  visible > invisible
        passwordInput.type = "password"
        passwordVisibility.classList.remove('visible');
    }
}
//제출> JS에서 페이지 이동하기