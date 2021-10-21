import { Calculator } from './calculator';

describe("test add function", () => {
    let calculator: Calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it("should return 15 for add(10,5)", () => {
        expect(calculator.calcTwoNumbers(10, 5)).toBe(15);
    });

    it("should return 5 for add(2,3)", () => {
        expect(calculator.calcTwoNumbers(2, 3)).toBe(5);
    });
});