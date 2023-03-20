import { fizzBuzz, cadenaNumeros } from "./fizzBuzz";


describe("FizzBuzz", () => {
  it("deberia mostrar el numero 1", () => {
    expect(fizzBuzz(1)).toEqual(1);
  });
  it("deberia mostrar el numero 2", () => {
    expect(fizzBuzz(2)).toEqual(2);
  });
  it("deberia mostrar fizz para el numero 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });
  it("deberia mostrar fizz para multiplos de 3", () => {
    expect(fizzBuzz(6)).toEqual("Fizz");
  });
  it("deberia mostrar buzz para multiplos de 5", () => {
    expect(fizzBuzz(10)).toEqual("Buzz");
  });
  it("deberia mostrar fizzBuzz para multiplos de 3 y 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });
  it("deberia mostrar una cadena de numeros dado un tamanio", () => {
    expect(cadenaNumeros(2)).toEqual("1, 2");
  });
  it("deberia mostrar una lista de numeros y si son multiplos de 3 o 5 poner Fizz o Buzz", () => {
    expect(cadenaNumeros(7)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7");
  });
});
