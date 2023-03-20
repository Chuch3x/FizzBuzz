function fizzBuzz(num){
  if(num == 3){
    return "Fizz";
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
  it("deberia mostrar el numero fizz para el numero 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });
});
