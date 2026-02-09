const { calculateFinalAmount } = require("../src/pricing");
describe("calculateFinalAmount", () => {
    test("returns subtotal with only automatic 5% discount when no coupon provided", () => {
    const result = calculateFinalAmount(1000)
    expect(result).toBe(950)
  })
  test("applies SAVE10 coupon correctly", () => {
    const result = calculateFinalAmount(500, "SAVE10")
    expect(result).toBe(450)
  })
  test("FLAT50 should not produce negative total (boundary case)", () => {
    const result = calculateFinalAmount(40, "FLAT50")
    expect(result).toBe(0)
  })
  test("throws error for invalid subtotal", () => {
    expect(() => calculateFinalAmount(-10, "SAVE10")).toThrow("Invalid subtotal")
  })
  test("coupon codes should be case-insensitive", () => {
    const result = calculateFinalAmount(500, "save10")
    expect(result).toBe(450);
  })
})