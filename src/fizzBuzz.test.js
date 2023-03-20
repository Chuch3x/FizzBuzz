function fizzBuzz(num){
  return num;
}

describe("FizzBuzz", () => {
  it("deberia mostrar el numero 1", () => {
    expect(fizzBuzz(1)).toEqual(1);
  });
  it("deberia mostrar el numero 2", () => {
    expect(fizzBuzz(2)).toEqual(2);
  });

});
