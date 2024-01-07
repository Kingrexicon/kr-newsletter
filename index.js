const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
const email = document.getElementById("email");
const invalid = document.getElementById("invalid");

function clickBtn() {
  if (re.test(email.value)) {
    location.href = "thanks.html";
  console.log(String(email.value))
  } else {
   invalid.innerText = 'invalid email'
//    invalid.innerText = ''
  }
}
