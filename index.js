const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const address= document.getElementById('address');

form.addEventListener('submit', e => {
		e.preventDefault();
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    const addressv=address.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	}else if(!isusername(usernameValue)){
        setErrorFor(username,'Enter valid username (min 3 characters long) and no numeric values');
    } 
    else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}

    if(addressv===''){
        setErrorFor(address,'Address cannot be blank');
    }
    else if(!isaddress(addressv)){
        setErrorFor(address,'Enter valid address ( no numeric values)');
    } 
    else {
		setSuccessFor(address);
	}
	
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isusername(username) {
	return /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(username);
}
function isaddress(address) {
	return /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(address);
}










