document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from session storage
    const username = sessionStorage.getItem('USERNAME');
    const email = sessionStorage.getItem('EMAIL');
    const password = sessionStorage.getItem('PASSWORD');
    const phone = sessionStorage.getItem('PHONE');
    const gender = sessionStorage.getItem('GENDER');
  
    // Display data in the result page
    document.getElementById('result-username').textContent = username;
    document.getElementById('result-email').textContent = email;
    document.getElementById('result-password').textContent = password;
    document.getElementById('result-phone').textContent = phone;
    document.getElementById('result-gender').textContent = gender;
  });
  