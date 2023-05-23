funkciok = require("./alkoholista");

describe("tesztelunk valamit", () => {
  it("alkoholszintteszt", () => {
    expect(funkciok.drunk(1)).toEqual(true);
  });
});
