const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();


  const firstName = document.getElementById('fName').value;
  const lastName = document.getElementById('lName').value;
  const mobileNumber = document.getElementById('phone').value;
  const email = document.getElementById('mail').value;
  const username = document.getElementById('uName').value;
  const password = document.getElementById('pass').value;


  const formData = {
    firstName,
    lastName,
    mobileNumber,
    email,
    username,
    password
  };


  fetch("http://localhost:5000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      window.location.href = "otp.html";
    })
    .catch((error) => {
      console.error("Error:", error);
      
    });
});
