function fizzBuzz(num){
    if(num % 3 ==0 && num % 5 == 0){
      return "FizzBuzz";
    }
    else if(num % 3 == 0){
      return "Fizz";
    }
    else if(num % 5 == 0){
      return "Buzz";
    }
    return num;
  }
  
  function cadenaNumeros(tam){
    let numeros = "";
    for(let i = 0; i < tam; i++){
      if(i == tam-1){
        numeros = numeros + fizzBuzz(i+1);
      }
      else{
        numeros = numeros + fizzBuzz(i+1) + ", ";
      }
    }
    return numeros;
  }

export {fizzBuzz, cadenaNumeros}