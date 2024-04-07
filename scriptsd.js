// Example JavaScript code to handle form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
    var company = document.getElementById('company').value;

    // Handle form submission here
    console.log('Name: ' + name);
    console.log('Phone: ' + phone);
    console.log('Address: ' + address);
    console.log('Email: ' + email);
    console.log('Company: ' + company);
});