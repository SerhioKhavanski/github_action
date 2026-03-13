const signIn = document.getElementById("signIn");
const signUp = document.getElementById("signUp");
const container = document.querySelector(".container");

signUp.addEventListener('click', () =>{
    container.classList.add("active");
});
signIn.addEventListener('click', () =>{
    container.classList.remove("active");
});



