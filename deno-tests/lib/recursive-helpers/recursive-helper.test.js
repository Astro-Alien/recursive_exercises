import {it, describe, beforeAll, init, assertEquals} from "./../../dependencies.js";
describe('Status Button Tests', async () => {
    let module;
    beforeAll(async () => {
        await init();
        module = await import("../../../lib/recursive-helpers/recursive-helper.js");
    });

    describe("calculateFactorial - calculates the factorial of a given integer", () => {
        it("calculateFactorial - calculates the factorial of a given integer", async () => {
            //Arrange
            const expectedResult = 120;

            //Act
            const result = await module.RecursiveHelper.calculateFactorial(5);

            //Assert
            assertEquals(result, expectedResult);
        });

        it("calculateFactorial - should return 1 if the given the given integer is 0", async () => {
            //Arrange
            const expectedResult = 1;

            //Act
            const result = await module.RecursiveHelper.calculateFactorial(0);

            //Assert
            assertEquals(result, expectedResult);
        });

        it("calculateFactorial - if the given integer is equal to a negative integer return false", async () => {
            //Arrange
            const expectedResult = false;

            //Act
            const result = await module.RecursiveHelper.calculateFactorial(-5);

            //Assert
            assertEquals(result, expectedResult);
        });

        it("calculateFactorial - if the given input is not a integer return a message", async () => {
            //Arrange
            const expectedResult = "The given input is not a integer";

            //Act
            const result = await module.RecursiveHelper.calculateFactorial("hello world");

            //Assert
            assertEquals(result, expectedResult);
        });

        it("calculateFactorial - if the input is a decimal value it should return a message", async () => {
            //Arrange
            const expectedResult = "The given input is not a integer";

            //Act
            const result = await module.RecursiveHelper.calculateFactorial(5.5);

            //Assert
            assertEquals(result, expectedResult);
        });
    });

    describe("fibonacciSequence - calculates the fibonacci sequence of a given integer", () => {

        it('fibonacciSequence - if given integer is a string return message', async () => {
            // Arrange
            const expectedResult = "The given input is not a integer";

            // Act
            const result = await module.RecursiveHelper.fibonacciSequence("hello world");

            // Assert
            assertEquals(result, expectedResult);
        });

        it('fibonacciSequence - if given integer is a decimal return message', async () => {
            // Arrange
            const expectedResult = "The given input is not a integer";

            // Act
            const result = await module.RecursiveHelper.fibonacciSequence(5.5);

            // Assert
            assertEquals(result, expectedResult);
        });

        it('fibonacciSequence - if given integer is a negative integer return message', async () => {
            // Arrange
            const expectedResult = "The given input is not a positive integer";

            // Act
            const result = await module.RecursiveHelper.fibonacciSequence(-5);

            // Assert
            assertEquals(result, expectedResult);
        });

        it('fibonacciSequence - if given integer is 0 return 0', async () => {
            // Arrange
            const expectedResult = 0;

            // Act
            const result = await module.RecursiveHelper.fibonacciSequence(0);

            // Assert
            assertEquals(result, expectedResult);
        });

        it('fibonacciSequence - if given integer is valid return the sequence', async () => {
            // Arrange
            const expectedResult = 13;

            // Act
            const result = await module.RecursiveHelper.fibonacciSequence(7);
            console.log(result)
            // Assert
            assertEquals(result, expectedResult);
        });

    });

});