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
});
