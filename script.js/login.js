const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greet = document.querySelector("#greet");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function login(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    saveUsername(username);
    greeting(username);
}

function saveUsername(name) {
    localStorage.setItem(USERNAME_KEY, name);
}

function greeting(username) {
    greet.innerText = `Hello ${username}`
    greet.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", login);
} else {
    greeting(savedUsername);
}