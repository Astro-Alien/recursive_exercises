import {it, describe, beforeAll, init, assertEquals} from "./../../dependencies.js";
describe('Status Button Tests', function () {
    let module;
    beforeAll(async () => {
        await init();
        module = await import("../../../lib/recursive-helpers/factorial-calculator.js");
    });

    it("calculateFactorial - calculates the factorial of a given integer", async () => {
        //Arrange
        const expectedResult = 120;

        //Act
        const result = await module.FactorialCalculator.calculateFactorial(5);

        //Assert
        assertEquals(result, expectedResult);
    });

    it("calculateFactorial - should return 1 if the given the given integer is 0", async () => {
        //Arrange
        const expectedResult = 1;

        //Act
        const result = await module.FactorialCalculator.calculateFactorial(0);

        //Assert
        assertEquals(result, expectedResult);
    });

    it("calculateFactorial - if the given integer is equal to a negative integer return false", async () => {
        //Arrange
        const expectedResult = false;

        //Act
        const result = await module.FactorialCalculator.calculateFactorial(-5);

        //Assert
        assertEquals(result, expectedResult);
    });

    it("calculateFactorial - if the given input is not a integer return a message", async () => {
        //Arrange
        const expectedResult = "The given input is not a integer";

        //Act
        const result = await module.FactorialCalculator.calculateFactorial("hello world");

        //Assert
        assertEquals(result, expectedResult);
    });

    it("calculateFactorial - if the input is a decimal value it should return a message", async () => {
        //Arrange
        const expectedResult = "The given input is not a integer";

        //Act
        const result = await module.FactorialCalculator.calculateFactorial(5.5);

        //Assert
        assertEquals(result, expectedResult);
    });
});