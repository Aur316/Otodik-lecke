funkciok = require("./lecke5");

//console.log("funkciiok ", funkciok.osszeadas(1, 2));
describe("Funkico tesztek", () =>
  it("ossze kellene hogy adjon", () => {
    const a = 5;
    const b = 8;
    expect(funkciok.osszeadas(a, b)).toEqual(13);
  }));
