const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const savedUser = localStorage.getItem(USERNAME_KEY);

if (savedUser) {
  showGreeting(savedUser);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onSubmitLoginForm);
}

function showGreeting(userName) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello ${userName}`;
}

function onSubmitLoginForm(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  showGreeting(userName);
}
