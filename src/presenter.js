import { cadenaNumeros } from "./fizzBuzz";

const numero = document.querySelector("#numero");
const form = document.querySelector("#fizz_Buzz_form");
const div = document.querySelector("#resultado_div");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const numeroUsuario = Number.parseInt(numero.value);
  
    div.innerHTML = "<p>" + cadenaNumeros(numeroUsuario) + "</p>";
  });