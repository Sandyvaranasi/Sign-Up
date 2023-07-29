const verification = document.getElementById("varification");

verification.addEventListener("submit", (e) => {
  e.preventDefault();

  const one = document.getElementById('1').value;
  const two = document.getElementById('2').value;
  const three = document.getElementById('3').value;
  const four = document.getElementById('4').value;

  const formData = {
    otp: `${one}${two}${three}${four}`
  };

  fetch("http://localhost:5000/varify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(res => {
      if (res.ok) {

        window.alert("OTP verified successfully.");
        window.location.href = "success.html";


      } else if (res.status === 401) {
        window.alert("Invalid OTP.");

      } else {
        window.alert("Error:", res.statusText);

      }
    })
    .catch(err => console.log("Error:", err));
});
