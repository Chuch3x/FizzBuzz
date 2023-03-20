function fizzBuzz(num){
  return "Fizz";
}

describe("FizzBuzz", () => {
  it("deberia mostrar fizz para el numero 1", () => {
    expect(fizzBuzz(1)).toEqual("Fizz");
  });
});
