//Password Reset
function resetPassword(event) {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();

  if (email) {
    alert("A reset link has been sent to " + email);
    document.querySelector("#email").value = "";
  }
  setTimeout(() => {
    location.href = "login.html";
  }, 500);
}

//Creating New Account
const signUpForm = document.querySelector("#signUpForm");

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Account Created Successfully !");

  signUpForm.reset();

  setTimeout(() => {
    location.href = "login.html";
  }, 500);
});
