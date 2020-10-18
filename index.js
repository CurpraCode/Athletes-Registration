const form = document.getElementByClassName('form-box');
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone number");

form.addEventListener("submit", e=>{
	e.preventDefault();

	checkInputs();
});

function checkInputs(){
	const fullnameValue = fullname.value.trim();
	const emailValue = email.value.trim();
	const phonenumberValue = phoneNumber.value.trim();

	if (fullnameValue==="  ") {
		setErrorFor(fullname, "Enter your fullname!");
		else{
			setSuccessFor(fullname);
		}
	}
}	

function setErrorFor(input, message){
	const formCorrect= input.parentElement;
	const small = formCorrect.querySelector('small');
	formCorrect.className = "form-Correct";
	small.innerText = message;
}