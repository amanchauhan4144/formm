

const usernameField = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
usernameField.addEventListener("keydown", validateUsername);


function validateUsername() {

  const usernameValue = usernameField.value;
  const pattern = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  console.log("Username value:", usernameValue);
  console.log("Pattern test result:", pattern.test(usernameValue));





  if (usernameValue.trim() === '') {
   
    usernameError.style.display = "block";
  } else if (pattern.test(usernameValue)) {
    usernameField.classList.add("invalid");
    usernameError.style.display = "block"; 
  } else {
    usernameField.classList.remove("invalid");
    usernameError.style.display = "none"; 
  }
}





// 


const emailField = document.getElementById("email");
const emailError = document.getElementById("emailError");
emailField.addEventListener("input", validateEmail);



function validateEmail() {
  
  const emailValue = emailField.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue.trim() === '') {
    emailError.style.display = "block";
  } else if (!emailPattern.test(emailValue)) {
    emailField.classList.add("invalid");
  } else {
    emailField.classList.remove("invalid");
    emailError.style.display = "none"; 

}
}

const phoneNumberField= document.getElementById('phone');
const phoneError=document.getElementById('phoneError');
phoneNumberField.addEventListener("input",validatePhoneNumber);
function validatePhoneNumber(){
  const phonennumbervalue=phoneNumberField.value;
  const phonepattern=/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/

 

  if(phonennumbervalue.trim() === ''){
    phoneError.style.display="block";
  }
  else if(!phonepattern.test(phonennumbervalue)){
    phoneNumberField.classList.add("invalid");
    phoneError.style.display="block";
  }
  else{
    phoneNumberField.classList.remove("invalid");
    phoneError.style.display = "none"; // Hid
  }
}


// 

const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

togglePasswordButton.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});


function generateCaptcha() {
  var captchaValue = Math.floor(1000 + Math.random() * 9000);
  document.getElementById('captchaPrefix').innerText = captchaValue;
}

generateCaptcha();


function handleSubmit(event) {
  debugger;
  const username = document.getElementById('username').value; 
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;

  function maskPassword(password) {
    const visiblePart = password.slice(-4);
    const maskedPart = 'x'.repeat(password.length - 4);
    return maskedPart + visiblePart;
  }

  const maskedpassword= maskPassword(password);

  document.getElementById("form").addEventListener("submit", function(event)
   {
    var genderRadios = document.getElementsByName("gender");
    var genderError = document.getElementById("genderError");
  
    var selectedGender = false;
    for (var i = 0; i < genderRadios.length; i++) {
      if (genderRadios[i].checked) {
        selectedGender = true;
        break;
      }
    }
  
    if (!selectedGender) {
      alert("please select gender");
      event.preventDefault();
    } else {
      genderError.style.display = "none";
    }
  });
  

  const imageFile = document.getElementById('image').files[0];

  sessionStorage.setItem("USERNAME", username);
  sessionStorage.setItem("EMAIL", email);
  sessionStorage.setItem("PASSWORD", maskedpassword);
  sessionStorage.setItem("PHONE", phone);
  sessionStorage.setItem("GENDER", gender);

  if (imageFile) {
      console.log("Image File:", imageFile);
  }
 
  document.getElementById('captchaPrefix').innerText = captchaValue;
  

  var captchaInput = document.getElementById("captcha").value;
  var captchaError = document.getElementById("captchaError");
  console.log(captchaInput);
  
  
  if (captchaInput.toString() !== captchaValue.toString()) {
    event.preventDefault(); // Prevent form submission
    alert("wrong captcha entered");
  } else {
    captchaError.style.display = "none";
  }

}

  









